var bgImg;
var spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4;
var issImg,iss;
var spaceCraft;
var hasDocked=false;
function preload(){
  bgImg=loadImage("images/Docking-undocking/spacebg.jpg");
  spaceCraft1=loadImage("images/Docking-undocking/spacecraft1.png");
  spaceCraft2=loadImage("images/Docking-undocking/spacecraft2.png");
  spaceCraft3=loadImage("images/Docking-undocking/spacecraft3.png");
  spaceCraft4=loadImage("images/Docking-undocking/spacecraft4.png");
  issImg=loadImage("images/Docking-undocking/iss.png");
}
function setup() {
  createCanvas(1000,500);
 iss= createSprite(400, 180, 50, 50);
 iss.addImage(issImg);
 iss.scale=0.7;

 spaceCraft=createSprite(365,360,30,30);
 spaceCraft.addImage(spaceCraft1);
 spaceCraft.scale=0.3;
}

function draw() {
  background(bgImg);  

  if(!hasDocked){
    spaceCraft.position.x=random(380,384);

    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(spaceCraft3);
      spaceCraft.x=spaceCraft-15;
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(spaceCraft4);
      spaceCraft.x=spaceCraft.x+15;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(spaceCraft2);
    }
    if(keyDown(UP_ARROW)){
      spaceCraft.addImage(spaceCraft1);
      spaceCraft.y=spaceCraft.y-10;
    }
  }
  if(spaceCraft.y===205 && spaceCraft.x===363){
    textSize(23);
    fill("white");
    text("Docking Successful!",430,450);
  }
  console.log(mouseX,mouseY)
  drawSprites();
}