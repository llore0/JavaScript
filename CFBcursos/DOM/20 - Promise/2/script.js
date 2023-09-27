const numero = document.getElementById("numero")
const btnSwitch = document.querySelector('#btnBooleano')

let resultado = false

btnSwitch.addEventListener('click', () => {
    resultado = !resultado
    let promise = new Promise( (resolve, reject) => {
        let tempo = 1500
        setTimeout( () => {
            if (!resultado) {
                resolve("Deu tudo certo!")
            } else {
                reject("Deu tudo errado!")
            }
        }, tempo)
    })
    
    promise.then( (retorno) => { // Se deu certo cai aqui
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.remove("processando")
        numero.classList.add("ok")
    }) 
    promise.catch( (retorno) => { // Se deu errado cai aqui
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")        
        numero.classList.remove("processando")
    })

    function Processando() {
        numero.innerHTML = "Processando..."
        numero.classList.remove("erro")
        numero.classList.remove("ok")
        numero.classList.add("processando")
    } Processando()
    
})
