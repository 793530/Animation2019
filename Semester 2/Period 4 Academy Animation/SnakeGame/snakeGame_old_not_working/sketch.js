var w = 20;
var cols, rows;
var loc;
var snake;
var snake2;
var food;
var gameState = 1;
var snakes = [];



function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(10);
  loadSnakes(2);
  var u = floor(random(cols))*w;
  var v = floor(random(rows))*w;
  food = new Food(createVector(u, v));

  food.pickLoc();
}

function draw() {
  if(snakes[1].loc.dist(food.loc) === 0){
      food.pickLoc();
      snakes[1].addSegment();

  }
  for(var i = 0; i < snakes.length; i++){
    snakes[i].run();
  }

  food.run();





 background(2);

  //Calling segments to add a segement every time food's location is equals to the location of the snake
  //if(snake.loc() = food.loc()
    //snake(loc =(width/2, height/2),(1, 0) ));
  //}

//function gameState(1){
   //document.getElementsByTagName(startscreen)

//}
//function gameState(2){

//Calling segments to add a segement every time food's location is equals to the location of the snake
//if(snakes[1].loc.dist(food.loc) === 0){
    //food.pickLoc();
    //snakes[1].addSegment();

//}
//for(var i = 0; i < snakes.length; i++){
  //snakes[i].run();
//}

//food.run();




//function gameState(3){
//  load.endGame()



//}

function loadSnake(n){

for(var i = 0; i < n; i++){

  cols = floor(width/w);
  rows = floor(height/w);
  var x = floor(random(cols))*w;
  var y = floor(random(rows))*w;
  var loc = createVector(y, x);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
  snakes.push(snake);
}

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

}
