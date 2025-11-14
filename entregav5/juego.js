class Juego{
  constructor(canti,tam){
    this.tama=tam;
    this.cant=canti
    this.Pareja=new Pareja(tam);
    this.perder=[];
    this.puntos=[];
    this.Tiempo=new Tiempo();
    this.Boton=new Boton( width/4, height/2,tam*4,tam*4);
    this.puntaje=0;
    this.estado="inicio";
    for (let i=0; i<this.cant; i++) {
    this.perder[i]= new Simms(random(0,width-tam), 0+i*tam, tam);
    this.puntos[i]= new Grupo(random(0,width-tam), 0+i*tam, tam);
  }

}
dibujar(){
   if (this.estado ==="inicio") {
      fill(200);
      rect(0, 0, width, height);
      fill(0, 0, 255);
      textSize(50);
      text("carrera contra el tiempo", 200, 200);
      this.Boton.dibujarboton();
    }
    
    if (this.estado==="jugando") {
    this.Pareja.dibujarPareja();
    this.Pareja.caminar();
    this.Pareja.moverPareja();
    textSize(30);
    fill(255, 0, 0);
    text("puntos:"+this.puntaje, 50, 50);  
    this.Tiempo.dibujartiempo();
     this.Tiempo.bajar();
    for (let i=0; i<this.cant; i++) {
      this.perder[i].dibujarSimms();
      this.puntos[i].dibujarGrupo();
     this.perder[i].moverSimms();
     this.puntos[i].moverGrupo();
    }
  }
  if (this.estado==="perdiste"){
  background(0);
  fill(255,0,0);
    textAlign(CENTER, CENTER);
  textSize(30);
  text("perdiste", 
 width/4, height/16, 250,250);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("fueron atrapados por la policia del tiempo, ahora no hay escapatoria. confinados a un futuro desolado ann y roger regresaron a su tiempo", 
 width/4, height/4, 250,250);
 this.Boton.dibujarboton2();

  
  }
  if (this.estado==="ganaste"){
  fill(0,255,0);
    textAlign(CENTER, CENTER);
  textSize(30);
  text("ganaste", 
 width/4, height/16, 250,250);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("felicidades!, ann y roger legaron al hotel sin ser vistos. pero...podras seguir con la misma suerte?", 
 width/4, height/4, 250,250);
 text("puntos:"+this.puntaje, 
 width/4, height/2, 250,250);
this.Boton.dibujarboton2();

  }
}
  actualizar() {
    this.Pareja.moverPareja();
  }
  actualizarb(){
   if (this.Boton.pressed()) {
    this.estado = "inicio";
  }
}
    comenzar() {
    this.estado="jugando";
  }
  
  perder(){
    this.estado="perdiste";
  }
  
  
    ganar(){
    if (this.Tiempo.tiempo<=0){
   this.estado="ganaste"
  }
    }
reiniciar() {
  this.puntaje = 0;
  this.Tiempo = new Tiempo();
  this.Pareja = new Pareja(this.tama);
  this.estado = "inicio";
  for (let i = 0; i < this.cant; i++) {
    this.perder[i] = new Simms(random(0, width - this.tama), 0 + i * this.tama, this.tama);
    this.puntos[i] = new Grupo(random(0, width - this.tama), 0 + i * this.tama, this.tama);
    this.puntos[i].activo = true;
  } 
}
  atrapados() {
    for (let i=0; i<this.cant; i++) {

      let distancia= dist(this.Pareja.pox+this.Pareja.tamo/2, this.Pareja.poy+this.Pareja.tamo/2,
        this.perder[i].posx+this.perder[i].tam/2, this.perder[i].posy+this.perder[i].tam/2);
      if (distancia<this.Pareja.tamo/2+this.perder[i].tam/2){
        this.estado="perdiste";
      }
    }
  }

    maspunto() {
    for (let i=0; i<this.cant; i++){
      
      let distancia= dist(this.Pareja.pox+this.Pareja.tamo/2, this.Pareja.poy+this.Pareja.tamo/2,
        this.puntos[i].p1+this.puntos[i].tamo/2, this.puntos[i].p2+this.puntos[i].tamo/2);
        
      if (distancia<this.Pareja.tamo/2+this.puntos[i].tamo/2 && this.puntos[i].activo===true){
       this.puntaje++;
      this.puntos[i].grupono();
      }
    }
    }
    estados(){
  if (this.estado === "jugando") {
     this.atrapados();
     this.maspunto();
    this. ganar();

    if (keyIsPressed) {
      this.actualizar();
    }
  }
    }
   pantallasgp(){
  if (this.estado === "inicio") {
    if (this.Boton.pressed()) {
      this.comenzar(); 
      return;
    }
  }

  if (this.estado === "ganaste" || this.estado === "perdiste") {
    if (this.Boton.pressed()) {
      this.reiniciar();
    }
  }
}}
