// ! Переменные списков и кнопок переключения слайдера ======================================================
const cardsList = document.querySelectorAll('.card')
const slideLeft = document.querySelector('.slider__slide-left')
const slideRight = document.querySelector('.slider__slide-right')

// Действия кнопок слайдера =================================================================================
export function slider() {
  let translate = 0
  const step = 100

  slideLeft.addEventListener('click', () => {
    translate += step
    if (translate > 0) translate = -200
    cardsList.forEach(card => card.style.transform = `translateX(${translate}vw)`)
  })
  
  slideRight.addEventListener('click', () => {
    translate -= step
    if (translate < -200) translate = 0
    cardsList.forEach(card => card.style.transform = `translateX(${translate}vw)`)
  })
}