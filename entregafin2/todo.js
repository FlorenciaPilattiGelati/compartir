class Juego{
  constructor(canti,tama){
    this.tama=tam;
    this.canti=cant
    this.Pareja=new.Pareja(tam);
    this.obstaculo=[];
    this.puntos=[];
    for (let i=0; i<this.cant; i++) {
    this.obstaculo[i]= new Simms(width+random(30,640), 0, tam);
    this.puntos[i]= new Grupo(width+random(30,640), 0, tam);
  }

}
dibujar(){
    this.Pareja.dibujarPareja();
    this.Pareja.moverPareja();
    for (let i=0; i<this.cant; i++) {
      this.obstaculo[i].dibujarSimms();
      this.puntos[i].dibujarGrupo();
     this.obstaculo[i].moverSimms();
      this.puntos[i].moverGrupo();
    }
  }
  actualizar() {
    this.Pareja.moverPareja();
  }

}
