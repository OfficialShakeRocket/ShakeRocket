class GameObject {
    constructor(x, y, r) {
        this.sprite = null;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    } 
}

GameObject.prototype.createSprite = function(img) {
    this.sprite = img;
}