function Point(index) {
    
    this.index = index;
    this.vectt = createVector(0, 100);
    this.x;
    this.y;
    this.vectt.rotate(360/n * this.index);
    this.vectt.setMag(200);
    this.draw = function() {
        stroke(255);
        strokeWeight(10);
        point(this.vectt.x, this.vectt.y);
        this.x = this.vectt.x;
        this.y = this.vectt.y;
    }
}