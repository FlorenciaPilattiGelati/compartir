let empezar


function setup() {
createCanvas(640,480)
empezar=new Juego(3,50);

}


function draw() {
 background(0);
    empezar.dibujar();
    empezar.chocar();
    empezar.maspunto();
  
    if (keyIsPressed) {
    empezar.actualizar();
  }
}
