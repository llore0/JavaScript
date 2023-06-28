let num = [4, 2, 1, 9, 3]
console.log(`Nosso vetor é: ${num}`)

num[3] = 90 // troca o 4 valor por 90
console.log(`Agora é: ${num}`)

num.sort() // organiza em ordem crescente
console.log(`Em ordem crescente fica: ${num}`)

num.push(16) // add um num ao final do arrey
console.log(`Agora é: ${num}`)

console.log(`Esse arrey tem ${num.length} posições`)

console.log(`Sendo o ${num[0]} a primeira posição`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}

let position = num.indexOf(90) // indexOf - procura se existe o número 90 no arrey
console.log(`O número 90, está na posição ${position}`)

let Npos = num.indexOf(10) // colocou -1 porque o 10 n existe no arrey 
console.log(`O valor 10 tá na posição ${Npos}`)

if (Npos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição %{posi}`)
}