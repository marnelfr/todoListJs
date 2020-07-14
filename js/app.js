(function () {
    let app = $('#app')

    let todoList = new List('todoList', 'Tâche à faire')
    let doneList = new List('doneList', 'Tâche terminer')

    let todo = new Todo(todoList, doneList)
    todo.handle(app)
})()