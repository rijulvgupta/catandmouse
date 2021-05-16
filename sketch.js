
function preload() {
    //load the images here
    backround = loadImage("images/garden.png")
    mouse1 = loadImage("images/mouse1.png")
    cat1 = loadImage("images/cat1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png")
    cat3Img = loadAnimation("images/cat4.png")
    mouse4Img = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    background = createSprite(300,180,900,900)
    background.addImage(backround)
    background.scale = 0.6

    mouse = createSprite(140,300,10,10)
    mouse.addImage(mouse1)
    mouse.scale = 0.08

    cat = createSprite(500,310,50,50)
    cat.addImage(cat1)
    cat.scale = 0.1

    //create tom and jerry sprites here
    cat.setCollider("circle",20,10,670);
    cat.debug = false

    mouse.setCollider("circle",20,10,320);
    mouse.debug = false

}

function draw() {
    //Write condition here to evalute if tom and jerry collide
 
    if (keyDown("LEFT_ARROW")){
        meow();
    }
    
    if (cat.isTouching(mouse)) {
        cat.velocityX = 0;
        cat.addAnimation("stop",cat3Img)
        cat.changeAnimation("stop")
       
        mouse.addAnimation("stop1",mouse4Img)
        mouse.changeAnimation("stop1")

      }
      


    drawSprites();
}
function meow(){


  //For moving and changing animation write code here

  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.changeAnimation("mouseTeasing");
  cat.addAnimation("catRunning", cat2Img)
  cat.changeAnimation("catRunning")
cat.velocityX = -4

  mouse.frameDelay = 7;

}


