from fastapi import FastAPI

app = FastAPI(title="TaskMaster API")


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "working", "service": "backend"}
