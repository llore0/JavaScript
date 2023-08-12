// O Set(), não permite entradas duplicadas.

const caixa = document.querySelector("#caixa")

let musicas = new Set(['Musica1', 'Musica Boa', 'Musica 10'])

musicas.add('Musica muito legal')
musicas.add('Musica1') 
musicas.add('Musica1')
musicas.add('Musica10')

musicas.delete('Musica1')
musicas.clear() // limpa td

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML += `${el} <br/>`
// })

for(let m of musicas) {
    caixa.innerHTML += `${m} <br/>`
}