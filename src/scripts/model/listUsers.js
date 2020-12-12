// получание всех данных с сервера
const getUserData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
}

// добавление имен в выпадающий список
export function createListOfUsers () {
  let selectUser = document.querySelector('.modal-add-task__field--user-list')

  getUserData().then(list => list.forEach(user => {
    selectUser.insertAdjacentHTML('beforeend', 
      `<option class="modal-add-task__field--user">${user.name}</option>`)
  }))
}