import { displayModalAddTask, closeModalAddTaskListeners, createListOfUsers } from './modalAddTask.js'
import { deleteTask } from './taskView.js'
import { loadTasks, taskCounter, clearAllTasks } from './card.js'
import { displayComment } from './commentView.js'
import { closeModalAlert } from './modalAlert.js'
import { closeModalDelete } from './modalDelete'


export function view() {
  // модальное окно "Add task"
  displayModalAddTask()
  closeModalAddTaskListeners()
  createListOfUsers()

  // модальное окно "Alert"
  closeModalAlert()
  
  // task
  deleteTask()

  // card
  loadTasks()
  taskCounter()
  clearAllTasks()

  // комментарий задачи
  displayComment()
}