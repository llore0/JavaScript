 /* Aritméticos
    -----------
    5 + 2 = 7
    5 - 2 = 3
    5 * 2 = 10
    5 / 2 = 2.5
    5 % 2 = 1 - Divide e pega o resto
    5 ** 2 = 25 - elevado
 */

var nome = window.prompt('Qual seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome contém ${nome.length} letras <br>`)
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}, e em minúsculo é ${nome.toLowerCase()}`)