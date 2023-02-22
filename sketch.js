function setup (){
  createCanvas(screenX, screenY);
  frameRate(30);
}
var screenX = window.screen.width, screenY = window.screen.height


var yJ = screenY / 2 - screenY * 0.15
var yC = yJ
function draw (){
  background(0);
  rect(screenX * 0.03, yJ, screenX * 0.03, screenY * 0.30);
  rect(screenX * 0.97, yC, screenX * 0.03, screenY * 0.30);
  CPU();
  
}

function CPU () {
  

}

function mouseClicked (){
  if(mouseY < screenY / 2){
    yJ += 5
  }
  else {
    yJ -= 5
  }
}




