const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn_tranferir = document.querySelector('#btn_tranferir');
const cursos = [...document.querySelectorAll('.curso')]
cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el = evt.target;
        el.classList.toggle('destaque');
    })
})

btn_tranferir.addEventListener("click", ()=>{
    const cursosSelec = [...document.querySelectorAll(".selecionados")]
    const cursosNotSelec = [...document.querySelectorAll(".cursos:not(.selecionados)")]

    cursosSelec.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNotSelec.map((el)=>{
        caixa1.appendChild(el)
    })

})