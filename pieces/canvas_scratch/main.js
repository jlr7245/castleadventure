


let user = {
  name: 'Hello',
  items: [],
  fightPoints: 30,
  
  //// all my motion stuff probably has to happen in here...
  
};


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

/// 780 x 590 // 1280 x 800

class ExitPoint {
  constructor(x, y, w, h) {
    this.x = x || 330;
    this.y = y || 235;
    this.w = w || 120;
    this.h = h || 220;
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
  userPositionX: 460,
  userPositionY: 460,
  entryAndExit: [(330, 0, 120, 0)],
};

class Room {
  constructor(obj) {
    for (let fld in obj) { this[fld] = obj[fld]; } // looping through object passed
    this.entryAndExitArr = [];
    this.setEntryAndExit();
    this.drawExit();
    this.drawWalls();
    this.drawUser(this.userPositionX, this.userPositionY);
  } /// end of constructor
  
  setEntryAndExit() {
    for (let exit of this.entryAndExit) {
      let Rect = new ExitPoint(exit);
      this.entryAndExitArr.push(Rect);
    }
    console.log('testing');
  }
  
  drawExit() {
    for (let exit of this.entryAndExitArr) {
      exit.draw(this.ctx);
    }
  }
  
  drawWalls() {
    console.log('testing');
  }
  
  drawUser(x, y) {
    console.log(x, y);
  }
  
}

class CanvasState {
  constructor(arg, canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    for (let key in arg) { this[key] = arg[key]; }

  }
  //// stuff goes here
}

var canv;
var test;
var current;

let init = function init() {
  canv = document.getElementById('canvas');
  current = new Room(castleCourtyard); ///// got a scope problem in here... tries to draw the exit point before there's a context.... i guess i have to create a canvas state first and then i can create a room with the canvas state??????
  test = new CanvasState(current, canv);
};

window.onload = function() {
  init();
};