
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin,paperIMG,paper2,bin2,bin3;

function preload()
{
	 paperIMG=loadImage("Crumbled Paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper= new PAPER(60,690,2)
    paper2= new PAPER(60,100,2);     
    bin= new HOLDER(750,300,20,100);
    bin2= new HOLDER(750,300,20,100);
    bin3= new HOLDER(750,300,20,100);
	
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  bin.display();
  drawSprites();
 
}



