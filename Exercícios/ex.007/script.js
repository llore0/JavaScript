var soma = document.getElementById('soma')
soma.addEventListener('click', somar)

function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById("txtn2")
    var result = document.getElementById('result')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    result.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`
}