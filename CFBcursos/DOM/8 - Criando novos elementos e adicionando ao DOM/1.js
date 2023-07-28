const caixa1 = document.querySelector('#caixa1'); 
const btn_c1 = document.querySelector('#c1');
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']


cursos.map((el, chave)=>{
    console.log(chave)
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', `c${chave + 1}`) // adiciona id aos elementos
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})