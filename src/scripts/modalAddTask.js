// действия с модальным окном "Add task"
let modalAddTask = document.querySelector('.modal-add-task')
let buttonOk = document.querySelector('.modal-add-task__button--ok')
let buttonCancel = document.querySelector('.modal-add-task__button--cancel')

// кнопка "CANCEL"
export function closeModalAddTask() {
  buttonCancel.addEventListener('click', () => {
    modalAddTask.classList.remove('active')
  })
}