let empezar;
let personajes[];

function setup() {
  createCanvas(640,480);
  empezar= new Juego(3, 40);
}
function preload() {
   pareja=loadImage('data/personaje1'+'.png');
    simm=loadImage('data/personaje2'+'.png');
     grupo=loadImage('data/personaje3'+'.png');
  }
}

function draw() {
