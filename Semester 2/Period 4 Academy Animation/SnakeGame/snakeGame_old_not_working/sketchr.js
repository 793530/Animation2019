//snake redo

var w = 20;
var cols, rows;
var snake;
var snake2;
var food;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(10);
  cols = floor(width/w);
  rows = floor(height/w);
  var x = floor(random(cols))*w;
  var y = floor(random(rows))*w;

  var loc = createVector(y, x);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
  snake2 = new Snake(loc, vel);

  var u = floor(random(cols))*w;
  var v = floor(random(rows))*w;
  food = new Food(createVector(u, v));

  food.pickLoc();
}

function draw() {
  background(2);
  if(snake.loc.dist(food.loc) === 0){
      food.pickLoc();
      snake.addSegment();
  if(snake2.loc.dist(food.loc) === 0){
      food.pickLoc();
      snake.addSegment();
  }
  snake.run();
  snake2.run();
  food.run();
  //if(snake.loc() = food.loc()
    //snake(loc =(width/2, height/2),(1, 0) ));
  }


function keyPressed(){ //Keys (controls)
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0,-1*w);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0,1*w);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1*w,0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1*w,0);
  }


  if(keyCode === UP_ARROW){
    snake2.vel = createVector(0,-1*w);
  }
  if(keyCode === DOWN_ARROW){
    snake2.vel = createVector(0,1*w);
  }
  if(keyCode === LEFT_ARROW){
    snake2.vel = createVector(-1*w,0);
  }
  if(keyCode === RIGHT_ARROW){
    snake2.vel = createVector(1*w,0);
  }

}


}
