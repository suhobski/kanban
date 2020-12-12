import {displayFullComment, displayMenu} from "./view.js"
import {displayModalAddTask} from './cardButtons.js'
import {closeModalAddTask} from './modalAddTask.js'

import { createListOfUsers } from './model/listUsers.js'


//view
displayFullComment()
displayMenu()
displayModalAddTask()

closeModalAddTask()

// model
createListOfUsers()