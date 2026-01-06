# CLI Interface Contract: Update Task

## Command: `update`
Updates an existing task.

- **Usage**: `todo update <ID> [TEXT]`
- **Arguments**:
  - `ID` (Required): Full UUID or 8-char short ID of the task.
  - `TEXT` (Optional): Natural language description of changes (e.g., "new title tomorrow").
- **Options**:
  - `--title`: Explicitly set the title.
  - `--priority, -p`: Explicitly set priority (`low`, `medium`, `high`).
  - `--due, -d`: Explicitly set due date (ISO or natural language supported by parser).

## Error Cases
- **Task Not Found**: Display "Task <ID> not found".
- **Ambiguous ID**: Display "Multiple tasks match <ID>: [list titles]. Please use a longer ID."
- **Validation Error**: Display Pydantic validation error if title is cleared.
