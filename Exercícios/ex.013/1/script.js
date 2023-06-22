function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#fff8a4'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#7b9e86'
    } else {
        img.src = 'img/noite-2.png'
        document.body.style.background = '#00213b'
    }
}