# Data Model: Update Todo

## Entities

### Task (Existing)
No changes to the schema, but validation during update must ensure:
- `title` remains non-empty.
- `priority` and `status` remain within enum bounds.

## Update Workflow
1. Fetch existing task by ID (Short or Full).
2. Validate unique match.
3. Parse Natural Language text (if provided).
4. Apply CLI flag overrides.
5. Validate resulting `Task` model.
6. Persist.
