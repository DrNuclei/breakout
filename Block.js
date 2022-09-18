class Block {
  constructor(x, y, str, colour, width, height) {
    this.width =  width;
    this.height = height;
    this.str = str;
    this.colour = colour;
    this.x = x;
    this.y = y;
  }
  checkHit(ball, str){
    ball.x;
    ball.y;

  }
  draw(){
    //Hit block
    fill(225);
    rect(this.x, this.y, this.width, this.height);

  }
}
