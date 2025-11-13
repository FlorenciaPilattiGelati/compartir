class simms{
    constructor(){
  this.px=320;
    constructor(posx, posy, tamañ) {
    this.p1=posx;
    this.p2=posy;
    this.an=tamañ;
     this.al=this.tamañ;
    this.perder=false;
  }

  dibujarsimm() {
    image(simm, this.x this.y, this.an, this.al);
  }
  moversimm() {
    if (this.p2<height) {
      this.p2=0;
    }
    this.p2+=2;   
    this.perder=false;
      
    }

  }
derrota() {
    this.perder=true;
  }
}

}
  
  
  
  
  
}
