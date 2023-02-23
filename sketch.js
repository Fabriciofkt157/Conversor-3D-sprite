// variáveis para o modelo 3D e sua textura
let modelo;
let textura;
let cam;

function preload() {
  // carregar o modelo e a textura
  modelo = loadModel('modelo.obj', true);
  textura = loadImage('textura.png');
}

function setup() {
  // criar um canvas usando WebGL
  createCanvas(800, 600, WEBGL);

  // definir a textura do modelo
  texture(textura);

  // criar a câmera e definir sua posição inicial
  cam = createCamera();
  cam.setPosition(0, 0, 500);
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

// função chamada quando ocorre o movimento de um toque
function touchMoved() {
  // obter a posição do toque atual
  let touchX = mouseX - width / 2;
  let touchY = mouseY - height / 2;

  // obter a posição do toque anterior
  let prevTouchX = pwinMouseX - width / 2;
  let prevTouchY = pwinMouseY - height / 2;

  // obter a diferença entre as posições do toque atual e anterior
  let deltaX = touchX - prevTouchX;
  let deltaY = touchY - prevTouchY;

  // rotacionar a câmera com base na diferença de posição dos toques
  cam.pan(deltaX / width * PI);
  cam.tilt(deltaY / height * PI);

  // impedir que o toque seja interpretado como um clique
  return false;
}




