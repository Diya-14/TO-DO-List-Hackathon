import sys
import os
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from sqlmodel import Session

# Add the parent directory to sys.path to allow 'app' module imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Force UTF-8 encoding for stdout/stderr on Windows to avoid CP1252 errors
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except AttributeError:
        # Fallback for older Python versions or environments where reconfigure isn't available
        import codecs
        sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
        sys.stderr = codecs.getwriter("utf-8")(sys.stderr.detach())

from app.core.config import settings
from app.core.db import init_db, get_session
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

from fastapi.responses import JSONResponse
from sqlalchemy.exc import StatementError

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan,
)

@app.exception_handler(StatementError)
async def statement_error_handler(request, exc):
    import traceback
    print(f"DEBUG: SQL Statement Error: {exc}")
    traceback.print_exc()
    return JSONResponse(
        status_code=500,
        content={"detail": "Database error: mismatch in data types (e.g. UUID vs String). Please check server logs."},
    )

# CORS must be added BEFORE routers to handle preflight requests correctly
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/db-check")
def db_check(session: Session = Depends(get_session)):
    try:
        from sqlmodel import select
        from app.models.user import User
        # Just try to query one user (even if none exist)
        session.exec(select(User)).first()
        return {"status": "ok", "message": "Database connection and schema verified"}
    except Exception as e:
        import traceback
        error_msg = str(e)
        stack_trace = traceback.format_exc()
        return {
            "status": "error", 
            "message": error_msg, 
            "trace": stack_trace[:500], # Send first 500 chars of trace
            "db_url_prefix": settings.DATABASE_URL[:15] if settings.DATABASE_URL else "None"
        }

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
