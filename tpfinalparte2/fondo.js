class Fondo {
  constructor() {
    this.eny = 0;
  }

  dibujardesierto() {
    image(fondoc, 0, this.eny, width, height);
    image(fondoc, 0, this.eny - height, width, height);

    // movimiento
    this.eny++;

    // reinicio
    if (this.eny > height) {
      this.eny = 0;
    }
  }
}
