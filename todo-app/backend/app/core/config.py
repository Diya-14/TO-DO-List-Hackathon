import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "HackDo API"
    API_V1_STR: str = "/api/v1"
    
    # Database Configuration
    # 1. Prefer DATABASE_URL from environment (e.g. Vercel Postgres, Neon, Supabase)
    # 2. Fallback to local SQLite for development
    DATABASE_URL: str = os.getenv("DATABASE_URL", "")
    
    if not DATABASE_URL:
        # Use absolute path for SQLite database to ensure persistence across different working directories
        BASE_DIR: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        DATABASE_URL = f"sqlite:///{os.path.join(BASE_DIR, 'sql_app.db')}"
    elif DATABASE_URL.startswith("postgres://"):
        # SQLAlchemy requires 'postgresql://', but some providers (Heroku) give 'postgres://'
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    
    SECRET_KEY: str = "cb1f87faafb24863bb5c6c9126adca87"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
