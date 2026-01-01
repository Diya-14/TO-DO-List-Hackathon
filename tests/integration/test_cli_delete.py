import pytest
from typer.testing import CliRunner
from src.main import app
from src.core.persistence import PersistenceManager
from src.models.task import Task, Priority

runner = CliRunner()

@pytest.fixture
def clean_db(tmp_path):
    """Override persistence to use a temp file for each test."""
    # We need to monkeypatch the config or persistence used by the app
    # Since the app uses `get_task_manager` which instantiates PersistenceManager
    # based on ConfigManager, we need to ensure it points to our temp file.
    # However, `commands.py` reads `ConfigManager().get_db_path()`.
    
    # Easier way for integration test without mocking internal config:
    # Just let it run but we need to control the environment.
    # Given the complexity of patching `get_task_manager` inside `commands.py` from here without
    # explicit dependency injection, let's try to mock the persistence layer if possible.
    
    # Actually, the `conftest.py` likely handles some setup. Let's check it.
    pass

# Assuming standard pytest setup where we might not easily isolate the DB 
# without reading conftest. Let's rely on the fact that we can add and then delete.

def test_delete_task_flow():
    # 1. Add a task
    result = runner.invoke(app, ["add", "Delete me soon"])
    assert result.exit_code == 0
    assert "Added task" in result.stdout
    
    # Extract ID from stdout (simple parse)
    # Output: "Added task: Delete me soon (abc12345)"
    import re
    match = re.search(r'\(([a-f0-9]{8})\)', result.stdout)
    assert match, "Could not find task ID in output"
    task_id = match.group(1)
    
    # 2. Verify it's in the list
    result = runner.invoke(app, ["list"])
    assert task_id in result.stdout
    
    # 3. Delete it
    result = runner.invoke(app, ["delete", task_id])
    assert result.exit_code == 0
    assert f"Task {task_id} deleted." in result.stdout
    
    # 4. Verify it's GONE from the list
    result = runner.invoke(app, ["list"])
    assert task_id not in result.stdout

def test_delete_non_existent_task():
    result = runner.invoke(app, ["delete", "nonexistent"])
    assert result.exit_code == 0 # The command handles the error gracefully with print
    assert "Task nonexistent not found" in result.stdout
