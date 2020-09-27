class Box {
  constructor(x, y, width, height) {
    var options = {
     // isStatic:true,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.Visiblity=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(0);
  fill("turquoise");
  if(this.body.speed<=1){
   //World.remove(world,this.body);
   this.Visiblity=this.Visiblity-10;
    tint(255,this.Visiblity);
  }
    rect(0, 0, this.width, this.height);
    pop();
  }
}
