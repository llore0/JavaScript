let n = 10;
let n1 = 10;

function pós_incremento() {
    n++; // sempre utiliza primeiro o elemento da esquerda
    console.log(n);
} pós_incremento()

function pós_incremento1() {
    console.log(++n1); // sempre utiliza primeiro o elemento da esquerda
} pós_incremento1()


n+=10
console.log(n);


let n2 = 10;
let n3 = 20;

console.log(n2 + n3);
console.log(n2 + "" + n3)