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
            raise ValueError("CRITICAL: DATABASE_URL is not set in Vercel environment variables! Please configure it in your Vercel project settings.")
        else:
            # Use absolute path for SQLite database to ensure persistence across different working directories
            BASE_DIR: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
            DATABASE_URL = f"sqlite:///{os.path.join(BASE_DIR, 'sql_app.db')}"
    
    SECRET_KEY: str = os.getenv("SECRET_KEY", "cb1f87faafb24863bb5c6c9126adca87")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

# Manual override to ensure .env is loaded regardless of how uvicorn is started
from dotenv import load_dotenv
_base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_env_path = os.path.join(_base_dir, ".env")
print(f"DEBUG: Looking for .env at: {_env_path}")
if os.path.exists(_env_path):
    load_dotenv(_env_path, override=True)
    print("DEBUG: .env file found and loaded.")
else:
    print("DEBUG: .env file NOT found at expected path.")

settings = Settings()

# Force check after load_dotenv
if not settings.GEMINI_API_KEY:
    settings.GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

print(f"DEBUG: Final Settings - GEMINI_API_KEY present: {bool(settings.GEMINI_API_KEY)}")
