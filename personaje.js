let canvas=document.querySelector("#myCanvas")
let ctx= canvas.getContext("2d")

class Personaje{
    constructor(x, y, angle, r){
        this.x=x;
        this.y=y;
        this.angle=angle;
        this.r=r;
    }
    dibujarse(){
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle*Math.PI/180);
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, 2*Math.PI)
        ctx.stroke();
        ctx.beginPath()
        ctx.arc(0,0, this.r/2, 0.25*Math.PI, 0.75*Math.PI)
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.r/3,-this.r/3, this.r/6, 0, 2*Math.PI)
        ctx.stroke()
        ctx.beginPath();
        ctx.arc(-this.r/3,-this.r/3, this.r/6, 0, 2*Math.PI)
        ctx.stroke()
        ctx.beginPath();
        ctx.arc(this.r/3, -this.r/3, this.r/18, 0, 2*Math.PI)
        ctx.fill()
        ctx.beginPath();
        ctx.arc(-this.r/3, -this.r/3, this.r/18, 0, 2*Math.PI)
        ctx.fill()
        ctx.rotate(-this.angle*Math.PI/180);
        ctx.translate(-this.x, -this.y)
    }
}
let Juan = new Personaje(200, 300, 45, 50);
Juan.dibujarse();
let Julia = new Personaje(300, 50, -45, 40);
Julia.dibujarse();
let Eivor = new Personaje(150, 200, 0, 30);
Eivor.dibujarse();
let Arno = new Personaje(100, 100, 180, 60);
Arno.dibujarse();

