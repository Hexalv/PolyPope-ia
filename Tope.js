

var tiles=128;
function main() {
var can=document.getElementById("can");
var ctx=can.getContext("2d");
var ima= new Image();
ima.src="PolyTiles.png";

var wid=32;

create(wid, ima, can, ctx);
}

function tile(posx,posy,found,water, wid, ima, can, ctx) {
  this.posx=posx;
  this.posy=posy;
  this.found=found;
  this.water=water;
  this.draw = function(wid, ima, kind, can, ctx){
  //context.drawImage(img,   cropX,        cropY,cropWid,cropHit,X,Y, Wid,    Hit)
   ctx.drawImage(ima, 0, wid*kind, wid, wid, posx*wid, posy*wid, wid, wid);
   
   }
};








function create(wid, ima, can, ctx) {

var map=[16384];
var randy;

for(var i=0;i<30;i++) {
  for(var il=0;il<30;il++) {
  
    var kind=3;
      
    map[il] = new tile(il,i,true);
    randy=Math.floor(Math.random()*80);

    kind=randy;
    
    if(randy!=0) {
      map[il].water=true;
    }
    
    
    
    map[il].draw(wid, ima, map[il].water, can, ctx);
    
    }
  }
}