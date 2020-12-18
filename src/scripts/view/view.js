import { hideLongComment,displayFullComment } from './comment.js'
import { displayModalAddTask, closeModalAddTaskListeners, createListOfUsers } from './modalAddTask.js'
import { deleteTask } from './taskView.js'
import { loadTasks, taskCounter, clearAllTasks } from './card.js'

export function view() {
  // комментарий задачи
  hideLongComment()
  displayFullComment()

  // модальное окно "Add task"
  displayModalAddTask()
  closeModalAddTaskListeners()
  createListOfUsers()

  // task
  deleteTask()

  // card
  loadTasks()
  taskCounter()
  clearAllTasks()
}