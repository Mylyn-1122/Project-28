class mango{
    constructor(x, y, r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        this.image = loadImage("Sprite/mango.png");
        World.add(world, this.body);
    }

    display(){
        push()
        var pos = this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
}