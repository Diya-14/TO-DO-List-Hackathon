# CLI Interface Contract

This document defines the user-facing contract for the CLI.

## Commands

### `add`
Adds a new task using natural language processing.

- **Usage**: `todo add "Buy milk tomorrow"`
- **Arguments**:
  - `TEXT` (Required): Natural language description of the task.
- **Options**:
  - `--priority, -p`: Force explicit priority (overrides NLP).
  - `--project`: Force explicit project/category.

### `list`
Lists tasks in a table format.

- **Usage**: `todo list`
- **Options**:
  - `--status`: Filter by status (`pending`, `done`, `all`). Default: `pending`.
  - `--priority`: Filter by priority.
  - `--sort`: Sort by (`due_date`, `priority`, `created`).

### `complete`
Marks a task as done.

- **Usage**: `todo complete <ID>`
- **Arguments**:
  - `ID` (Required): The Task UUID (or short hash if supported).

### `organize`
Trigger AI clustering to suggest groupings.

- **Usage**: `todo organize`
- **Output**: Displays suggested clusters/groups of tasks based on similarity.
