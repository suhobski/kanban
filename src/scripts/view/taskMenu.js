// Открыть/закрыть меню
export function viewMenu() {
  let taskNodes = document.querySelectorAll('.task')
  
  taskNodes.forEach(task => {
    
    task.addEventListener('click', (event) => {
      let menu = task.querySelector('.menu')
      let menuList = task.querySelector('.menu__list')
      let menuButton = task.querySelector('.menu__button')

      // открыть меню, если нажали на кнопку меню
      if (event.target == menuButton || event.target === menu) {
        menuList.classList.toggle("menu__display")
      } else { // закрыть меню, если нажали не на кнопку меню
        menuList.classList.remove("menu__display")
      }
    })

    // закрыть меню если мышь уходит с task
    task.addEventListener('mouseleave', (event) => {
      let menuList = task.querySelector('.menu__list')
      
      if (event.target == task) {
        menuList.classList.remove("menu__display")
      }
    })
  })
}