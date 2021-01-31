
var cat, mouse;
var cat1Img,cat2Img,cat3Img,cat4Img;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;
var garden , gardenImg;


function preload() {

    //load the images here
    cat1Img = loadImage("images/cat1.png");
    cat2Img = loadImage("images/cat2.png");
    cat3Img = loadImage("images/cat3.png")
    cat4Img = loadImage("images/cat4.png");

    mouse1Img = loadImage("images/mouse1.png");
    mouse2Img = loadImage ("images/mouse2.png");
    mouse3Img = loadImage("images/mouse3.png");
    mouse4Img = loadImage("images/mouse4.png");

    gardenImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    
    //set garden background
    garden = createSprite(300,300,50,50)
    garden.addImage("garden",gardenImg);

    //create tom and jerry sprites here
    cat = createSprite(490,500);
    cat.addImage(cat1Img);
    cat.scale = 0.1;

    mouse = createSprite(100 , 500);
    mouse.addImage(mouse1Img);
    mouse.scale = 0.1;
    cat.addAnimation("catlastimage", cat4Img);
    cat.addAnimation("catRunning" , cat2Img);
}


function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <= 80) {
      // if(cat.collide(mouse)) {
      //  console.log('touching');       
        cat.changeAnimation("catlastimage");
        cat.velocityX = 0;

    }
    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;        
        cat.changeAnimation("catRunning");    
    }
}

