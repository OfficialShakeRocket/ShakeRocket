class Point {
    /*
     *@param x : number (x coordinate)
     *@param y : number (y coordinate)
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Point.addVector = function(other) {
    return new Point(this.x + other.x, this.y + other.y);
}

Point.subVector = function(other) {
    return new Point(this.x - other.x, this.y - other.y);
}

Point.iaddVector = function(other) {
    this.x += other.x;
    this.y += other.y;
}

Point.isubVector = function(other) {
    this.x -= other.x;
    this.y -= other.y;
}