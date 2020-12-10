var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 100);
  fixedRect=createSprite(200, 100, 100, 50);
  
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);

if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  ){

  
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="blue";
}else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

  drawSprites();
}