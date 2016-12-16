/* jshint maxerr: 2000 */

const motionDif = 10;

const user = {
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
    this.clear(this.prevX, this.prevY);
    this.draw(this.x, this.y, this.ctx);
    if (this.y - 5 <= 0) { //// top 
      init(theRoom.connectingRooms[0], this.x, 550);
    } else if (this.x + 5 >= 780) { //// right
      init(theRoom.connectingRooms[1], 20, this.y);
    } else if (this.y + 5 >= 590) { //// bottom
      init(theRoom.connectingRooms[2], this.x, 20);
    } else if (this.x - 5 <= 0) {  ///// left
      init(theRoom.connectingRooms[3], 750, this.y);
    }
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
  name: 'gate',
  look: 'It looks very Strong.',
  open: ['You don\'t have a key!'],
  collide: 'The gate is locked.',
  fixedLocation: true
};

const courtyardWall = {
  name: 'wall',
  look: `The writing on the wall says "${ user.name } WAS HERE - 1984"... looks like you've been here a while.`,
  fixedLocation: true,
};

const stonewalls = {
  name: 'wall',
  look: 'The WALLS are made of Gray Stone.',
};

const throne = {
  name: 'throne',
  look: 'The throne is made of stone.',
  get: 'THRONES are too heavy!',
};

const kitchentable = {
  name: 'table',
  look: 'It\'s made of Stone.',
  get: 'TABLES are too heavy!',
};


////////// initial room styles (might go in own file?)

const courtyard = [ [0, 0, 290, 35], [450, 0, 320, 35], 
  [0, 0, 35, 588], [745, 0, 35, 588], [0, 554, 778, 35]  ];

const annexextended = [
  [290, 0, 35, 165], [450, 0, 35, 165], [0, 130, 320, 35], [450, 130, 320, 35],
  [0, 130, 35, 320], [745, 130, 35, 320],
  [0, 415, 320, 35], [450, 415, 320, 35], [290, 415, 35, 165], [450, 415, 35, 165],
  ];
  
const square = [
  [290, 0, 35, 65], [450, 0, 35, 65], [30, 30, 290, 35], [450, 30, 290, 35],
  [30, 30, 35, 195], [715, 30, 35, 195], 
  [0, 190, 65, 35], [715, 190, 65, 35], [0, 350, 65, 35], [715, 350, 65, 35], /// east & west entrances
  [30, 350, 35, 195], [715, 350, 35, 195],
  [30, 515, 295, 35], [450, 515, 300, 35], [290, 525, 35, 65], [450, 525, 35, 65] /// bottom
  ];
  
const squareNorthAndEast = [
  [290, 0, 35, 65], [450, 0, 35, 65], [30, 30, 290, 35], [450, 30, 290, 35], /// north
  [30, 30, 35, 530], [30, 530, 720, 35], /// west & south
  [715, 350, 35, 195], [715, 30, 35, 195], [750, 350, 35, 35], [750, 190, 35, 35] /// east
];

const squareNorthAndWest = [
  [290, 0, 35, 65], [450, 0, 35, 65], [30, 30, 290, 35], [450, 30, 290, 35], /// north
  [30, 350, 35, 195], [30, 30, 35, 195], [0, 350, 35, 35], [0, 190, 35, 35], /// west
  [715, 30, 35, 530], [30, 530, 720, 35], /// south & east
];
  
const annex = [
  [290, 0, 35, 165], [450, 0, 35, 165], [150, 130, 140, 35], [450, 130, 165, 35],
  [150, 130, 35, 320], [595, 130, 35, 320],
  [150, 415, 165, 35], [450, 415, 165, 35], [290, 415, 35, 165], [450, 415, 35, 165],
];

const throneRm = [
  [30, 515, 295, 35], [450, 515, 300, 35], [290, 525, 35, 65], [450, 525, 35, 65], //// south
  [30, 90, 715, 35], /// north
  [30, 90, 35, 50], [0, 120, 65, 35], [0, 210, 65, 35], [30, 210, 35, 335], //// west
  [715, 90, 35, 50], [715, 120, 65, 35], [715, 210, 65, 35], [715, 210, 35, 335], //// east
];

const smallEast = [
  [30, 0, 680, 35], /// north
  [30, 0, 35, 300], /// west
  [30, 300, 680, 35], /// south
  [680, 0, 35, 155], [680, 120, 95, 35], [680, 210, 95, 35], [680, 210, 35, 125] /// east
];

const smallWest = [
  [90, 0, 590, 35], // north
  [680, 0, 35, 300], // east
  [90, 300, 625, 35], // south
  [90, 0, 35, 155], [0, 120, 95, 35], [0, 210, 95, 35], [90, 210, 35, 125], /// west
];

const square2NorthEastSouth = [
  [715, 350, 35, 195], [715, 30, 35, 195], [750, 350, 35, 35], [750, 190, 35, 35], /// east
  [30, 515, 295, 35], [450, 515, 300, 35], [290, 525, 35, 65], [450, 525, 35, 65], /// south
  [30, 30, 35, 520], /// west
  [150, 0, 35, 65], [250, 0, 35, 65], [30, 30, 130, 35], [250, 30, 220, 35], [460, 0, 35, 65], [560, 0, 35, 65], [560, 30, 160, 35]/// north
];

