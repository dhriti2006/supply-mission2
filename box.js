class Box
{
    constructor(x,y,w,h)
    {
        var box_options={restitution:0.7}

        this.body= Bodies.rectangle(x,y,w,h,box_options);
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
         World.add(world,this.body)
    }

    display()
    {
        var pos= this.body.position
        var angle = this.body.angle
        push() 
        translate(pos.x,pos.y)
        rotate(angle)

        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width,this.height );
        pop()

    }

}