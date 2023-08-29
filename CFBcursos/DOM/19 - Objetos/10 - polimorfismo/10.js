// Polimorfismo -- Capacidade de um mesmo método, ter ações diferentes!

class Carro {
    constructor(tipo,estagioTurbo) {
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
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log("--------------------------------------------")
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
        if (this.info == 1) {
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

c1.info()
c2.info()
c3.info()