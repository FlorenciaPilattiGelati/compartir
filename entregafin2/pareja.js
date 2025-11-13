class Pareja{
constructor(anch){
  this.pox=320;
    this.poy=400;
    this.tamo=anch;
}
dibujarPareja(){
  fill(0, 0, 255);
    rect(this.pox, this.poy, this.tamo, this.tamo);
  
}
  moverPareja() {
    if (keyCode===LEFT_ARROW) {
      this.pox--;
    }

    if (keyCode===RIGHT_ARROW) {
      this.pox++;
    }
  }

}
