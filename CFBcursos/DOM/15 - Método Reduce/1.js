// Método Reduce -- Ele permite fazer uma redução do arrey, irei programa como será feita a redução

const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1, 2, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = `[${elementos_array}]`

btnReduzir.addEventListener('click', (evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((retorno, atual, pos)=>{
        ant.push(retorno)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + retorno // soma: 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15.
    })
    resultado.innerHTML += `<br/> Anterior: ${ant} <br/> Atual: ${atu} <br/> Dobro: ${dobro}`
})