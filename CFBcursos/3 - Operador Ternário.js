function ParÍmp(){
    let num = 10;
    let res = num % 2;

    if (res === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
} ParÍmp()


function ParÍmpSimplificado() {
    let num = 11;
    let res = ((num % 2 === 0) ? 'Par' : 'Ímpar'); // ? --> É o operador ternário. Ele reliza a operação, e se o resultado for verdadeiro, ele retorna o primeiro valor - "Par", se for falso ele retorna o segundo valor - "Ímpar"
    console.log(res);
} ParÍmpSimplificado()
// 0 = false
// 1 = true