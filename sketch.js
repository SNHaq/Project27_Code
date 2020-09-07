const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(430,200,320,30)
	BO1 = new Bob(340,450,50);
	//rope1 = new Rope(BO1.body, roofObject.body, -bobDiameter*2,0)
	BO2 = new Bob(390,450,50);
	BO3 = new Bob(440,450,50);
	BO4 = new Bob(490,450,50);
	BO5 = new Bob(540,450,50);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,255,0);
  roof.display();
  BO1.display();
  BO2.display();
  BO3.display();
  BO4.display();
  BO5.display();
  //rope1.display();
  drawSprites();
 }