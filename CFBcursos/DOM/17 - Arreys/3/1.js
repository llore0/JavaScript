const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'Js')
mapa.set(10, 'lore')
mapa.set(1, 123)
mapa.set('canal', 123)

mapa.delete(1)

console.log(mapa)

let pes = 10
let res = ''
if (mapa.has(pes)) {
    res= `A chave existe na coleção com o valor <strong>${mapa.get(pes)}<strong/>`
    res += `<br/> O tamanho da coleção é ${mapa.size}`
} else {
    res = 'A chave não existe na coleção'
    res += `<br/> O tamanho da coleção é ${mapa.size}`
}
caixa.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})