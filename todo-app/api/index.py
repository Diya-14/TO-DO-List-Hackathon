import os
import sys
from fastapi import FastAPI
from starlette.responses import JSONResponse

app = FastAPI()

@app.get("/api/v1/debug-vercel")
def debug_vercel():
    return JSONResponse(content={
        "status": "Vercel Minimal App Running",
        "cwd": os.getcwd(),
        "sys_path_start": sys.path[:5],
        "environ_vercel_env": os.getenv("VERCEL_ENV"),
        "python_version": sys.version,
        "env_pythonpath": os.getenv("PYTHONPATH"),
        "env_pythonioencoding": os.getenv("PYTHONIOENCODING")
    })