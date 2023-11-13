document.addEventListener("DOMContentLoaded", () => {
    const conteudoTitulo = document.getElementById("conteudo_titulo");
    const params = new URLSearchParams(window.location.search);
    const link = params.get("link");
    const input = document.querySelector("#conversor_txt")
    const res = document.querySelector("#placeholder_res")
    
    // Mudando o h1 no 2° Html, com base em qual link o usuário clicar
    conteudoTituloH1(link, conteudoTitulo, input);
    
    // Convertendo os números
    const converter = document.querySelector("#submit")
    converter.addEventListener('click', (evt) => {
        const inputNum = parseInt(input.value) // Transformandos os valores do imput em inteiro
        let numConvertido = 0

            conversão();

        function conversão() {
            if (link === "1") {
                if (!Number.isInteger(inputNum)) { // Se não for num int, vai imprimir um alerta
                    alert("Apenas números inteiros");
                } else {
                    numConvertido = inputNum.toString(2); // Transformando o num dec em bin
                    while (numConvertido.length % 3 !== 0) {
                        numConvertido = '0' + numConvertido;
                    }
                    res.innerHTML = `(${numConvertido})₂`;
                }
            } else if (link === "2") {
                if (!Number.isInteger(inputNum)) {
                    alert("Apenas números inteiros");
                } else {
                    res.style.color = '#fff';
                    numConvertido = inputNum.toString(8); // Transformando o num dec em oct
                    res.innerHTML = `(${numConvertido})₈`;
                }
            } else if (link === "3") {
                if (!Number.isInteger(inputNum)) {
                    alert("Apenas números inteiros");
                } else {
                    res.style.color = '#fff';
                    numConvertido = inputNum.toString(16); // Transformando o num dec em hex
                    res.innerHTML = `(${numConvertido})₁₆`;
                }
            }
        }
    })
    
    const btnTrocar = document.querySelector('.btn')
    btnTrocar.addEventListener('click', (evt) => {
        input.value = ''
        res.innerHTML = 'resultado'
        
        if (link === "1") {
            numConvertido = parseInt(inputNum, 2).toString(10)
            res.innerHTML = `(${numConvertido}₁₀`
        }
    })
});

function conteudoTituloH1(link, conteudoTitulo, input) {
    if (link === "1") {
        conteudoTitulo.innerHTML = "Converter Decimal para Binário";
    } else if (link === "2") {
        conteudoTitulo.innerHTML = "Converter Decimal para Octal";
    } else if (link === "3") {
        conteudoTitulo.innerHTML = "Converter Decimal para Hexadecimal";
    } else if (link === "4") {
        conteudoTitulo.innerHTML = "Converter Binário para Octal";
        input.placeholder = 'Insira um binário';
    } else if (link === "5") {
        conteudoTitulo.innerHTML = "Converter Binário para Hexadecimal";
        input.placeholder = 'Insira um binário';
    } else if (link === "6") {
        conteudoTitulo.innerHTML = "Converter Octal para Hexadecimal";
        input.placeholder = 'Insira um octal';
    }
}

