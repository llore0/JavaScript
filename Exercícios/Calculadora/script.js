const teclasNum = [...document.querySelectorAll('.num')] 
const teclasOp = [...document.querySelectorAll('.op')] 
const tCopy = document.querySelector('#tCopy')
const display = document.querySelector('.display')
const tlimpar = document.querySelector('#limpar')
const tIgual = document.getElementById('tIgual')
const tPi = document.getElementById('tPi')
const calc_aba = document.getElementById('calc_aba')
const calc = document.getElementById('calc')

// document.addEventListener('DOMContentLoaded', (evt) => {
//     display.innerHTML = '0'
// })


let sinal = false   // Variável para não deixar ter mais de um operador.
let decimal = false // Não vai deixar ter mais de 1 vírgula

// add números no display
teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if (evt.target.innerHTML == ',') {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == '0') {
                    display.innerHTML += ','
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

// add teclas operacionais no display
teclasOp.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            } 
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

// limpa oque está no display
tlimpar.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = '0'
})

// botão de igual
tIgual.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML) 
    display.innerHTML = res
})

tPi.addEventListener('click', (evt) => {
    if (display.innerHTML == "0") {
        display.innerHTML = ""
    }
    display.innerHTML += 3.14
})

tCopy.addEventListener('click', (evt) => {
    navigator.clipboard.writeText(display.innerHTML)
})

let isAbaAberta = false;

function trocarIcon() {
    const calcAba = document.getElementById('calc_aba');
    
    if (isAbaAberta) {
        calcAba.innerHTML = '<span class="material-symbols-outlined"> chevron_right </span>';
    } else {
        calcAba.innerHTML = '<span class="material-symbols-outlined"> chevron_left </span>';
    }
    
    isAbaAberta = !isAbaAberta; // Inverte o estado
}

calc_aba.addEventListener('click', (evt) => {
    calc.classList.toggle("calc_exibir")
    calc_aba.classList.toggle("calc_aba_exibir")
    sinal = false
    decimal = false
    display.innerHTML = '0'
    trocarIcon()
})