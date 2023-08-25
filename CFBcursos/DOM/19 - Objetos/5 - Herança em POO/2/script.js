const tipoMilitar = document.querySelector('#f_tipoMilitar')
const tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const btn_addCarro = document.querySelector('#btn_addCarro')
const carros = document.getElementById('carros')

let a_carros = []

tipoMilitar.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_blindagem.value = 0
    f_portas.value = 0
    f_municao.value = 0
    console.log('Teste')
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})
tipoNormal.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute('disabled',"disabled")
    f_municao.setAttribute('disabled',"disabled")
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach((c) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        div.innerHTML = `Nome: ${c.nome} <br/>`
        div.innerHTML += `Portas: ${c.portas} <br/>`
        div.innerHTML += `Blindagem: ${c.blindagem} <br/>`
        div.innerHTML += `Munição: ${c.municao} <br/>`
        div.innerHTML += `Cor: ${c.cor} <br/>`
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', (evt) => {
    if (tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})

class Carro { // Classe pai / BASE
    constructor(nome,portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function() {
        this.ligado = true
    }
    desligar = function() {
        this.desligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro { // classe filho
    constructor(nome,portas,blindagem,municao) {
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('verde')
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro ('Normal', 4)
c1.ligar()
c1.setCor('preto')

const c2 = new Militar("lutador",1,100,43)
// c2.setCor('cinza')
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? 'sim' : 'não')}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('---------------------------------------------------------------------------------------')

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado ? 'sim' : 'não')}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log('---------------------------------------------------------------------------------------')