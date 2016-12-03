function BorderManager (dim_x,dim_y, space_between, gap, border_width, border_speed){
    this.space_between = space_between;
    this.border_width = border_width;
    this.gap = gap;
    this.borders = [];

    for (var i = dim_x; i < 2*dim_x; i += this.space_between){
        var height = random(dim_y - this.gap - dim_y/6);
        this.borders.push(new Border(i, this.border_width, this.gap, height, dim_y - gap - height, border_speed));
    }

    this.update = function(){
        for (var i = 0; i < this.borders.length; i++){
            var border = this.borders[i];
            border.update();
            if (border.pos.x + border.width < 0){
                var height = random(dim_y - this.gap);
                this.borders.splice(0,1);
                this.borders.push(new Border(dim_x + 2*this.border_width, this.border_width, this.gap, height, dim_y - gap - height, border_speed));
            }
        }
    };

    this.draw = function(){
        for (border of this.borders){
            border.draw();
        }
    }
}