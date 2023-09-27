const numero = document.getElementById("numero")
const btnSwitch = document.querySelector('#switch')

let resultado = false

btnSwitch.addEventListener('click', () => {
    function Processando() {
        numero.innerHTML = "Processando..."
        numero.classList.remove("erro")
        numero.classList.remove("ok")
        numero.classList.add("processando")
    } Processando()
    promessa()
        .then( (retorno) => { // Se deu certo cai aqui
            numero.innerHTML = retorno
            numero.classList.remove("erro")
            numero.classList.remove("processando")
            numero.classList.add("ok")
        }) 
        .catch( (retorno) => { // Se deu errado cai aqui
            numero.innerHTML = retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")        
            numero.classList.remove("processando")
        })
})

const promessa = () => { // aero function
    resultado = !resultado
    let promise = new Promise( (resolve, reject) => {
        let tempo = 1500
        setTimeout( () => {
            if (resultado) {
                resolve("Deu tudo certo!")
            } else {
                reject("Deu tudo errado!")
            }
        }, tempo)
    })
    return promise
}

function Esperando() {
    numero.innerHTML = "Esperando..."
    numero.classList.remove("erro")
    numero.classList.remove("ok")
    numero.classList.add("processando")
} Esperando()