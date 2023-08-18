const caixa = document.querySelector('#caixa')

const carros = ['Polo', 'Golf', 'Mustang']

let ul = `<ul>`
carros.map ((el) => {
    ul += `<li>${el}</li>`
})
ul+`</ul>`

caixa.innerHTML = ul