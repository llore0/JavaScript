class CarroPadrao { // classe abstrata
    static ligado = false
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if (this.ligar === undefined) {
            throw new TypeError ("É obrigatório implementar o método ligar")
        }
        if (this.desligar === undefined) {
            throw new TypeError ("É obrigatório implementar o método desligar")
        }
        this.rodas = 4
        this.portas = 4
    }

    static ligar = function () {
        CarroPadrao.ligado = true
    }
}

class Carro extends CarroPadrao {
    constructor(tipo,estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = 'Normal'
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = 'Esportivo'
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = 'Super Esportivo'
        }
        this.velMax += this.turbo.potencia
    }

    info () {
        console.log(`Ligado: ${(CarroPadrao.ligado ? "sim" : 'não')}`)
        console.log(this.nome)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log("--------------------------------------------")
    }

    ligar() {
        this.ligado = true
    }

    desligar() {
        this.ligado = false
    }
}

class Turbo {
    constructor(estagio) {
        if (estagio == 1) {
            this.potencia = 50
        }else if (estagio == 2) {
            this.potencia = 75
        }else if (estagio == 3) {
            this.potencia = 100
        }else if (estagio == 0) {
            this.potencia = 0
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo) // tipo e estagio
        this.tipoInfo = 1
        this.velMax = 300 + this.turbo.potencia
        this.nome = 'Carro Especial'
    }

    info() {
        if (this.tipoInfo == 1) {
            super.info()
        } else {
            console.log(`Nome: ${this.nome}`)
            console.log(`Velocidade Max: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.potencia}`)
            console.log("--------------------------------------------")
        }
    }
}

const c1 = new Carro(3,0) // tipo e turbo
const c2 = new Carro(1,1) 
const c3 = new CarroEspecial(3) 
// const c4 = new CarroPadrao() // Se tirar o comentário, irá desparar um erro. Já que a classe CarroPadrão se tornou abistrata

// ligado = true
CarroPadrao.ligar()

c1.info()
c2.info()
c3.info()