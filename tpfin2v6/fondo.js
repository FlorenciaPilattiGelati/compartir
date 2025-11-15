class Fondo{
 constructor(){
    this.posicx=0;
    this.posicy=0;
    this.tamalto=640;
    this.tamancho=480;
    this.activo=true;
  }

dibujarfondo(){
  image(fondodes, this.posicx, this.posicy, this.tamalto, this.tamancho);
}
}
