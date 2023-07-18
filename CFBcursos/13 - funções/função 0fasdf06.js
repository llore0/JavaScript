// ARROW FUNCTION -- funções lambidas ---- mecânimos conciso pra representar funções anônimas

/* const soma = function(v1, v2) {
    return v1 + v2;
} */

// ARROW FUNCTION 

const soma = (/* pega o que ta aqui e joga pra lá --> */ v1,v2) => v1 + v2
console.log(soma(10,5))

const nome = n => n
console.log(nome('lore'))

const add = m => m += 10
console.log(add(100))

const soma_ = (v1,v2) => {
    let res = v1 + v2;
    return res;
} 
console.log(soma_(10,12))