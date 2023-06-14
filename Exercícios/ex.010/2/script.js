var input = window.document.getElementById('enviar')
input.addEventListener('click', verificar)

function verificar() {
    var txt = document.getElementById('country').value
    var res = document.getElementById('res')

    res.innerHTML = `<p> Vivendo em ${txt} </p>`
    
    if (txt !== 'Brasil' && txt !== 'brasil') {
        res.innerHTML += '<p> Você é <strong>estrangeiro!</strong> </p>'
    } else {
        res.innerHTML += '<p> Você é <strong>brasileiro!</strong> </p>'
    }
}