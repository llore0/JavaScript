document.addEventListener("DOMContentLoaded", carregar)

function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('foto');
    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas!`;

    if (hora >= 6 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#fff8a4'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#7b9e86'
    } else {
        img.src = 'img/noite-2.png'
        document.body.style.background = '#00213b'
    }
}
