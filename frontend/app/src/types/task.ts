export type TaskStatus = 'planned' | 'work' | 'done'

export type Task = {
  id: string
  title: string
  status: TaskStatus
  assignee: string
}