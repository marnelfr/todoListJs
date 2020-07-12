class Input {

  constructor (className) {
    this.inp = document.createElement('input')
    this.class = className
  }

  handle(container) {
    this.inp.classList.add(this.class)
    let span = document.createElement('span')
    span.append(this.inp)
    container.append(span)
    return this.inp
  }

  val(val) {
    if(!!val) {
      this.inp.value = val
      return
    }
    return this.inp.value
  }

  focus() {
    this.inp.select()
  }


}