// FUNÇÕES GERADORAS -- Uma função geradora tem seu retorno adiado, até que a gente precise da função.
function geradora_0(){

function* /* o "*" indica uma função geradora*/ cores(){
    yield 'vermelho';
    yield 'verde';
    yield 'azul';
}

let itc = cores();
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
} // geradora_0()


function geradora_1() {
    function* perguntas() {
        const nome = yield 'Qual seu nome?'
        const esporte = yield 'Qual seu esporte favorito?'

        return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
    }

    const itp = perguntas()
    console.log(itp.next().value)
    console.log(itp.next('Lorenzo').value)
    console.log(itp.next('Vôlei').value)
} // geradora_1()


function geradora_2() {
    function* contador() {
        let i = 0;

        while (true) {
            yield i++
            if (i > 5) {
                continue;
            }
        }
    }

    const itc = contador();
    // for (let i = 0; i < 10; i++) {
    //     console.log(itc.next().value)
    // }

    for (let c of itc) {
        console.log(c)
    }

} geradora_2()