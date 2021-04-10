class Girl{
    constructor(x, y, width, height){
        var option={
            density:1,
            frictionAir:1
            
        }
        this.image =loadImage ("superhero.png");
        this.body = Bodies.rectangle (x, y, width, height, option);
        World .add(world, this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        
        push ();
        translate (pos.x, pos.y);
        imageMode(CENTER);
        image (this.image,0,0,this.width,this.height);
        pop ();
    }
}
