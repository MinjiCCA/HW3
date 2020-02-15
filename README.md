# Hw3
SCIMA Computational Practices 1

Question answer for SCIMA / HW 3


*What code draws the blades of grass?
:
 Line 9,10,11,12

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();
}

*What code makes the "lawnmower" come by? How often does it come by?
:
Code 21,22,23,24,25

  if (random(1000) > 999) {
    fill(255);//white box sliding in
    rect(0, 0, width, height-15);
    h = 10;//reset
  }

Whenever the if statement becomes true,  it applies.

*What's the point of the h variable?
:
Where the grass starts to grow.


*What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
:

It indicates the angle of how much the grass is tilted.
