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
const canvas = document.querySelector("#canvas");

canvas.width = 900;
canvas.height = 500;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");

