"""
Core RAG logic: router + retrieval-with-retry + reader.
Only imported by api.py — all other entry points go through the API.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Literal

from dotenv import load_dotenv
load_dotenv()

from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from pydantic import BaseModel

COLLECTIONS = ["calendar", "anecdotes", "cs_courses", "career"]
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")


# ---------------------------------------------------------------------------
# Collections
# ---------------------------------------------------------------------------

def load_collections() -> dict[str, Chroma]:
    stores = {}
    for name in COLLECTIONS:
        try:
            stores[name] = Chroma(
                persist_directory=f"./db/{name}",
                embedding_function=embeddings,
            )
        except Exception as e:
            print(f"Warning: could not load collection '{name}': {e}")
    return stores


# ---------------------------------------------------------------------------
# Router
# ---------------------------------------------------------------------------

class RouteDecision(BaseModel):
    collection: Literal["calendar", "anecdotes", "cs_courses", "career", "all"]
    keywords: list[str]
    confidence: float  # 0–1; below 0.6 → fan out to all collections

router_llm = ChatOpenAI(model="gpt-4o-mini").with_structured_output(RouteDecision)

router_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """You route student queries about Cornell's ACSU (Association of Computer Science Undergraduates) to the right resource collection.

Collections:
- calendar: club events, deadlines, meetings, office hours schedules
- anecdotes: student experience stories, course reviews, personal advice
- cs_courses: course wikis, prerequisites, past exams, office hours, tips
- career: resume templates, internship listings, interview prep, salary info
- all: when the query spans multiple collections or is ambiguous

Return confidence < 0.6 if unsure — the system will search all collections.""",
    ),
    ("human", "{query}"),
])

router_chain = router_prompt | router_llm


# ---------------------------------------------------------------------------
# Retrieval with retry
# ---------------------------------------------------------------------------

@dataclass
class RAGResult:
    answer: str
    collection: str
    confidence: float
    keywords: list[str]
    chunks_found: int


def retrieve(query: str, stores: dict[str, Chroma], max_retries: int = 3) -> tuple[list, RouteDecision | None]:
    if not stores:
        return [], None

    route: RouteDecision = router_chain.invoke({"query": query})

    attempt = 0
    current_query = query

    while attempt < max_retries:
        if route.confidence < 0.6 or route.collection == "all" or attempt >= 2:
            targets = list(stores.values())
        else:
            target_store = stores.get(route.collection)
            targets = [target_store] if target_store else list(stores.values())

        results = []
        for store in targets:
            try:
                hits = store.similarity_search(current_query, k=4)
                results.extend(hits)
            except Exception as e:
                print(f"  [retrieval] warning: {e}")

        if results:
            return results, route

        attempt += 1
        if attempt == 1:
            current_query = " ".join(route.keywords) if route.keywords else query
        elif attempt == 2:
            current_query = query

    return [], route


# ---------------------------------------------------------------------------
# Reader
# ---------------------------------------------------------------------------

reader_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """You are a helpful assistant for Cornell's ACSU (Association of Computer Science Undergraduates).
Answer using ONLY the provided context chunks. Cite sources by referencing the chunk's metadata source field.
If the context is insufficient to fully answer, say so clearly and suggest the user ask an ACSU officer.""",
    ),
    ("human", "Context:\n{context}\n\nQuestion: {query}"),
])

reader_chain = reader_prompt | ChatOpenAI(model="gpt-4o")


def answer(query: str, stores: dict[str, Chroma]) -> RAGResult:
    chunks, route = retrieve(query, stores)

    collection = route.collection if route else "unknown"
    confidence = route.confidence if route else 0.0
    keywords = route.keywords if route else []

    if not chunks:
        return RAGResult(
            answer=(
                "I couldn't find relevant information for your query. "
                "Could you clarify what you're looking for, or try rephrasing?"
            ),
            collection=collection,
            confidence=confidence,
            keywords=keywords,
            chunks_found=0,
        )

    context = "\n\n".join(
        f"[{c.metadata.get('source', 'unknown')} | {c.metadata.get('collection', '?')}]\n{c.page_content}"
        for c in chunks
    )

    response = reader_chain.invoke({"context": context, "query": query})
    return RAGResult(
        answer=response.content,
        collection=collection,
        confidence=confidence,
        keywords=keywords,
        chunks_found=len(chunks),
    )
