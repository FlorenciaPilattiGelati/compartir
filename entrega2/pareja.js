class pareja{
  constructor(tamaño){
  this.x=320;
    this.y=400;
    this.tam=tamaño;
    this.alto=this.tam;
  }
  
  }

  dibujarpar() {
   image(pareja, this.x, this.y, this.tam, this.alto);
  }

  moverpar() {
    if (keyCode===LEFT_ARROW) {
      this.x--;
    }

    if (keyCode===RIGHT_ARROW) {
      this.x++;
    }
  }

   choquegrupo(otro) {
    let contacto=this.x+this.tam>otro.pX && this.x < otro.pX + otro.tam &&
      this.y + this.alto>otro.pY && this.y <otro.pY +otro.tam;

    return contacto;
  }
  chocarsimms(otro) {
    let contacto=this.x+this.tam>otro.pX && this.x < otro.pX + otro.tam &&
      this.y + this.alto>otro.pY && this.y <otro.pY +otro.tam;

    return contacto;
  }
  
  
  
  
  
  
  
  
}
