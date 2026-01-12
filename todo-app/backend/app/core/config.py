import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "HackDo API"
    API_V1_STR: str = "/api/v1"
    
    # Database Configuration
    DATABASE_URL: str = os.getenv("DATABASE_URL", "")
    
    if DATABASE_URL.startswith("postgres://"):
        # SQLAlchemy requires 'postgresql://', but some providers (Heroku) give 'postgres://'
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    
    # Neon/Postgres often requires sslmode=require
    if "postgresql" in DATABASE_URL and "sslmode" not in DATABASE_URL:
        if "?" in DATABASE_URL:
            DATABASE_URL += "&sslmode=require"
        else:
            DATABASE_URL += "?sslmode=require"

    if not DATABASE_URL:
        if os.getenv("VERCEL"):
            # On Vercel, we MUST have a DATABASE_URL set in the dashboard.
            # Falling back to SQLite will fail because the filesystem is read-only.
            print("CRITICAL: DATABASE_URL is not set in Vercel environment variables!")
            # We don't raise an exception here to allow the app to start and show a health check,
            # but we'll set it to a dummy value that will fail clearly later.
            DATABASE_URL = "postgresql://missing_db_url_in_vercel_dashboard"
        else:
            # Use absolute path for SQLite database to ensure persistence across different working directories
            BASE_DIR: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
            DATABASE_URL = f"sqlite:///{os.path.join(BASE_DIR, 'sql_app.db')}"
    
    SECRET_KEY: str = os.getenv("SECRET_KEY", "cb1f87faafb24863bb5c6c9126adca87")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    GEMINI_API_KEY: str = ""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
print(f"DEBUG: Loaded settings. GEMINI_API_KEY present: {bool(settings.GEMINI_API_KEY)}")
if not settings.GEMINI_API_KEY:
    print(f"DEBUG: Current working directory: {os.getcwd()}")
    print(f"DEBUG: .env exists: {os.path.exists('.env')}")
    # Try manual fallback
    from dotenv import load_dotenv
    load_dotenv()
    settings.GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
    print(f"DEBUG: After manual load, GEMINI_API_KEY present: {bool(settings.GEMINI_API_KEY)}")
