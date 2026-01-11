# Developer Quickstart: Smart Todo CLI

## Prerequisites
- Python 3.11+
- `pip` or `poetry`

## Setup

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   *Core libs*: `typer`, `rich` (for tables), `pydantic`, `dateparser`.

2. **Run Application**:
   ```bash
   python cli/main.py --help
   ```

## Running Tests
```bash
pytest
```

## Usage Examples

```bash
# Add a task
python cli/main.py add "Submit report by Friday urgent"

# List tasks
python cli/main.py list

# Organize
python cli/main.py organize
```
