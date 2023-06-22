function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = 'homem'
        } else if (fsex[1].checked) {
            genero = 'mulher'
        } else if (fsex[2].checked) {
            genero = 'LGBTQIA+'
        }

        res.style.textAling = 'center'

        if (genero == 'homem') {
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        } else if (genero == 'mulher') {
            res.innerHTML = `Detectamos uma ${genero} com ${idade} anos`
        } else if (genero == 'LGBTQIA+') {
            res.innerHTML = `Detectamos uma pessoa ${genero} com ${idade} anos`
        }
    }
}