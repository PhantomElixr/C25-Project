
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3, bird,ground,dusbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(700,150,100,10);
	box2 = new Box(650,150,10,100);
	box3 = new Box(750,150,10,100);
	ground = new Ground(400,180,800,20)
	bird = new Bird(100,100)
	dusbin = new Dustbin(700,100);
	Engine.run(engine);
  
}


function draw() {
 	rectMode(CENTER);
 	background(0);
	box.display();
	box2.display();
	box3.display();
	bird.display();
	ground.display();
	dusbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bird.body,bird.body.position,{x: 15,y: -15})
	}
}



