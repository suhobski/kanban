import { getUsersData } from '../model/serverData.js'

// Переменные
let modalAddTask = document.querySelector('.modal-add-task')
let buttonAddTask = document.querySelector('.button__add-task')
let buttonCancel = document.querySelector('.modal-add-task__button--cancel')

// открыть модальное окно при нажатии кнопки "Add task"
export function displayModalAddTask() {
  buttonAddTask.addEventListener('click', () => {
    modalAddTask.classList.add('active')
  })
}

// закрыть модальное окно при нажатии кнопки "Cancel"
export function closeModalAddTask() {
  buttonCancel.addEventListener('click', () => {
    modalAddTask.classList.remove('active')
  })
}

// добавление имен в выпадающий список
export function createListOfUsers() {
  let selectUser = document.querySelector('.modal-add-task__field--user-list')

  getUsersData().then(list => list.forEach(user => {
    selectUser.insertAdjacentHTML('beforeend', 
      `<option class="modal-add-task__field--user">${user.name}</option>`)
  }))
}