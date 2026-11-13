from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/tasks", tags=["tasks"])

class Task(BaseModel):
    id: str
    title: str
    status: str
    assignee: str

# Типо БД
tasks_db: list[Task] = [
    Task(id="KAN-1", title="Реализовать авторизацию", status="work", assignee="Victor"),
    Task(id="KAN-2", title="Сверстать страницу проекта", status="planned", assignee="Victor"),
    Task(id="KAN-3", title="Добавить граф разработки", status="planned", assignee="Не назначен"),
]

@router.get("", response_model=list[Task])
def get_tasks():
    """Получить список всех задач."""
    return tasks_db

@router.get("/{task_id}", response_model=Task)
def get_task(task_id: str):
    """Получить задачу по ID."""
    for task in tasks_db:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")