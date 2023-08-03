// Método Some -- vai dar true, qnd pelo menos um dos valores do arrey coincidir com o que eu estiver pesquisando.

const p_array = document.querySelector('#array')
const btnVerficar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [16, 12, 20, 10, 17, 15, 13, 11, 19]
p_array.innerHTML = `[${elementos_array}]`

btnVerficar.addEventListener('click', (evt)=>{
    const ret = elementos_array.some((e, i)=>{
        if (e < 18) {
            resultado.innerHTML = `Arrey não conforme na posição ${i + 1}`
        }
        return e >= 18 
    })
    if (ret) {
        resultado.innerHTML = 'OK'
    }
    console.log(ret)
})