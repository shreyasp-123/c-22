const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball, ground
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;

  var ground_options = {isStatic: true}
  ground = Bodies.rectangle(400, 390, 800, 10, ground_options);
  World.add(world, ground);

  var ball_options = {restitution: 1.5, friction: 2, density: 1}
  ball = Bodies.circle(400, 100, 40, ball_options)
  World.add(world, ball)
  console.log(ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 40, 40)
}