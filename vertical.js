
var ballY = 100;
var ballSpeed = 3;

var ballY2 = 100;
var ballSpeed2 = 5;

function setup(){
  createCanvas(600,400);
};

function draw(){
  background('#6464FF');
  ellipse(200, ballY,100, 100);
  ellipse(400,ballY2, 50, 50);
  noStroke();
  
  ballY = ballY + ballSpeed;
  ballY2 =  ballY2 + ballSpeed2;
  
  if(ballY > height) {
    ballSpeed = -ballSpeed;
   //instead of saying -2 with the numbers, put variables so we just have to change   the numbers in variables ballSpeed. / line 3.
  }
  
  //bounce the first ball
  if (ballY < 0) { // when writing if statement, always use 2 equal signs
    //for this part, instead of ballY == 0, it has to be ballY < 0 since we don't want the ball to go over the 0.
    ballSpeed = -ballSpeed;
  }
  
  //bounce the second ball
  if(ballY2 > height) {
    ballSpeed2 = -ballSpeed2;
  }
    
  if (ballY2 < 0) {
    ballSpeed2 = -ballSpeed2;
  }
};

