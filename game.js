
var canvas;
var bluefill = "#8BE4FD";
var renderingContext;
var width = 600;
var height = 500;
var frames = 0;
var myheroLeft;
var myheroFront;
var myheroBack;
var myheroRight;

function main(){
    //console.log("started")//
    canvasSetup();
    windowSetup();

    document.getElementById("canvasbox").appendChild(canvas);
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

function HeroAnimate(x, y, SpriteArray) {
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
}

function loadGraghics() {

    let img = new Image();
    //This is Trent's link to his image//
    img.src = "link.png";
    img.onload = function () {
        initSprites(img);
        renderingContext.fillStyle = bluefill;
        //linkBlink.draw(renderingContext, 30, 30);

        myheroLeft = new HeroAnimate(30, 30, linkBlinkLeft);
        myheroFront = new HeroAnimate(280, 30, linkBlinkFront);
        myheroBack = new HeroAnimate(30, 280, linkBlinkBack);
        myheroRight = new HeroAnimate(280, 280, linkBlinkRight);

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
    myheroLeft.update();
    myheroFront.update();
    myheroBack.update();
    myheroRight.update();
}

function render() {
    //draw stuff constantly based on status
    renderingContext.fillRect(0,0, width, height);
    //linkBlink[0].draw(renderingContext,30,30);
    myheroLeft.draw(renderingContext);
    myheroFront.draw(renderingContext);
    myheroBack.draw(renderingContext);
    myheroRight.draw(renderingContext);
}