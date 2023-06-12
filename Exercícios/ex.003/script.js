// Number.parseInt(n) - se quiser definitivamente um int
// Number.parseFloat(n) - se quiser definitivamente um float
// Number - ele faz a conversão tanto para int qnt para float.

// String(n) - transformar em uma string || Mais recente - melhor
// n.toString(n)

var n1 = Number(window.prompt('Digite um número: '))
var n2 = Number(window.prompt('Digite outro número: '))
var soma = n1 + n2
// window.alert('Seu número é: ' + soma) // soma.toString || String(s)


/*
Template String 
---------------
`O aluno ${nome}, que tem ${idade}, tirou a ${nota}`
*/

window.alert(`Seu número é ${soma}!`)