class Todo {

  constructor(id)  {
    this.id = id
    this.elms = document.createElement('div')
    this.todo = document.createElement('div')
    this.done = document.createElement('div')
  }

  addElements () {
    this.inp = new Input('inp')
    this.btn = new Button('btn', 'Add Task')

    this.inp.handle(this.elms)
    this.inp.focus()

    this.btn.handle(this.elms)

    this.btn.onClick(() => {
      let line = document.createElement('div')
      let task = document.createElement('span')
      let done = document.createElement('span')

      task.innerText = this.inp.val()
      done.innerText = 'x'
      done.style.color = 'red'
      done.style.marginLeft = '2em'
      done.setAttribute('align', 'right')

      line.append(task)
      line.append(done)
      line.style.marginLeft = '1em'
      this.todo.append(line)

      done.addEventListener('click', (e) => {
        e.preventDefault()
        done.remove()
        let lineDone = line.cloneNode(true)
        line.remove()
        this.done.append(lineDone)
      })
      this.inp.val('')
      this.inp.focus()
    })
  }

  handle() {
    let app = document.querySelector('#'+this.id)
    app.append(this.elms)

    app.append(this.todo)
    this.todo.style.margin = '1em'
    this.todo.innerHTML = '<h3>To do:</h3>'

    app.append(this.done)
    this.done.style.margin = '1em'
    this.done.innerHTML = '<h3>Done:</h3>'

    this.addElements()
  }

}