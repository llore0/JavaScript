const circle = document.querySelector("#circle")
const nameSB = document.querySelector("#sb_name")
const learnMore = document.querySelector(".link")
const logo = document.querySelector(".logo")
const coffeeImgDiv = document.querySelector(".coffee_img")
const coffeBotoes = document.querySelectorAll(".footer_img")
const cafes = document.querySelectorAll(".cafe")

coffeBotoes.forEach( (botao, indice ) => {
    botao.addEventListener("click", () => {
        // Verifica se já tem algum botão selecionado
        desselecionarBotao()
        desselecionarCafe()
        
        // add a classe selecionado ao botao
        botao.classList.add("selecionado")
        cafes[indice].classList.add("selecionado")

        if (indice === 0) {
            circle.style.background = '#106e33'           
            nameSB.style.color = '#106e33'      
            learnMore.classList.add('botaoverde')       
            learnMore.classList.remove('botaorosa')       
            learnMore.classList.remove('botaosalmao')       
        }

        if (indice === 1) {
            circle.style.background = '#df2b9c'
            nameSB.style.color = '#df2b9c'
            learnMore.classList.add('botaorosa') 
            learnMore.classList.remove('botaoverde')       
            learnMore.classList.remove('botaosalmao') 
        }

        if (indice === 2) {
            circle.style.background = '#f2a4af'
            nameSB.style.color = '#f2a4af' 
            learnMore.classList.add('botaosalmao') 
            learnMore.classList.remove('botaorosa')       
            learnMore.classList.remove('botaoverde') 
        }
    })
})

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".footer_img.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}

function desselecionarCafe() {
    const cafeSelecionado = document.querySelector(".cafe.selecionado")
    cafeSelecionado.classList.remove("selecionado")
}