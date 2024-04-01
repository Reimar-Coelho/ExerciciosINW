//array

const nomes = ["Caio", 15, "FIAP", {}]

// const nome = console.log(nomes[0])
// const idade = console.log(nomes[1])
// const escola = console.log(nomes[2])
// const objeto = console.log(nomes[3])

//desestruturação

// const [nome,idade,escola,objeto] = nomes

//rest

// const [,nome, ... resto] = nomes
// console.log(resto)

//substituir valor array

// nomes[1] = 'Vitor'

//adicionar valor array

// nomes.push('Daniel')

//remover valor array

// nomes.pop()

// console.log(nomes)

//------------------------------------------------

// const times = ['Flamengo', 'Serie B', 'Trikas', 'Palmares']

//mostrar todos os elementos

// for(let i = 0; i < times.length; i++) {
//     console.log(times[i])
// }

// times.forEach(function(meuTime){
//     console.log(meuTime)
// })

// times.forEach(meuTime=>{
//     console.log(meuTime)
// })

//gerar um novo array que pode ser modificado

// times.map(elements=>{
//     console.log(`Meu time é ${elements}`)
// })

//filtrar resultados

// times.filter(elements=>{
//     console.log(elements === 'Flamengo')
// })

//-------------------------------------------------

const times = [{
    nome: 'Flamengo',
    jogadores: 40,
    serie: A
},
{
    nome: 'Santos',
    jogadores: 37,
    serie: B
}]

console.log(times)