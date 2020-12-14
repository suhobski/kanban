import { hideLongComment,displayFullComment } from './comment.js'
import { viewMenu } from './taskMenu.js'
import { displayModalAddTask, closeModalAddTask, createListOfUsers } from './modalAddTask.js'

export function view() {
  // комментарий задачи
  hideLongComment()
  displayFullComment()

  // меню задачи
  viewMenu()

  // модальное окно "Add task"
  displayModalAddTask()
  closeModalAddTask()
  createListOfUsers()

}