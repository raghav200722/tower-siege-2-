
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform1, platform2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18, box19;
var polygon;
var polygon_image;
var slingshot;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(400,550,800,20);
  platform1 = new Ground(310,350,180,10);
  platform2 = new Ground(540,250,120,10);

 // platform 1 , line bottom.
  box1 = new Box(250,320,30,40,3);
  box2 = new Box(280,320,30,40,3);
  box3 = new Box(310,320,30,40,3);
  box4 = new Box(340,320,30,40,3);
  box5 = new Box(370,320,30,40,3);

  // platform 1, line 2.
  box6 = new Box(280,280,30,40,3);
  box7 = new Box(310,280,30,40,3);
  box8 = new Box(340,280,30,40,3);

  // platform 1, top.
  box9 = new Box(310,240,30,40,3);

  // platform 2, line 3.
  box10 = new BoxRed(500,220,20,30,3);
  box11 = new BoxRed(520,220,20,30,3);
  box12 = new BoxRed(540,220,20,30,3);
  box13 = new BoxRed(560,220,20,30,3);
  box14 = new BoxRed(580,220,20,30,3);

  // platform 2, line2.
  box15 = new BoxRed(520,190,20,30,3);
  box16 = new BoxRed(540,190,20,30,3);
  box17 = new BoxRed(560,190,20,30,3);

  // platform 2, line top.
  box18 = new BoxRed(540,170,20,30,3);

  polygon = new Polygon(100,330,30,30);

  slingshot = new SlingShot(polygon.body,{x:100, y:330});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display();
  platform1.display();
  platform2.display();


  polygon.display();
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();

  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();

  box18.display();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}
