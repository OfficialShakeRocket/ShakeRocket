class Renderer {
    constructor() {
        this.canvas = document.getElementById('renderer');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
        console.log(this.canvas.width + " x " + this.canvas.height);
    }
}

Renderer.prototype.clear = function() {
    this.context.fillStyle="#FFF";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

Renderer.prototype.image = function(img, x, y , w, h) {
    this.context.drawImage(img, x, y, w, h);
    console.log('imaged');
}