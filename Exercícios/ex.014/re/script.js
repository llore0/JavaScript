let ver = document.getElementById('veri')
ver.addEventListener('click', verificar)

function verificar() {
    let txtAno = document.getElementById('txtano')
    let data = new Date()
    let ano = data.getFullYear()
    let res = document.getElementById('res')
    
    if (txtAno.value > ano || txtAno.value <= 0 || !txtAno) {
        alert('[ERROR] Ano inválido!')
        txtAno.value = ''
        txtAno.focus()
    } else {
        let idade = ano - Number(txtAno.value)
        let rSex = document.getElementsByName('radsex')
        let genero = ''

        if (rSex[0].checked) {
            genero = 'homem'
        } else if (rSex[1].checked) {
            genero = 'mulher'
        } else if (rSex[2].checked) {
            genero = 'LGBTQIA+'
        }

        if (genero == 'homem') {
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos!`
        } else if (genero == 'mulher') {
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos!`
        } else if (genero = 'LGBTQIA+') {
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos!`
        }
    }
}