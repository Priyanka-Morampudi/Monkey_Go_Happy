var monkey , monkey_running
var banana ,bananaImage, rock, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(700,600);
  
  //create monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width/2;
  console.log(ground.x)
  
}

function draw() {
  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  if(ground.x<0){
     ground.x = ground.width/2;
    
     }
  
  if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13; 
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
  
    spawnFood();
    spawnObstacles();
  
  drawSprites();
  
}

function spawnFood(){
  if (frameCount%80 === 0){
    var banana = createSprite(620,190,50,50);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-4        
    banana.lifetime = 220;
    foodGroup.add(banana);

  }

}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(500,320,50,50);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.velocityX = -6;           
   obstacle.scale = 0.2; 
   obstacle.lifetime = 300;
   obstaclesGroup.add(obstacle);
 }
}
