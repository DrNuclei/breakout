class Ball {
  constructor(x, y, diameter){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.xVel = 0;
    this.yVel = 1;
  }

  collision(object){
    object.x;
    object.y;
    object.width;
    object.height;
    if(this.x > object.x && this.x < object.x + object.width && this.y > object.y && this.y < object.y + object.height){
      return true;
    }
  }

  move(){
    this.y += this.yVel;
  }

  draw(){
    circle(this.x, this.y, this.diameter);
  }
}
