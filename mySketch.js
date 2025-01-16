/**
 * Made with p5play!
 * https://p5play.org
 */

// Learn more about p5play here -> https://p5play.org/learn

let box;

function setup() {
	// creates a canvas that fills the screen
  new Canvas();
  world.gravity.y = 10;
  floor = new Sprite();
	//floor.y = 500;
	floor.w = 500;
	floor.h = 5;
  floor.rotation = 5;
	floor.collider = 'static';
  console.log("Hello")
}

function draw() {
  clear();
  //textSize(24);
  //textAlign(CENTER);
	//fill(200);
  //text('Tap to create a new sprite, drag to throw it!', canvas.w / 2, canvas.h / 2);


  if (mouse.presses()) {
		box = new Sprite(mouse.x, mouse.y);
    box.diameter = 50;
	}
	if (mouse.dragging()) {
		//box.moveTowards(mouse); // throw the box!
	}

	// if the user didn't throw the box,
	// then give it a random speed and direction
	if (mouse.released() && !mouse.dragged()) {
		//box.speed = random(0, 5);
		//box.direction = random(0, 360);
	}
}