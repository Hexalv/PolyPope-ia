

var tiles=128;
function main() {
var can=document.getElementById("can");
var ctx=can.getContext("2d");
var ima= new Image();
ima.src="PolyTiles.png";
var blip=[0, 2];
var wid=32;

create(blip, wid, ima, can, ctx);
}

function tile(posx,posy,kind,found,blip, wid, ima, can, ctx) {
  this.posx=posx;
  this.posy=posy;
  this.kind=kind;
  this.found=found;
  this.draw = function(blip, wid, ima, can, ctx){
  //context.drawImage(img,   cropX,        cropY,cropWid,cropHit,X,Y, Wid,    Hit)
   ctx.drawImage(ima, wid*blip[0], wid*blip[1], wid, wid, posx*wid, posy*wid, wid, wid);
   
   }
};

function create(blip, wid, ima, can, ctx) {

var map=[16384];
var randy;

for(var i=0;i<30;i++) {
  for(var il=0;il<30;il++) {
    
    randy=Math.floor(Math.random()*6+1);
    map[il] = new tile(il,i,randy,true);
    map[il].draw(blip, wid, ima, can, ctx);
    
    }
  }
}