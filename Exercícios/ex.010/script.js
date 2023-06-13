var c = document.getElementById('ver')
c.addEventListener('click', calcular)
function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MUTADO</strong> por excesso de velocidade!`
    }
    res.innerHTML +=  `<p>Dirija sempre com cinto de segurança!`
}
