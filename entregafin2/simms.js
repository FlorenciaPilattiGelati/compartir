class Simms{
  constructor(x,y,ta){
    this.posx=x;
    this.posy=y;
    this.tam=ta
    this.activo=true;
  }
dibujarSimms(){
  fill(255,0,0);
  rect(this.posx, this.posy, this.tam, this.tam);
}

moverSimms(){
      if (this.posy<height) {
      this.posy=0;
    }
    this.posy++;
  }
}
