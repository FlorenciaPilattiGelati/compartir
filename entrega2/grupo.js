   class grupo {
    constructor(posx, posy, tam) {
    this.p1=posx;
    this.p2=posy;
    this.taman=tam;
     this.tamalt=this.tam;
    this.activo=true;
  }

  dibujargrupo() {
    image(grupo, this.p1 this.p2, this.taman, this.tamalt);
  }
  movergrupo() {
    if (this.p2<height) {
      this.p2=0;
    }
    this.p2+=2;   
    this.activo=true;
      
    }

  }
grupopunto() {
    this.activo=false;
  }
}

}
