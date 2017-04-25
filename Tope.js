

var tiles=128;
function main() {
var can=document.getElementById("can");
var ctx=can.getContext("2d");
var ima= new Image();
ima.src=polyTiles.png;
}

function til(a,b,c,d) {
  this.posx=a;
  this.posy=b;
  this.kind=c;
  this.found=d;
};

function create() {
   //context.drawImage(      img,  cropX,    cropY,    cropWid,cropHit,X,        Y,           Wid,    Hit)
    ctx.drawImage(mine, sqrWid*blip[0], sqrWid*blip[1], sqrWid, sqrWid, f*sqrWid, e*sqrWid/2, sqrWid, sqrWid/2);  
    
}