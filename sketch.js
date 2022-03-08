var jardim,eu,tu
var bob,cat3,cat2
var bob1,bob3,bob2
function preload() {
jardim=loadImage("images/garden.png")
bob1=loadAnimation("images/mouse1.png")
bob2=loadAnimation("images/mouse2.png","images/mouse3.png")
bob3=loadAnimation("images/mouse4.png")
bob=loadAnimation("images/cat1.png")
cat2=loadAnimation("images/cat2.png","images/cat3.png")
cat3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    eu=createSprite(750,700)
    tu=createSprite(100,700)
eu.addAnimation("bobb",bob)
tu.addAnimation("bobbb",bob1)
eu.scale=0.2
tu.scale=0.2




}



function draw() {

    background(jardim);
    if (eu.isTouching(tu)) {
    eu.velocityX=0  
    eu.addAnimation("bobstop",cat3)
eu.changeAnimation("bobstop")
tu.addAnimation("bobl2",bob3)
tu.changeAnimation("bobl2")
}


    drawSprites();
}


function keyPressed(){
if(keyDown("w")){
eu.velocityX=-5
eu.addAnimation("bobcaminhando",cat2)
eu.changeAnimation("bobcaminhando")
tu.addAnimation("bobl",bob2)
tu.changeAnimation("bobl")

}


}
