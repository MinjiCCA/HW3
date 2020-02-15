function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;//about where the grass stands as a row
var h = 10;//height of the grass

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-70, 10), height-10-random(h));
  //x+random(-10,10) tells how tilted the grass is
  //height-10-ranndom(h) tells the height of the line
  noStroke();//drawing grass

  x = x + 10;//makes the grass drawn as a entire row

  if (x > width) {
    x = random(10);
    h = h + 3;
  }//makes the grass grow as it goes
  
  if (mouseIsPressed) {
    fill(255);//white box sliding in
    rect(0, 0, width, height-15);
    h = 0;//reset
  }


  fill(40, 100, 60);
  rect(0, height-10, width, 10);//rectangle at the bottom
  
}
