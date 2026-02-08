import sys
import os

# 1. Absolute Path Setup
# This ensures that no matter where Vercel runs the function, 
# it can find the 'backend' folder.
current_dir = os.path.dirname(os.path.abspath(__file__)) # todo-app/api
root_dir = os.path.dirname(current_dir)                 # todo-app
backend_dir = os.path.join(root_dir, 'backend')          # todo-app/backend

# Add to sys.path so 'app' works
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)
if root_dir not in sys.path:
    sys.path.insert(0, root_dir)

# 2. Environment Fixes
# SQLAlchemy/Postgres fix for some Vercel environments
os.environ["PYTHONPATH"] = backend_dir

print(f"DEBUG: Vercel Entry - sys.path: {sys.path[:3]}")
print(f"DEBUG: Vercel Entry - backend_dir: {backend_dir}")

try:
    # Import the FastAPI app from todo-app/backend/app/main.py
    from app.main import app
    print("DEBUG: Successfully imported 'app' from 'app.main'")
except ImportError as e:
    print(f"Import Error (primary): {e}")
    # Fallback for different mounting structures
    try:
        from backend.app.main import app
        print("DEBUG: Successfully imported 'app' from 'backend.app.main'")
    except ImportError as e2:
        print(f"Import Error (fallback): {e2}")
        # Create a minimal app if import fails so we can at least see the error
        from fastapi import FastAPI
        app = FastAPI()
        @app.get("/api/v1/error")
        def error_check():
            return {"error": str(e2), "path": sys.path, "backend_dir": backend_dir, "cwd": os.getcwd()}
        print("DEBUG: Using fallback error app")

# Add a direct health check that doesn't rely on app.main if possible
# or just ensure app is exported
app = app

@app.get("/api/v1/vercel-ping")
def vercel_ping():
    return {"status": "ok", "message": "Vercel Python runtime is working"}

@app.get("/api/v1/path-check/{path:path}")
def path_check(path: str):
    return {
        "requested_path": path,
        "python_sys_path": sys.path[:5],
        "cwd": os.getcwd()
    }
