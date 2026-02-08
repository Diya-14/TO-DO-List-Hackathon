from sqlmodel import SQLModel, create_engine, Session
from .config import settings
import os

# Import all models to ensure they are registered with SQLModel.metadata
# before calling SQLModel.metadata.create_all(engine)
from app.models.user import User
from app.models.task import Task
from app.models.conversation import Conversation

# For SQLite, we need to allow multiple threads to access the same connection
engine_args = {}
if settings.DATABASE_URL.startswith("sqlite"):
    engine_args = {"connect_args": {"check_same_thread": False}}
elif os.getenv("VERCEL"):
    # For Vercel, avoid connection pooling as it's typically handled by the platform
    # or by a connection proxy like PgBouncer for serverless DBs.
    # Set pool_pre_ping to True to ensure connections are healthy.
    engine_args = {
        "pool_pre_ping": True,
    }
else:
    # Postgres/Neon optimizations for non-serverless environments
    engine_args = {
        "pool_pre_ping": True,
        "pool_recycle": 300,
        "pool_size": 5,
        "max_overflow": 10
    }

engine = create_engine(
    settings.DATABASE_URL, 
    echo=False, 
    **engine_args
)

def get_session():
    with Session(engine) as session:
        yield session

def init_db():
    try:
        SQLModel.metadata.create_all(engine)
    except Exception as e:
        print(f"Error initializing database: {e}")
        raise e
