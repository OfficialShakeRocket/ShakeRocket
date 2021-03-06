class Vector extends Point {
    constructor(x, y) {
        super(x, y);       
    }

    get rotation() {
        Math.atan(y/x);
    }

    static fromRotation(theta) {
        return new Vector(cos(theta), sin(theta));
    }
}