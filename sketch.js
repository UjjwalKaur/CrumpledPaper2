
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var body1, body2, body3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,50,20);
	ground = new Ground(400,670,800,20);

	body1 = new Box(600, 650, 200,20);
	body2 = new Box(500, 610, 20, 100);
	body3 =new Box(700, 610, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  body1.display();
  body2.display();
  body3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:7,y:-8});
	}
}



