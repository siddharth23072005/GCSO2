var car,wall,speed,weight,shapeColour;
function setup() {
  createCanvas(1600,400);
 car=  createSprite(400, 200, 50, 50);
 wall = createSprite(1500,200,60,height/2)
  speed = random(55,90);
  weight = random(500,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if (wall.x-car.x<(car.width+wall.width)) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if (deformation>180) {
      car.shapeColour = colour(0,300,380);
    }
    if (deformation<180 && deformation>100) {
      car.shapeColour = colour(300,200,350);
    }
    if (deformation<100) {
      car.shapeColour = colour(40,70,100);   
     }
    
  } 
  drawSprites();
}