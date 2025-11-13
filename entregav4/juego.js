class Juego{
  constructor(canti,tam){
    this.tama=tam;
    this.cant=canti
    this.Pareja=new Pareja(tam);
    this.perder=[];
    this.puntos=[];
    for (let i=0; i<this.cant; i++) {
    this.perder[i]= new Simms(random(0,width-tam), 0, tam);
    this.puntos[i]= new Grupo(random(0,width-tam), 0, tam);
    this.puntaje=0;
    this.estado="inicio";
  }

}
dibujar(){
   if (this.estado ==="inicio") {
      fill(200);
      rect(0, 0, width, height);
      fill(0, 0, 255);
      textSize(50);
      text("carrera contra el tiempo", 200, 200);
    }
    
    if (this.estado==="jugando") {
    this.Pareja.dibujarPareja();
    this.Pareja.moverPareja();
    textSize(30);
    fill(255, 0, 0);
    text("puntos: "+this.puntaje, 50, 50);   
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
  
  }
}
  actualizar() {
    this.Pareja.moverPareja();
  }
    comenzar() {
    this.estado="jugando";
  }
  
  perder(){
    this.estado="perdiste";
  }
  
  
  
  chocar() {
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
}
