import { displayTask } from './taskView.js'

const cardListTodo = document.querySelector('.card__list--todo')
const cardListInProgress = document.querySelector('.card__list--in-progress')
const cardListDone = document.querySelector('.card__list--done')

// загружаем из localStorage задачи после перезагрузки=======================================================
export function loadTasks() {
  
  // в закладку "To do"
  const todoArray = JSON.parse(localStorage.getItem('todo'))
  if (todoArray) todoArray.forEach(task => displayTask(cardListTodo, task))

  // в закладку "In Progress"
  const inProgressArray = JSON.parse(localStorage.getItem('inProgress'))
  if (inProgressArray) inProgressArray.forEach(task => displayTask(cardListInProgress, task))
  
  // в закладку "Done"
  const doneArray = JSON.parse(localStorage.getItem('done'))
  if (doneArray) doneArray.forEach(task => displayTask(cardListDone, task))

}

const counterTodo = document.querySelector('.card__counter--todo')
const counterInProgress = document.querySelector('.card__counter--in-ppogress')
const counterDone = document.querySelector('.card__counter--done')

// изменяем счетчик количества задач в каждом списке
export function taskCounter() {
  counterTodo.innerText = cardListTodo.childElementCount
  counterInProgress.innerText = cardListInProgress.childElementCount
  counterDone.innerText = cardListDone.childElementCount
}