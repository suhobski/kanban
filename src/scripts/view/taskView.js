import { deleteTaskFromLocalStorage } from '../controller/localStorage.js'

const cardListTodo = document.querySelector('.card__list--todo')
const cardListInProgress = document.querySelector('.card__list--in-progress')
const cardListDone = document.querySelector('.card__list--done')


// добавить задачу  =======================================================================================
export function displayTask(where, task) {
  const {id, title, userName, date, comment} = task
  const commentHTML = ''
  
  if (comment) {
    commentHTML = `<p class="task__comment">${comment}<button class="task__button--full-comment">...more</button></p>`
  }

  const taskHTML = `
                    <li class="task" id="${id}">
                      <div class="task__header">
                        <span class="task__owner">${userName}</span>
                      </div>
                      <h3 class="task__title">${title}</h3>
                      ${commentHTML}
                      <div class="task__footer">
                        <span class="task__date">${date}</span>
                        <button class="task__button task__button--delete"></button>
                        <button class="task__button task__button--remove"></button>
                      </div>
                    </li>
                    `

  where.insertAdjacentHTML('beforeend', taskHTML)
}

// удаляем задачу =======================================================================================
export function deleteTask() {

  // из списка "To do"
  const cardListTodo = document.querySelector('.card__list--todo')
  
  cardListTodo.addEventListener('click', event => {
  if (event.target.classList.contains('task__button--delete')) {
    const task = event.target.closest('.task')
    deleteTaskFromLocalStorage('todo', task.id)
    task.outerHTML = ''
    }
  })

  // из списка "In progress"
  const listInProgress = document.querySelector('.card__list--in-progress')

  listInProgress.addEventListener('click', event => {
  if (event.target.classList.contains('task__button--delete')) {
    const task = event.target.closest('.task')
    task.outerHTML = ''
    }
  })

  // из списка "Done"
  const listDone = document.querySelector('.card__list--done')

  listDone.addEventListener('click', event => {
  if (event.target.classList.contains('task__button--delete')) {
    const task = event.target.closest('.task')
    task.outerHTML = ''
    }
  })
}