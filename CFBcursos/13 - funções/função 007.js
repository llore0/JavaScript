// Função dentro de uma função

const soma = (...valores) => {
    const somar = val => {
        let res = 0;
        for (v of val) 
            res +=v
        return res
    }
    return somar(valores)
}

console.log(soma(10,123,21))