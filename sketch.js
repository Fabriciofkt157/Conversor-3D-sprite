// variáveis para o modelo 3D e sua textura
let modelo;
let textura;

function preload() {
  // carregar o modelo e a textura
  modelo = loadModel('modelo.obj', true);
  textura = loadImage('texture.png');
}

function setup() {
  // criar um canvas usando WebGL
  createCanvas(800, 600, WEBGL);

  // definir a textura do modelo
  texture(textura);

  // ativar a função orbitControl() para movimentar a câmera
  orbitControl();
}

function draw() {
  // definir a cor de fundo
  background(200);

  // posicionar o modelo 3D na origem
  translate(0, 0, 0);

  // desenhar o modelo 3D com a textura
  model(modelo);

  // verificar se a tecla "s" foi pressionada
  if (keyIsPressed && key === 's') {
    // salvar o frame atual como um arquivo PNG
    saveCanvas('imagem', 'png');

    // exibir uma mensagem no console
    console.log('Imagem salva!');
  }

  // verificar se a tecla "r" foi pressionada
  if (keyIsPressed && key === 'r') {
    // obter a nova resolução digitada pelo usuário
    let newResolution = parseInt(prompt('Digite a nova resolução:'));

    // redimensionar o canvas para a nova resolução
    resizeCanvas(newResolution, newResolution * (height / width));
  }
}




