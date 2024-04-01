const btn1 = document.querySelector('button')
const texto = document.querySelector('input')
const listaFilmes = document.querySelector('#listaFilmes')


btn1.addEventListener('click',()=>{
    const textoFinal = document.querySelector('#filmeInput').value
    const itemLista = document.createElement('li')
    listaFilmes.append(itemLista)
    itemLista.innerHTML = `<strong>${textoFinal}‎ </strong>`
    itemLista.style.backgroundColor = 'red'
    itemLista.classList.add('ativo')
    itemLista.classList.toggle('ativo')
})
