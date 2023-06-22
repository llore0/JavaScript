let agora = new Date()
let hora = agora.getHours()
let min = agora.getMinutes()
let seg = agora.getSeconds()

console.log(`Agora são exatas ${hora} horas, ${min} minutos e ${seg} segundos!`)

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}