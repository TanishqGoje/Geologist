class Sand{
	constructor(x,y,r) {
	    var properties = {
		    restitution: 0.3,
		    friction: 5,
		    density: 1
		}

		this.x = x;
		this.y = y;
		this.r = r;
		this.body = Bodies.circle(this.x, this.y, (this.r - 20)/2, properties);

		World.add(world, this.body);

	}

	display() {
		var sandposition = this.body.position;		
		push();
		translate(sandposition.x, sandposition.y);
		rectMode(CENTER);
		strokeWeight(4);
		stroke("black");
		fill("red");
	    ellipse(0, 0, this.r, this.r);
		pop();
			
	}
}