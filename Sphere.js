class Sphere{
    constructor(x,y,radius){
        var option = {
            isStatic: true
        }
        this.image = loadImage("umbrella.jpg");
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;

        //Adds the Bodies to the world.
        World.add(world,this.body);
    }

    display(){
        //Stores the position of the bodies inside a variable.
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //Draws the image in the centre of the position that is given.
        imageMode(CENTER);
        //Fills the colour blue to the bodies.
        fill("white");
        //Draws an ellipse in the position of the body.
        image(this.image , 0+75, 0+85, this.radius+125, this.radius+100);
        pop();
    }
}

//110,150