const kitchenwalls = [
  [150, 525, 35, 65], [250, 525, 35, 65], [90, 525, 90, 35], [250, 525, 220, 35], [460, 525, 35, 65], [560, 525, 35, 65], [560, 525, 160, 35], /// south
  [90, 30, 35, 515] /// west
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
   roomDescription: 'You are in The Central Hall. Exits are in all directions. There is a large spiral staircase in the middle.',
};

const welcomeHall = {
  roomName: 'Welcome Hall',
  wallStyle: square,
  roomDescription: 'You are in The Welcome Hall. This room was used to welcome guests. There are large archways in all four walls.',
};

const entranceRoom = {
  roomName: 'Entrance Room',
  roomOrder: 2,
  roomDescription: 'You are in the Entrance room. Exits are to the north and south.',
  lookableAttributes: [stonewalls],
  wallStyle: annexextended,
};

const castleCourtyard = {
  roomName: 'Castle Courtyard',
  roomOrder: 1,
  roomDescription: 'You are in the Castle Courtyard. To the north is a large Doorway. To the south is a large Gate.',
  roomMonsters: [],
  roomItems: [],
  lookableAttributes: [gate, courtyardWall],
  wallStyle: courtyard,
};

const westBallroom = {
  roomName: 'West Ballroom',
  wallStyle: squareNorthAndEast, 
  staircaseExit: [],
  hasMonster: true,
  roomDescription: 'You are in The West Ballroom. There are arch ways to the north & east; a spiral staircase in one corner.',
};

const eastBallroom = {
  roomName: 'East Ballroom',
  wallStyle: squareNorthAndWest, 
  roomDescription: 'You are in The East Ballroom. There are arch ways to the north & west; a spiral staircase in one corner.',
};

const westDining = {
  roomName: 'West Dining',
  wallStyle: square2NorthEastSouth, //// actually this should be square2NorthEastSouth
  /*connectingRooms: [undefined, centralHall, westBallroom, undefined],*/
  roomDescription: 'You are in the West Dining room. There are 2 door ways to the north, & arch ways to the east & south.',
};

const eastDining = {
  roomName: 'East Dining',
  wallStyle: square, //// actually should be squareLargeEast
  /*connectingRooms: [undefined, undefined, eastBallroom, centralHall],*/
  roomDescription: 'You are in the East Dining room. The large opening to the east leads to the garden patio.',
};

const anteRoom = {
  roomName: 'Ante Room',
  wallStyle: annex, /// should be annex, annexextended is too wide
  roomDescription: 'You are in the Ante Room. Here People waited for an audience with the King. It was once lined with benches.',
  /*connectingRooms: [undefined, undefined, centralHall, undefined],*/
};

const throneRoom = {
  roomName: 'Throne Room',
  wallStyle: throneRm,
  roomDescription: 'You are in the Throne Room. There is a Large Throne at one end of the room.',
  roomMonsters: [],
  roomItems: [],
  addlAttr: [throne],
};

const kingsDrRoom = {
  roomName: 'King\'s Dressing Room',
  wallStyle: smallEast,
  roomDescription: 'You are In the Kings Dressing room. It was Once Filled with clothes. There is a Staircase in one corner.'
};

const queensDrRoom = {
  roomName: 'Queen\'s Dressing Room',
  wallStyle: smallWest,
  roomDescription: 'You are in the Queen\'s Dressing room. It was once filled with clothes. There is a Staircase in one corner.',
};

const kitchen = {
  name: 'Kitchen',
  wallStyle: kitchenwalls,
  roomDescription: 'You are in The Kitchen. In the Center is a large stone table.',
  addlAttr: [kitchentable],
};

/// setting connecting rooms
centralHall.connectingRooms = [anteRoom, eastDining, welcomeHall, westDining];
welcomeHall.connectingRooms = [centralHall, eastBallroom, entranceRoom, westBallroom];
entranceRoom.connectingRooms = [welcomeHall, undefined, castleCourtyard, undefined];
castleCourtyard.connectingRooms = [entranceRoom, undefined, undefined, undefined];
westBallroom.connectingRooms = [westDining, welcomeHall, undefined, undefined];
eastBallroom.connectingRooms = [eastDining, undefined, undefined, welcomeHall];
westDining.connectingRooms = [kitchen, centralHall, westBallroom, undefined];
eastDining.connectingRooms = [undefined, undefined, eastBallroom, centralHall];
anteRoom.connectingRooms = [throneRoom, undefined, centralHall, undefined];
throneRoom.connectingRooms = [undefined, queensDrRoom, anteRoom, kingsDrRoom];
kingsDrRoom.connectingRooms = [undefined, throneRoom, undefined, undefined];
queensDrRoom.connectingRooms = [undefined, undefined, undefined, throneRoom];
kitchen.connectingRooms = [undefined, undefined, westDining, undefined];


class Room {
  constructor(canv, room, player) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let attr in room) { this[attr] = room[attr]; } // looping through object passed
    this.drawWalls();
    this.player = player;
    this.writeDescrip();
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
  init(kitchen, 350, 100);
  window.addEventListener('keyup', e => theRoom.typeInput(e));
  window.addEventListener('keydown', e => player.move(e));
};
