/*const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");*/


//DRAWING RECTANGLES
/*context.fillStyle = "darkslategray";
context.fillRect(100, 100, 20, 20);
context.fillRect(150, 150, 30, 30);


//DRAWING LINES
context.beginPath;

context.strokeStyle = "slateblue";
context.lineWidth = 3;
context.moveTo(10, 10);
context.lineTo(150, 150);
context.lineTo(300, 150);
context.stroke();



//DRAWING LINEAR GRADIENT
const grd = context.createLinearGradient(250,300,500,200);
grd.addColorStop(0,"red");
grd.addColorStop(1,"black");
context.fillStyle=grd;

context.fillRect(300,300,500,500);  

*/


//DRAWING CIRCLES AND ARCS
/*context.beginPath();
context.arc(200,300,100,0,2*Math.PI);
context.fill();
context.closePath();*/

/*addEventListener("click", function(event){
    console.log(event);
    context.beginPath();
    context.arc(event.x,event.y,100,0,2*Math.PI);
    context.fill();
    context.closePath();
})*/

/*addEventListener("mousemove", function(event){
    console.log(event);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
})*/



//MOVING THE DRAWINGS
/*x = 100;
y = 100;
addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, 100, 80, 80);
        x++;
    }
    if (event.key == "ArrowLeft") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, 100, 80, 80);
        x--;
    }
    if (event.key == "ArrowUp") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(100, y, 80, 80);
        y--;
    }
    if (event.key == "ArrowDown") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(100, y, 80, 80);
        y++;
    }
})*/



//MOVING CIRCLES WITH MOUSE ON CLICKING
/*let isClicked = false;
addEventListener('click', function (event) {
    isClicked = true;
});
addEventListener("mousemove", function (event) {
    if (isClicked == true) {
        console.log(event);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(event.x, event.y, 50, 0, 2 * Math.PI);
        context.fillStyle="slateblue";
        context.fill();
        context.closePath();
    }
})*/



//MAKING CLASS CIRCLE TO MAKE AND DRAW CIRCLES WITH 4 ARGUEMENTS GIVEN BY USER
/*class circle {
    inputCircle(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }
    draw()
    {
        context.beginPath();
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
        context.closePath;
    }
}

let c1=new circle();
c1.inputCircle(100,200,50,"seagreen");
c1.draw();*/



//MAKING CLASS CIRCLE TO MAKE AND DRAW CIRCLES WITH 4 ARGUEMENTS GIVEN BY USER
/*class circle {
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }
    draw()
    {
        context.beginPath();
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
        context.closePath;
    }
}

let c1=new circle(100,200,100,"seagreen");
c1.draw();*/



//MAKING AN ARRAY OF CIRCLES
/*class circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath;
    }
}

let circleStore = [];
for (i = 0; i <= 10; i++) {
    let c = new circle(40 + i * 50, 40 + i * 50, 5 + i * 5, "seagreen");
    circleStore.push(c);
}

for (i = 0; i <= 10; i++)
    circleStore[i].draw();*/



//PAINT BRUSH PROGRAM
/*const canvas = document.querySelector("#canvas");

canvas.width = 900;
canvas.height = 500;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");

let redBtn = document.querySelector("#redBtn");
let blueBtn = document.querySelector("#blueBtn");
let greenBtn = document.querySelector("#greenBtn");
let drawBtn = document.querySelector("#drawBtn");

redBtn.addEventListener("click", redColor);
blueBtn.addEventListener("click", blueColor);
greenBtn.addEventListener("click", greenColor);
drawBtn.addEventListener("click", drawClick);

function redColor() {
    brushColor = "red";
}
function blueColor() {
    brushColor = "blue";
}
function greenColor() {
    brushColor = "green";
}
function drawClick() {
    isClicked = false;
    canvas.addEventListener('click', function (event) {
        isClicked = true;
    });
    canvas.addEventListener("mousemove", function (event) {
        if (isClicked = true) {
            console.log(event);
            context.beginPath();
            context.moveTo(event.offsetX, event.offsetY);
            context.lineTo(event.offsetX+1, event.offsetY+1);

            if (brushColor == "red") {
                context.fillStyle = "red";
                context.fill();
                context.closePath();
            }

            if (brushColor == "blue") {
                context.fillStyle = "blue";
                context.fill();
                context.closePath();
            }

            if (brushColor == "green") {
                context.fillStyle = "green";
                context.fill();
                context.closePath();
            }
        }
    })
}*/




