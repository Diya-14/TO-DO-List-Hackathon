import pytest
from typer.testing import CliRunner
from src.main import app
from src.core.persistence import PersistenceManager
from src.core.config import ConfigManager

runner = CliRunner()

@pytest.fixture
def mock_persistence(monkeypatch, tmp_path):
    db_file = tmp_path / "test_todo_organize.json"
    monkeypatch.setattr("src.cli.commands.config.get_db_path", lambda: db_file)
    from src.cli import commands
    commands.persistence = PersistenceManager(file_path=str(db_file))
    from src.core.task_manager import TaskManager
    commands.task_manager = TaskManager(commands.persistence)
    return db_file

def test_cli_organize(mock_persistence):
    # Add variety of tasks
    runner.invoke(app, ["add", "Buy groceries"])
    runner.invoke(app, ["add", "Buy fruit"])
    runner.invoke(app, ["add", "Fix code bug"])
    runner.invoke(app, ["add", "Write documentation"])
    
    result = runner.invoke(app, ["organize"])
    assert result.exit_code == 0
    assert "Suggested Task Groupings" in result.stdout
    assert "Buy groceries" in result.stdout
    assert "Fix code bug" in result.stdout
