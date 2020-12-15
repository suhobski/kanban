import { Task } from '../model/task.js'
import { closeModalAddTask } from '../view/modalAddTask.js'

let modalTitle = document.querySelector('.modal-add-task__field--title')
let modalDate = document.querySelector('.modal-add-task__field--date')
let modalUser = document.querySelector('.modal-add-task__field--user-list')
let modalComment = document.querySelector('.modal-add-task__field--comment')
let buttonOk = document.querySelector('.modal-add-task__button--ok')

export function addTask() {
  buttonOk.addEventListener('click', () => {
    let taskTitle = modalTitle.value
    let taskUser = modalUser.options[modalUser.selectedIndex].value
    let taskDate = modalDate.value
    let taskComment = {name: taskUser, comment: modalComment.value}

    // проверка на заполнение обязательных полей
    if (taskTitle && taskUser && taskDate) {
      let task = new Task(taskTitle, taskUser, taskDate, taskComment)
      saveTask(task)
      closeModalAddTask()
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
      // проверка Date
      if (!taskDate) {
        modalDate.style.background = '#FFDCE0'
        setTimeout(() => modalDate.style.background = '#FFFFFF', 1000)
      }
    }
  })
}

// сохранить данные в localStorage
function saveTask(task) {
  // проверяем наличие 'todo' в localStorage
  if (localStorage.getItem('todo')) {
    let todoArray = JSON.parse(localStorage.getItem('todo'))  // если есть, сохраняем себе
    todoArray.push(task)                                      // добавялем новую задачу
    localStorage.setItem('todo', JSON.stringify(todoArray))   // сохраняем обратно
  } else {
    localStorage.setItem('todo', JSON.stringify([task]))      // иначе просто сохраняем 
  }
}