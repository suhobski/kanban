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

    // проверяем наличие 'todo' в localStorage
    if (localStorage.getItem('todo')) {
      let todoArray = JSON.parse(localStorage.getItem('todo'))  // если есть, сохраняем себе
      todoArray.push(task)                                      // добавялем новую задачу
      localStorage.setItem('todo', JSON.stringify(todoArray))   // сохраняем обратно
    } else {
      localStorage.setItem('todo', JSON.stringify([task]))      // иначе просто сохраняем 
    }
  })
}