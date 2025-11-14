let empezar


function setup() {
createCanvas(640,480)
empezar=new Juego(4,50);

}
function draw() {
  background(0);
  empezar.dibujar();
  empezar.estados();
}
function mouseClicked() {
   empezar.pantallasgp();} 
