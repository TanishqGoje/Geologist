class Hammer {
    constructor(x, y) {
        var properties = {
            density: 2,
            friction: 1.0,
            restitution: 0.5
        }

        this.body = Bodies.rectangle(x, y, 50, 50, properties);
        this.width = 150;
        this.height = 40;

        World.add(world, this.body);

    }

    display() {
        var position = this.body.position;
        position.x = mouseX;
        position.y = mouseY;
        var angle = this.body.angle;
    
        push();
        translate(position.x, position.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(3);
        stroke('white');
        fill('orange');
        rect(0, 0, this.width, this.height);
        pop();

    }
}