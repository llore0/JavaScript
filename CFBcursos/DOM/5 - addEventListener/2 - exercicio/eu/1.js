const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const copy = document.querySelector('#btn_copiar');
const voltar = document.querySelector('#btn_voltar');
const cursos = [...document.querySelectorAll('.curso')]
cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el = evt.target;
        el.classList.toggle('destaque');
    })
})


copy.addEventListener('click', copying);
function copying() {
    cursos.forEach((curso) => {
        if (curso.classList.contains('destaque')) {
            curso.classList.add('selecionados');
        }
    });

    const cursosSelected = [...document.querySelectorAll('.selecionados')]
    cursosSelected.map((el)=>{
        caixa2.appendChild(el);
    })

    if (caixa2.children === 0) {
        voltar.style.display = 'none'
    } else {
        voltar.style.display = 'block'
    }

    voltar.addEventListener('click', Voltar)
    function Voltar() {
        const Selecionados = [...document.querySelectorAll('.selecionados')]
        Selecionados.map((e)=>{
            caixa1.appendChild(e);
        })

        cursos.forEach((curso) =>{
            if (curso.classList.contains('selecionados')) {
                curso.classList.remove('selecionados')
            }
        })
    } 
}