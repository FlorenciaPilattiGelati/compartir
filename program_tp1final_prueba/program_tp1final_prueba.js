let imagenes=[];
let texto=[];
let click=0;
function preload() {
  for (let i=0; i<11; i++) {
    imagenes[i]=loadImage('data/escena'+i+'.jpeg');
  }
}
function setup() {
  createCanvas(640, 480);
  textSize(25);
  texto[0]='El viejo nunca me había hecho daño. Nunca me insultó. Su oro no me interesaba. Creo que fue su ojo. Sí, eso fue.';
  texto[1]='Uno de sus ojos parecía el de un buitre... Un ojo azul pálido, velado. Siempre que caía sobre mí, la sangre se me helaba.';
  texto[2]='Y así, poco a poco, formé en mi mente la idea de quitarle la vida al viejo,';
  texto[3]=' y así librarme del ojo para siempre.'; 
  texto[4]='El viejo nunca me había hecho daño. Nunca me insultó. Su oro no me interesaba. Creo que fue su ojo. Sí, eso fue.';
  texto[5]='Uno de sus ojos parecía el de un buitre... Un ojo azul pálido, velado. Siempre que caía sobre mí, la sangre se me helaba.';
  texto[6]='Y así, poco a poco, formé en mi mente la idea de quitarle la vida al viejo,';
  texto[7]=' y así librarme del ojo para siempre.'; 
  texto[8]='El viejo nunca me había hecho daño. Nunca me insultó. Su oro no me interesaba. Creo que fue su ojo. Sí, eso fue.';
  texto[9]='Uno de sus ojos parecía el de un buitre... Un ojo azul pálido, velado. Siempre que caía sobre mí, la sangre se me helaba.';
  texto[10]='Y así, poco a poco, formé en mi mente la idea de quitarle la vida al viejo,';
  texto[11]=' y así librarme del ojo para siempre.';
}


function draw() {
  image(imagenes[click], 0, 0, 640, 480);
  fill(200,200,0,100);
  rect(20,280,580,140,20);
  fill(255);
  text(texto[click],40,300,560,200);
  

}

function mousePressed() {
  if (click<imagenes.length-1) {
    click++;
  } else {
    click=0;
  }  
  if(click===3){
    
    
  }
}
