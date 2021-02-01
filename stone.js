class Stone {
    constructor(x, y, width, height) {
        var properties = {
            restitution: 0.8,
            friction: 0.9,
            density: 12
        }

        this.body = Bodies.rectangle(x, y, width, height, properties);
        this.width = width;
        this.height = height;
          
        World.add(world, this.body);

    }

    display() {
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
      
    }
}