var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return nome;
  } else {
    return `Desculpa, não vendemos carros ${nome}`;
  }
}

var carro = { meuCarro: "Punto", getCarro: tipoCarro("Fiat"), especial: vendas };

console.log(carro.meuCarro);   // Punto
console.log(carro.getCarro);  // Fiat
console.log(carro.especial); // Toyota

// ----------------------------------------------------------------------------------

var carros = {carross: {a: 'Celtinha', b: 'Volve'}, 7: 'Citroen'}
console.log(carros.carross.b)
console.log(carros[7])

// ----------------------------------------------------------------------------------

var propriedadeDeNomesNãoUsuais = {
    '': 'Uma string vazia',
    '!': 'Bang!'
}
// console.log(propriedadeDeNomesNãoUsuais.'') --> SyntaxError: string inesperada
console.log(propriedadeDeNomesNãoUsuais[''])
// console.log(propriedadeDeNomesNãoUsuais.!) --> SyntaxError: string inesperada
console.log(propriedadeDeNomesNãoUsuais['!'])

// ----------------------------------------------------------------------------------

console.log("John's cat".length)
console.log('"uma linha \n outra linha"')

// ----------------------------------------------------------------------------------

var quote = 'Lorenzo leu \"Drácula\" mês passado';
console.log(quote);

var home = "c:\\temp";
console.log(home);

var poema =
"Rosas são vermelhas\n\
Violetas são azuis,\n\
Esse seu sorriso\n\
é o que me seduz. (Lucas Pedrosa)"
console.log(poema);