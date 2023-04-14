var sea;
var ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png"), ("ship-2.png"), ("ship-3.png"), ("ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea.addImage("seaImg", sea);
  ship.addAnimation("shipImg", ship);
}

function draw() {
  background("blue");
    drawSprites();
    
    sea = createSprite (400, 400);
    ship = createSprite (10, 10, 10, 10);
   
    if (sea.x < 0) {
      sea.x = sea.width/2;
    }
    
}

