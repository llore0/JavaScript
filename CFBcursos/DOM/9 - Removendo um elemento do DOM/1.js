const caixa1 = document.querySelector('#caixa1');
const btn_c1 = document.querySelector('#c1');
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']


cursos.map((el, chave)=>{
    console.log(chave)
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', `c${chave + 1}`) // adiciona id aos elementos
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el

    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src', 'lixeira.png')
    btn_lixeira.setAttribute('id', 'lixeira')
    btn_lixeira.setAttribute('class', 'btn_lixeira')
    novoElemento.appendChild(btn_lixeira)
    btn_lixeira.addEventListener('click', (evt)=>{
        console.log(evt.target.parentNode)
        caixa1.removeChild(evt.target.parentNode)
    })

    caixa1.appendChild(novoElemento)
})