import sys
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

# Add the parent directory to sys.path to allow 'app' module imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.core.config import settings
from app.core.db import init_db
from app.api import auth, tasks, chat

@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        # In production, we'd use Alembic for migrations, but for hackathon speed/CLI alignment we can use create_all
        init_db()
        print("Database connected and initialized successfully.")
    except Exception as e:
        print(f"DATABASE CONNECTION ERROR: {e}")
        print("Server starting, but database features will fail until fixed.")
    yield

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan,
)

@app.get("/")
def root():
    return {"message": "Welcome to HackDo API"}

@app.get("/ping")
def ping():
    return {"status": "ok"}

app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(tasks.router, prefix=f"{settings.API_V1_STR}/tasks", tags=["tasks"])
app.include_router(chat.router, prefix=f"{settings.API_V1_STR}/chat", tags=["chat"])

# Maximum permissiveness for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
