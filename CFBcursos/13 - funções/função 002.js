function canal() {
    // RETURN - qnd acabar a função vai retornar um valor pra quem chamou a função!

    let n1 = 10;
    let n2 = 2;
    let res = n1 * n2;

    if (res % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }

    return res;
} 

let res = canal()

console.log(canal())
console.log(res)