//ANIMATION OF A BALL
/*const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");

let isClicked = false;
addEventListener('click', function (event) {
    isClicked = true;
});

class circle {
    factorx = 1;
    factory = 1;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        if(isClicked==true){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath;
    }
    }

    update() {
        this.x += this.factorx;
        this.y += this.factory;
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();

        if ((this.y + this.radius) >= canvas.height) {
            this.factory = -1;
        }

        if ((this.y - this.radius) <= 0) {
            this.factory = 1;
        }

        if ((this.x + this.radius) >= canvas.width) {
            this.factorx = -1;
        }

        if ((this.x - this.radius) <= 0) {
            this.factorx = 1;
        }
    }
}

function updateAnimation() {
    requestAnimationFrame(updateAnimation);
    c.update();
}

let c = new circle(100, 100, 50, "red");
c.draw();
c.update();
updateAnimation();*/



//DRAWING BALL ANIMATION ON CLICKING AND WHERE CLICKED
/*const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");

let isClicked = false;
addEventListener('click', function (event) {
    isClicked = true;
});

class circle {
    factorx = 1;
    factory = 1;
    counter = 0;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        if (isClicked == true) {
            context.beginPath();
            context.fillStyle = this.color;
            //context.strokeStyle = "lightblue"
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.font = "25px Arial";
            context.fillText(this.counter, this.x, this.y);
            context.textAlign = "center";
            context.stroke();
            context.closePath();
        }
    }

    update() {
        this.x += this.factorx;
        this.y += this.factory;
        this.draw();

        if ((this.y + this.radius) >= canvas.height) {
            this.factory = -1;
            this.counter++;
        }

        if ((this.y - this.radius) <= 0) {
            this.factory = 1;
            this.counter++;
        }

        if ((this.x + this.radius) >= canvas.width) {
            this.factorx = -1;
            this.counter++;
        }

        if ((this.x - this.radius) <= 0) {
            this.factorx = 1;
            this.counter++;
        }
    }
}

function getData(event) {
    a = event.x;
    b = event.y;
}

function updateAnimation(event) {
    requestAnimationFrame(updateAnimation);
    this.x=event.x;
    this.y=event.y;
    c.update();
}

let c = new circle(60, 60, 50, "red");
//c.draw();
//c.update();
//updateAnimation();
addEventListener("click",updateAnimation)


let circles = [];
for (i = 1; i <= 10; i++) {
    let c = new circle(Math.random() * 1000, Math.random() * 1000, Math.random() * 100, "green");
    c.draw();
    circles.push(c);
}
function updateAnimation() {
    requestAnimationFrame(updateAnimation);
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < circles.length; i++) {
        circles[i].update();
    }
    //c.update();
}

//let c = new circle(60, 60, 50, "red");
//c.draw();
//c.update();
updateAnimation();
*/



//COLLISION OF CIRCLES
const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "aqua";

const context = canvas.getContext("2d");

/*const img = new Image();
img.src = "/images/wd.png";
img.onload = function () {
    context.drawImage(img, 100, canvas.height - img.height);
}*/

class circle {
    factorx = 1;
    factory = 1;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        context.beginPath();
        context.strokeStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.closePath;
    }
    update() {
        this.x += this.factorx;
        this.y += this.factory;
        this.draw();

        if ((this.y + this.radius) >= canvas.height) {
            this.factory = -1;
            this.counter++;
        }

        if ((this.y - this.radius) <= 0) {
            this.factory = 1;
            this.counter++;
        }

        if ((this.x + this.radius) >= canvas.width) {
            this.factorx = -1;
            this.counter++;
        }

        if ((this.x - this.radius) <= 0) {
            this.factorx = 1;
            this.counter++;
        }
    }
}

let c1 = new circle(200, 200, 40, "red");
c1.draw();

addEventListener("click", function (e) {
    if (getDistance(e.x, e.y, c1.x, c1.y) <= 40) {
        c1.color = "green";
        c1.draw();
    }
})

function getDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distance;
}


let c2 = new circle(600, 500, 100, "blue");
c2.draw();

function updateAnimation() {
    requestAnimationFrame(updateAnimation);
}

updateAnimation();
