// FUNÇÃO MAP -- tem a funcionalidade de percorrey arreys, posições. Quando precisa trabalhar com elemento por elemento de uma coleção.

/*                                 A função MAP tem dois parâmetros: 

    • el (elemento) -- Indica o elemeto da coleção que ele tá interando. Efetivamente a cada interação vai ir para o parâmetro o 'HTML', na segunda interação o 'CSS' e assim por diante.
    
    • i (índice) -- É o índice desse elemento, a posição desse elemento dentro da coleção. Ele está recebendo os valores.
*/
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'REACT'];
let c = cursos.map((el, i) => {
    // console.log(`Curso: ${el}, posição do curso: ${i}`)
    return `<div> ${el} </div>`
})

console.log(c)