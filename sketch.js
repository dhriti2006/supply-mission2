var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,package_options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//var package_options={restitution:0.7}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	box1 = new Box(400,645,200,20);
	box2 = new Box(500,630,20,100);
	box3 = new Box(300,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

    
	//ground=new Ground();
	
  box1.display();
  box2.display();
  box3.display();

	
  drawSprites();
 
}











    





