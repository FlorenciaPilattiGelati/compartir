let empezar
let grupoim
let parim
let simmim
let fondoim

function preload() {
  parim=loadImage('data/personaje1.png');
  simmim=loadImage('data/personaje2.png');
  grupoim=loadImage('data/personaje3.png');
  fondoim=loadImage('data/fondodes.png');
  
}
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
