import sys
import os

# Add the backend directory to the Python path
# Using absolute paths to be safe on Vercel
current_dir = os.path.dirname(os.path.abspath(__file__))
backend_dir = os.path.join(os.path.dirname(current_dir), 'backend')
sys.path.append(backend_dir)

# Import the FastAPI app
from app.main import app
