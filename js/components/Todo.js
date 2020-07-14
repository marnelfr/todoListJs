class Todo {

    /**
     * Le constructeur
     *
     * @param todoList
     * @param doneList
     */
    constructor(todoList, doneList) {
        this.todoList = todoList
        this.doneList = doneList
    }


    /**
     * La methode handle permet de créer le(s) element(s) constituant notre classe
     * et les injecter dans le container qu'il reçoit en paramètre
     *
     * @param container
     */
    handle(container) {
        const $this = this
        $this.elements = $('<div>')
        let input = new Input('inp')
        let btn = new Button('btn', 'Add Task')

        input.handle($this.elements)
        btn.handle($this.elements)

        container.append($this.elements)
        input.focus()

        $this.todoList.handle(container)
        $this.doneList.handle(container)

        btn.click(function (e) {
            e.preventDefault()
            let val = input.val()
            if (val !== '') {
              const task = new Task(val)
              input.clear()
              task.handle($this.todoList)
              input.focus()
              task.click($this.doneList)
            } else {
                alert('Veuillez renseigner une tâche')
            }
        })



    }

}