import { useState } from 'react'
import TaskRow from '../components/TaskRow'
import type { Task, TaskStatus } from '../types/task'

type StatusFilter = 'all' | TaskStatus

const tasks: Task[] = [
  {
    id: 'KAN-1',
    title: 'Реализовать авторизацию',
    status: 'work',
    assignee: 'Victor',
  },
  {
    id: 'KAN-2',
    title: 'Сверстать страницу проекта',
    status: 'planned',
    assignee: 'Victor',
  },
  {
    id: 'KAN-3',
    title: 'Добавить граф разработки',
    status: 'planned',
    assignee: 'Не назначен',
  },
]

function ProjectPage() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')

  const visibleTasks =
    statusFilter === 'all'
      ? tasks
      : tasks.filter((task) => task.status === statusFilter)

  return (
    <main className="project-page">
      <header className="project-header">
        <h1>Web-prog lab2</h1>
        <p>Разработка системы управления проектами</p>
      </header>

      <nav className="project-tabs">
        <a className="project-tabs_active" href="#">
          Список
        </a>
        <a href="#">Доска</a>
        <a href="#">Граф</a>
      </nav>

      <section className="tasks-section">
        <header className="tasks-header">
          <h2>Задачи</h2>

          <button type="button">
            Создать задачу
          </button>
        </header>

        <div className="tasks-toolbar">
          <label htmlFor="status-filter">
            Статус
          </label>

          <select
            id="status-filter"
            name="status"
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value as StatusFilter)
            }
          >
            <option value="all">Все</option>
            <option value="planned">Запланировано</option>
            <option value="work">В работе</option>
            <option value="done">Выполнено</option>
          </select>
        </div>

        <div className="tasks-table-wrapper">
          <table className="tasks-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Задача</th>
                <th>Статус</th>
                <th>Исполнитель</th>
              </tr>
            </thead>

            <tbody>
              {visibleTasks.map((task) => (
                <TaskRow
                  key={task.id}
                  task={task}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default ProjectPage