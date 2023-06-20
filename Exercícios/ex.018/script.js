let num = [4, 2, 1, 9, 3] // um arrey de 3 elementos de 0 a 3
console.log(`Nosso vetor é: ${num} `)

num.sort() // colocando o vetor em ordem crescente

num[2] = 6 // trocou o 1 pelo 6
console.log(`Agora é: ${num}`)

num.push(7) // coloca um número no último lugar do arrey
console.log(`Agora é ${num}`)

console.log(`Esse arrey(vetor) tem ${num.length} posições`) // num.length conra quantos elementos tem no arrey
console.log(`Sendo o ${num[0]} a primeira posição!`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
} // para cada posição dentro de num, irá mostar o num[pos] - versão mais recente

let posit = num.indexOf(9) // indexOf - procura se existe o número 9 no meu arrey
console.log(`O valor 9 tá na posição ${posit}`)

let posi = num . indexOf(10)
console.log(`O valor 10 tá na posição ${posi}`) // colocou -1 porque o 10 n existe no arrey


if (posi == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição %{posi}`)
}