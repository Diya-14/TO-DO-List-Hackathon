from sqlmodel import Session, create_engine, select, SQLModel
from app.models.user import User
from app.models.task import Task
from app.core.config import settings

engine = create_engine(settings.DATABASE_URL)

def check():
    print(f"DEBUG: DB URL: {settings.DATABASE_URL[:25]}...")
    with Session(engine) as session:
        # Check tables
        from sqlalchemy import inspect
        inspector = inspect(engine)
        print(f"Tables: {inspector.get_table_names()}")
        
        # Check users
        users = session.exec(select(User)).all()
        print(f"Users count: {len(users)}")
        if users:
            print(f"First user ID: {users[0].id}")

if __name__ == "__main__":
    check()
