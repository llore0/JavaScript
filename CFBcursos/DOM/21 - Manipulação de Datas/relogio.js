const relogioH = document.querySelector("#tempoHoras")


const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? `0${hora}` : `${hora}`

    let minuto = data.getMinutes()
    minuto = minuto < 10 ? `0${minuto}` : `${minuto}`

    let segundo = data.getSeconds()
    segundo = segundo < 10 ? `0${segundo}` : `${segundo}`

    const horaCompleta = `${hora}:${minuto}:${segundo}`

    relogioH.innerHTML = horaCompleta
}

const intervalo = setInterval(relogio, 1000);

relogio()