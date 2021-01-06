class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 15, 15, options);
      this.width = 15;
      this.height = 15;
      this.image = loadImage("./dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
        stroke("white");
        fill(255,255,255);
        
      ellipse(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, 100, 100)
      pop();
    }
  };