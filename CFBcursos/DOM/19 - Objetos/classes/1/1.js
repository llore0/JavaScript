class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = 'Esportivo'
            this.velMax = 300
        } else if (ptipo == 2) {
            this.tipo = 'Utilitário'
            this.velMax = 100
        } else if (ptipo == 3) {
            this.tipo = 'Passeio'
            this.velMax = 160
        } else {
            this.tipo = 'Militar'
            this.velMax = 180
        }
    }

    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getVelMax() {
        return this.velMax
    }

    getInfo() {
        return [this.nome, this.tipo, this.velMax]
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Max: ${this.velMax}`)
        console.log('---------------------------------------------------------------------------------------')
    }

    setNome(nome) {
        this.nome = nome
    }

}

let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Luxuoso', 3)
let c3 = new Carro('Blidado', 1324)
let c4 = new Carro('Carrega TUDO', 2)

c1.setNome('Novo nome - Veloz')
c1.info()
console.log(c1.getNome())
console.log(c1.getInfo())