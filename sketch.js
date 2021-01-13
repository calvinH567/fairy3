var starImg, fairyImg, bgImg;
var fairy;
var star, starBody;
var starFallTrue = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
  background(bgImg);

  drawSprites();
  if(keyDown("Left")){
	  fairy.x = fairy.x - 5;
  }
  if(keyDown("Right")){
	  fairy.x = fairy.x + 5;
  }
  if(keyDown("down_arrow")){
	  keyPressedkey();
  }
  star.y = starBody.position.y;
  if(starFallTrue == 1){
	  starBody.position.y = starBody.position.y + 5;
	
  }
}

function keyPressedkey() {
	starFallTrue = 1;
	
}
