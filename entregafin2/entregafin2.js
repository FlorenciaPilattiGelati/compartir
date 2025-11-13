let empezar


function setup() {
print(Juego);
createCanvas(640,480)
empezar=new Juego(3,50);

}


function draw() {
 background(0);
  empezar.dibujar();
  
    if (keyIsPressed) {
    empezar.actualizar();
  }
}
