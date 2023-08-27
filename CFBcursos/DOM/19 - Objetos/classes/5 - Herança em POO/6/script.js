class Carro { // Classe pai
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

class Militar extends Carro {
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

class Bombeiro extends Carro {
    constructor(nome,portas,tanque_ml,armazenamento) {
        super(nome,portas)
        this.tanque_ml = tanque_ml
        this.inventario = armazenamento
        this.setCor('Vermelho')
    }
    armazenar = function() {
        if (this.inventario > 100) {
            alert('Capacidade Max, diminuindo velocidade')
            this.vel--
        } else if (this.inventario > 0) {
            this.inventario++
        }
    }
    atirar_agua = function() {
        if (this.tanque_ml > 0) {
            this.tanque_ml--
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
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

const c3 = new Bombeiro ('Fire Force', 6, 30000, 45)
c3.atirar_agua()
c3.atirar_agua()
c3.atirar_agua()
c3.atirar_agua()
c3.atirar_agua()

c3.armazenar()
c3.armazenar()

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

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Ligado: ${(c3.ligado ? 'sim' : 'não')}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Inventário: ${c3.inventario}`)
console.log(`Quantida de água no tanque: ${c3.tanque_ml}`)
console.log(`Cor: ${c3.cor}`)
console.log('---------------------------------------------------------------------------------------')