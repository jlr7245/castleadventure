


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
  userPositionX: 460,
  userPositionY: 460,
  entryAndExit: [ [330, 0, 120, 5], [0, 235, 5, 120] ],
  //wallStyle: square,
};

class Room {
  constructor(canv, obj) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let fld in obj) { this[fld] = obj[fld]; } // looping through object passed
    this.entryAndExitArr = [];
    this.setEntryAndExit();
    this.drawExit();
    this.drawWalls();
    this.drawUser(this.userPositionX, this.userPositionY, this.ctx);
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
  
  drawUser(x, y, ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x,y,20,20);
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

let init = function init(arg) {
  canv = document.getElementById('canvas');
  canvas = new CanvasState(canv); 
  theRoom = new Room(canvas, arg);
};

window.onload = function() {
  init(castleCourtyard);
};
