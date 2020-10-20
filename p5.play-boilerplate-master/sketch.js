var rec1,rec2




function setup() {
  createCanvas(windowWidth,windowHeight);
  rec1=createSprite(windowWidth/2, windowHeight/4, 400, 50);
  rec2=createSprite(200, 200, 50, 100);
  
  rec1.shapeColor="green"
  rec2.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  
  if(mouseDown){
    rec2.x=mouseX
    rec2.y=rec1
  }
  
  if(rec2.x-rec1.x<rec2.width/2+rec1.width/2&&rec1.x-rec2.x<rec1.width/2+rec2.width/2&&rec2.y-rec1.y<rec2.height/2+rec1.height/2&&rec1.y-rec2.y<rec1.height/2+rec2.height/2){
    rec2.shapeColor="yellow"
  }else{
    rec2.shapeColor="red"
  }
  

  drawSprites();
}