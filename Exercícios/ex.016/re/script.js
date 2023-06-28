let calc = document.getElementById('calc')
calc.addEventListener('click', calcular)

function calcular() {
    let res = document.getElementById('res')
    let txtIni = document.getElementById('early')
    let txtFim = document.getElementById('late')
    let txtPas = document.getElementById('pass')

    if (txtIni.value.length == 0 || txtFim.value.length == 0 || txtPas.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var nIni = Number(txtIni.value)
        var nFim = Number(txtFim.value)
        var nPas = Number(txtPas.value)

        if (nIni > 100 || nIni < -100 || nFim > 100 || nFim < -100) {
            alert('Valores inválidos! O valor deve estar entre -100 e 100.')
            return;
        }

        // passo
        if (nPas <= 0) {
            alert('O passo deve ser maior do que zero! Considerando passo = 1.')
            nPas = 1
        } else if (nPas > Math.abs(nIni - nFim)) {
            alert('O passo não pode ser maior do que a diferença entre os valores iniciais e finais!')
        }

        if (nIni < nFim) { // contagem crescente
            for (let c = nIni; c <= nFim; c += nPas) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (nIni > nFim) { // contagem decrescente
            for (let c = nIni; c >= nFim; c -= nPas) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}