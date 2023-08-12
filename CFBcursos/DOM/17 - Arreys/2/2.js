const somar = document.querySelector('#btn_somar');
const subtracao = document.querySelector('#btn_subtracao');
const multiplicacao = document.querySelector('#btn_multiplicacao');
const divisao = document.querySelector('#btn_divisao');
const res = document.querySelector('#res');

const op = [
    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value];
        res.value = Number(val[0]) + Number(val[1]);
    },

    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value];
        res.value = Number(val[0]) - Number(val[1]);
    },

    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value];
        res.value = Number(val[0]) * Number(val[1]);
    },

    () => {
        const val = [document.getElementById('valor1').value, document.getElementById('valor2').value];
        res.value = Number(val[0]) / Number(val[1]);
    },
];

somar.addEventListener('click', op[0]);
subtracao.addEventListener('click', op[1]);
multiplicacao.addEventListener('click', op[2]);
divisao.addEventListener('click', op[3]);
