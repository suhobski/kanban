// открыть окно добавления задачи
let buttonAddTask = document.querySelector('.button__add-task')
let modalAddTask = document.querySelector('.modal-add-task')

export function displayModalAddTask() {
  buttonAddTask.addEventListener('click', () => {
    modalAddTask.classList.add('active')
  })
}
