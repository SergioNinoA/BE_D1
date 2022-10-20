class User {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [libros]
        this.mascotas = [mascotas]      
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }    

    addMascota(animal){
        this.mascotas.push(animal)
    }

    countMascotas(){
        return this.mascotas.length        
    }

    addBook(nombre, autor){
        this.libros.push({name: nombre, author: autor})
    }

    getBookNames(){
        for(const listaLibros of this.libros){
            return listaLibros.name
        }
    }
}

const newMascota = {

}

const Usuario = new User("Juan", "Perez",)

Usuario.getFullName()
Usuario.addMascota("perro")
Usuario.addMascota("gato")
Usuario.countMascotas()
Usuario.addBook("El señor de los anillos","J. R. R. Tolkien")
Usuario.addBook("Cien años de soledad", "Gabriel García Márquez")
Usuario.getBookNames()
