// FUNÇÕES ANÔNIMAS -- não precisa de nome, será criada somente no momento da execução da função.

let f = function(...valores) {
    let res = 0;

    for (v of valores) {
        res += v;
    }
    return res;
}

// console.log(f(10,5))

// função construtor anônima

const fun = new Function("v1", "v2", "return v1+v2")
console.log(fun(10,5))