# Research: Update Todo Implementation

**Feature**: Update Todo
**Date**: 2025-12-30

## Decisions

### 1. NLP vs CLI Flag Precedence
**Decision**: CLI flags override NLP parsing results.
**Rationale**: 
- CLI flags are explicit user intents.
- NLP is heuristic-based and potentially ambiguous.
- Providing a flag usually means the user wants to force a specific value.

### 2. Ambiguous Short ID Handling
**Decision**: Abort with error listing matching tasks.
**Rationale**:
- Updating the wrong task is a high-risk data integrity issue.
- If a short ID (8 chars) matches multiple tasks, the user must provide more characters or the full UUID.
- Displaying the titles of matching tasks helps the user identify the correct one.

### 3. Partial Update Logic
**Decision**: Merging `Task` model with update dict.
**Rationale**:
- `Task` is a Pydantic model. We can use `task.model_copy(update={...})` or similar patterns.
- Fields not present in the update (NLP or CLI) must remain unchanged.
- Ensure `id` and `created_at` are never modified by the update command.
