
let marginGap = 1;
let rowNum = 4;
let blockHeight = 10;
let blockWidth = 60;
let platform;
let blocks = [];
let ball;
let direction;
let scaleFactor = blockWidth;


function numBlockWidth(screenWidth, blockWidth) {
  let numBlocks = (screenWidth/blockWidth);
  let corrNumBlocks = Math.floor(numBlocks)
  let blockFloat = numBlocks - corrNumBlocks;

  return [corrNumBlocks, blockFloat];
}


function setup() {
  createCanvas(1100, 600);

  ball = new Ball(width/2, height * 0.8, 10);

  let numBlockReturn = numBlockWidth(width, blockWidth);

  let numBlocks = numBlockReturn[0] - marginGap;

  let blockAdjust = numBlockReturn[1];

  platform = new Platform(width/2, height * 0.9, 120, 10);


for(let j = 0; j < rowNum; j++) {
    for(let i = 0; i < numBlocks; i++) {
      newblock = new Block((i+((marginGap+blockAdjust)/2))*scaleFactor, (j+6)*blockHeight, 1, "blue", blockWidth, blockHeight);
      blocks.push(newblock)
    }
}

}

function draw() {

  background(220);

  ball.move();

  platform.move(direction);
  if(!keyIsPressed){
    direction = null;
  }

  if(ball.collision(platform)){
    ball.yVel = ball.yVel * - 1;
  }


  ball.draw();

  platform.draw();


  for( let i = 0; i < blocks.length; i++){
    if(ball.collision(blocks[i])){
      ball.yVel = ball.yVel * -1;
    }
    blocks[i].draw()
  }


}

function keyPressed() {
  direction = keyCode;
}
