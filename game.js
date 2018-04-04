
var canvas;
var bluefill = "#8BE4FD";
var renderingContext;
var width = 600;
var height = 500;
var frames = 0;
var myhero;
var myhero1;
var myhero2;
var myhero3;


function main(){
    //console.log("started")//
    canvasSetup();
    windowSetup();

    document.getElementById("canvasbox").appendChild(canvas);
    /*myhero = new HeroAnimate(30, 30);
    myhero1 = new HeroAnimate(280, 30);
    myhero2 = new HeroAnimate(30, 280);
    myhero3 = new HeroAnimate(280, 280);*/
    myhero = new Hero;
    myhero1 = new Hero1;
    myhero2 = new Hero2;
    myhero3 = new Hero3;
    loadGraghics();


}

function windowSetup(){

}

function canvasSetup(){
    canvas = document.createElement("canvas");
    canvas.style.border = "2px solid black";

    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContext("2d");
}

/*function HeroAnimate(x, y) {
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.health = 100;
    this.gravity = 1.25;
    this.velocity = 0;
    this.jump = 4.6;
    this.blinkAnimation = [0,1,2,3,4,5,6,7,6];

    this.update = function () {
        var n = 7;
        this.frame += frames % n === 0 ? 1:0;
        this.frame %= this.blinkAnimation.length;
    };

    this.draw = function(renderingContext) {
        renderingContext.save();
        var n = this.blinkAnimation[this.frame];
        SpriteArray[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore()
    }
}*/


function Hero() {
    this.x = 30;
    this.y = 30;
    this.frame = 0;
    this.health = 100;
    this.gravity = 1.25;
    this.velocity = 0;
    this.jump = 4.6;
    this.blinkAnimation = [0,1,2,3,4,5,6,7,6];

    this.update = function () {
        var n = 7;
        this.frame += frames % n === 0 ? 1:0;
        this.frame %= this.blinkAnimation.length;
    };

    this.draw = function(renderingContext) {
        renderingContext.save();

        var n = this.blinkAnimation[this.frame];
        linkBlink[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore()
    }
}

function Hero1() {
    this.x = 280;
    this.y = 30;
    this.frame = 0;
    this.health = 100;
    this.gravity = 1.25;
    this.velocity = 0;
    this.jump = 4.6;
    this.blinkAnimation = [0,1,2,3,4,5,6,7,6];

    this.update = function () {
        var n = 7;
        this.frame += frames % n === 0 ? 1:0;
        this.frame %= this.blinkAnimation.length;
    };

    this.draw = function(renderingContext) {
        renderingContext.save();

        var n = this.blinkAnimation[this.frame];
        linkBlink1[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore()
    }
}

function Hero2() {
    this.x = 30;
    this.y = 280;
    this.frame = 0;
    this.health = 100;
    this.gravity = 1.25;
    this.velocity = 0;
    this.jump = 4.6;
    this.blinkAnimation = [0,1,2,3,4,5,6,7,6];

    this.update = function () {
        var n = 7;
        this.frame += frames % n === 0 ? 1:0;
        this.frame %= this.blinkAnimation.length;
    };

    this.draw = function(renderingContext) {
        renderingContext.save();

        var n = this.blinkAnimation[this.frame];
        linkBlink2[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore()
    }
}

function Hero3() {
    this.x = 280;
    this.y = 280;
    this.frame = 0;
    this.health = 100;
    this.gravity = 1.25;
    this.velocity = 0;
    this.jump = 4.6;
    this.blinkAnimation = [0,1,2,3,4,5,6,7,6];

    this.update = function () {
        var n = 7;
        this.frame += frames % n === 0 ? 1:0;
        this.frame %= this.blinkAnimation.length;
    };

    this.draw = function(renderingContext) {
        renderingContext.save();

        var n = this.blinkAnimation[this.frame];
        linkBlink3[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore()
    }
}

function loadGraghics() {
    let img = new Image();
    //This is Trent's link to his image//
    img.src = "link.png";
    img.onload = function () {
        initSprites(img);
        renderingContext.fillStyle = bluefill;
        //linkBlink.draw(renderingContext, 30, 30);

        gameLoop();
    };
}

function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update() {
    //checking statuses and stuff happening
    frames++;
    myhero.update();
    myhero1.update();
    myhero2.update();
    myhero3.update();
}

function render() {
    //draw stuff constantly based on status
    renderingContext.fillRect(0,0, width, height);
    //linkBlink[0].draw(renderingContext,30,30);
    myhero.draw(renderingContext);
    myhero1.draw(renderingContext);
    myhero2.draw(renderingContext);
    myhero3.draw(renderingContext);
}