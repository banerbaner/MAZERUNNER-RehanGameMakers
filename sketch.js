var gamestate, ball, wall, wall0 ,wall1, wall2, wall3, wall4, wall5, win, x, y;

function setup() {
  //defining variables sprites
ball = createSprite(200,200,20,20);
wall = createSprite(3250,1000,150,650);
wall0 = createSprite(1111,1111,400,100);
wall1 = createSprite(750,1000,150,450);
wall2 = createSprite(1234,1234,800,400);
wall3 = createSprite(1235,1253,300,900);
wall4 = createSprite(7097,8908,50,700);
wall5 = createSprite(1878,1482,400,400);
win = createSprite(2313,6749,100,100);

//colouring ball
ball.shapeColor = "blue";

//colouring walls
wall.shapeColor = "red";
wall0.shapeColor = "red";
wall1.shapeColor = "red";
wall2.shapeColor = "red";
wall3.shapeColor = "red";
wall4.shapeColor = "red";
wall5.shapeColor = "red";
win.shapeColor = "green";

//defining game state
gamestate = "start";

//defining variable values for the maze to move
y = 0;
x = 0;

  createCanvas(400, 400);
}


function draw() {
  
  //clearing the screen
  background(280);
  
  //starting game
  if(gamestate==="start"){
    line(150,275,250,275);
    line(150,330,250,330);
  textSize(15);
  fill("indigo");
  text("Hey There!",x+175,y+20);
  text("Complete the",x+155,y+40);
  text("maze",x+185,y+60);
  text("to win",x+180,y+80);
  fill("red");
  textSize(24);
  text("THE",x+175,y+110);
  text("MAZE",x+165,y+130);
  text("QUEST",x+157,y+150);
  text("LAVA",165,325);
  textSize(9);
  text("-REHAN SIDDIQUI",x+170,y+159);
  fill("indigo");
  textSize(15);
  text("This is you",x+150,y+185);
  line(x+170,y+185,x+175,y+200);
  line(x+175,y+200,x+195,y+200);
  text("Use the",x+170,y+225);
  text("Arrow Keys",x+165,y+240);
  text("to",x+195,y+255);
  text("move around",x+160,y+270);
  text("Beware of the",150,290);
  text("wall cuz that's",150,305);
  fill("black");
  text("Press space",x+155,y+345);
  text("to begin your",x+155,y+360);
  text("mazeful",x+170,y+375);
  text("journey",x+170,y+390);
  //if space pressed game begins
  if(keyWentDown("space")){
    gamestate = "play";
  }
  
  }//------------------------------------------------------------------------
 
  
  
  //giving y positions for walls
  wall.y = y+275;
  wall1.y = y+175;
  wall0.y = y+450;
  wall2.y = y-300;
  wall3.y = y;
  wall4.y = y+425;
  wall5.y = y+800;
  win.y = y+550;
  
  
  //giving x positions to walls
  wall1.x = x+75;
  wall.x = x+325;
  wall0.x = x+200;
  wall2.x = x+300;
  wall3.x = x-250;
  wall4.x = x+425;
  wall5.x = x+200;
  win.x = x+200;
  
  
 //make the walls unmovable by the ball 
  ball.collide(wall);
  ball.collide(wall0);
  ball.collide(wall1);
  ball.collide(wall2);
  ball.collide(wall3);
  ball.collide(wall4);
  ball.collide(wall5);
  
  
  
  
  if (gamestate==="play"){
  
  //adding controls to the ball
 
  if(keyDown("left")){//left
    x = x+5;
  }
  if(keyDown("right")){//right
   x = x-5;
  }
  if(keyDown("up")){//up 
   
    y = y+5;
  }
  if(keyDown("down")){//down
    y = y-5;
  }
  
  }


//if ball touches walls, game over
if(ball.x>200 || ball.x<200 || ball.y>200 || ball.y<200 || x<=-200 || x>=300 || y<=-400){
  gamestate = "dead";
}

//dead ending
if(gamestate==="dead"){
   x = 0;
   y = 0;
   ball.x = 200;
   ball.y = 200;
  text("You Died",175,185); 
  text("Press SPACE to",155,225);
  text("Start Again",172,240);
}


//winning
if(win.isTouching(ball)){
  gamestate="win";
}

if(gamestate==="win"){
  background("blue");
  fill("green");
  text("YOU WIN",170,190);
  x=0;
  y=0;
}


//reset
if(gamestate==="dead" && keyWentDown("space")){
  gamestate = "start";
}


//adding end text
text("THE END",x+167,y+550);

//drawing Sprites
drawSprites();

}
