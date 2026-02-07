import os
import sys
from sqlmodel import SQLModel, create_engine
from dotenv import load_dotenv

# Ensure the backend directory is in the Python path
current_dir = os.path.dirname(os.path.abspath(__file__)) # todo-app/backend/scripts
backend_dir = os.path.dirname(current_dir)             # todo-app/backend
app_dir = os.path.join(backend_dir, 'app')              # todo-app/backend/app

if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)
if app_dir not in sys.path:
    sys.path.insert(0, app_dir)

# Load environment variables (from .env in backend directory)
dotenv_path = os.path.join(backend_dir, '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)
    print(f"Loaded .env from {dotenv_path}")
else:
    print(f"No .env file found at {dotenv_path}")

from app.core.config import settings
from app.models import *  # Import all models to register them with SQLModel.metadata

def main():
    print(f"Attempting to initialize database at: {settings.DATABASE_URL}")
    if "missing_db_url_in_vercel_dashboard" in settings.DATABASE_URL:
        print("CRITICAL: DATABASE_URL is not set or is misconfigured. Please set it in your .env file or Vercel environment variables.")
        sys.exit(1)

    try:
        engine = create_engine(settings.DATABASE_URL, echo=True)
        print("Creating database tables...")
        SQLModel.metadata.create_all(engine)
        print("Database tables created/updated successfully!")
    except Exception as e:
        print(f"Error creating database tables: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
