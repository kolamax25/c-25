class Bird extends Baseclass{
    constructor(x, y) {
      super(x, y, 45, 45);
      this.image = loadImage("sprites/bird.png")
    };

    display(){

      this.body.position.x = mouseX
      this.body.position.y = mouseY

      super.display();
    }
  };
  