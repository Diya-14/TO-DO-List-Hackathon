import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "HackDo API"
    API_V1_STR: str = "/api/v1"
    
    # Use absolute path for SQLite database to ensure persistence across different working directories
    BASE_DIR: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    DATABASE_URL: str = f"sqlite:///{os.path.join(BASE_DIR, 'sql_app.db')}"
    
    SECRET_KEY: str = "cb1f87faafb24863bb5c6c9126adca87"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
