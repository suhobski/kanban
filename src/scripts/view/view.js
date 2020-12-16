import { hideLongComment,displayFullComment } from './comment.js'
import { displayModalAddTask, closeModalAddTaskListeners, createListOfUsers } from './modalAddTask.js'

export function view() {
  // комментарий задачи
  hideLongComment()
  displayFullComment()

  // модальное окно "Add task"
  displayModalAddTask()
  closeModalAddTaskListeners()
  createListOfUsers()

}