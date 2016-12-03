var flappy;

var DIM_X = 800;
var DIM_Y = 600;
var borders;

function keyPressed() {
    if (keyCode == ENTER) {
        flappy.goUp();
    }
}

function create_flappy (){
    return new Bird(DIM_X/2, DIM_Y/2, 30, 10, 0.7);
}

function setup (){
    createCanvas(DIM_X,DIM_Y);
    flappy = create_flappy();
    borders = new BorderManager(DIM_X, DIM_Y, 250, 150, 50, 2.5);
}

function restart (){
    flappy = create_flappy();
    borders = new BorderManager(DIM_X, DIM_Y, 250, 150, 50, 2.5);
}

function draw(){
    background(51);
    borders.update();
    flappy.update(borders.borders, DIM_Y);
    if (!flappy.alive){
        restart();
    }
    borders.draw();
    flappy.draw();
    fill(255);
    text(flappy.score, DIM_X /2, 1/6 * DIM_Y);

}