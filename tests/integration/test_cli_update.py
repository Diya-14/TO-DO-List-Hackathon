import pytest
from typer.testing import CliRunner
from src.main import app

runner = CliRunner()

def test_cli_update_not_found(clean_cli):
    result = runner.invoke(app, ["update", "nonexistent", "new title"])
    assert result.exit_code != 0
    assert "Task nonexistent not found" in result.stdout

def test_cli_update_basic(clean_cli):
    # Add a task first
    import time
    runner.invoke(app, ["add", "Initial Task"])
    time.sleep(1)
    
    # Get ID
    from src.cli import commands
    tm = commands.get_task_manager()
    tasks = tm.list_tasks()
    task_id = tasks[0].id[:8]
    
    # Update
    result = runner.invoke(app, ["update", task_id, "Updated Task"])
    assert result.exit_code == 0
    assert "Updated task" in result.stdout
    
    # Verify
    updated_tasks = tm.list_tasks()
    assert updated_tasks[0].title == "Updated Task"

def test_cli_update_nlp_priority(clean_cli):
    runner.invoke(app, ["add", "Test Task"])
    from src.cli import commands
    tm = commands.get_task_manager()
    task_id = tm.list_tasks()[0].id[:8]
    
    runner.invoke(app, ["update", task_id, "urgent"])
    
    updated = tm.get_task_by_id(task_id)
    assert updated.priority == "high"
    assert updated.title == "Test Task"

def test_cli_update_options_override(clean_cli):
    runner.invoke(app, ["add", "Test Task"])
    from src.cli import commands
    tm = commands.get_task_manager()
    task_id = tm.list_tasks()[0].id[:8]
    
    # Text says urgent (high), but flag says low
    runner.invoke(app, ["update", task_id, "urgent", "--priority", "low"])
    
    updated = tm.get_task_by_id(task_id)
    assert updated.priority == "low"

def test_cli_update_ambiguous_error(clean_cli):
    from src.models.task import Task
    from src.cli import commands
    tm = commands.get_task_manager()
    t1 = Task(id="abcdef12-1111", title="Task 1")
    t2 = Task(id="abcdef12-2222", title="Task 2")
    tm.add_task(t1)
    tm.add_task(t2)
    
    result = runner.invoke(app, ["update", "abcdef12", "new"])
    assert result.exit_code != 0
    assert "Multiple tasks match abcdef12" in result.stdout