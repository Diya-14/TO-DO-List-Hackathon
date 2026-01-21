# Event Definitions

This document defines the events schema and flow for the Event-Driven Architecture.

## Event Schema Standard (CloudEvents)

All events follow the CloudEvents specification structure, wrapped automatically by Dapr.

```json
{
  "specversion": "1.0",
  "type": "com.todo.task.created",
  "source": "backend-api",
  "id": "1",
  "time": "2026-01-21T00:00:00Z",
  "datacontenttype": "application/json",
  "data": { ... }
}
```

## Event Catalog

### 1. Task Created
*   **Topic:** `task.created`
*   **Producer:** Backend API
*   **Payload:**
    ```json
    {
      "task_id": 101,
      "user_id": 42,
      "title": "Buy groceries",
      "due_date": "2026-01-22T10:00:00Z",
      "priority": "high"
    }
    ```
*   **Consumers:**
    *   **Audit Service:** Logs the creation for compliance.
    *   **Reminder Service:** Schedules a future notification if `due_date` exists.

### 2. Task Completed
*   **Topic:** `task.completed`
*   **Producer:** Backend API
*   **Payload:**
    ```json
    {
      "task_id": 101,
      "user_id": 42,
      "completed_at": "2026-01-21T15:30:00Z"
    }
    ```
*   **Consumers:**
    *   **Audit Service:** Logs the completion.
    *   **Analytics Service (Future):** Updates user productivity metrics.

### 3. Task Deleted
*   **Topic:** `task.deleted`
*   **Producer:** Backend API
*   **Payload:**
    ```json
    {
      "task_id": 101,
      "reason": "user_request"
    }
    ```
*   **Consumers:**
    *   **Audit Service:** Logs the deletion.
    *   **Reminder Service:** Cancels any pending reminders for this task.

### 4. Reminder Triggered
*   **Topic:** `reminder.triggered`
*   **Producer:** Reminder Service
*   **Payload:**
    ```json
    {
      "task_id": 101,
      "user_id": 42,
      "message": "Reminder: Buy groceries is due in 1 hour!"
    }
    ```
*   **Consumers:**
    *   **Notification Service (Future):** Sends Email/SMS/Push.
    *   **Audit Service:** Logs that a reminder was sent.
