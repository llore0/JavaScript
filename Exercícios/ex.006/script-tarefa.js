let area = document.querySelector('div#area')

area.addEventListener('mouseenter', entrar)
area.addEventListener('click', clicar)
area.addEventListener('mouseout', sair)

function entrar() {
    area.innerHTML = '<p>Clica em mim...</p>'
    area.innerHTML += '<p>(づ￣ 3￣)づ</p>'
    area.innerHTML += '<p>*corada*</p>'
    area.style.background = 'yellow'
}

function clicar() {
    area.innerHTML = '<p>Ahwn~ clicou...</p>'
    area.innerHTML  += '<p> ヾ(≧▽≦*)o </p>'
    area.style.background = 'green'
}

function sair() {
    area.innerHTML = '<p>Não se vá!...</p>'
    area.innerHTML += '<p> tava gostoso... ＞︿＜ </p>'
    area.style.background = 'red'
}