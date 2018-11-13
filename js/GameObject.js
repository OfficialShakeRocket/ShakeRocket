class GameObject {
    /**
     * @ param x : number x coord   
     * @ param y : number y coord 
     * @ param r : number rotation in radians
    */
    constructor(x, y, r) {
        this.dir = Vector.fromRotation(r);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    } 
    
    set sprite(img) {
        this.sprite = img;
    }
}