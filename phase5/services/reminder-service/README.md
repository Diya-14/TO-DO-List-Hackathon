# Reminder Service

## Purpose
The Reminder Service acts as a background worker that manages time-sensitive alerts for tasks. It is fully decoupled from the main backend.

## Responsibilities
1.  **Listen** for `task.created` events.
2.  **Schedule** an internal timer or job for the task's due date (minus a configurable threshold, e.g., 1 hour).
3.  **Listen** for `task.deleted` events to cancel pending reminders.
4.  **Publish** `reminder.triggered` events when the time comes.

## Pseudo-Implementation (Python)

```python
from dapr.clients import DaprClient
from flask import Flask, request

app = Flask(__name__)

# Dapr subscription endpoint
@app.route('/dapr/subscribe', methods=['GET'])
def subscribe():
    return [
        {'pubsubname': 'pubsub', 'topic': 'task.created', 'route': 'handle_created'},
        {'pubsubname': 'pubsub', 'topic': 'task.deleted', 'route': 'handle_deleted'}
    ]

@app.route('/handle_created', methods=['POST'])
def handle_task_created():
    event = request.json
    task = event['data']
    
    if task.get('due_date'):
        print(f"Scheduling reminder for Task {task['id']} at {task['due_date']}")
        # Logic: Store in local DB or in-memory scheduler
        # scheduler.add_job(trigger_reminder, date=task['due_date'], args=[task])
    
    return "OK", 200

@app.route('/handle_deleted', methods=['POST'])
def handle_task_deleted():
    event = request.json
    task_id = event['data']['task_id']
    
    print(f"Removing reminders for Task {task_id}")
    # Logic: Remove from scheduler
    
    return "OK", 200

def trigger_reminder(task):
    with DaprClient() as d:
        # Publish event that reminder happened
        d.publish_event(
            pubsub_name='pubsub',
            topic_name='reminder.triggered',
            data_content_type='application/json',
            data={'task_id': task['id'], 'message': f"Time to do {task['title']}!"}
        )
```
