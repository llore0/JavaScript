var nome = window.prompt('Qual seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome contém ${nome.length} letras <br>`)
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}, e em minúsculo é ${nome.toLowerCase}`)