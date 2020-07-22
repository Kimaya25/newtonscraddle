class bob{
    constructor(x,y){
        var options = {
            restitution : 1,
            friction : 0.3,
            density : 0.2
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
        
    }
}