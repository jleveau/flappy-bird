function Border (x, width, gap,  height1, height2, speed){

    this.pos = createVector(x,0);
    this.speed = createVector(-speed,0);
    this.gap = gap;
    this.height1 = height1;
    this.height2= height2;

    this.width = width;
    this.height = height;
    this.passed = false;

    this.update = function(){
        this.pos.add(this.speed);
    };

    this.draw = function(){
        rect(this.pos.x, 0, this.width, this.height1);
        rect(this.pos.x, this.height1 + this.gap, this.width, this.height2);
    }
}