let empezar


function setup() {
createCanvas(640,480)
empezar=new Juego(4,50);

}
function draw() {
  background(0);
  empezar.dibujar();

  if (empezar.estado === "jugando") {
    empezar.chocar();
    empezar.maspunto();
    empezar.ganar();

    if (keyIsPressed) {
      empezar.actualizar();
    }
  }
}
function mouseClicked() {
  if (empezar.estado === "inicio") {
    if (empezar.Boton.pressed()) {
      empezar.comenzar(); 
       return;
  }
    
  }
  if (empezar.estado === "ganaste" || empezar.estado === "perdiste") {
    if (empezar.Boton.pressed()) {
      empezar.reiniciar(); 
    }
  }
}
