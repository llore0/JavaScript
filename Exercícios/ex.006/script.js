var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou! :D'
    a.style.background = 'green'
}

function entrar() {
    a.innerText = 'Entrou :)'
    a.style.background = 'yellow'
    a.style.color = 'black'
}

function sair() {
    a.innerText = 'Saiu >:('
    a.style.background = 'red'
}