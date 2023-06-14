var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var seg = agora.getSeconds()
console.log (`Agora são extamente ${hora} horas, ${minuto} minutos e ${seg} segundos.`)
if (hora < 12) {
    console.log ('Bom dia!')
} else if (hora <= 18) {
    console.log ('Boa tarde!')
} else {
    console.log ('Boa noite!')
}