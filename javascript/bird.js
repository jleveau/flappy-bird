
function Bird (x, y, radius, jump, gravity){
    this.pos = createVector(x, y)  ;

    this.speed = createVector(0,0);
    this.jump = jump;

    this.radius = radius;
    this.gravity = createVector(0,gravity);
    this.up = createVector(0,-this.jump );
    this.alive = true;
    this.score = 0;

    this.goUp = function(){
        this.speed = this.up.copy();
    };

    this.draw = function (){
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    };

    this.applyGravity = function (){
        this.speed.add(this.gravity);
    };

    this.checkborder = function (borders, max_height){
        if (this.pos.y > max_height - this.radius/2)
            return true;
        else {
            for (border of borders){
                if (this.pos.x + this.radius /2 > border.pos.x && this.pos.x - this.radius/2< border.pos.x + border.width){
                    if (this.pos.y - radius/2  < border.height1)
                        return true;
                    if (this.pos.y + radius/2 > border.height1 + border.gap)
                        return true;
                    if (!border.passed){
                        this.score ++;
                    }
                    border.passed = true;
                }
            }
        }
        return false;
    };

    this.update = function (borders, max_height){
        this.applyGravity();
        this.speed.limit(this.jump);
        this.pos.add(this.speed);
        if (this.checkborder(borders, max_height)){
            this.alive = false;
        }
    };
}