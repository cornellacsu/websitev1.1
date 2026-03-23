import argparse
import atexit
import os
import signal
import subprocess
import sys
import time

import httpx
from rich.console import Console
from rich.markdown import Markdown
from rich.panel import Panel
from rich.prompt import Prompt
from rich.rule import Rule
from rich.text import Text
from rich import box

console = Console()

HISTORY: list[dict] = []
_server_proc: subprocess.Popen | None = None


# ---------------------------------------------------------------------------
# Auto-start server
# ---------------------------------------------------------------------------

def _kill_server():
    if _server_proc and _server_proc.poll() is None:
        _server_proc.terminate()


def _start_server(port: int) -> bool:
    """
    Spawn uvicorn in the background, wait up to 30 s for it to become healthy.
    Returns True if the server came up successfully.
    """
    global _server_proc

    script_dir = os.path.dirname(os.path.abspath(__file__))

    console.print(f"[dim]Server not running — starting API on port {port}...[/dim]")
    console.print("[dim](first run ingests collections — may take a minute)[/dim]\n")

    _server_proc = subprocess.Popen(
        [sys.executable, "-m", "uvicorn", "api:app", "--port", str(port)],
        cwd=script_dir,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )
    atexit.register(_kill_server)

    base_url = f"http://localhost:{port}"
    deadline = time.time() + 60  # generous: first-run ingestion + embedding calls

    with console.status("[cyan]Starting server (ingesting collections on first run)...[/cyan]", spinner="dots"):
        while time.time() < deadline:
            # Check if the process died unexpectedly
            if _server_proc.poll() is not None:
                out = _server_proc.stdout.read() if _server_proc.stdout else ""
                print_error(f"Server process exited unexpectedly.\n{out}")
                return False
            try:
                resp = httpx.get(f"{base_url}/health", timeout=2.0)
                if resp.status_code == 200:
                    return True
            except Exception:
                pass
            time.sleep(1.5)

    print_error("Server did not become healthy within 60 s. Check for errors above.")
    return False


def ensure_server(base_url: str, port: int, auto_start: bool) -> bool:
    """Check health; if down and auto_start is allowed, boot the server."""
    try:
        resp = httpx.get(f"{base_url}/health", timeout=3.0)
        if resp.status_code == 200:
            data = resp.json()
            console.print(
                f"[dim]Connected · collections: [cyan]{', '.join(data.get('collections', []))}[/cyan][/dim]\n"
            )
            return True
    except Exception:
        pass

    if not auto_start:
        print_error(
            f"Cannot reach the API at [bold]{base_url}[/bold].\n"
            "Start the server manually: [bold]uvicorn api:app --reload --port 8001[/bold]"
        )
        return False

    if not _start_server(port):
        return False

    # Re-fetch health to show loaded collections
    try:
        data = httpx.get(f"{base_url}/health", timeout=5.0).json()
        console.print(
            f"[dim]Server ready · collections: [cyan]{', '.join(data.get('collections', []))}[/cyan][/dim]\n"
        )
    except Exception:
        pass
    return True


# ---------------------------------------------------------------------------
# Display helpers
# ---------------------------------------------------------------------------

def print_banner(base_url: str):
    console.print()
    console.print(Panel(
        "[bold cyan]ACSU Knowledge Assistant[/bold cyan]\n"
        "[dim]Powered by RAG · Cornell CS · Type [bold]exit[/bold] or [bold]quit[/bold] to leave[/dim]\n"
        f"[dim]API: {base_url}[/dim]",
        box=box.DOUBLE_EDGE,
        border_style="cyan",
        padding=(0, 2),
    ))
    console.print()


def print_user_bubble(text: str):
    console.print(Panel(
        Text(text, style="white"),
        title="[bold white]You[/bold white]",
        title_align="right",
        border_style="white",
        box=box.ROUNDED,
        padding=(0, 2),
    ))


