let cardListTodo = document.querySelector('.card__list--todo')

export function displayTask(task) {
  const {id, title, userName, date, comment} = task
  let commentHTML = ''
  
  if (comment) {
    commentHTML = `
    <p class="task__comment">${comment}<button class="task__button--full-comment">...more</button></p>
    `
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

  cardListTodo.insertAdjacentHTML('beforeend', taskHTML)
}