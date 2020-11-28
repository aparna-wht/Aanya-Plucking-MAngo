const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
var mango,ground;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
    

	//tree1 = createSprite(400,350,200,200);
	
//Create the Bodies Here.
	
	tree1 = new ped(1100,250,400,400);
	//ground = new Ground(750,650,1300,10);
	mango = new Mangoes(500,200,100,100);
   ///Body.scale(tree1.body,2,2);
	

	Engine.run(engine);
  
}


function draw() {

  //rectMode(CENTER);
  background(0);
 // Engine.update(engine);
 image(boy ,200,400,200,300);
  tree1.display();
  //ground.display();
  mango.display();
 
}



