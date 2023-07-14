// BREAK - é uma expressão que gera uma interrupção na execução. Ele encerra o loop, e continua a execução padrão do programa.

// CONTINUE - Quando execultado dentro de um loop, ele para apenas aquela interação e pula pra proxima, normalmente a execultação do loop.


let n = 0;
let max = 1000;

function break_() {

while (n < max) {
    console.log(`lore, ${n}`);
    if (n > 10) {
        break;
    }
    n++;
    }
    console.log('Fim do programa!');
} break_()

let pares = 0;

function continue_() {
    for (let i = n; i < max; i++) {
        if ( i % 2 != 0) {
            continue;
        }
        pares++
    }
    console.log(`Quantidade de pares ${pares}`);
    console.log('Fim do programa!');
} continue_()