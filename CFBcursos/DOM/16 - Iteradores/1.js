const valores = [10,8,9,2] // arrey - coleção interável
const it_valores = valores[Symbol.iterator]() 

const texto = 'Youtube'
const it_texto = texto[Symbol.iterator]() 

console.log(valores)
// console.log(it_texto.next().value) // mostra só o valor
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())