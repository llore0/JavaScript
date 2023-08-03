// Método Every -- Vai procurar por equivalencia no arrey. Se tds os elementos do arrey equivalerem a regra especificada, irá retorna true. Se não, falso

const p_array = document.querySelector('#array')
const btnVerficar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [21, 25, 17, 20, 19, 18, 22]
p_array.innerHTML = `[${elementos_array}]`

btnVerficar.addEventListener('click', (evt)=>{
    const ret = elementos_array.every((e, i)=>{
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