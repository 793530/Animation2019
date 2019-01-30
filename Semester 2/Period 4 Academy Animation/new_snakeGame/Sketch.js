//Kalpa yakupitiyage
//SnakeGame
//01/30/2019


var w = 20;
var cols, rows;
var snake;
var food;
var snakes = [];
var loc;

var gameState = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(10);
  loadSnakes(1);
  var u = floor(random(cols))*w;
  var v = floor(random(rows))*w;
  food = new Food(createVector(u, v));

  food.pickLoc();
}

function draw() {
  if(gameState === 1){
     startGame();
  }else if(gameState === 2){
    playGame();

  }else if(gameState === 3){
    endGame();
  }else{
    console.log("error");
  }


}

function startGame(){

}
function playGame(){
  if(snakes[0].loc.dist(food.loc) === 0){
    food.pickLoc();
    snakes[0].addSegment();
  }
  for(var i = 0; i < snakes.length; i++){
    snakes[i].run();
  }
  food.run();

  background(2);
}

function endGame(){

}


function loadSnakes(n){
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
