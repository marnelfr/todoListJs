class Button {

  constructor(id, text) {
    this.btn = document.createElement('button')
    this.btn.setAttribute('type', 'button')
    this.id = id
    this.text = text
  }

  handle(container) {
    this.btn.setAttribute('id', this.id)
    this.btn.innerText = this.text
    this.btn.style.marginLeft = '1em'

    let span = document.createElement('span')
    span.append(this.btn)
    container.append(span)
    return this.btn
  }

  onClick(callback) {
    this.btn.addEventListener('click', function (e) {
      e.preventDefault()
      callback()
    })
  }

}