import typer
import sys
import os

# Add project root to sys.path to allow running as script
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.cli.commands import app as cli_app
from src.cli.commands import add, list, update, complete, delete, organize
from rich.console import Console
from rich.prompt import Prompt

console = Console()
app = typer.Typer()
app.add_typer(cli_app, name="")

def interactive_mode():
    console.print("[bold green]Welcome to Smart Todo CLI![/bold green]")
    while True:
        console.print("\n[bold cyan]Select an option:[/bold cyan]")
        console.print("1. [bold]Add[/bold] Task")
        console.print("2. [bold]List[/bold] Tasks")
        console.print("3. [bold]Update[/bold] Task")
        console.print("4. [bold]Complete[/bold] Task")
        console.print("5. [bold]Delete[/bold] Task")
        console.print("6. [bold]Organize[/bold] Tasks")
        console.print("7. [bold]Exit[/bold]")

        choice = Prompt.ask("Enter choice", choices=["1", "2", "3", "4", "5", "6", "7"], default="2")

        try:
            if choice == "1":
                text = Prompt.ask("Enter Task Title")
                priority_input = Prompt.ask("Enter Priority (low/medium/high)", default="medium", choices=["low", "medium", "high"])
                due_input = Prompt.ask("Enter Due Date (optional)", default="")
                
                # Convert empty string to None for optional args
                due_arg = due_input if due_input.strip() else None
                
                # Call add with explicit args
                add(text=text, priority=priority_input, due=due_arg)
            elif choice == "2":
                # Optional filtering could be added here
                list(status=None, priority=None)
            elif choice == "3":
                task_id = Prompt.ask("Enter Task ID to update")
                text = Prompt.ask("Enter changes (e.g., 'high priority')")
                update(task_id=task_id, text=text, title=None, priority=None, due=None)
            elif choice == "4":
                task_id = Prompt.ask("Enter Task ID to complete")
                complete(task_id)
            elif choice == "5":
                task_id = Prompt.ask("Enter Task ID to delete")
                delete(task_id)
            elif choice == "6":
                organize()
            elif choice == "7":
                console.print("Goodbye!")
                break
        except typer.Exit:
            pass # Handle typer exit signals gracefully
        except Exception as e:
            console.print(f"[bold red]Error:[/bold red] {str(e)}")

def main():
    try:
        if len(sys.argv) == 1:
            interactive_mode()
        else:
            app()
    except Exception as e:
        console.print(f"[bold red]Error:[/bold red] {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()
