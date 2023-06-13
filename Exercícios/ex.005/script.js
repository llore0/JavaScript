var corpo = window.document.body
corpo.style.background = 'green'


var p1 = window.document.getElementsByTagName('p')[0] 
// o [0], tá escolhendo a primeira tag p
p1.style.color = 'blue'


/* 
var d = window.document.getElementById('msg')
d.style.background = 'red'
d.innerHTML = 'Estou aguardando' // - muda oq esta escrito 
window.document.getElementById('msg').innerHTML = 'olá' - fica mt grande. 
*/


//Forma mais recente -->
var d = window.document.querySelector('div#msg')
d.style.color = 'red'
d.style.background = 'whitesmoke'


window.document.write('Esta escrito assim: ' + p1.innerText) 
/* 
- innerHTML - vem sem as tags
window.alert(p1.innerHTML)- innerHTML -  vem com as tags filhos de p
*/