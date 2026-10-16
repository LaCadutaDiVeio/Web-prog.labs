import type { Task, TaskStatus } from '../types/task'

type TaskRowProps = {
  task: Task
}

const statusNames: Record<TaskStatus, string> = {
  planned: 'Запланировано',
  work: 'В работе',
  done: 'Выполнено',
}

function TaskRow({ task }: TaskRowProps) {
  return (
    <tr>
      <td>
        <a className="task-link" href="#">
          {task.id}
        </a>
      </td>

      <td>{task.title}</td>

      <td>
        <span className={`status-badge status-badge_${task.status}`}>
          {statusNames[task.status]}
        </span>
      </td>

      <td>{task.assignee}</td>
    </tr>
  )
}

export default TaskRow