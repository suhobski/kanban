export class Task {
  static id = 0
  
  constructor(title, userName, date, comment) {
    this.id = Task.id++
    this.title = title
    this.userName = userName
    this.date = date
    this.comments = [comment]
  }

  addComment(comment) {
    this.comments.push(comment)
  }

}