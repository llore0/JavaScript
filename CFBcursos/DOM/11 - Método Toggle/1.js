const caixaCursos = document.querySelector('#caixaCursos');
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let Indice = 0

const tirarSeleção = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', `c${Indice}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', (evt)=>{
        tirarSeleção()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}

cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    Indice++
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}


btnCursoSelecionado.addEventListener('click', (evt)=>{
    try {
        alert(`Curso Selecionado ${cursoSelecionado().innerHTML}`)
    } catch(error) {
        alert('Selecione um curso')
    }
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    const cs = cursoSelecionado()
    if (cs != undefined) {
        cs.remove()
    } else {
        alert ('Selecione um curso')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', (evt)=>{
    try {
        if(nomeCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado()) // Aqui está adicionando o novoCurso antes do cursoSelecionado
        } else {
            alert('Digite o nome do curso')
        }
    } catch(error) {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt)=>{
    try {
        if(nomeCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling) // Aqui está mandando adicionar um curso antes do próximo irmão, já q n existe o método insertAfter
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