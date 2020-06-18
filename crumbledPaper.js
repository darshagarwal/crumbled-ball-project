class CrubledPaper{
    constructor(x,y,diameter){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2,
        }

        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        
       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        var xpos=pos.x;
        var ypos=pos.y;
        console.log("darsh display "+ xpos);

        circle(pos.x,pos.y,this.diameter);
        keyPressed(pos, xpos, ypos);

    }

}

