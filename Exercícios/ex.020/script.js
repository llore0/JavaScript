let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#selArrey')
let res = document.querySelector('div#res')
let valores = []

document.getElementById('btnAdd').addEventListener('click', adicionar)
document.getElementById('btnEnd').addEventListener('click', finalizar)


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // add um novo valor à lista

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {  
    if (valores.length == 0) {
        alert('Adicione valores antes de finalziar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let média = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
            maior = valores[pos]

            if (valores[pos] < menor)
            menor = valores[pos]
        }

        média = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A meida dos valores é ${média}</p>`
    }
}