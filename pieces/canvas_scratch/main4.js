const motionDif = 10;

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
/*    this.move = this.move.bind(this);
    this.clear = this.clear.bind(this);
    this.checkCollision = this.checkCollision.bind(this);*/
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
    if (this.y - 5 <= 0) { //// top 
    console.log(theRoom.connectingRooms);
      init(theRoom.connectingRooms[0], this.x, 550);
    } else if (this.x + 5 >= 780) { //// right
      init(theRoom.connectingRooms[1], 20, this.y);
    } else if (this.y + 5 >= 590) { //// bottom
      console.log(theRoom.connectingRooms[2]);
      init(theRoom.connectingRooms[2], this.x, 20);
    } else if (this.x - 5 <= 0) {  ///// left
    console.log(theRoom.connectingRooms[3]);
      init(theRoom.connectingRooms[3], 750, this.y);
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

const courtyard = [ [0, 0, 290, 35], [450, 0, 320, 35], 
  [0, 0, 35, 588], [745, 0, 35, 588], [1, 554, 778, 35]  ];

const annexextended = [
  [290, 0, 35, 165], [450, 0, 35, 165], [0, 130, 320, 35], [450, 130, 320, 35],
  [0, 130, 35, 320], [745, 130, 35, 320],
  [0, 415, 320, 35], [450, 415, 320, 35], [290, 415, 35, 165], [450, 415, 35, 165],
  ];
  
const square = [
  [290, 0, 35, 65], [450, 0, 35, 65], [30, 30, 290, 35], [450, 30, 290, 35],
  [30, 30, 35, 195], [715, 30, 35, 195], 
  [0, 190, 65, 35], [715, 190, 65, 35], [0, 350, 65, 35], [715, 350, 65, 35],
  [30, 350, 35, 195], [715, 350, 35, 195],
  [30, 515, 295, 35], [450, 515, 300, 35], [290, 525, 35, 65], [450, 525, 35, 65]
  ];
  
const squareNorthAndEast = [
  
];

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

/// 780 x 590 // 1280 x 800 // x 330, y 235, w 120, h 220


const centralHall = {
  roomName: 'Central Hall',
  wallStyle: square,
/*  connectingRooms: [anteRoom, eastDining, welcomeHall, westDining],
*/  roomDescription: 'You are in The Central Hall. Exits are in all directions. There is a large spiral staircase in the middle.',
};

const welcomeHall = {
  roomName: 'Welcome Hall',
  wallStyle: square,
  /*connectingRooms: [centralHall, eastBallroom, entranceRoom, westBallroom],*/
  roomDescription: 'You are in The Welcome Hall. This room was used to welcome guests. There are large archways in all four walls.',
};

const entranceRoom = {
  roomName: 'Entrance Room',
  roomOrder: 2,
  roomDescription: 'You are in the Entrance room. Exits are to the north and south.',
  lookableAttributes: [stonewalls],
  wallStyle: annexextended,
  /*connectingRooms: [welcomeHall, undefined, castleCourtyard, undefined]*/
};

const castleCourtyard = {
  roomName: 'Castle Courtyard',
  roomOrder: 1,
  roomDescription: 'You are in the Castle Courtyard. To the north is a large Doorway. To the south is a large Gate.',
  roomMonsters: [],
  roomItems: [],
  lookableAttributes: [gate, courtyardWall],
  wallStyle: courtyard,
  /*connectingRooms: [entranceRoom, undefined, undefined, undefined]*/
};

const westBallroom = {
  roomName: 'West Ballroom',
  wallStyle: square, /// should be squareNorthAndEast
  staircaseExit: [],
  hasMonster: true,
  roomDescription: 'You are in The West Ballroom. There are arch ways to the north & east; a spiral staircase in one corner.',
  /*connectingRooms: [westDining, welcomeHall, undefined, undefined],*/
};

const eastBallroom = {
  roomName: 'East Ballroom',
  wallStyle: square, /// should be squareNorthAndWest
  /*connectingRooms: [eastDining, undefined, undefined, welcomeHall],*/
  roomDescription: 'You are in The East Ballroom. There are arch ways to the north & west; a spiral staircase in one corner.',
};

const westDining = {
  roomName: 'West Dining',
  wallStyle: square, //// actually this should be square2NorthEastSouth
  /*connectingRooms: [undefined, centralHall, westBallroom, undefined],*/
  roomDescription: 'You are in the West Dining room. There are 2 door ways to the north, & arch ways to the east & south.',
};

const eastDining = {
  roomName: 'eastDining',
  wallStyle: square, //// actually should be squareLargeEast
  /*connectingRooms: [undefined, undefined, eastBallroom, centralHall],*/
  roomDescription: 'You are in the East Dining room. The large opening to the east leads to the garden patio.',
};

const anteRoom = {
  roomName: 'Ante Room',
  wallStyle: annexextended, /// should be annex, annexextended is too wide
  roomDescription: 'You are in the Ante Room. Here People waited for an audience with the King. It was once lined with benches.',
  /*connectingRooms: [undefined, undefined, centralHall, undefined],*/
};

/// setting connecting rooms
centralHall.connectingRooms = [anteRoom, eastDining, welcomeHall, westDining];
welcomeHall.connectingRooms = [centralHall, eastBallroom, entranceRoom, westBallroom];
entranceRoom.connectingRooms = [welcomeHall, undefined, castleCourtyard, undefined];
castleCourtyard.connectingRooms = [entranceRoom, undefined, undefined, undefined];
westBallroom.connectingRooms = [westDining, welcomeHall, undefined, undefined];
eastBallroom.connectingRooms = [eastDining, undefined, undefined, welcomeHall];
westDining.connectingRooms = [undefined, centralHall, westBallroom, undefined];
eastDining.connectingRooms = [undefined, undefined, eastBallroom, centralHall];
anteRoom.connectingRooms = [undefined, undefined, centralHall, undefined];


class Room {
  constructor(canv, room, player) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let attr in room) { this[attr] = room[attr]; } // looping through object passed
    this.drawWalls();
    this.player = player;
    this.writeDescrip();
  } /// end of constructor
  
  
  drawWalls() {
    console.log(this.wallStyle);
    for (let wall of this.wallStyle) {
      let drawIt = new Wall(wall);
      drawIt.draw(this.ctx);
    }
  }
  
  typeInput(e) {
    //console.log(e.char);
  }
  
  writeDescrip() {
    desc.innerHTML = this.roomDescription;
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
var player;

var desc = document.getElementById('roomdesc');


function init(room, x, y) {
  canv = document.getElementById('canvas');
  canvas = new CanvasState(canv);
  player = new User(user, x, y, canvas.ctx);
  theRoom = new Room(canvas, room, player);
}

window.onload = function() {
  init(castleCourtyard, 350, 100);
  window.addEventListener('keyup', e => theRoom.typeInput(e));
  window.addEventListener('keydown', e => player.move(e));
};
