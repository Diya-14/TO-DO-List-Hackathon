# Data Model: Smart Todo CLI

## Entities

### Task
Represents a single unit of work.

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `id` | UUID (String) | Yes | Unique Identifier | generated on creation |
| `title` | String | Yes | The task description | Min 1 char |
| `created_at` | ISO8601 String | Yes | Creation timestamp | |
| `due_date` | ISO8601 String | No | Deadline | Must be future date (warn if past) |
| `priority` | Enum (Low, Medium, High) | No | Urgency level | Default: Medium |
| `status` | Enum (Pending, Done) | Yes | Current state | Default: Pending |
| `tags` | List[String] | No | Keywords/Labels | |
| `category` | String | No | Inferred or explicit group | |

### Project
Represents a logical grouping of tasks (implicit or explicit).

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `name` | String | Yes | Project Name (e.g., "Work") | Unique |
| `task_ids` | List[UUID] | Yes | Tasks in this project | |

## Storage Schema (JSON)

```json
{
  "version": "1.0",
  "tasks": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Buy milk",
      "created_at": "2025-12-30T10:00:00Z",
      "status": "pending",
      "priority": "medium",
      "tags": ["groceries"]
    }
  ],
  "config": {
    "default_priority": "medium"
  }
}
```
