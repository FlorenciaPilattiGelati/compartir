class juego{
  constructor(cant, tama){
   this.pareja= new pareja(tama);
    this.obstaculo=[];
    this.puntaje=0;
    this.comienzo = "inicio";
    for (let i=0; i<this.cant; i++) {
      this.obstaculo1[i]= new grupo(random(0,640), 0, tama);
      this.obstaculo2[i]= new simms(random(0,640), 0, tama);
    }
    
    
  }
    
