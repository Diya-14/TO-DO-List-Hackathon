import typer
import sys
from src.cli.commands import app as cli_app
from rich.console import Console

console = Console()
app = typer.Typer()
app.add_typer(cli_app, name="")

def main():
    try:
        app()
    except Exception as e:
        console.print(f"[bold red]Error:[/bold red] {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()
