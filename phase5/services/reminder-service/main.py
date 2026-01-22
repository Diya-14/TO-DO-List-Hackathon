import time
import requests
import os
import logging
from fastapi import FastAPI
import threading
import uvicorn

app = FastAPI()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("reminder-service")

DAPR_HTTP_PORT = os.getenv("DAPR_HTTP_PORT", 3500)
PUBSUB_NAME = "pubsub"
TOPIC_NAME = "todo-events"

def run_scheduler():
    logger.info("⏰ Reminder Scheduler Started")
    while True:
        time.sleep(60)  # Check every 60 seconds
        try:
            logger.info("Checking for due tasks...")
            payload = {
                "event": "reminder",
                "message": "Don't forget your tasks!",
                "timestamp": time.time()
            }
            dapr_url = f"http://localhost:{DAPR_HTTP_PORT}/v1.0/publish/{PUBSUB_NAME}/{TOPIC_NAME}"
            
            # Fire and forget
            try:
                response = requests.post(dapr_url, json=payload)
                if response.status_code == 204:
                    logger.info("✅ Published periodic reminder event")
                else:
                    logger.warning(f"Failed to publish: {response.status_code}")
            except Exception as e:
                logger.error(f"Connection to Dapr sidecar failed: {e}")

        except Exception as e:
            logger.error(f"Scheduler loop error: {e}")

@app.get("/")
def health():
    return {"status": "reminder-service-running"}

@app.on_event("startup")
def startup_event():
    # Start scheduler in background
    t = threading.Thread(target=run_scheduler, daemon=True)
    t.start()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=6001)
