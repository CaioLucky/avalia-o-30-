class Livro{
    titulo;
    autor;
    falar(titulo,autor) {
        this.titulo= titulo
        this.autor= autor
        console.log("Titulo:" +  this.titulo)
        console.log("Autor:" +  this.autor)
    }
}


// Criando objeto (instância)

var livro1 = new Livro()   
var livro2 = new Livro()
var livro3 = new Livro()

livro1.titulo = "Sla"
livro2.titulo =  "drama"
livro3.titulo =  "romance"
  

livro1.autor = "carlos"
livro2.autor =  "camilo"
livro3.autor ="luis"



console.log(livro1.titulo, livro1.autor)
console.log(livro2.titulo, livro2.autor)
console.log(livro3.titulo, livro3.autor)
