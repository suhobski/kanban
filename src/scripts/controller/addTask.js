import { Task } from '../model/task.js'
import { closeModalAddTask } from '../view/modalAddTask.js'
import { displayTask } from '../view/taskView.js'
import { saveTask } from './localStorage.js'

const cardListTodo = document.querySelector('.card__list--todo')

let modalTitle = document.querySelector('.modal-add-task__field--title')
let modalUser = document.querySelector('.modal-add-task__field--user-list')
let modalComment = document.querySelector('.modal-add-task__field--comment')
let buttonOk = document.querySelector('.modal-add-task__button--ok')

export function addTask() {
  buttonOk.addEventListener('click', () => {
    let taskTitle = modalTitle.value
    let taskUser = modalUser.options[modalUser.selectedIndex].value
    let taskComment = modalComment.value

    const date = new Date()
    let taskDate = `${date.getDate()}.${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}.${date.getUTCFullYear()}`


    // проверка на заполнение обязательных полей
    if (taskTitle && taskUser) {
      let task = new Task(taskTitle, taskUser, taskDate, taskComment)
      saveTask(task)
      closeModalAddTask()
      displayTask(cardListTodo, task)
    } else { // показываем предупреждение, если поле не заполнено
      // проверка Title
      if (!taskTitle) {
        modalTitle.style.background = '#FFDCE0'
        setTimeout(() => modalTitle.style.background = '#FFFFFF', 1000)
      }
      // проверка User
      if (!taskUser) {
        modalUser.style.background = '#FFDCE0'
        setTimeout(() => modalUser.style.background = '#FFFFFF', 1000)
      }
    }
  })
}