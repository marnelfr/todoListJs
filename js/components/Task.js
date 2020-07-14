//Déclaration de la classe Task
class Task {

    //Le constructeur. C'est la première methode appelé à l'instantiation de la classe
    constructor (task) {
        this.task = task
    }

    /**
     * La methode handle
     * Dans javascript, une methode est declarée juste par son nom suivi de "()"
     * contenant la liste des paramètes de la fonction
     *
     * @param list
     */
    handle(list) {
        //On crée l'element li
        this.li = $('<li>')

        //On definit comme le text du li, la tache qu'on avait recuperer dans le constructeur
        this.li.text(this.task)

        //On ajout la tâche à la list qu'on a reçu en paramètre
        list.add(this.li)
      this.edit()
    }


    //Methode mise en place pour l'edition des tâches qu'on a plus utilisé
    edit() {
        let $this = this
        this.li.click(function () {
          let inp = $('<input>')
          let val = $this.li.text()
          $this.li.html(inp)
          inp.val(val)
        })

    }


    //Methode mise en place pour déplacer une tache d'une liste à une autre.
    move(list) {
        let li = this.li.clone(true)
        this.li.remove()

        list.add(li)
        this.li = li
    }

    //Methode par laquelle on écoute l'evernement click sur la tâche. Elle fait appel à le methode move
    click(newList) {
        let $this = this //On stocke l'instance de la classe dans $this pour pouvoir y avoir accès dans un autre scope
        this.li.dblclick(function (e) {
            //Ici, this ne fait plus reference à la classe mais à la fonction

            //On annulle tout action qui était ratachée à l'évernement click de la tâche
            e.preventDefault()

            //On fait appel à la methode move pour le deplacement effective de la tache vers la nouvelle liste
            $this.move(newList)
        })
    }

}
