function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('selTab')

    if (num.value.length == 0){
        alert('[ERRO] Por favor, digite um número')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        document.getElementById('res').style.opacity = '1'
        document.getElementById('res').style.height = 'auto'


        /* - Com WHILE -
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
        */
       

        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}