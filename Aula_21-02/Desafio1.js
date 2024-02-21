const leia = require("prompt-sync")()

console.log("Bem vindo(a) a lojinha, hoje os livros estão em promoção de R$22,00 por R$15,00 se você comprar 7 unidades ou  mais.")

function pegaDados() {
    quantLivros = leia ("Quantos livros você quer comprar? ")
    return quantLivros
}


function calcularPreco(quantLivros) {
    if (quantLivros >= 7) {
        valor = quantLivros*15
        return valor
    }
    else {
        valor = quantLivros*22
        return valor
    }
}

function main() {
    pegaDados()
    calcularPreco(quantLivros)
    console.log("O valor da sua compra é de R$"+valor+",00")
}

main()

//teste

