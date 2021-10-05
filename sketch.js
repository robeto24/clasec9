
var box;



function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50);





}

function draw() 
{
  background(20);


if(keyIsDown()){

box.velocityY=-11;
}
/*
if(keydown("s")){

  box.velocityY=11;
  
}

if(keyDown("d")){

  box.velocityX=11;
  
}

if(keyDown("a")){

box.velocityX=-11;
}
*/
  drawSprites();

}




