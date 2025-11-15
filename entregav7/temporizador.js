class Tiempo{
constructor(){
  this.tiempo=45
}
dibujartiempo(){
  textSize(30);
fill(255, 0, 0);
  text("tiempo:"+this.tiempo, 200, 50);  
}
bajar(){
    if (frameCount % 60===0) { 
    this.tiempo --;
  }
}
}
