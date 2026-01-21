# Audit Service

## Purpose
The Audit Service provides a reliable, persistent log of all system activities. Unlike application logs (stdout/stderr), audit logs are structural records used for security, compliance, and debugging history.

## Responsibilities
1.  **Subscribe** to ALL relevant business events (`task.*`, `reminder.*`).
2.  **Persist** events to a secure, append-only storage (e.g., a separate SQL table, Elasticsearch, or a flat file in this MVP).
3.  **Provide** a history of what happened to a specific object.

## Pseudo-Implementation (Python)

```python
from flask import Flask, request
import json
import datetime

app = Flask(__name__)

# Subscribe to wildcard or specific topics
@app.route('/dapr/subscribe', methods=['GET'])
def subscribe():
    return [
        {'pubsubname': 'pubsub', 'topic': 'task.created', 'route': 'log_event'},
        {'pubsubname': 'pubsub', 'topic': 'task.completed', 'route': 'log_event'},
        {'pubsubname': 'pubsub', 'topic': 'task.deleted', 'route': 'log_event'},
        {'pubsubname': 'pubsub', 'topic': 'reminder.triggered', 'route': 'log_event'}
    ]

@app.route('/log_event', methods=['POST'])
def log_event():
    # Dapr delivers CloudEvents
    event = request.json
    
    audit_entry = {
        "timestamp": datetime.datetime.now().isoformat(),
        "event_type": event['type'],
        "source": event['source'],
        "payload": event['data']
    }
    
    # In a real system, write to DB. Here, we append to a file.
    with open("audit_log.jsonl", "a") as f:
        f.write(json.dumps(audit_entry) + "\n")
        
    print(f"AUDIT: Recorded {event['type']}")
    return "OK", 200
```

```