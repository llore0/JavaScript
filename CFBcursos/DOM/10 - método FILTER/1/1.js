// O método Filter, vai percorrer um arrey, e ele prmite que realize uma filtragem atravez de uma programação, e retornar um novo arrey filtrado, apénas com oq o programador quer

// const filtroMaior18 = (valor, indice, arrey)
// const filtroMaior18 = (valor) => {
//     if (valor >= 18)
//         return valor
// }

const idades = [15, 21, 30, 17, 18, 44, 50];
const maior = idades.filter((valor, indice, arrey)=>{
    if (valor >= 18)
        return valor
})

const menor = idades.filter((valor)=>{
    if (valor < 18)
        return valor
})


console.log(idades)
console.log(maior)
console.log(menor)