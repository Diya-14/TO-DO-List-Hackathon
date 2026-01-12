import sys
import os

# 1. Absolute Path Setup
# This ensures that no matter where Vercel runs the function, 
# it can find the 'backend' folder.
current_dir = os.path.dirname(os.path.abspath(__file__)) # todo-app/api
root_dir = os.path.dirname(current_dir)                 # todo-app
backend_dir = os.path.join(root_dir, 'backend')          # todo-app/backend

# Add to sys.path so 'import app' works
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

# 2. Environment Fixes
# SQLAlchemy/Postgres fix for some Vercel environments
os.environ["PYTHONPATH"] = backend_dir

try:
    # Import the FastAPI app from todo-app/backend/app/main.py
    from app.main import app
except ImportError as e:
    print(f"Import Error: {e}")
    # Fallback for different mounting structures
    try:
        sys.path.append(root_dir)
        from backend.app.main import app
    except ImportError as e2:
        raise Exception(f"Could not find backend app. Path: {backend_dir}") from e2

# This allows Vercel to see the app
app = app
