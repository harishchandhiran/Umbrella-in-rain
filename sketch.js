const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ball;

var drops = [];

function setup() {
  //Creates the canvas.
  createCanvas(300,460);

  engine = Engine.create();
  world = engine.world;

  ball = new Sphere(75,400,200);
  ball.scale = 1.5;
}

function draw() {
  //Makes the background colour black.
  background(255); 

  //Updates the engine.
  Engine.update(engine);

  ball.display();

  //Displays the drops.
  for(var a = 0; a < drops.length; a++){
    drops[a].display();
  }

    drops.push(new RainDrops(random(0,500),0,10));
}
