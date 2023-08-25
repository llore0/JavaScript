const Pessoa = {
    nome: "",
    idade: "",
    getNome:function() {
        return this.nome
    },
    getIdade:function() {
        return this.idade
    },
    setNome:function(nome) {
        this.nome = nome
    },
    setIdade:function(idade) {
        this.idade = idade
    }
}   

let nom = Pessoa.nome
let idad = Pessoa.idade

const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = () => {
    res.innerHTML = ''
    pessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', (evt) => {
    const nome = document.querySelector('#f_nome')
    const idade = document.querySelector('#f_idade')
    nom = nome
    idad = idade
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoa()
})