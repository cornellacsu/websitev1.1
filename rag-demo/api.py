"""
FastAPI server — single entry point for all RAG operations.
Start with: uvicorn api:app --reload --port [port]
"""

import os
from contextlib import asynccontextmanager

from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ingest import ingest, COLLECTIONS
from rag import answer, load_collections, RAGResult

stores: dict = {}


def _needs_ingestion(collection_name: str) -> bool:
    """Return True if the collection's DB dir is absent or empty."""
    db_path = f"./db/{collection_name}"
    if not os.path.isdir(db_path):
        return True
    # Chroma writes at minimum a chroma.sqlite3 file
    return not any(os.scandir(db_path))


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("=== ACSU RAG API starting up ===")

    # Auto-ingest any missing collections
    missing = [name for name in COLLECTIONS if _needs_ingestion(name)]
    if missing:
        print(f"Missing collections, running ingestion: {missing}")
        for name in missing:
            ingest(name, f"./content/{name}")
    else:
        print("All collections already ingested.")

    # Load all collections into memory
    stores.update(load_collections())
    print(f"Loaded: {list(stores.keys())}")
    print("=== Ready ===\n")

    yield

    stores.clear()


app = FastAPI(title="ACSU RAG API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in production
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Schemas
# ---------------------------------------------------------------------------

class SearchRequest(BaseModel):
    query: str


class SearchResponse(BaseModel):
    answer: str
    query: str
    collection: str
    confidence: float
    keywords: list[str]
    chunks_found: int


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.get("/health")
def health():
    return {"status": "ok", "collections": list(stores.keys())}


@app.post("/search", response_model=SearchResponse)
def search(req: SearchRequest):
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty.")
    if not stores:
        raise HTTPException(status_code=503, detail="No collections loaded. Check server logs.")

    result: RAGResult = answer(req.query, stores)
    return SearchResponse(
        answer=result.answer,
        query=req.query,
        collection=result.collection,
        confidence=result.confidence,
        keywords=result.keywords,
        chunks_found=result.chunks_found,
    )
