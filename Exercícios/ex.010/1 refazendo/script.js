let ver = document.getElementById('verify')
let res = document.getElementById('res')

ver.addEventListener('click', verify)

function verify() {
    let tvel = document.getElementById('txtvel')
    let vel = Number(tvel.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h</p>`

    if (vel < 0) {
        alert('[ERRO] Valor inválido!')
    }

    if (vel > 60) {
        res.innerHTML += '<p>Você está sendo <strong>MULTADO</strong> por excesso de velocidade! (60km/h)'
    }

    res.innerHTML += 'Dirija sempre com o cinto de segurança!'

    tvel.value = ''
    tvel.focus()
}

