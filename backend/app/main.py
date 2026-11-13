from fastapi import FastAPI
from app.routers import tasks

app = FastAPI(title="TaskMaster API")

app.include_router(tasks.router, prefix="/api")

@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "working", "service": "backend"}
