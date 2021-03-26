class Box
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        World.add(myWorld,this.body);
        this.width=width;
        this.height=height;
        
    }

    display()
    {
        var pos=this.body.position;
        var ang= this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);

        rectMode(CENTER)
        fill(255);
        rect(0,0,this.width,this.height);
       
        pop();
    }
}   