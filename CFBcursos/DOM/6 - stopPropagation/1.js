const caixa1 = document.querySelector('#caixa1'); // Todos os eventos adicionados na div caixa1, vão se propagar pro resto da div.
const btn_c1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.curso')];

caixa1.addEventListener('click', (evento)=>{
    console.log('clicou')
    console.log(evento)
})

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation() // parou a propagação do evento em HTML
    })
})

// btn_c1.addEventListener('click', (evt)=>{
//    evt.stopPropagation() // parou a propagação do evento em HTML
// })