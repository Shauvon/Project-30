
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2
var ball;
var slingShot;
var polygon_img;

function preload(){
// polygon_img=loadImage("polygon.png");
// backgroundImg=loadImage("bg.png");
}

function setup(){
engine = Engine.create();
world = engine.world;

createCanvas(900, 400);
ground = new Ground();
stand1 = new stand(380,300,270,10);
stand2 = new Stand(700,200,200,10);

//level one
block1 = newBlock(280,275,30,40)
block2 = newBlock(310,275,30,40)
block3 = newBlock(340,275,30,40)
block4 = newBlock(370,275,30,40)
block5 = newBlock(400,275,30,40)
block6 = newBlock(430,275,30,40)
block7 = newBlock(460,275,30,40)
block8 = newBlock(490,275,30,40)
//level two
block9 = newBlock(310,235,30,40)
block10 = newBlock(340,235,30,40)
block11 = newBlock(370,235,30,40)
block12 = newBlock(400,235,30,40)
block13 = newBlock(430,235,30,40)
block14 = newBlock(460,235,30,40)
//level three
block15 = newBlock(340,195,30,40)
block16 = newBlock(370,195,30,40)
block17 = newBlock(400,195,30,40)
block18 = newBlock(430,195,30,40)
//level four 
block19 = newBlock(370,155,30,40)
block20 = newBlock(400,155,30,40)
//level five 
block21 = newBlock(385,115,30,40)


//set two
//level one 
blocks1 = newBlock(640,275,30,40)
blocks2 = newBlock(670,175,30,40)
blocks3 = newBlock(700,175,30,40)
blocks4 = newBlock(730,175,30,40)
blocks5 = newBlock(760,175,30,40)
//level two
blocks6 = newBlock(670,135,30,40)
blocks7 = newBlock(700,135,30,40)
blocks8 = newBlock(730,135,30,40)
//level three
blocks9 = newBlock(700,95,30,40)

//ball with slings
ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new slingShot(this.ball,{x:200,y:200});

}

function draw(){
//background(backgroundImg);
background("white");
Engine.update(engine);


//ground.display();
strokeWeight(2);
stroke(15);

stand1.display();
stand2.display();

stroke(15);
fill("black");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
stroke(15)
fill(orange)
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
stroke(15);
fill("voilet")
block15.display();
block16.display();
block17.display();
block18.display();
stroke(15)
fill("green")
block19.display();
block20.display();
stroke(15);
fill("blue")
block21.display();

stroke(15)
fill("red")
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
stroke(15)
fill("yellow")
block6.display();
blocks7.display();
blocks8.display();
stroke(15)
fill("pink")
blocks9.display();
text("drag the line and release to hit the boxes",600, 250);
//imageMode(CENTER)
//ball = loadImage(polygon_img, ball.position.x-50,ball.position.y-20,40,40)
//ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);
slingShot.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}


