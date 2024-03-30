var bg,bgImg;
var player, shooterImg, shooter_shooting;

var bullet, bulletImg;

var zombieGroup
var zombie;
var zombie1, zombie2, zombie3, zombie4;
var score;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/backgournd.png")

  bulletImg = loadImage("assets/bullet1.png");

  zombie = loadImage("assets/zombie.png");
  zombie1 = loadImage("assets/zombie.png");
  zombie2 = loadImage("assets/zombie.png");
  zombie3 = loadImage("assets/zombie.png");
  zombie4 = loadImage("assets/zombie.png");

}

function setup() {
  
  
  
  createCanvas(windowWidth, windowHeight);

  //adding the background image
  bg = createSprite(displayWidth / 2-20 , displayHeight /2-40 ,20,20)
bg.addImage(bgImg)
bg.scale  = 1.45;
  

//creating the player sprite
player = createSprite(displayWidth-1500, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   bullet = createSprite(displayWidth-1500, displayHeight-300, 50, 50);
   bullet.addImage(bulletImg);
   bullet.scale = 0.05;
   bullet.visible=false;
   bullet.setCollider("rectangle",0,0,300,300);
   bullet.debug = true

  
  score = 0
  
  zombieGroup = createGroup();

}

function draw() {
  background(0); 

 


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 

  player.addImage(shooter_shooting)
  
  bullet = createSprite(displayWidth-1500, displayHeight-300, 50, 50);
  bullet.addImage(bulletImg);
  bullet.scale = 0.05;
  bullet.visible=false;
  bullet.setCollider("rectangle",0,0,300,300);
  bullet.debug = true
  
  bullet.y = player.y - 40;
  bullet.visible=true;
  bullet.velocityX = 20;



 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg);
  
}


text("Score: "+ score, 200,50);



spawnZombie();



drawSprites();

}

function spawnZombie() {
  if (frameCount % 60 === 0){
zombie = createSprite(1500,300, 50, 50)
//zombie.addImage(zombie);
zombie.scale = 0.2;
zombie.debug = true
zombie.setCollider("rectangle",0,0,300,300);
zombie.velocityX = Math.round(random(-1,-4))
zombie.y = Math.round(random(displayWidth /2 -20, displayHeight /2 -100));
 
var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: zombie.addImage(zombie1);
              break;
      case 2: zombie.addImage(zombie2);
              break;
      case 3: zombie.addImage(zombie3);
              break;
      case 4: zombie.addImage(zombie4);
              break;
  }
  zombieGroup.add(zombie);
}
}