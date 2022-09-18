

class Platform{

  constructor(x, y, width, height){
    this.x = x - width/2;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vel = 10;

  }

  move(keyCode) { //look in to switch statements
    if (keyCode == LEFT_ARROW && this.x > 0) {
      this.x-=this.vel;
    } else if (keyCode == RIGHT_ARROW && (this.x + this.width) < width) {
      this.x+=this.vel;
    }
  }

  draw(){
    // Platform
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  }

}
