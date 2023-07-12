function jogador() {
    const jogador1 = {nome: "Bruno", energia: 100, magia: 239, vidas: 3};
    const jogador2 = {nome: "Bruce", energia: 100, velocidade: 123, vidas: 5};
    const jogador3 = {...jogador1, ...jogador2}

    console.log(jogador3);
} jogador()


function soma() {
    const soma = (v1, v2, v3, v4) => {
        return v1 + v2 + v3 + v4;
    }

    let valores = [1, 5, 4, 10];

    console.log(soma(...valores))
    console.log(soma(1,5,4,0))
} soma()