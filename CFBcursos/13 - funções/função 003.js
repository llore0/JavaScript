const valor_padrão = 0

function soma(n1 = valor_padrão, n2 = valor_padrão) {
    let res;
    res = n1 + n2
    return res
}
let result = soma('--------');

console.log(result)




let valor = 0;
console.log(valor)

function add(v) {
    return valor += v;
}

// valor = add(10) - n vai precisa pq o valor de v, já esta sendo inserido em VALOR

add(10)
console.log(valor)

add(5)
console.log(valor)