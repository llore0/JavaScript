let selFrutas = document.getElementById('idFrutas');
let addBtn = document.getElementById('addBtn');
let txtFruta = document.getElementById('txtFruta');
let resDiv = document.getElementById('res');

addBtn.addEventListener('click', adicionarFruta);

function adicionarFruta() {
  let novaFruta = txtFruta.value.trim();

  if (novaFruta !== "") {
    let novaOpcao = document.createElement('option');
    novaOpcao.textContent = novaFruta;
    selFrutas.appendChild(novaOpcao);
    txtFruta.value = "";

    exibirPreco(novaFruta);
  }
}

selFrutas.addEventListener('change', function() {
  let frutaSelecionada = selFrutas.value;
  exibirPreco(frutaSelecionada);
});

function exibirPreco(frutaSelecionada) {
  let preco = "";

  switch (frutaSelecionada) {
    case "Uva":
      preco = "O preço da uva é $7 dólares.";
      break;
    case "Pera":
      preco = "O preço da pera é $5 dólares.";
      break;
    case "Banana":
      preco = "O preço da banana é $2 dólares.";
      break;
    case "Maçã":
      preco = "O preço da maçã é $3 dólares.";
      break;
    case "Morango":
      preco = "O preço do morango é $6 dólares.";
      break;
    default:
      if (frutaSelecionada !== "") {
        let precoAleatorio = Math.floor(Math.random() * 20) + 1;
        preco = `O preço da ${frutaSelecionada} é $${precoAleatorio} dólares.`;
      } else {
        preco = "Selecione uma fruta para ver o preço.";
      }
      break;
  }

  resDiv.textContent = preco;
}
