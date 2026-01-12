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
    print(f"DEBUG: Starting lifespan. Database URL: {settings.DATABASE_URL[:20]}...")
    try:
        # In production, we'd use Alembic for migrations, but for hackathon speed/CLI alignment we can use create_all
        init_db()
        print("DEBUG: Database connected and initialized successfully.")
    except Exception as e:
        import traceback
        print(f"CRITICAL DATABASE CONNECTION ERROR: {e}")
        traceback.print_exc()
        print("Server starting, but database features will fail until fixed.")
    yield
    print("DEBUG: Shutting down lifespan.")

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan,
)

@app.get("/debug-settings")
def debug_settings():
    return {
        "gemini_key_present": bool(settings.GEMINI_API_KEY),
        "gemini_key_length": len(settings.GEMINI_API_KEY) if settings.GEMINI_API_KEY else 0,
        "api_v1_str": settings.API_V1_STR,
        "database_url_type": "postgres" if "postgres" in settings.DATABASE_URL else "sqlite"
    }

@app.get("/health")
def health_check():
    return {"status": "alive", "environment": os.getenv("VERCEL_ENV", "local")}

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
