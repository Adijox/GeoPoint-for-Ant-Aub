function Rmpoint() {
    this.x = prevx;
    this.y = prevy;
    this.choose;
    this.link;
    this.choose = floor(random(0, points.length));
    this.dir;
    
    
    
    this.update = function() {

    
//    for (var j = 0; j < points.length; j++) {
        
    this.link = createVector(prevx, prevy, points[this.choose].x, points[this.choose].y);
        
//        this.dir = createVector(points[this.choose].x, points[this.choose].y, this.dir.x + prevx, this.dir.y + prevy);
        this.link.mult(rsauts[s]);
        this.x += link.x + prev.x;
        this.y += link.y + prev.y;
        prev.x = points[j].x;
        prev.y = points[j].y;
    
            }
        }
    
    this.draw = function() {
        point(this.x, this.y);
    }
