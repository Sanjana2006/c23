const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var box1, box2, ground;

function setup() {
  createCanvas(400,400);
  myEngine= Engine.create();
  myWorld= myEngine.world;
  
  var options= {
    isStatic: true
  }

  ground= Bodies.rectangle(200,390,200,20,options);
  World.add(myWorld,ground);
  


  box1= new Box(240,100,50,50);
  box2= new Box(200,200,50,50);
}

function draw() {
  background("lightblue");  
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  box1.display();
  box2.display();
}