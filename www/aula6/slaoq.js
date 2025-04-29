class Carro{
    marca;
    modelo;
    ano;

    ligar(){
        console.log("O carro está ligado.")
    }
}

// Criando objeto (instância)

var carro1 = new Carro()   
var carro2 = new Carro()
var carro3 = new Carro()

carro1.marca = "Chevrolet"
carro2.marca =  "fiat"
carro3.marca =  "fiat"

console.log(carro1.marca)
console.log(carro2.marca)   

carro1.modelo = "conversivel"
carro2.modelo =  "caminhonete"
carro3.modelo ="luxo"

carro1.ano = "1945"
carro2.ano =  "1999"
carro3.ano ="2016"

console.log(carro1.marca, carro1.modelo, carro1.ano)
console.log(carro2.marca, carro2.modelo, carro2.ano) 
console.log(carro3.marca, carro3.modelo, carro3.ano) 





