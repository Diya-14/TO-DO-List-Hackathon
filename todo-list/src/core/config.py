import os
from pathlib import Path
from typing import Any, Dict

class ConfigManager:
    DEFAULT_PATH = Path.home() / ".todo-cli" / "data.json"
    
    def __init__(self, config_path: Path = None):
        self.config_path = config_path or self.DEFAULT_PATH

    def get_db_path(self) -> Path:
        return self.config_path

    # Placeholder for reading config from the JSON file itself if we need user-configurable defaults
    def get_default_priority(self) -> str:
        return "medium"
