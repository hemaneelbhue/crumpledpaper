class paper
{
	constructor(x,y,r)
	{
        var options={
            isStatic:false,
            restitution:0.5,
            density:0.4,
            friction:0.6,
        }
		this.x=x;
		this.y=y;
        this.r=r;
        this.img=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y)
        imageMode(CENTER)
        image(this.img,0,0,this.r,this.r) 
        pop()
    }
}