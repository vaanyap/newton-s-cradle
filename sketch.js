const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	var ball_option = {
		restitution :1,
		density : 0.8,
		friction :0 ,
		isStatic: false
	}
	ball1 = Bodies.circle(315,500,20 ,ball_option );
	ball2 = Bodies.circle(355,500,20,ball_option);
	ball3 = Bodies.circle(395,500,20,ball_option);
	ball4 = Bodies.circle(435,500,20,ball_option);
	ball5 = Bodies.circle(475,500,20,ball_option);

	rope1 = new Rope(ball1,roof,-85,0);
	rope2 = new Rope(ball2,roof, -45,0);
	rope3 = new Rope(ball3,roof,-5,0);
	rope4 = new Rope(ball4,roof, 35,0);
	rope5 = new Rope(ball5,roof, 75,0);

	World.add(world,ball1);
	World.add(world,ball2);
	World.add(world,ball3);
	World.add(world,ball4);
	World.add(world,ball5);
	Engine.run(engine);

	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);


  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipseMode(RADIUS);
  ellipse(ball1.position.x, ball1.position.y,20);
  ellipse(ball2.position.x, ball2.position.y,20);
  ellipse(ball3.position.x, ball3.position.y,20);
  ellipse(ball4.position.x, ball4.position.y,20);
  ellipse(ball5.position.x, ball5.position.y,20);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
	if(keyCode == UP_ARROW){
	  Matter.Body.applyForce(ball1,ball1.position,{x:-50,y:-45});;

	}
  
  }