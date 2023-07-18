// let el = document.getElementsByTagName('div');
// el = [...el]
// el.map((el, i) => {
//     el.innerHTML = 'lore'
// })


// const elementos = document.getElementsByTagName('div');
// const valores = Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)
// console.log(valores)


const converterInt = (el) => parseInt(el);
const dobrar = (el) => el*2;
let num = ['1', '2', '3', '4', '5'].map(dobrar);
console.log(num);