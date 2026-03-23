import os
from dotenv import load_dotenv
load_dotenv()

from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import DirectoryLoader, TextLoader

COLLECTIONS = ["calendar", "anecdotes", "cs_courses", "career"]
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")


def ingest(collection_name: str, source_dir: str):
    if not os.path.isdir(source_dir):
        print(f"  Skipping {collection_name}: directory {source_dir} not found.")
        return

    loader = DirectoryLoader(source_dir, glob="**/*.md", loader_cls=TextLoader)
    docs = loader.load()
    if not docs:
        print(f"  Skipping {collection_name}: no .md files found in {source_dir}.")
        return

    splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=60)
    chunks = splitter.split_documents(docs)

    for chunk in chunks:
        chunk.metadata["collection"] = collection_name

    Chroma.from_documents(
        chunks,
        embedding=embeddings,
        persist_directory=f"./db/{collection_name}",
    )
    print(f"  Ingested {len(chunks)} chunks into '{collection_name}'")


if __name__ == "__main__":
    print("Starting ingestion...")
    for name in COLLECTIONS:
        ingest(name, f"./content/{name}")
    print("Done.")
