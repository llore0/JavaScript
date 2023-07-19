// operador THIS dentro de funções

// function aluno(nome, nota) {
//     return {
//         nome: nome,
//         nota: nota
//     };
// }

// var lore = aluno('Lore', 100);
// console.log(`O aluno ${lore.nome} tirou ${lore.nota} na prova`);

function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_anônimo = function() {
        setTimeout(function() {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000 /* o setTimeout cria um atraso, o 2000 são 2 segundos*/)
    }

    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}
const al1 = new aluno('lore', 100)
al1.dados_anônimo()
al1.dados_arrow()