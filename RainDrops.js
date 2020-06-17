//Creates the RainDrops class.
class RainDrops{
    //creates the constructor.
    constructor(x,y,radius){
        //Creates the options.
        var options = { 
            //Gives bouncing effect to the raindrops.
            restitution:0.3,
    }
        //Creates the bodies.
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        //Adds the Bodies to the world.
        World.add(world,this.body);
    }   
    //Displays the Bodies.
    display(){
        //Stores the position of the bodies inside a variable.
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //Draws the ellipse in the centre of the position that is given.
        ellipseMode(RADIUS);
        //Fills the colour blue to the bodies.
        fill(100,0,250);
        //Draws an ellipse in the position of the body.
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}