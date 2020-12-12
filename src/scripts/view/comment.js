// раскрытие комментария при нажатии на кнопку "...more". Вешаем событие на все кнопки
export function displayFullComment() {
  let taskButtons = document.querySelectorAll('.task__button--full-comment')

  taskButtons.forEach(taskButton => {
    taskButton.addEventListener('click', (event) => {
      let comment = event.target.parentNode
      comment.style.height = 'auto'
      event.target.style.display = 'none' // убираем три точки (...), когда комментарий раскрыт
    })
  })
}