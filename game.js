var canvas;
var bluefill = "#8be4fd";
var renderingContext;
var width = 1360;
var height = 768;
var frames = 0;
var mFrames = 0;
var myhero;
var currentState;

var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};

function main(){
    canvasSetup();
    windowSetup();

    document.getElementById("canvasbox").appendChild(canvas);
    myhero = new Hero();

    loadGraphics();
    currentState = states.Game;
}

function windowSetup (){
    let wasd = new controls('wasd');
    wasd.addKeys({'w':'up', 'a':'left', 's':'down', 'd':'right'});
    //let udlr = new contorls();
}

function removeMotion(){
    myhero.direction = "";
}
class controls {
    constructor(name){
        this.name = name;
        //add your key actions inside actions array
        this.actions = {
            'up':this.up,
            'down':this.down,
            'left':this.left,
            'right':this.right
        };
    }
    addKey(key, action){
        let keyCode = key.toUpperCase().charCodeAt(0);
        let cons = this;
        document.addEventListener('keydown', function(e){
            let keyPressed = e.keyCode;
            if (keyPressed === keyCode){
                cons.actions[action] = true;
                console.log(key + ':' + cons.actions[action]);
            }
        });
        document.addEventListener('keyup', function(e){
            let keyPressed = e.keyCode;
            if (keyPressed === keyCode){
                cons.actions[action] = false;
                console.log(key + ':' + cons.actions[action]);
            }
        });
    }
    addKeys(keysArray){
        let cObj = this;
        console.log(keysArray);
        for (var item in keysArray) {
            console.log(item + ':' + keysArray[item]);
            cObj.addKey(item, keysArray[item]);
        }
    }
}

function canvasSetup(){
    canvas = document.createElement("canvas");
    canvas.style.border = "2px solid black";

    canvas.width = width;
    canvas.height = height;
    
    renderingContext = canvas.getContext("2d");
}

function Hero(){
    this.health = 100;
    this.stats = [];
    this.gravity = 0.27;
    this.__jumpHeight = 11.6;
    this.jumpCount = 2;
    this.velocity = 0;
    this.frame = 0;
    this.stop = false;
    this.x = 90;
    this.y = 100;
    this.mFrames = 0;

    this.velX = 0;
    this.velY = 0;
    this.maxspeed = 6;
    this.friction = 0.93;

    this.moveAnimation = [0,1,2,3,4,5,6,7,8,9];

    this.blinkAnimation = [0,0,0,0,0,0,0,0,0,0,0,1,2,1];

    this.jump = function(){
        this.stop = false;
        if(this.jumpCount > 0){
            this.velocity = -this.__jumpHeight;
            this.jumpCount --;
        }
    };

    this.update = function(){
        let n = 7;
        this.frame += frames % n === 0 ? 1:0;
        this.frame %= this.blinkAnimation.length;

        this.mFrames += frames % n === 0 ? 1:0;
        this.mFrames %= this.moveAnimation.length;

        if (currentState === states.Game){
            this.updatePlayingHero();
        }
    };

    this.updatePlayingHero = function(){
        if(this.direction === "left"){
            if(this.velX > -this.maxspeed){
                this.velX --;
            }
        }

        if(this.direction === "right"){
            if(this.velX < this.maxspeed){
                this.velX ++;
            }
        }

        if(this.direction === "up"){
            if(this.velY > -this.maxspeed){
                this.velY --;
            }
        }

        if(this.direction === "down"){
            if(this.velY < this.maxspeed){
                this.velY ++;
            }
        }

        this.velY *= this.friction;
        this.y += this.velY;

        this.velX *= this.friction;
        this.x += this.velX;
    };

    this.land = function(place){
        this.y = place;
        this.jumpCount = 2;
        this.velocity = this.__jumpHeight;
    };

    this.draw = function(renderingContext){
        renderingContext.save();

        let n = this.blinkAnimation[this.frame];
        let m = this.moveAnimation[this.mFrames];
        let restore = renderingContext.restore();

        if (this.direction === "") {
            linkStatic[n].draw(renderingContext, this.x, this.y);
            restore;

        } if (this.direction === "up") {
            linkBlinkBackView[m].draw(renderingContext, this.x, this.y);
            restore;

        } if (this.direction === "right"){
            linkBlinkRightView[m].draw(renderingContext, this.x, this.y);
            restore;

        } if (this.direction === "down"){
            linkBlinkFrontView[m].draw(renderingContext, this.x, this.y);
            restore;

        } if (this.direction === "left"){
            linkBlinkLeftView[m].draw(renderingContext, this.x, this.y);
            restore;
        }
    }
}

function loadGraphics(){
    let img = new Image();
    img.src = "link.png";
    img.onload = function(){
        initSprites(img);
        renderingContext.fillStyle = bluefill;

        gameLoop();
    }
}

function gameLoop(){
    update();
    render();
    window.requestAnimationFrame(gameLoop);

}

function update(){
    frames++;
    myhero.update();
}

function render(){
    renderingContext.fillRect(0,0, width, height);
    myhero.draw(renderingContext);

}