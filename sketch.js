
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4;
var roof1,rope1,rope2,rope3,rope4;
var bob5,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 bob1 = new bob(280,400);
	 bob2 = new bob(360,400);
	 bob3 = new bob(300,400);
	 bob4 = new bob(340,400);
	 bob5 = new bob(380,400)
	 roof1 = new roof(300,50);
	 rope1 = new rope(bob1.body, roof1.body,100,0);
	 rope2 = new rope(bob2.body,roof1.body,50,0);
	 rope3 = new rope(bob3.body,roof1.body,-50,0);
	 rope4 = new rope(bob4.body,roof1.body,-100,0);
	 rope5 = new rope (bob5.body,roof1.body,0,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  bob5.display();
  rope5.display();
  
  drawSprites();
 
}



