class Input {

    constructor (id) {
        this.id = id
    }

    /**
     * La methode handle permet de créer le(s) element(s) constituant notre classe
     * et les injecter dans le container qu'il reçoit en paramètre
     *
     * @param container
     */
    handle(container) {
        this.elm = $('<input>')
        this.elm.attr('id', this.id)
        $(container).append(this.elm)
    }

    /**
     * Retourne la valeur de l'input
     *
     * @returns {string}
     */
    val() {
        return this.elm.val()
    }

    /**
     * Met le focus sur l'input
     */
    focus() {
        this.elm.focus()
    }


    /**
     * Vide l'input
     */
    clear() {
        this.elm.val('')
    }

}
