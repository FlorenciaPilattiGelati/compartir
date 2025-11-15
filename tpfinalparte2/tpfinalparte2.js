let empezar;
let imgpareja;
let puntosonido;
let fondoc;
let imgmalo;
let imggrupo;

function preload() {
  imgpareja=loadImage('data/personaje1.png');
  puntosonido=loadSound('data/punto.mp3');
  imgmalo=loadImage('data/personaje2.png');
  imggrupo=loadImage('data/personaje3.png');
  fondoc = loadImage('data/fondodes.png');
}

function setup() {
createCanvas(640,480);
empezar=new Juego(4,50);

}
function draw() {
  background(0);
  empezar.dibujar();
  empezar.estados();
}
function mouseClicked() {
   empezar.pantallasgp();} 
