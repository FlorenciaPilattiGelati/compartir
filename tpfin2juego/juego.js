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
  }

}
dibujar(){
    this.Pareja.dibujarPareja();
    this.Pareja.moverPareja();
    for (let i=0; i<this.cant; i++) {
      this.perder[i].dibujarSimms();
      this.puntos[i].dibujarGrupo();
     this.perder[i].moverSimms();
      this.puntos[i].moverGrupo();
    }
  }
  actualizar() {
    this.Pareja.moverPareja();
  }

  chocar() {
    for (let i=0; i<this.cant; i++) {

      let distancia= dist(this.Pareja.pox+this.Pareja.tamo/2, this.Pareja.poy+this.Pareja.tamo/2,
        this.perder[i].posx+this.perder[i].tam/2, this.perder[i].posy+this.perder[i].tam/2);
      if (distancia<this.Pareja.tamo/2+this.perder[i].tam/2) {
        this.Pareja.pox+=random(-15, 15);
      }
    }
    }
    maspunto() {
    for (let i=0; i<this.cant; i++) {

      let distancia= dist(this.Pareja.pox+this.Pareja.tamo/2, this.Pareja.poy+this.Pareja.tamo/2,
        this.puntos[i].p1+this.puntos[i].tamo/2, this.puntos[i].p2+this.puntos[i].tamo/2);
      if (distancia<this.Pareja.tamo/2+this.puntos[i].tamo/2) {
        this.Pareja.pox+=random(-15, 15);
      }
    }
    }
}
