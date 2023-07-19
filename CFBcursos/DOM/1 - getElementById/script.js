const dc0 = document.getElementById('c0')
const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')

const arreyElementos = [dc0, dc1, dc2, dc3, dc4, dc5]

console.log(dc0)
console.log(dc0.id)
console.log(dc0.innerHTML)
dc0.innerHTML = 'lorenzo'

console.log(arreyElementos)

// for (d of arreyElementos) {
//     d.innerHTML = 'Lorenzo'
    arreyElementos.map((e) => {
        e.innerHTML = 'lorenzo'
    })

