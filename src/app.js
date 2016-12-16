////////// USER SETUP /////////

const motionDif = 10;
/*
let user = {
  name: 'Hello',
  items: [],
  fightPoints: 30,
};
*/
class User {
  constructor(user, x, y, ctx) {
    for (let metric in user) { this[metric] = user[metric]; }
    this.initialX = x;
    this.initialY = y;
    this.x = x;
    this.y = y;
    this.prevX;
    this.prevX;
    this.ctx = ctx;
    this.collision = 0;
    this.draw(this.initialX, this.initialY, this.ctx);
    this.move = this.move.bind(this);
    this.clear = this.clear.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
  }

  draw(x, y, ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x,y,20,20);
  }
  
  move(e) {
    this.prevX = this.x;
    this.prevY = this.y;
      if (e.key === 'ArrowUp') {
        this.checkCollision(this.x, this.y - 5);
        if (this.collision !== 1) this.y -= motionDif;
        this.collision = 0;
      } else if (e.key === 'ArrowDown') {
        this.checkCollision(this.x, this.y + 5);
        if (this.collision !== 1) this.y += motionDif;
        this.collision = 0;
      } else if (e.key === 'ArrowLeft') {
        this.checkCollision(this.x - 5, this.y);
        if (this.collision !== 1) this.x -= motionDif; 
        this.collision = 0;
      } else if (e.key === 'ArrowRight') {
        this.checkCollision(this.x + 5, this.y);
        if (this.collision !== 1) this.x += motionDif;
        this.collision = 0;
      }
    if (this.y - 5 <= 0) {
      // init(theRoom.connectingRooms[0], this.x, 550);
      init(theRoom.connectingRooms[0], this.x, 350);
    }
    this.clear(this.prevX, this.prevY);
    this.draw(this.x, this.y, this.ctx);
  }
  
  clear(x, y) {
    this.ctx.clearRect(x, y, 20, 20);
  }
  
  checkCollision(x, y) {
    var imgd = this.ctx.getImageData(x, y, 30, 30);
    var pix = imgd.data;
    for (let i = 0; i < pix.length; i++) {
      if (pix[i] === 204) {
        this.collision = 1;
        console.log('bonk');
        break;
      }
    }
  }
  
}



////// WALL SETUP ////////
class Wall { 
  constructor(arr) {
    this.x = arr[0];
    this.y = arr[1];
    this.w = arr[2];
    this.h = arr[3];
    this.fill = '#cccccc';
  }
  
  draw(ctx) { 
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  
}

/////// ROOM SETUP////////
class Room {
  constructor(canv, room, x, y) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let attr in room) { this[attr] = room[attr]; } // looping through object passed
    this.userPositionX = x;
    this.userPositionY = y;
    this.drawWalls();
    /*this.newPlayer();
    this.newPlayer = this.newPlayer.bind(this);*/
    this.player = new User(user, this.userPositionX, this.userPositionY, this.ctx);
  } /// end of constructor
  
  drawWalls() {
    for (let wall of this.wallStyle) {
      let drawIt = new Wall(wall);
      drawIt.draw(this.ctx);
    }
  }
  
  typeInput(e) {
    //console.log(e.char);
  }
  
/*  newPlayer() {
    
  }*/

}

////// CANVAS SETUP ///////////

class CanvasState {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    this.clear = this.clear.bind(this);
    this.clear();
  }
  //// stuff goes here
  
  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0,0,this.width,this.height);
  }
}


///// INITIALIZER //////////

var canv;
var theRoom;
var canvas;

let init = function init(room, x, y) {
  canv = document.getElementById('canvas');
  canvas = new CanvasState(canv); 
  theRoom = new Room(canvas, room, x, y);
  window.addEventListener('keydown', theRoom.player.move);
  window.addEventListener('keyup', theRoom.typeInput);
};

window.onload = function() {
  init(castleCourtyard, 350, 100);
};