import sys
import os

# Get the directory of this file (todo-app/api)
current_dir = os.path.dirname(os.path.abspath(__file__))
# Get the root directory (todo-app)
root_dir = os.path.dirname(current_dir)
# Get the backend directory (todo-app/backend)
backend_dir = os.path.join(root_dir, 'backend')

# Add paths to sys.path
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

# Debug print to Vercel logs
print(f"DEBUG: sys.path: {sys.path}")
print(f"DEBUG: backend_dir: {backend_dir}")
print(f"DEBUG: Contents of backend: {os.listdir(backend_dir) if os.path.exists(backend_dir) else 'NOT FOUND'}")

try:
    # Import the FastAPI app
    from app.main import app
except ImportError as e:
    print(f"CRITICAL: Import failed: {e}")
    # Try alternate import if structure is different
    try:
        from backend.app.main import app
    except ImportError as e2:
        print(f"CRITICAL: Alternate import also failed: {e2}")
        raise e