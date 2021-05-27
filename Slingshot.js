class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Point B created as Physic Engine does not record Point B
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        
    }
//Making the BodyA empty (Null means empty)
    fly () {

    this.slingshot.bodyA = null

    }

    display(){

        //Only if there is a body A in slingshot, then only the statements inside will be executed
        if(this.slingshot.bodyA){

            var pointA = this.slingshot.bodyA.position;

            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);


        }
        
    }
    
}