class stone{
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitusion:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
        this.image = loadImage("Sprite/stone.png");
        
    }
    display(){
        push()
        var pos = this.body.position
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(RADIUS)
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
}