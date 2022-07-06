class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = 0;
        this.acceleration = 10;
        this.maxSpeed=10;
        this.friction=0.05;
        this.angle=0;

        this.sensor= new Sensors(this);
        this.controls = new Controls();
    }

    #move(){
        if (this.controls.forward)
        this.speed+=this.acceleration

    if (this.controls.reverse)
        this.speed-=this.acceleration

    if (this.speed>this.maxSpeed)
        this.speed=this.maxSpeed
        
    if (this.speed<-this.maxSpeed/2)
         this.speed= -this.maxSpeed/2

    if (this.speed>0)
        this.speed-=this.friction

    if(Math.abs(this.speed)< this.friction)
        this.speed=0

    if(this.speed<0)
        this.speed+=this.friction;
    
    // angle must account for the rotation of the unit circle 
    // 90-degrees and counter-clockwise
    if(this.speed!=0){
        const flip= this.speed?1:-1
        if(this.controls.left)
            this.angle+=0.03*flip;

        if(this.controls.right)
            this.angle-=0.03*flip;

            this.y-=Math.cos(this.angle)*this.speed;
            this.x-=Math.sin(this.angle)*this.speed;
}
    }
    update(){

        this.#move()
        this.sensor.update()


}

    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y)//translates to the new position
        ctx.rotate(-this.angle)
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
             this.height,
        )
        ctx.fill();
        ctx.restore();

        this.sensor.draw(ctx)
    }

}

