class PAPER{
    constructor(x, y, radius) {
        var options = {
            'isStatic' : true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        ellipse(56, 46, 55, 55);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        this.body.shapeColor = "RED";
        pop();
      }
}