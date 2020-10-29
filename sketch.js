const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 900;

	let chihuahua;
	let cat;
  let poop;
  let droplet;
  let dropletAnim;
  let rain;
  
  


function preload(){
  rain = loadAnimation('img/rain/sprite_00.png','img/rain/sprite_23.png');

  const dropletSpritesheet = loadSpriteSheet('img/droplet copy 2.png', 60, 68, 12);
  dropletAnim = loadAnimation(dropletSpritesheet);
  droplet = createSprite(CANVAS_WIDTH / 2, 650, 60, 68);
  droplet.moveSpeed = 2;

}



function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  chihuahua = new Group();
  poop = new Group();
  cat = new Group();

  droplet.addAnimation("move", dropletAnim);
  droplet.setCollider("circle", 0, 0, 50);

  
	 
  for(var i=0 ; i<5 ; i++){
    var sprite = createSprite(random(0,width), random(0,-600));
    sprite.addAnimation("img/chihuahua/chichi0.png","img/chihuahua/chichi3.png");
    sprite.velocity.y = 8; 
    chihuahua.add(sprite);
    sprite.setCollider("circle", 0,0,10); 
	}
	
  for(var j=0 ; j<2 ; j++){
    var sprite = createSprite(random(0,width), random(0,-600));
    sprite.addAnimation("img/poop/poop0.png","img/poop/poop4.png");
    sprite.velocity.y = 10;
    poop.add(sprite);
    sprite.setCollider("circle", 0,0,10);

  }
	

for(var k=0 ; k<5 ; k++){
    var sprite = createSprite(random(0,width), random(0,-600));
    sprite.addAnimation("img/cat/sprite_0.png","img/cat/sprite_0.png");
    sprite.velocity.y = 8; 
    cat.add(sprite);
    sprite.setCollider("circle", 0,0,10);
  }



}
  
function update(droplet) {
  if (keyDown("left") || keyDown("right")) {

    if (keyDown("left")) {
      droplet.addSpeed(2, 180);
      droplet.mirrorX(-1);
    }
    if (keyDown("right")) {
      droplet.addSpeed(2, 0);
      droplet.mirrorX(1);
    }
  } else {
    droplet.setSpeed(0);
  }
  drawObject(droplet);
}


function drawObject(object) {

  droplet.limitSpeed(droplet.moveSpeed);
  drawSprite(droplet);
}



function draw() {


  animation(rain, 0, 0);

  // animation(droplet, 300, 650)

  update(droplet);


  for(var i = 0; i<chihuahua.length; i++) {
    var p = chihuahua[i];
    if(p.position.y > height)
      p.position.y = 0;
  }
  for(var j = 0; j<poop.length; j++) {
    var s = poop[j];
    if(s.position.y > height)
      s.position.y = 0;
  }

for(var k = 0; k<cat.length; k++) {
    var g = cat[k];
    if(g.position.y > height)
    g.position.y = 0;
  }

  drawSprites();

  cat.collide(droplet);
  poop.collide(droplet);
  chihuahua.collide(droplet);

}
