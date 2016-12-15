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
    if (this.y - 5 <= 0) {
      init(theRoom.connectingRooms[0], this.x, 550);
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

const stonewalls = {
  name: 'Wall',
  look: 'The WALLS are made of Gray Stone.',
}


////////// initial room styles (might go in own file?)

let square = [ [1, 1, 778, 35], [1, 1, 35, 588], [745, 1, 35, 588], [1, 554, 778, 35]  ];
let annexextended = [];

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
    this.nextRoom = arr[4];
    this.nextUserPositionX = arr[5];
    this.nextUserPositionY = arr[6];
  }
  
  draw(ctx) { 
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}


var welcomeHall = {
  roomName: 'Welcome Hall',
};

var entranceRoom = {
  roomName: 'Entrance Room',
  roomOrder: 2,
  roomDescription: 'You are in the Entrance room. Exits are to the north and south.',
  lookableAttributes: [stonewalls],
  wallStyle: annexextended,
  entryAndExit: [ [330, 1, 120, 35], [330, 580, 120, 35] ], //// these 350s should read 'theRoom.player.x' but...
  connectingRooms: [welcomeHall, null, castleCourtyard, null]
};

var castleCourtyard = {
  roomName: 'Castle Courtyard',
  roomOrder: 1,
  roomDescription: 'You are in the Castle Courtyard. To the north is a large Doorway. To the south is a large Gate.',
  roomMonsters: [],
  roomItems: [],
  lookableAttributes: [gate, courtyardWall],
  entryAndExit: [ [330, 1, 120, 35] ],
  wallStyle: square,
  connectingRooms: [entranceRoom, null, null, null]
};



class Room {
  constructor(canv, room, x, y) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let attr in room) { this[attr] = room[attr]; } // looping through object passed
    this.userPositionX = x;
    this.userPositionY = y;
    this.entryAndExitArr = [];
    this.drawWalls();
    this.setEntryAndExit();
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
    this.clear = this.clear.bind(this);
    this.clear();
  }
  //// stuff goes here
  
  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0,0,this.width,this.height);
  }
}

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
