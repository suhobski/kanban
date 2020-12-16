let commentButtons = document.querySelectorAll('.task__button--full-comment')

// добавление кнопки "...more", если высота больше 37px
export function hideLongComment() {
  commentButtons.forEach(commentButton => {
    let comment = commentButton.parentNode
    if (comment.clientHeight > 36) {
      comment.style.height = '36px'
      commentButton.style.display = 'block'
    }
  })
}

// раскрытие комментария при нажатии на кнопку "...more". Вешаем событие на все кнопки
export function displayFullComment() {
  commentButtons.forEach(commentButton => {
    commentButton.addEventListener('click', (event) => {
      let comment = event.target.parentNode
      comment.style.height = 'auto'
      event.target.style.display = 'none' // убираем три точки (...), когда комментарий раскрыт
    })
  })
}