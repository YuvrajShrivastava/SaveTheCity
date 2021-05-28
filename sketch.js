
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pc,Npc1,Npc2,bg,bgg,pcA,bui
var wall1,wall2,wall3,wall4,bullet,zom,zi
function preload()
{
	bg = loadImage("bg.png")
	pcA = loadAnimation("c1.png","c2.png","c3.png")
bui = loadImage("ball.png");
zi = loadAnimation("z1.png","z2.png")
}

function setup() {
	createCanvas(800, 400);
	bgg = createSprite(200,200,400,400);
bgg.addImage("gg",bg)

	pc = createSprite(200,200);
	pc.addAnimation("hh",pcA)
	pc.scale = 0.5
	wall1 = createSprite(200,600,1300,10)
	wall2 = createSprite(200,-200,1300,10)
	wall3 = createSprite(850,200,10,900)
	wall4 = createSprite(-450,200,10,900)
	bulletG = createGroup()
	zomG = createGroup();





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  camera.position.x = pc.x
  camera.position.y = pc.y
  pc.collide(wall1);
  pc.collide(wall2);
  pc.collide(wall3);
  pc.collide(wall4);
  
  if(keyWentDown(UP_ARROW)){
	pc.velocityY=-2;
	
	}
	if(keyWentUp(UP_ARROW)){
		pc.velocityY=0;
		}
		  
		if(keyWentDown(DOWN_ARROW)){
			pc.velocityY=2;
			}
			if(keyWentUp(DOWN_ARROW)){
				pc.velocityY=0;
				}
		
				  
  if(keyWentDown(RIGHT_ARROW)){
	pc.velocityX=2;
	}
	if(keyWentUp(RIGHT_ARROW)){
		pc.velocityX=0;
		}
		if(keyWentDown(LEFT_ARROW)){
			pc.velocityX=-2;
			}
			if(keyWentUp(LEFT_ARROW)){
				pc.velocityX=0;
				}
if(keyWentDown("f")){
bullet = createSprite(0,0);
bullet.addImage("ggggggggg",bui)
bullet.scale = 0.1
bullet.x = pc.x
bullet.y = pc.y
bullet.velocityY = -10
bulletG.add(bullet)
}		
if(frameCount%100==0){
zom = createSprite(200,-100,100,100);
zom.x = pc.x
zom.addAnimation("hgrwo",zi);
zom.scale = 0.3
zom.velocityY= 2
zomG.add(zom)

}

if(bulletG.isTouching(zomG)){
	zomG.destroyEach();
	bulletG.destroyEach();
}
  drawSprites();
 
}



