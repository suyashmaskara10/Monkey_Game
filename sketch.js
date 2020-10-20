
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivaltime
var invisibleground

function preload(){
  score = 0;
 survivaltime = 0;
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 300);
  
   monkey = createSprite(180,200,20,20);
 monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  obstacleGroup = new Group();
   bananaGroup = new Group();
}



function draw() {
background(300);
  
   fill("black")  
   textSize(20);
   text("Score: "+score,500,50);
   text("Survival Time: "+survivaltime,150,50)

  invisibleground = createSprite(350,245,700,7)
  
  survivaltime = Math.round(frameCount/30)
  
if(keyDown("space")&& monkey.y >= 150) {
    monkey.velocityY = -14;
  }
    monkey.velocityY = monkey.velocityY + 1
   
  ground = createSprite(350,232,700,7);
  ground.velocityX = -6
  
  invisibleground.velocityX = -4
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score +1;
  }
  invisibleground.visible = false;
  monkey.collide(ground);
  obstacleGroup.collide(invisibleground);
  
  obstacleGroup.collide(monkey);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (invisibleground.x < 0){
    invisiblground.x = invisiblground.width/2;
  }
  
  monkey.collide(ground);
  drawSprites();
  obstacles();
  bananas();
}


 function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,205,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.14;
    obstacle.lifetime = 110;
   
   
   
   //adding obstacles to the group
   obstacleGroup.add(obstacle);
 }
}
 function bananas(){
 if (frameCount % 80 === 0){
   var banana = createSprite(600,140,10,40);
   banana.velocityX = -6;
   banana.y = Math.round(random(100,180));
   banana.addImage(bananaImage);
   
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 110;
   
   //adding obstacles to the group
   bananaGroup.add(banana);
 }
}

