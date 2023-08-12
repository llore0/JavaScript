// Arrey -- coleção de dados, de variáveis. Em Js, o programador consegue armazenar qualquer tipo de dado em um arrey.
const caixa = document.querySelector('#caixa')

let cores = ['azul','verde','vermelho',['claro','escuro','médio']]
let cursos = ['HTML','CSS','Javascript',cores]

// cursos[0] = 324

// cursos.push('C++') // add um elemento ao final do arrey
// cursos.push('Python')
// cursos.pop() // retira o último elemento

// cursos.unshift('C') // add no início do arrey
// cursos.unshift('Typescript')
// cursos.shift() // retira o primeiro elemento

console.log(cursos[3][3][2])

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})
