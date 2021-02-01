class Plane {
    constructor(x, y, width, height) {
        var properties = {
            isStatic: true

        }

        this.body = Bodies.rectangle(x, y, width, height, properties);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }
    
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(position.x, position.y, this.width, this.height);

    }
}