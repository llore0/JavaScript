const querry_div = document.querySelector('div') // vai retornar a primeira div da página! 

const querry_divTodas = [...document.querySelectorAll('div[class], p')] // vai retornar todas as divs

const querry_cursoTodos = [...document.querySelectorAll('.cursos')]
const querry_c1Todos = [...document.querySelectorAll('.c1, p')]
// const querry_idTodos = [...document.querySelectorAll('#c1')]
const querry_idTodos = document.querySelectorAll('#c1')[0]
const querry_c2Todos = [...document.querySelectorAll('.c2')]

const div_P = document.querySelectorAll('div > p') // div que tem um elemento P dentro dela!

// console.log(querry_div)
// console.log(querry_divTodas)
// console.log(querry_cursoTodos)
// console.log(querry_c1Todos)
// console.log(querry_idTodos)
// console.log(querry_c2Todos)

