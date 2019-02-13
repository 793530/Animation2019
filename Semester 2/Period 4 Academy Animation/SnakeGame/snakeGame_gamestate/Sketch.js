var w = 20;
var cols, rows;
var snake;
var food;
var gameState = 1 ;
var img;

function preload() {
  img = loadImage('startscreen.jpg');
}

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
  var u = floor(random(cols))*w;
  var v = floor(random(rows))*w;
  food = new Food(createVector(u, v));

  food.pickLoc();
}

function draw() {

  if (gameState === 1){
    startGame();

  }
  if (gameState === 2){
    playGame();

  }
  if (gameState === 3){
    endGame();

  }


}

  function startGame(){

    image(img, 0, 0);
    //text('Hit the space bar to play', 100, 300)

    if(keyCode === 32){
      gameState === 2
    }
  }

  function playGame(){
    if(snake.loc.dist(food.loc) === 0){
      food.pickLoc();
      snake.addSegment();
      background(2);

      snake.run();
      food.run();

      if(snake === dead){
        gameState === 3
      }
    }


  }

  function endgame(){
    load.endGame()


    if(keyCode === 32){
      gameState === 2
    }
  }



  function keyPressed(){
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


  }//  +++++++++++++++++++++++++++++++++++++++  end of Sketch
