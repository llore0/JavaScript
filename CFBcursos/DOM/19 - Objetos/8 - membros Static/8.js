class Npc {
    static alerta = false // propiedade
    constructor(energia) {
        this.energia = energia
    }
    info = function() {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "sim" : 'não')}`)
        console.log('-------------------------------------------')
    }
    static alertar = function() { // método
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

// Npc.alerta = true
Npc.alertar()

npc1.info()
npc2.info()
npc3.info()