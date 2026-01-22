from fastapi import FastAPI, Request
import logging
import uvicorn
import json

app = FastAPI()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("audit-service")

@app.get("/")
def health():
    return {"status": "audit-service-running"}

# Dapr Subscription Endpoint
@app.get("/dapr/subscribe")
def subscribe():
    subscriptions = [
        {
            "pubsubname": "pubsub",
            "topic": "todo-events",
            "route": "events"
        }
    ]
    logger.info(f"Subscribing to: {subscriptions}")
    return subscriptions

# Event Handler
@app.post("/events")
async def handle_event(request: Request):
    try:
        body = await request.json()
        # CloudEvents wrapping
        data = body.get("data", body)
        logger.info(f"📝 AUDIT LOG: Received Event: {json.dumps(data, indent=2)}")
        return {"status": "success"}
    except Exception as e:
        logger.error(f"Error handling event: {e}")
        return {"status": "error"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=6000)
