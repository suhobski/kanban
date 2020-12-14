import { Task } from '../model/task.js'

let modalTitle = document.querySelector('.modal-add-task__field--title')
let modalDate = document.querySelector('.modal-add-task__field--date')
let modalUser = document.querySelector('.modal-add-task__field--user-list')
let modalComment = document.querySelector('.modal-add-task__field--comment')



let buttonOk = document.querySelector('.modal-add-task__button--ok')

export function addTask() {
  buttonOk.addEventListener('click', event => {
    let taskTitle = modalTitle.value
    let taskUser = modalUser.options[modalUser.selectedIndex].value
    let taskDate = modalDate.value
    let taskComment = {name: taskUser, comment: modalComment.value}
    
    let task = new Task(taskTitle, taskUser, taskDate, taskComment)
  })
}