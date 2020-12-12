import { getUsersData } from '../model/serverData.js'

// Переменные
let modalAddTask = document.querySelector('.modal-add-task')
let buttonAddTask = document.querySelector('.button__add-task')
let buttonOk = document.querySelector('.modal-add-task__button--ok')
let buttonCancel = document.querySelector('.modal-add-task__button--cancel')

// открыть модальное окно при нажатии кнопки "Add task"
export function displayModalAddTask() {
  buttonAddTask.addEventListener('click', () => {
    modalAddTask.style.visibility = 'visible'
    modalAddTask.style.opacity = '1'
  })
}

// закрыть модальное окно
export function closeModalAddTask() {

  // при нажатии кнопки "Cancel"
  modalAddTask.addEventListener('click', event => {
    if (event.target == buttonCancel || event.target == modalAddTask) {
      modalAddTask.style.visibility = 'hidden'
      modalAddTask.style.opacity = '0'
    }
  })

  // при нажатии Escape
  addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modalAddTask.style.visibility = 'hidden'
      modalAddTask.style.opacity = '0'
    }
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