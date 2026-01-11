import sys
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Add the parent directory to sys.path to allow 'app' module imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Load .env explicitly
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

from app.core.config import settings

def list_models():
    api_key = os.getenv("GEMINI_API_KEY") or settings.GEMINI_API_KEY
    if not settings.GEMINI_API_KEY:
        print("Error: GEMINI_API_KEY is not set.")
        return

    try:
        genai.configure(api_key=settings.GEMINI_API_KEY)
        print("Listing available models...")
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                print(f"Name: {m.name}")
    except Exception as e:
        print(f"Error listing models: {e}")

if __name__ == "__main__":
    list_models()