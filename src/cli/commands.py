import typer
import dateparser
from rich.console import Console
from rich.table import Table
from typing import Optional
from src.skills.nlp import NLParser
from src.skills.clustering import TaskClusterer
from src.core.persistence import PersistenceManager
from src.core.config import ConfigManager
from src.core.task_manager import TaskManager
from src.models.task import Task, Status, Priority

app = typer.Typer()
console = Console()

def get_task_manager() -> TaskManager:
    config = ConfigManager()
    path = str(config.get_db_path())
    persistence = PersistenceManager(file_path=path)
    # Ensure it's initialized
    try:
        persistence.load_tasks()
    except:
        persistence._write_initial_structure()
    return TaskManager(persistence)

def get_parser() -> NLParser:
    return NLParser()

@app.command()
def add(text: str):
    """Add a new task using natural language."""
    tm = get_task_manager()
    parser = get_parser()
    parsed_data = parser.parse(text)
    new_task = Task(
        title=parsed_data["title"],
        due_date=parsed_data.get("due_date"),
        priority=parsed_data["priority"],
        category=parsed_data.get("category")
    )
    tm.add_task(new_task)
    console.print(f"[green]Added task:[/green] {new_task.title} ([dim]{new_task.id[:8]}[/dim])")

@app.command()
def update(
    task_id: str = typer.Argument(..., help="Full UUID or 8-char short ID"),
    text: Optional[str] = typer.Argument(None, help="Natural language description of changes"),
    title: Optional[str] = typer.Option(None, help="Explicitly set the title"),
    priority: Optional[Priority] = typer.Option(None, help="Explicitly set priority"),
    due: Optional[str] = typer.Option(None, help="Explicitly set due date")
):
    """Update an existing task."""
    tm = get_task_manager()
    parser = get_parser()
    try:
        # 1. Verify task exists
        existing_task = tm.get_task_by_id(task_id)
        
        updates = {}
        
        # 2. Apply NLP if text provided
        if text:
            updates = parser.parse(text, partial=True)
            
        # 3. Apply CLI overrides
        if title:
            updates["title"] = title
        if priority:
            updates["priority"] = priority
        if due:
            parsed_due = dateparser.parse(due, settings={'PREFER_DATES_FROM': 'future'})
            if parsed_due:
                updates["due_date"] = parsed_due
            else:
                console.print(f"[yellow]Warning: Could not parse due date '{due}'. Skipping.[/yellow]")

        if not updates:
            console.print("[yellow]No changes provided.[/yellow]")
            return

        # 4. Apply updates
        updated_task = tm.update_task(existing_task.id, updates)
        
        console.print(f"[green]Updated task {task_id[:8]}:[/green]")
        if "title" in updates:
            console.print(f"  [white]Title:[/white] {updated_task.title}")
        if "priority" in updates:
            console.print(f"  [yellow]Priority:[/yellow] {updated_task.priority.value}")
        if "due_date" in updates:
            due_str = updated_task.due_date.strftime('%Y-%m-%d %H:%M') if updated_task.due_date else "-"
            console.print(f"  [blue]Due:[/blue] {due_str}")

    except ValueError as e:
        console.print(f"[bold red]Error:[/bold red] {str(e)}")
        raise typer.Exit(code=1)

@app.command()
def list(
    status: Optional[Status] = typer.Option(None, help="Filter by status (pending/done)"),
    priority: Optional[Priority] = typer.Option(None, help="Filter by priority (low/medium/high)")
):
    """List tasks in a table."""
    tm = get_task_manager()
    tasks = tm.list_tasks(status=status, priority=priority)
    
    if not tasks:
        console.print("[yellow]No tasks found.[/yellow]")
        return

    table = Table(title="Todo List")
    table.add_column("ID", style="cyan", no_wrap=True)
    table.add_column("Title", style="white")
    table.add_column("Status", style="magenta")
    table.add_column("Priority", style="yellow")
    table.add_column("Due Date", style="blue")

    for t in tasks:
        status_color = "green" if t.status == Status.DONE else "red"
        due_str = t.due_date.strftime('%Y-%m-%d %H:%M') if t.due_date else "-"
        table.add_row(
            t.id[:8],
            t.title,
            f"[{status_color}]{t.status.value}[/{status_color}]",
            t.priority.value,
            due_str
        )

    console.print(table)

@app.command()
def complete(task_id: str):
    """Mark a task as completed."""
    tm = get_task_manager()
    if tm.complete_task(task_id):
        console.print(f"[green]Task {task_id} marked as completed.[/green]")
    else:
        console.print(f"[red]Task {task_id} not found.[/red]")

@app.command()
def organize():
    """Trigger AI clustering to suggest groupings of pending tasks."""
    tm = get_task_manager()
    tasks = tm.list_tasks(status=Status.PENDING)
    if not tasks:
        console.print("[yellow]No pending tasks to organize.[/yellow]")
        return
    
    clusterer = TaskClusterer()
    clusters = clusterer.cluster(tasks)
    
    console.print("[bold blue]Suggested Task Groupings:[/bold blue]")
    for cluster_name, cluster_tasks in clusters.items():
        table = Table(title=cluster_name, box=None)
        table.add_column("ID", style="cyan")
        table.add_column("Title", style="white")
        
        for t in cluster_tasks:
            table.add_row(t.id[:8], t.title)
            
        console.print(table)
        console.print("-" * 20)
