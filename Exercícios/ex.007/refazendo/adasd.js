let somar = document.getElementById('calc')
let tn0 = document.getElementById('txtnum0')
let tn1 = document.getElementById('txtnum1')
let res = document.getElementById('res')

somar.addEventListener('click', calcular)

function calcular() {
    let n0 = Number(tn0.value)
    let n1 = Number(tn1.value)
    let soma = n0 + n1

    if (n0 < 0|| n1 < 0) {
        alert('[ERRO] Número inválido! Considerando número como 0')
    } else {res.innerHTML = `<p>Seu resultado foi: <strong>${soma}</strong> </p>`}
}