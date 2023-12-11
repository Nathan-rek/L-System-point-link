// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY






function Leaf() {
	this.pos = createVector(random(width), random(height));
	this.reached = false;

	this.show = function() {
		fill(100);
		noStroke(0);
		//	  Taille des points
		ellipse(this.pos.x, this.pos.y, 0, 0);
	}
}
