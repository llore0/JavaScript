function soma(.../* spred */valores) { // função de paramentros REST || Valores é um arrey
    let tamanho = valores.length;
    let res = 0;

    /*for (let i = 0; i < tamanho; i++) {
        res += valores[i]
    }*/

    for (let v of valores) {
        res += v // res recebe os valores de VALORES + os de V;
    }

    return res;
}
console.log(soma(10,5,2,15,8))