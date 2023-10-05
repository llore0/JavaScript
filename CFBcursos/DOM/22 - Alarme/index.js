const div_data = document.querySelector("#div_data")
const div_relogio = document.querySelector("#div_relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("#parar")
const tmp_alarme = document.querySelector("#tmp_alarme")
const timer = document.querySelector("#timer")
const hora_alarme = document.querySelector("#hora_alarme")

let som_alarme = new Audio("alarme.mp3")
// o alarme vai ficar tocando infinitamente
som_alarme.loop = -1

let ts_atual = null // serve pra qnd ativar o alarme, ele vai pegar o tempo atual em Timestamp
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

tmp_alarme.addEventListener("click", (evt) => {
    if (tmp_alarme.value = Number) {
      tmp_alarme.value = "";
    }
});   

btn_ativar.addEventListener("click", (evt) => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value * 1000) // multiplica por mil, pq estamos trabalhando com valores em milisec
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme) // Retorna a data fultura. A hora que a pessoa quiser que o alarme toque
    hora_alarme.innerHTML = `Hora do alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
    hora_alarme.classList.add("hr_alarme")
})

btn_parar.addEventListener("click", (evt) => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = 'Hora do Alarme:'
    tmp_alarme.value = 0
    div_relogio.classList.remove('alarme')
    som_alarme.pause()
    som_alarme.currentTime = 0
    hora_alarme.classList.remove("hr_alarme")
})


// Atribuindo a função Date à data
const data = new Date()

// Atribuindo o dia atual à variável dia
let dia = data.getDay()
dia = dia < 10 ? "0" + dia:dia

// Atribuindo o dia atual à variável mês
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes:mes

const data_r = `${dia}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_r

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora:hora

    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto:minuto

    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0" + segundo:segundo

    const hora_completa = `${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML = hora_completa

    if (alarme_ativado && !alarme_tocando) {
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true
            som_alarme.play()
            div_relogio.classList.add('alarme')
        }
    }
}

// atualiza o código a cada 1seg
const intervalo = setInterval(relogio, 1000)
relogio()