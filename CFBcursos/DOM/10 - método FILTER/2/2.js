const caixaCursos = document.querySelector('#caixaCursos');
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let Indice = 0

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement('div')
    // novoElemento.setAttribute('id', `c${chave + 1}`) // adiciona id aos elementos
    novoElemento.setAttribute('id', `c${Indice}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    Indice++
})

const radioSelecionado = ()=>{
    const todosRadios = [...document.querySelectorAll('input[type = radio]')]
    const radioSelecionado = todosRadios.filter((elemento, indice, arrey)=>{
        return elemento.checked
    })
    return radioSelecionado[0]
}


btnCursoSelecionado.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent // Irá selecionar apenas o texto
        alert(`Curso Selecionado ${cursoSelecionado}`)
    } catch(error) {
        alert('Selecione um curso')
    }
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentElement
        cursoSelecionado.remove()
    } else {
        alert ('Selecione um curso')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    try {
        if(nomeCurso.value != '') {
            const cursoSelecionado = rs.parentNode.parentNode // Utiliza-se o parentNode.parentNode, para adicionar a div junto, não só o nome do curso
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado) // Aqui está adicionando o novoCurso antes do cursoSelecionado
        } else {
            alert('Digite o nome do curso')
        }
    } catch(error) {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    try {
        if(nomeCurso.value != '') {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling) // Aqui está mandando adicionar um curso antes do próximo irmão, já q n existe o método insertAfter
        } else {
            alert('Digite o nome do curso')
        }
    } catch(error) {
        alert('Selecione um curso')
    }
})

/*
    .parentNode
    .childNodes [nodenumber]
    .firstChild
    .lastChild
    .nextSibling
    .previousSibling
*/