
var ballX = 0;
var ballSpeed = 3;

var ballY = 100;
var ballSpeed2 = 5;

var ballXY = 0;
var ballSpeed3 = 5;

function setup(){
  createCanvas(400,400);
};

function draw(){
  background('#FF607F');
  ellipse(ballX,300,30, 30);
  ellipse(100,ballY, 30, 30);
  ellipse(ballXY, ballXY, 30, 30);
  noStroke();
  
  ballX = ballX + ballSpeed;
  ballY =  ballY + ballSpeed2;
  ballXY = ballXY + ballSpeed3;
  
  if(ballX > width) {
    ballSpeed = -ballSpeed;
   //instead of saying -2 with the numbers, put variables so we just have to change   the numbers in variables ballSpeed. / line 3.
  }
  
  //bounce the first ball
  if (ballX == 0) { // when writing if statement, always use 2 equal signs
    //for this part, instead of ballY == 0, it has to be ballY < 0 since we don't want the ball to go over the 0.
    ballSpeed = -ballSpeed;
  }
  
  //bounce the second ball
  if(ballY > height) {
    ballSpeed2 = -ballSpeed2;
  }
    
  if (ballY < 0) {
    ballSpeed2 = -ballSpeed2;
  }
  
  //bounce the third ball
  if(ballXY > height){
    ballSpeed3 = -ballSpeed3;
  }
  
  if (ballXY < 0) {
    ballSpeed3 = -ballSpeed3;
  }
};

