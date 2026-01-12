from sqlmodel import SQLModel, create_engine, Session
from .config import settings

# For SQLite, we need to allow multiple threads to access the same connection
engine_args = {}
if settings.DATABASE_URL.startswith("sqlite"):
    engine_args = {"connect_args": {"check_same_thread": False}}

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
