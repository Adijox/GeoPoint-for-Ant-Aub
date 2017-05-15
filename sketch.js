var rmpoints = [];
var n = 3;
var points = [];
var distplus;
var distmoins;
var distplus2;
var distmoins2;
var sauts = ['', '1/10', '1/5', '1/4', '1/3', '1/2', ''];
var s = 3;
var click = false;
var distgo;
var canv = false;
function setup() {
    textAlign(CENTER);
    rectMode(CENTER);
    angleMode(DEGREES);
    createCanvas(600, 600);
    background(51);
}

function draw() {
    if(canv === false) {
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
    if(s > 4) {
        s = 4;
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
    translate(300, 300);
    background(51);
   for(var i = 0; i < 360/n; i++) {
       points.push(new Point(i));
   }
    for (var j = 0; j < points.length; j++) {
        stroke(255);
        points[j].draw();
    }
    
}
function mouseClicked() {
    click = true;
}