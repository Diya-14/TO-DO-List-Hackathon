import pytest
from typer.testing import CliRunner
from src.main import app
from src.core.persistence import PersistenceManager
from src.core.config import ConfigManager
import os

runner = CliRunner()

@pytest.fixture
def mock_persistence(monkeypatch, tmp_path):
    db_file = tmp_path / "test_todo_list.json"
    monkeypatch.setattr("src.cli.commands.config.get_db_path", lambda: db_file)
    from src.cli import commands
    commands.persistence = PersistenceManager(file_path=str(db_file))
    from src.core.task_manager import TaskManager
    commands.task_manager = TaskManager(commands.persistence)
    return db_file

def test_cli_list_empty(mock_persistence):
    result = runner.invoke(app, ["list"])
    assert result.exit_code == 0
    assert "No tasks found." in result.stdout

def test_cli_add_and_list(mock_persistence):
    runner.invoke(app, ["add", "Task 1"])
    runner.invoke(app, ["add", "Task 2 urgent"])
    
    result = runner.invoke(app, ["list"])
    assert result.exit_code == 0
    assert "Task 1" in result.stdout
    assert "Task 2" in result.stdout
    assert "high" in result.stdout

def test_cli_complete_task(mock_persistence):
    runner.invoke(app, ["add", "Task to complete"])
    # Get ID from list
    list_result = runner.invoke(app, ["list"])
    # Extract first 8 chars of ID from table
    import re
    match = re.search(r"([a-f0-9]{8})", list_result.stdout)
    assert match
    task_id = match.group(1)
    
    comp_result = runner.invoke(app, ["complete", task_id])
    assert comp_result.exit_code == 0
    assert f"Task {task_id} marked as completed." in comp_result.stdout
    
    # Verify in list
    list_result_after = runner.invoke(app, ["list"])
    assert "done" in list_result_after.stdout
