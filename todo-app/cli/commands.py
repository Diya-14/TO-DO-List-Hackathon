import typer
import dateparser
from rich.console import Console
from rich.table import Table
from typing import Optional
from cli.skills.nlp import NLParser
from cli.skills.clustering import TaskClusterer
from cli.core.persistence import PersistenceManager
from cli.core.config import ConfigManager
from cli.core.task_manager import TaskManager
from cli.models.task import Task, Status, Priority

app = typer.Typer()

def get_task_manager_instance() -> TaskManager:
    config = ConfigManager()
    path = str(config.get_db_path())
    persistence = PersistenceManager(file_path=path)
    # Ensure it's initialized
    try:
        persistence.load_tasks()
    except:
        persistence._write_initial_structure()
    return TaskManager(persistence)

@app.command()
def add(
    text: str,
    priority: Optional[Priority] = typer.Option(None, help="Explicitly set priority"),
    due: Optional[str] = typer.Option(None, help="Explicitly set due date")
):
    """Add a new task using natural language or explicit flags."""
    console = Console()
    tm = get_task_manager_instance()
    parser = NLParser() # Initialize parser here
    
    # 1. Parse natural language
    parsed_data = parser.parse(text)
    
    # 2. Apply explicit overrides
    final_priority = priority if priority else parsed_data["priority"]
    
    final_due = parsed_data.get("due_date")
    if due:
        parsed_explicit_due = dateparser.parse(due, settings={'PREFER_DATES_FROM': 'future'})
        if parsed_explicit_due:
            final_due = parsed_explicit_due
        else:
            console.print(f"[yellow]Warning: Could not parse due date '{due}'. Using NLP result if available.[/yellow]")

    new_task = Task(
        title=parsed_data["title"],
        due_date=final_due,
        priority=final_priority,
        category=parsed_data.get("category")
    )
    tm.add_task(new_task)
    console.print(f"[green]Added task:[/green] {new_task.title} ([dim]{new_task.id[:8]}[/dim])")

@app.command()
def update(
    task_id: str = typer.Argument(..., help="Full UUID or 8-char short ID"),
    text: Optional[str] = typer.Argument(None, help="Natural language description of changes (e.g., 'buy milk tomorrow high priority')"),
    title: Optional[str] = typer.Option(None, help="Explicitly set the title"),
    priority: Optional[Priority] = typer.Option(None, help="Explicitly set priority (low, medium, high)"),
    due: Optional[str] = typer.Option(None, help="Explicitly set due date (e.g., '2023-12-31')")
):
    """
    Update an existing task's properties.
    
    You can use natural language (the 'text' argument) to describe changes, 
    or use explicit flags (--title, --priority, --due) for precise control.
    Explicit flags take precedence over natural language parsing results.
    
    The task is identified by its ID (full or unique prefix).
    """
    console = Console()
    tm = get_task_manager_instance()
    parser = NLParser() # Initialize parser here
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
    console = Console()
    tm = get_task_manager_instance()
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
    console = Console()
    tm = get_task_manager_instance()
    if tm.complete_task(task_id):
        console.print(f"[green]Task {task_id} marked as completed.[/green]")
    else:
        console.print(f"[red]Task {task_id} not found.[/red]")

@app.command()
def delete(task_id: str):
    """Delete a task permanently."""
    console = Console()
    tm = get_task_manager_instance()
    if tm.delete_task(task_id):
        console.print(f"[green]Task {task_id} deleted.[/green]")
    else:
        console.print(f"[red]Task {task_id} not found.[/red]")

@app.command()
def organize():
    """Trigger AI clustering to suggest groupings of pending tasks."""
    console = Console()
    tm = get_task_manager_instance()
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
