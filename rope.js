class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB:  bodyB,
           pointB : {x: this.offsetX , y: this.offsetY}
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);

    }
    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        strokeWeight(5);
        stroke(255,255,255);
        line(pointA.x,pointA.y,pointB.x,pointB.y);


    }
}