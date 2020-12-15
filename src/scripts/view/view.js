import { hideLongComment,displayFullComment } from './comment.js'
import { viewMenu } from './taskMenu.js'
import { displayModalAddTask, closeModalAddTaskListeners, createListOfUsers } from './modalAddTask.js'

export function view() {
  // комментарий задачи
  hideLongComment()
  displayFullComment()

  // меню задачи
  viewMenu()

  // модальное окно "Add task"
  displayModalAddTask()
  closeModalAddTaskListeners()
  createListOfUsers()

}