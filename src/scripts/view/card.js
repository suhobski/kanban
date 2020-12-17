import { displayTask } from './taskView.js'

const cardListTodo = document.querySelector('.card__list--todo')
const cardListInProgress = document.querySelector('.card__list--in-progress')
const cardListDone = document.querySelector('.card__list--done')

// загружаем из localStorage задачи после перезагрузки=======================================================
export function loadTasks() {
  
  // в закладку "To do"
  const todoArray = JSON.parse(localStorage.getItem('todo'))
  todoArray.forEach(task => displayTask(cardListTodo, task))

  // в закладку "In Progress"
  // const inProgressArray = JSON.parse(localStorage.getItem('inProgress'))
  // inProgressArray.forEach(task => displayTask(cardListInProgress, task))
  
  // в закладку "Done"
  // const todoArray = JSON.parse(localStorage.getItem('done'))
  // todoArray.forEach(task => displayTask(cardListDone, task))

}