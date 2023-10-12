const mat = document.getElementById("mat")

mat.innerHTML = Math.random() // randomiza número entre 0 e 1
mat.innerHTML = Math.floor(Math.random() * 10)
mat.innerHTML = Math.round(Math.random() * 10) // vai chegar até o 10

mat.innerHTML = Math.pow(10,2) // eleva o 1° num pelo 2°

mat.innerHTML = Math.max(1, 3, 4, 5, 6) // vê o maior número