
//codigo não finalizado
// fiz tenteni fazer roda 
// 

const botao = document.getElementById("btnGerar");

// Evento do botão
botao.addEventListener("click", gerarGrafico);

function gerarGrafico(){

  // Pegando valores
  let nome = document.getElementById("nome").value;

  let nota1 = Number(document.getElementById("nota1").value);

  let nota2 = Number(document.getElementById("nota2").value);

  // Média
  let media = (nota1 + nota2) / 2;

  // Canvas
  const canvas = document.getElementById("grafico");

  const ctx = canvas.getContext("2d");

  // Limpa tela
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  // Altura das barras
  let altura1 = nota1 * 20;
  let altura2 = nota2 * 20;
  let alturaMedia = media * 20;

  // Barra nota 1
  ctx.fillStyle = "blue";

  ctx.fillRect(
    50,
    250 - altura1,
    80,
    altura1
  );

  // Barra nota 2
  ctx.fillStyle = "green";

  ctx.fillRect(
    180,
    250 - altura2,
    80,
    altura2
  );

  // Barra média
  ctx.fillStyle = "red";

  ctx.fillRect(
    310,
    250 - alturaMedia,
    80,
    alturaMedia
  );

  // Texto
  ctx.fillStyle = "black";

  ctx.font = "18px Arial";

  ctx.fillText("Nota 1", 55, 270);

  ctx.fillText("Nota 2", 185, 270);

  ctx.fillText("Média De: "+ nome, 320, 270);

  // Valores
  ctx.fillText(
    nota1,
    75,
    240 - altura1
  );

  ctx.fillText(
    nota2,
    205,
    240 - altura2
  );

  ctx.fillText(
    media.toFixed(1),
    330,
    240 - alturaMedia
  );

}