def print_assistant_bubble(text: str, meta: dict):
    confidence = meta.get("confidence", 0)
    collection = meta.get("collection", "?")
    keywords = meta.get("keywords", [])
    chunks = meta.get("chunks_found", 0)

    conf_color = "green" if confidence >= 0.7 else "yellow" if confidence >= 0.5 else "red"
    meta_line = (
        f"[dim]collection=[bold {conf_color}]{collection}[/bold {conf_color}]  "
        f"confidence=[bold {conf_color}]{confidence:.0%}[/bold {conf_color}]  "
        f"chunks={chunks}  "
        f"keywords={keywords}[/dim]"
    )

    console.print(Panel(
        Markdown(text),
        title="[bold cyan]ACSU Assistant[/bold cyan]",
        title_align="left",
        subtitle=meta_line,
        subtitle_align="left",
        border_style="cyan",
        box=box.ROUNDED,
        padding=(0, 2),
    ))


def print_error(msg: str):
    console.print(Panel(
        f"[bold red]Error:[/bold red] {msg}",
        border_style="red",
        box=box.ROUNDED,
        padding=(0, 2),
    ))


def print_history_divider(n: int):
    console.print(Rule(f"[dim]turn {n}[/dim]", style="dim"))


# ---------------------------------------------------------------------------
# API call
# ---------------------------------------------------------------------------

def call_search(base_url: str, query: str) -> dict | None:
    try:
        with console.status("[cyan]Thinking...[/cyan]", spinner="dots"):
            resp = httpx.post(
                f"{base_url}/search",
                json={"query": query},
                timeout=60.0,
            )
        resp.raise_for_status()
        return resp.json()
    except httpx.ConnectError:
        print_error(f"Lost connection to API at [bold]{base_url}[/bold].")
        return None
    except httpx.HTTPStatusError as e:
        print_error(f"API returned {e.response.status_code}: {e.response.text}")
        return None
    except Exception as e:
        print_error(str(e))
        return None


# ---------------------------------------------------------------------------
# Main loop
# ---------------------------------------------------------------------------

def run(base_url: str, port: int, auto_start: bool):
    print_banner(base_url)

    if not ensure_server(base_url, port, auto_start):
        sys.exit(1)

    turn = 0
    while True:
        try:
            query = Prompt.ask("[bold white]>[/bold white]").strip()
        except (EOFError, KeyboardInterrupt):
            console.print("\n[dim]Goodbye.[/dim]")
            break

        if not query:
            continue
        if query.lower() in {"exit", "quit", "q", ":q"}:
            console.print("[dim]Goodbye.[/dim]")
            break
        if query.lower() in {"history", "/history"}:
            _print_history()
            continue
        if query.lower() in {"clear", "/clear"}:
            console.clear()
            print_banner(base_url)
            continue

        turn += 1
        print_history_divider(turn)
        print_user_bubble(query)

        data = call_search(base_url, query)
        if data is None:
            continue

        meta = {
            "collection": data.get("collection"),
            "confidence": data.get("confidence"),
            "keywords": data.get("keywords", []),
            "chunks_found": data.get("chunks_found", 0),
        }

        print_assistant_bubble(data["answer"], meta)

        HISTORY.append({"role": "user", "text": query, "meta": None})
        HISTORY.append({"role": "assistant", "text": data["answer"], "meta": meta})
        console.print()


def _print_history():
    if not HISTORY:
        console.print("[dim]No history yet.[/dim]")
        return
    console.print(Rule("[dim]Conversation history[/dim]", style="dim"))
    for msg in HISTORY:
        label = "[white]You[/white]" if msg["role"] == "user" else "[cyan]Assistant[/cyan]"
        console.print(f"  {label}: {msg['text'][:120]}{'…' if len(msg['text']) > 120 else ''}")
    console.print()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="ACSU RAG CLI")
    parser.add_argument("--port", type=int, default=8001)
    parser.add_argument(
        "--url",
        type=str,
        default=None,
        help="Connect to a remote API instead of starting one locally",
    )
    args = parser.parse_args()

    # If a remote URL is given, don't try to auto-start a local server
    if args.url:
        run(base_url=args.url, port=args.port, auto_start=False)
    else:
        run(base_url=f"http://localhost:{args.port}", port=args.port, auto_start=True)
