
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyIMG = loadImage("Sprite/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options = {
		isStatic:true
	}

	Ground = new ground(400, 680, 800, 40);

	tree1 = new tree(600, 450);

	Stone = new stone(220, 560, 40);

	boy = Bodies.rectangle(250, 600, 10, 10, options)
	World.add(world, boy);
	//boy.addImage(boyIMG);

	String1 = new string(Stone.body, {x:220, y:555})

  mango1 = new mango(513, 385, 40);
  mango2 = new mango(567, 288, 30);
  mango3 = new mango(619, 316, 25);
  mango4 = new mango(600, 399, 30);
  mango5 = new mango(659, 374, 40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(200);
  
  drawSprites();

  Ground.display();

  tree1.display();

  imageMode(CENTER);
  image(boyIMG, boy.position.x, boy.position.y, 100, 200)

  Stone.display();  
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(Stone, mango1);
  detectCollision(Stone, mango2);
  detectCollision(Stone, mango3);
  detectCollision(Stone, mango4);
  detectCollision(Stone, mango5);

  console.log(mango1.body);

  text(mouseX + ',' + mouseY, mouseX + 10, mouseY-10)
}

//the detect collition fuction 


function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX,y: mouseY});
}
function mouseReleased(){
    String1.fly();
}

function detectCollision(lstone, lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance <= lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(Stone.body, {x:235, y:420});
		String1.attach(Stone.body)
	}
}
