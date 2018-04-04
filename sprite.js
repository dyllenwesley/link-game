//add new characters here//
let linkBlink;
let linkBlink1;
let linkBlink2;
let linkBlink3;

// Base definition of sprite element (sprite constructor) //
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

//Set the new characters properties here//
function initSprites(img) {
//This image is based off of Trent's picture(used photoShop)//
    // linkSprite = new Sprite(img, 0, 0, 90, 105);

    linkBlink = [
        new Sprite(img, 3, 523, 90, 100),
        new Sprite(img, 98, 523, 90, 100),
        new Sprite(img, 193, 523, 90, 100),
        new Sprite(img, 288, 523, 90, 100),
        new Sprite(img, 383, 523, 90, 100),
        new Sprite(img, 478, 523, 90, 100),
        new Sprite(img, 578, 523, 90, 100),
        new Sprite(img, 673, 523, 90, 100)
    ];

    linkBlink1 = [
        new Sprite(img, 3, 428, 90, 103),
        new Sprite(img, 98, 428, 90, 103),
        new Sprite(img, 193, 428, 90, 103),
        new Sprite(img, 288, 428, 90, 103),
        new Sprite(img, 383, 428, 90, 103),
        new Sprite(img, 478, 428, 90, 103),
        new Sprite(img, 578, 428, 90, 103),
        new Sprite(img, 673, 428, 90, 103)
    ];

    linkBlink2 = [
        new Sprite(img, 3, 626, 90, 100),
        new Sprite(img, 98, 626, 90, 100),
        new Sprite(img, 193, 626, 90, 100),
        new Sprite(img, 288, 626, 90, 100),
        new Sprite(img, 383, 626, 90, 100),
        new Sprite(img, 478, 626, 90, 100),
        new Sprite(img, 578, 626, 90, 100),
        new Sprite(img, 673, 626, 90, 100)
    ];

    linkBlink3 = [
        new Sprite(img, 3, 722, 90, 105),
        new Sprite(img, 98, 722, 90, 105),
        new Sprite(img, 193, 722, 90, 105),
        new Sprite(img, 288, 722, 90, 105),
        new Sprite(img, 383, 722, 90, 105),
        new Sprite(img, 478, 722, 90, 105),
        new Sprite(img, 578, 722, 90, 105),
        new Sprite(img, 673, 722, 90, 105)
    ];
}