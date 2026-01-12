import sys
import os

# Simulate Vercel environment path setup
current_dir = os.path.dirname(os.path.abspath("todo-app/api/index.py"))
root_dir = os.path.dirname(current_dir)
backend_dir = os.path.join(root_dir, 'backend')

print(f"Current dir: {current_dir}")
print(f"Root dir: {root_dir}")
print(f"Backend dir: {backend_dir}")

if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

try:
    from app.main import app
    print("Successfully imported app from app.main")
except Exception as e:
    print(f"Error importing app: {e}")
    import traceback
    traceback.print_exc()
