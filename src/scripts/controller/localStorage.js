// сохранить задачу в localStorage===========================================================================
export function saveTask(task) {
  // проверяем наличие 'todo' в localStorage
  if (localStorage.getItem('todo')) {
    const todoArray = JSON.parse(localStorage.getItem('todo'))  // если есть, сохраняем себе
    todoArray.push(task)                                      // добавялем новую задачу
    localStorage.setItem('todo', JSON.stringify(todoArray))   // сохраняем обратно
  } else {
    localStorage.setItem('todo', JSON.stringify([task]))      // иначе просто сохраняем 
  }
}

// удалить задачу из localStorage============================================================================
export function deleteTaskFromLocalStorage(where, id) {
  let todoArray = JSON.parse(localStorage.getItem(where))
  todoArray = todoArray.filter(task => task.id != id)   
  localStorage.setItem(where, JSON.stringify(todoArray))
}