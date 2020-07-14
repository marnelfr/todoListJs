//Déclaration de la classe List
class List {

    //Le constructeur. C'est la première methode appelé à l'instantiation de la classe
    //Il reçoit les paramètres par defaut de la classe
    constructor(id, title) {
        this.id = id
        this.title = title
    }

    //Ici, on construit notre element
    handle(container) {
        //On crée le ol qui va contenir notre list
        this.list = $('<ol>')

        //On crée la div qui va contenir notre ol et le titre de notre liste
        let div = $('<div>')

        //On crée le titre de la liste
        let title = $('<h3>')


        title.text(this.title)
        div.append(title)

        this.list.attr('id', this.id)
        div.append(this.list)

        container.append(div)
    }


    //On ajout une tache à la liste
    add(task) {
        this.list.append(task)
    }


}