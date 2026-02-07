from sqlmodel import SQLModel, create_engine, Session, text
from app.core.config import settings
from app.models.user import User
from app.models.task import Task

# Force connection to NeonDB
print(f"DEBUG: DB URL: {settings.DATABASE_URL[:25]}...")
engine = create_engine(settings.DATABASE_URL)

def reset_db():
    print("WARNING: This will drop all tables in the database!")
    
    # Reflect existing tables
    from sqlalchemy import MetaData
    metadata = MetaData()
    metadata.reflect(bind=engine)
    
    print(f"Found tables: {metadata.tables.keys()}")
    
    # Drop all tables
    print("Dropping all tables...")
    metadata.drop_all(bind=engine)
    
    # Recreate tables
    print("Creating tables from models...")
    SQLModel.metadata.create_all(engine)
    
    print("Database reset complete.")

if __name__ == "__main__":
    reset_db()