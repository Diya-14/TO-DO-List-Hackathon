import pytest
from typer.testing import CliRunner
from src.main import app
from src.core.persistence import PersistenceManager

runner = CliRunner()

def test_cli_add_task(clean_cli):
    db_file = clean_cli
    result = runner.invoke(app, ["add", "Buy milk tomorrow urgent"])
    
    assert result.exit_code == 0
    assert "Added task: Buy milk" in result.stdout
    
    # Verify persistence
    pm = PersistenceManager(file_path=str(db_file))
    tasks = pm.load_tasks()
    assert len(tasks) == 1
    assert tasks[0].title == "Buy milk"
    assert tasks[0].priority == "high"
