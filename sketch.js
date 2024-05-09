let font;
let points = [];
let r = 5; //r =15; //r =25;
let angle = 0;

let myColors = [];
let myRed;
let myPink;
let myPurple;
let myOrange;
let myLavendar;

let x = 50;
let y = 50;

function preload() {
  font = loadFont("Nunito/Nunito-Italic-VariableFont_wght.ttf");
}

function setup() {
  createCanvas(600, 600);

  points = font.textToPoints("ML", 50, 300, 300, {
    sampleFactor: 0.2,
    simplifyThreshold: 0,
  }); //, x, y, x2, y2)
  print(points);

  angleMode(DEGREES);

  myRed = color(232, 0, 50);
  myPink = color(0, 4, 232);
  myPurple = color(119, 61, 255);
  myOrange = color(255, 81, 0);
  myLavendar = color(218, 201, 255);

  myColors = [myRed, myPink, myPurple, myOrange];
  myColors2 = [myRed, myPink, myPurple, myLavendar, myOrange];

  ellipseMode(RADIUS);
  // Set the starting position of the shape
  // xpos = width / 2;
  // ypos = height / 2;
}

function drawInitials() {
  // Draw the initials "ML" in the default position
  stroke(random(myColors2));

  //M shape
  line(70, 100, 70, 200);
  line(70, 100, 120, 150);
  line(120, 150, 170, 100);
  line(170, 100, 170, 200);

  // //L shape
  line(170, 200, 170, 300);
  line(170, 300, 270, 300);

  stroke(random(myColors2));
  // text(mouseX + "," + mouseY, 20, 20);

  //ML 1
  line(300, 100, 300, 150);
  line(300, 100, 325, 125);
  line(325, 125, 350, 100);
  line(350, 100, 350, 150);

  line(350, 150, 350, 200);
  line(350, 200, 400, 200);

  stroke(random(myColors2));

  //ML 2
  line(300, 100, 300, 150);
  line(300, 100, 325, 125);
  line(325, 125, 350, 100);
  line(350, 100, 350, 150);

  line(350, 150, 350, 200);
  line(350, 200, 400, 200);

  stroke(random(myColors2));

  //ML 3
  line(420, 90, 420, 140);
  line(420, 90, 440, 125);
  line(440, 125, 460, 90);
  line(460, 90, 460, 140);

  line(460, 140, 460, 190);
  line(460, 190, 480, 190);

  stroke(random(myColors2));

  //ML 4
  line(370, 280, 370, 480);
  line(370, 280, 390, 330);
  line(390, 330, 410, 280);
  line(410, 280, 410, 480);

  line(410, 480, 410, 530);
  line(410, 530, 430, 530);

  //ML 5

  stroke(random(myColors2));

  line(25, 340, 25, 380);
  line(25, 340, 50, 360);
  line(50, 360, 75, 340);
  line(75, 340, 75, 380);

  line(75, 380, 75, 420);
  line(75, 420, 100, 420);

  stroke(random(myColors2));
  //ML6
  line(220, 370, 140, 460);
  line(220, 370, 215, 420);
  line(215, 420, 270, 420);
  line(190, 510, 270, 420);

  line(190, 510, 150, 550);
  line(150, 550, 200, 570);
}

function draw() {
  // let s = funTime.time();

  background(myLavendar);

  stroke(random(myColors));
  strokeWeight(random(50));
  frameRate(0.4);

  if (key === "w") {
    // separates the intials
    // shifts M up
    //M shape
    line(100, 80, 100, 180);
    line(100, 80, 150, 130);
    line(150, 130, 200, 80);
    line(200, 80, 200, 180);

    // shifts L to the right
    //L shape
    line(320, 300, 320, 400);
    line(320, 400, 420, 400);
  } else if (key === "a") {
    //Shifts the initials to the left

    setInterval(drawInitials(), 4000);
  } else if (key === "s") {
    frameRate(10);

    // this rotates the ML intials at the origin of (50,50)
    translate(x, y);
    rotate(angle);

    //M shape
    line(100, 100, 100, 200);
    line(100, 100, 150, 150);
    line(150, 150, 200, 100);
    line(200, 100, 200, 200);

    //L shape
    line(200, 200, 200, 300);
    line(200, 300, 300, 300);

    //M shape
    line(200, 200, 200, 300);
    line(200, 200, 250, 250);
    line(250, 250, 300, 200);
    line(300, 200, 300, 300);

    //L shape
    line(300, 300, 300, 400);
    line(300, 400, 400, 400);

    x = x + 5;
    angle = angle + 5;
  } else if (key === "d") {
    strokeWeight(2);
    frameRate(2);
    for (let i = 0; i < points.length; i++) {
      // ellipse(points[i].x, points[i].y, 10, 10);
      ellipse(points[i].x + r * sin(angle + i * 25), points[i].y, 10, 10);
      // line(points[i].x, points[i].y, 10, 10);
    }
    angle += 10;

    // setTimeout(drawInitials(), 2000);
  } else {
    //M shape
    strokeWeight(1);
    for (let i = 0; i < points.length; i++) {
      // ellipse(points[i].x, points[i].y, 10, 10);
      rect(points[i].x + r * sin(angle + i * 25), points[i].y, 10, 10);
      // line(points[i].x, points[i].y, 10, 10);
    }
    angle += 10;

    textSize(32); // Set the text size
    fill(0); // Set the fill color (black in this case)

    // Write text
    text("Press on WASD for different effects", 40, 380); // (text, x, y)
  }
}
