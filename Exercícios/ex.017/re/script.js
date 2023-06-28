let calc = document.getElementById('calc')
calc.addEventListener('click', calcular)

function calcular() {
    let txtNum = document.getElementById('num')
    let tab = document.getElementById('selTab')

    if (!txtNum.value) {
        alert('[ERROR] Valor inválido!')
        txtNum.value = ''
        txtNum.focus()
    } else {
        let num = Number(txtNum.value)
        tab.innerHTML = ''
        document.getElementById('res').style.opacity = '1'
        document.getElementById('res').style.height = 'auto'
        
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}