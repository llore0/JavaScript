let n1 = 10; // 0000 1010
let n2 = 11; // 0000 1011

function and() { 
    let res = n1 & n2; // - AND - Valores diferentes retornam 0 --> 00001010 === 10 
    console.log(`And / e = ${res}`);
} and() // 10


function or() {
    let res = n1 | n2; // - OR - Valores diferentes ou iguais na presença de 1 retorna 1 --> 0000 1011 === 11
    console.log(`Or / ou = ${res}`) ;
} or() // 11


function xor() {
    let res = n1 ^ n2; // - XOR - Valores ímpares retorna 1 --> 000 0001
    console.log(`Xor / ou exclusivo = ${res}`);
} xor() // 1


function deslocação_esq() {
    let res = n1 << 1 // Desloca os bits para a esquerda em 1 espaço --> 0001 0100
    console.log(res) // Dobra o valor
} deslocação_esq() // 20


function deslocação_dir() {
    let res = n1 >> 1 // Desloca os bits para a direita em 1 espaço --> 0000 0101
    console.log(res) // Divide o valor na metade
} deslocação_dir() // 5