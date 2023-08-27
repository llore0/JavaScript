const pessoa = {
    nome: 'lorenzo',
    canal: 'loooore',
    curso: 'Javascript',
    aulas: {
        aula001: 'Introdução',
        aula002: 'Variáveis',
        aula003: 'Condicional'
    }
}

const string_pessoa = {"nome":"lorenzo","canal":"loooore","curso":"Javascript","aulas":{"aula001":"Introdução","aula002":"Variáveis","aula003":"Condicional"}}

const string_jsonPessoa = JSON.stringify(pessoa) // converte o objeto literal em uma string JSON
const objeto_jsonPessoa = JSON.parse(string_jsonPessoa) // converte string JSON em objeto

console.log(pessoa)
console.log(string_jsonPessoa)
console.log(objeto_jsonPessoa)