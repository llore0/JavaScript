const caixa1 = document.querySelector("#caixa1");
const c1_2 = document.querySelector("#c1_2");
const btn_c = [...document.querySelectorAll('.curso')]

console.log(caixa1.children) // children é uma propriedade, não precisa dos parênteses
console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(btn_c[0].children.length > 0 ? 'Possui filhos' : 'Não possui filhos')  /* condição ternária */ 


console.log(caixa1.firstElementChild.innerHTML = 'TESTE')
console.log(caixa1.children[1].innerHTML = 'SEGUNDO')

console.log(c1_2.parentNode.parentNode)