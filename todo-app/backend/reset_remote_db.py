from sqlmodel import create_engine, text
from app.core.config import settings

def reset_remote_db():
    print(f"Connecting to: {settings.DATABASE_URL}")
    engine = create_engine(settings.DATABASE_URL)
    with engine.connect() as conn:
        print("Dropping tables...")
        conn.execute(text("DROP TABLE IF EXISTS task CASCADE;"))
        conn.execute(text("DROP TABLE IF EXISTS conversation CASCADE;"))
        conn.execute(text("DROP TABLE IF EXISTS \"user\" CASCADE;")) # 'user' is reserved keyword in pg
        conn.commit()
        print("Tables dropped.")

if __name__ == "__main__":
    reset_remote_db()
