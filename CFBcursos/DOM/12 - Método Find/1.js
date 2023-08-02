// Método Find -- Vai pesquisar um elemento em um array, e retornar o 1 que encontrar. Se não encontrar ele retorna undefined

const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = ['10', 'html', 'css', '123']
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt)=>{
    const ret = elementos_array.find((e, i)=>{
        resultado.innerHTML = 'Valor não encontrado'
        if (e.toUpperCase() === txt_pesquisar.value.toUpperCase()) { // converte os dois para maiúsculo na hora da pesquisa.
            resultado.innerHTML = `Valor encontrado: ${e}, na posição ${i}`
        }
    })
    console.log(ret)
})