var car,wall;
var speed,weight;
var deformation
function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 200, 50, 50);
  car.shapeColor=rgb(255,255,255);
  //car.debug=true;
  wall=createSprite(1500,200,60,200);
  wall.shapeColor=rgb(80,80,80);
  //wall.debug=true;
  speed=random(40,120);
  weight=random(1000,2000);
  car.velocityX=speed;
  
}

function draw() {
  background(0,0,0); 
  if(wall.x-car.x <= wall.width/2 + car.width/2){
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>=180){
      car.shapeColor=rgb(255,0,0);
    }
    if(deformation>100 && deformation<180){
      car.shapeColour(230,230,0);
    }
    if(deformation<=80){
      car.shapeColor(0,255,0);
    }

  }
  drawSprites();
}