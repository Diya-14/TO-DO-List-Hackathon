# =========================
# Backend Dockerfile
# =========================

# Use official Python 3.11 slim image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first to leverage Docker cache
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all application code
COPY . .

# Set environment variables (update values or use Docker Compose for secrets)
ENV DATABASE_URL="postgresql://neondb_owner:npg_LW1ZvE9BOkSp@ep-withered-wind-ahptpw5o-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
ENV SECRET_KEY="cb1f87faafb24863bb5c6c9126adca87"

# Expose FastAPI port
EXPOSE 8000

# Start FastAPI application using Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
