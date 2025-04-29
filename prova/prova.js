class Produto{
    nome;
    marca;
    preco;

    adicionar(nome,marca,preco){
        this.nome = nome
        this.marca = marca
        this.preco = preco
       
        console.log("O produto foi adicionado ao estoque")
        console.log("nome: " + this.nome)
        console.log("marca: " + this.marca)
        console.log("preco: " + this.preco)
       
    }
}

var produto1= new Produto()
var produto2= new Produto()

produto1.adicionar("sabonete", "Dove", 4)
produto2.adicionar("hidratante","Nivea" ,13)

