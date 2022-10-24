class User {
    constructor(nombre,apellido,libros=[],mascotas=[]){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas    
    }

    getFullName(){
        return `El usuario se llama ${this.nombre} ${this.apellido}`
    }    

    addMascota(animal){
        this.mascotas.push(animal)
    }

    countMascotas(){
        return `${this.nombre} tiene ${this.mascotas.length} mascotas`  
    }

    addBook(nombre, autor){
        let book ={name: nombre, author: autor}
        return this.libros.push(book)
    }

    getBookNames(){
        let bookList = this.libros.map((libro) => {
            return ` ${libro.name}`
        })
        return `Los libros de ${this.nombre} son:${bookList}`
    }
}

const Usuario = new User("Juan", "Perez",)

Usuario.addMascota("perro")
Usuario.addMascota("gato")
Usuario.addBook("El señor de los anillos","J. R. R. Tolkien")
Usuario.addBook("Cien años de soledad", "Gabriel García Márquez")

console.log(Usuario.getFullName())
console.log(Usuario.countMascotas())
console.log(Usuario.getBookNames())