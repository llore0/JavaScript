let numPrimo = function(x) {
    if (x <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }
    
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false; // Se x for divisível por algum número entre 2 e x-1, não é primo
        }
    }
    
    return true; // Se nenhum divisor foi encontrado, o número é primo
}

console.log(numPrimo(13)); // Output: true