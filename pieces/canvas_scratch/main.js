const motionDif = 5;

let user = {
  name: 'Hello',
  items: [],
  fightPoints: 30,
};

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

////////// initial items (will go in own file)
const gate = {
  name: 'Gate',
  look: 'It looks very Strong.',
  open: ['You don\'t have a key!'],
  collide: 'The gate is locked.',
  fixedLocation: true
};

const courtyardWall = {
  name: 'Wall',
  look: `The writing on the wall says "${ user.name } WAS HERE - 1984"... looks like you've been here a while.`,
  fixedLocation: true,
};


////////// initial room styles (might go in own file?)

let square = [ [0, 0, 770, 35], [0, 0, 35, 580] ];

class Wall { //// hmm. for some reason this looks JUST like the exitpoint class. maybe I should combine that too.
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

/// 780 x 590 // 1280 x 800 // x 330, y 235, w 120, h 220

class ExitPoint {
  constructor(arr) {
    this.x = arr[0];
    this.y = arr[1];
    this.w = arr[2];
    this.h = arr[3];
    this.fill = '#010101';
  }
  
  draw(ctx) { 
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}


let castleCourtyard = {
  roomName: 'Castle Courtyard',
  roomOrder: 1,
  roomDescription: 'You are in the Castle Courtyard. To the north is a large Doorway. To the south is a large Gate.',
  roomMonsters: [],
  roomItems: [],
  lookableAttributes: [gate, courtyardWall],
  userPositionX: 100,
  userPositionY: 100,
  entryAndExit: [ [330, 0, 120, 35], [0, 235, 35, 120] ],
  wallStyle: square,
};

class Room {
  constructor(canv, room) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let attr in room) { this[attr] = room[attr]; } // looping through object passed
    this.entryAndExitArr = [];
    this.setEntryAndExit();
    this.drawWalls();
    this.drawExit();
    this.player = new User(user, this.userPositionX, this.userPositionY, this.ctx);
  } /// end of constructor
  
  setEntryAndExit() {
    for (let exit of this.entryAndExit) {
      let Rect = new ExitPoint(exit);
      this.entryAndExitArr.push(Rect);
    }
    console.log('testing');
  }
  
  drawExit() { /// combine with set
    for (let exit of this.entryAndExitArr) {
      exit.draw(this.ctx);
    }
  }
  
  drawWalls() {
    for (let wall of this.wallStyle) {
      let drawIt = new Wall(wall);
      drawIt.draw(this.ctx);
    }
  }
  
  typeInput(e) {
    //console.log(e.char);
  }

  
}

class CanvasState {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');

  }
  //// stuff goes here
}

var canv;
var theRoom;
var canvas;


let init = function init(room) {
  canv = document.getElementById('canvas');
  canvas = new CanvasState(canv); 
  theRoom = new Room(canvas, room);
  window.addEventListener('keydown', theRoom.player.move);
  window.addEventListener('keyup', theRoom.typeInput);
};

window.onload = function() {
  init(castleCourtyard);
};
