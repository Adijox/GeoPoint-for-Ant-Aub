var rmpoints = [];
var n = 3;
var points = [];
var distplus;
var distmoins;
var distplus2;
var distmoins2;
var sauts = ['', '1/10', '1/5', '1/4', '1/3', '1/2', ''];
var rsauts = [ 0, 1/10, 1/5, 1/4, 1/3, 1/2, 0];
var s = 3;
var click = false;
var distgo;
var count = 0;
var prev;
 var vectv;   
var canv = false;
var choose;
var uno = true;


setInterval(draw, 0);
function setup() {
    createCanvas(800, 800);
    background(51);
    textAlign(CENTER);
    rectMode(CENTER);
    angleMode(DEGREES);
    
    prev = createVector(100, 100);
}

function draw() {
    if(canv === false) {
    print("EE");
    
    background(21, 52, 32);
    distplus = dist(mouseX, mouseY, 420, 200);
    distmoins = dist(180, 200, mouseX, mouseY);
    textSize(25);
    fill(255);
    text(' Nombre d\'angles', 200, 200);
    text(n, 300, 250);
    fill(12, 150, 200);
    ellipse(180, 200, 30, 30);
    ellipse(420, 200, 30, 30);
    fill(200, 52, 36);
    textSize(40);
    text('-', 170, 210);
    text('+', 410, 215);
    if(click && distplus < 15) {
        n += 1;
    }
    if(click && distmoins < 15) {
        n -= 1;
    }
    if(n < 2) {
        n = 2;
    }

    
    
    if(click && distplus2 < 15) {
        s += 1;
    }
    if(click && distmoins2 < 15) {
        s -= 1;
    }
    if(s < 1) {
        s = 1;
    }
    if(s > 5) {
        s = 5;
    }
    textSize(25);
    fill(255);
    text('Saut aléatoire', 225, 300);
    text(sauts[s], 300, 350);
    fill(12, 150, 200);
    ellipse(180, 300, 30, 30);
    ellipse(420, 300, 30, 30);
    fill(200, 52, 36);
    textSize(40);
    text('-', 170, 310);
    text('+', 410, 315);
    distplus2 = dist(mouseX, mouseY, 420, 300);
    distmoins2 = dist(180, 300, mouseX, mouseY);
    
    
    distgo = dist(mouseX, mouseY, 260, 515);
    rect(300, 500, 150, 50);
    fill(255);
    text('GO!', 260, 515);
    if(click && distgo < 100) {
        canv = true;

    }
    
    click = false;
    
    }
    if(canv) {
        Geo();
        
        
    }
    
}
function Geo() {
    
    
    
    if(uno) {
   

        stroke(255);
    strokeWeight(50);
//    point(0, 0);
        
        
        translate(300, 300);
        background(51);
        uno = false;
        for(var i = 1; i < n + 1; i++) {
       
       points.push(new Point(i));
   }
    }
   
    for (var j = 0; j < points.length; j++) {
        stroke(255);
        points[j].draw();
    }
    choose = floor(random(0, points.length));
    vectv = createVector(points[choose].x - prev.x, points[choose].y - prev.y);
    vectv.mult(rsauts[s]);
    prev.x = prev.x + vectv.x;
    prev.y = prev.y + vectv.y;
    stroke(25, 15, 62);
    strokeWeight(1);
    translate(300, 300);
    point(vectv.x, vectv.y);
    translate(-300, -300);
//    line(points[0].x, points[0].y, points[1].x, points[1].y);
//    line(points[1].x, points[1].y, points[2].x, points[2].y);
//    line(points[2].x, points[2].y, points[3].x, points[3].y);
    
    count += 1;
   print(points.length);
   
}

function mouseClicked() {
    click = true;
}