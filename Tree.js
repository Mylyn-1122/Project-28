class tree{
    constructor(x, y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 1, 1, options);
        World.add(world, this.body);
        this.image = loadImage("Sprite/tree.png");
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 250, 450);
    }
}