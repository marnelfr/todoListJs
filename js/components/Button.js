class Button {

  /**
     * Le constructeur
     * @param id
     * @param label
     */
    constructor (id, label) {
        this.id = id
        this.label = label
    }


    /**
     * La methode handle permet de créer le(s) element(s) constituant notre classe
     * et les injecter dans le container qu'il reçoit en paramètre
     *
     * @param container
     */
    handle (container) {
        this.btn = $('<button>')
        this.btn.text(this.label)
        this.btn.css('marginLeft', '1em')
        this.btn.attr('id', this.id)
        $(container).append(this.btn)
    }

    /**
     * Bind le callback recu en argument au click du bouton
     *
     * @param callback
     */
    click(callback) {
        this.btn.click(callback)
    }

}