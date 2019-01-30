//Kalpa yakupitiyage
//snake2Game
//11/15/2018


function snake2(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.segments2 = [];
  this.segments2.push(createVector(0, 0));

  this.addSegment = function(){
    this.segments2.push(createVector(this.segments2[0].x,this.segments2[0].y));

  }

  this.run = function(){
    this.update();
    this.render();

  }

  this.update = function (){

    for(var i= this.segments2.length - 1 ; i > 0; i--){
      this.segments2[i].x = this.segments2[i-1].x ;
      this.segments2[i].y =  this.segments2[i-1].y;

    }
    this.segments2[0].x = this.loc.x;
    this.segments2[0].y = this.loc.y;


    this.loc.add(this.vel);
    this.loc.x = constrain (this.loc.x,0,width-w)
    this.loc.y = constrain (this.loc.y,0,height-w)
  }
  this.render = function(){
    fill(0,255,0);
    //rect(this.segments2[0].x,this.segments2[0].y ,w,w);
    //rect(this.loc.x,this.loc.y ,w,w);

    for(var i= 0; i < this.segments2.length; i++){
        rect(this.segments2[i].x,this.segments2[i].y,w,w);


    }
  }




}//  +++++++++++++++++++++++++++++++++++++++  end of snake22
