function calc() {
    var early = document.getElementById('numEarly')
    var late = document.getElementById('numLate')
    var pass = document.getElementById('numPass')
    var res = document.getElementById('res')

    if (early.value.length == 0 || late.value.length == 0 || pass.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var e = Number(early.value)
        var l = Number(late.value)
        var p = Number(pass.value)

        if (p <= 0) {
            alert('[ERRO] Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (e < l) { // contagem crescente
            for (var c = e; c <= l; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { // contagem regressiva
            for(var c = e; c >= l; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
