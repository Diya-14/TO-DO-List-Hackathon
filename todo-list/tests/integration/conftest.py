import pytest
import sys
from pathlib import Path

# Ensure project root is in sys.path
root = Path(__file__).parent.parent.parent
if str(root) not in sys.path:
    sys.path.insert(0, str(root))

from src.core.persistence import PersistenceManager
from src.core.task_manager import TaskManager
from src.core.config import ConfigManager

@pytest.fixture
def clean_cli(monkeypatch, tmp_path):
    db_file = tmp_path / "test_todo_cli.json"
    
    # Patch ConfigManager globally at the class level
    monkeypatch.setattr(ConfigManager, "get_db_path", lambda self: db_file)
    
    return db_file
