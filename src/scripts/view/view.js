import { displayFullComment } from './comment.js'
import { viewMenu } from './taskMenu.js'
import { displayModalAddTask, closeModalAddTask, createListOfUsers } from './viewModalAddTask.js'

export function view() {
  // комментарий задачи
  displayFullComment()

  // меню задачи
  viewMenu()

  // модальное окно "Add task"
  displayModalAddTask()
  closeModalAddTask()
  createListOfUsers()

}