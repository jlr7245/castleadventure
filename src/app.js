console.log('Here is the app itself!');

const motionDif = 15;

const alph = "abcdefghijklmnopqrstuvwxyz ";
const alphabetArray = alph.split('');

const dropSound = new Audio('sounds/drop.mp3');
const whatSound = new Audio('sounds/what.mp3');
const getSound = new Audio('sounds/get.mp3');
const collideSound = new Audio('sounds/collision.mp3');
const splashSound = new Audio('sounds/theme.ogg');
const harpSound = new Audio('sounds/harp.ogg');
const winSound = new Audio('sounds/win.ogg');

/*const user = {
  name: 'Hello',
  inventory: [],
  inventoryAsString: [],
  fightPoints: 30,
  isWearing: [],
};*/



class User {
  constructor(user, x, y, ctx) {
    for (let metric in user) { this[metric] = user[metric]; }
    this.initialX = x;
    this.initialY = y;
    this.x = x;
    this.y = y;
    this.prevX;
    this.prevX;
    this.checkthetrap = false;
    this.ctx = ctx;
    this.collision = 0;
    this.draw(this.initialX, this.initialY, this.ctx);
/*    this.move = this.move.bind(this);
    this.clear = this.clear.bind(this);
    this.checkCollision = this.checkCollision.bind(this);*/
  }

  draw(x, y, ctx) {
    //if (theRoom.hasOwnProperty('info') === false) { /// got a scope problem ... probably p easy to fix but it's the 11th hour
    ctx.fillStyle = 'white';
    ctx.fillRect(x,y,20,20);
    //}
  }
  
  move(e) {
    this.prevX = this.x;
    this.prevY = this.y;
      if (e.key === 'ArrowUp') {
        this.checkCollision(this.x, this.y - 6);
        if (this.collision === 0) this.y -= motionDif;
          else if (this.collision == 2) {
            user.inventory.push(theRoom.ref.roomItems[0]);
            user.inventoryAsString.push(theRoom.ref.roomItems[0].name);
            theRoom.ref.roomItems.shift();
            this.ctx.clearRect((this.x),(this.y-25),100,100);
          } /// another elseif for colliding w stairs
        this.collision = 0;
      } else if (e.key === 'ArrowDown') {
        this.checkCollision(this.x, this.y + 16);
        if (this.collision === 0) this.y += motionDif;
          else if (this.collision == 2) {
            user.inventory.push(theRoom.ref.roomItems[0]);
            user.inventoryAsString.push(theRoom.ref.roomItems[0].name);
            theRoom.ref.roomItems.shift();
            this.ctx.clearRect((this.x),(this.y+25),100,100);
          } /// another elseif for colliding w stairs
        this.collision = 0;
      } else if (e.key === 'ArrowLeft') {
        this.checkCollision(this.x - 6, this.y);
        if (this.collision === 0) {
          this.x -= motionDif; 
          if (this.checkthetrap === true) {
            this.springTheTrap(this.trap, this.ctx);
          }
        }
          else if (this.collision == 2) {
            user.inventory.push(theRoom.ref.roomItems[0]);
            user.inventoryAsString.push(theRoom.ref.roomItems[0].name);
            theRoom.ref.roomItems.shift();
            this.ctx.clearRect((this.x-25),(this.y),100,100);
          } /// another elseif for colliding w stairs
        this.collision = 0;
      } else if (e.key === 'ArrowRight') {
        this.checkCollision(this.x + 6, this.y);
        if (this.collision === 0) this.x += motionDif;
           else if (this.collision == 2) {
            user.inventory.push(theRoom.ref.roomItems[0]);
            this.ctx.clearRect((theRoom.ref.roomItems[0].x - 300),(theRoom.ref.roomItems[0].y - 200),400,400);
            theRoom.drawWalls();
            user.inventoryAsString.push(theRoom.ref.roomItems[0].name);
            theRoom.ref.roomItems.shift();
          } /// another elseif for colliding w stairs
        this.collision = 0;
      }
    this.clear(this.prevX, this.prevY);
    this.draw(this.x, this.y, this.ctx);
    this.collision = 0;
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
    var imgd = this.ctx.getImageData(x, y, 20, 20);
    var pix = imgd.data;
    for (let i = 0; i < pix.length; i++) {
      if (pix[i] === 204) {
        this.collision = 1;
        console.log('bonk');
        collideSound.play();
        break;
      } else if (pix[i] === 187) {
        this.collision = 2;
        console.log('oooh, theres something here');
        getSound.play();
        break;
      } else if (pix[i] === 1) { ////// stairs stuff begins
        this.collision = 3;
        console.log('tryin to go down some stairs');
        if ((theRoom.connectingRooms[4].floor === 0) && (user.inventory.indexOf(lamp) == -1)) tellme.innerHTML = `It's too dark to go that way!`;
        else init(theRoom.connectingRooms[4], this.x + 15, this.y + 15);
        break;
      } else if (pix[i] === 3) {
        this.collision = 4;
        console.log('tryin to go up some stairs');
        init(theRoom.connectingRooms[5], this.x + 15, this.y + 15);
        break;
      }
    }
  }
  
  springTheTrap(trap, ctx) {
    if ((this.x <= this.trap.userX) && (user.isWearing.indexOf(necklace) == -1)) {
      tellme.innerHTML = `You have sprung a Trap!!! The room has filled with water and you drowned!`;
      ctx.fillStyle = '#cccccc';
      ctx.fillRect(this.trap.x, this.trap.y, this.trap.w, this.trap.h);
      window.setTimeout(function(){init(death)}, 2000);
    }
  }
  
}



//// ROOM CLASS ///
class Room {
  constructor(canv, room, player) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let attr in room) { this[attr] = room[attr]; } // looping through object passed
    this.ref = room;
    this.drawWalls();
    this.player = player;
    this.drawItems();
    this.writeDescrip();
    this.drawStairs(this.ctx);
    this.writeInfo();
    this.itsATrap(this.ctx);
  } /// end of constructor
  
 //// SETTING UP TO DRAW WALLS /// 
  drawWalls() {
    for (let wall of this.wallStyle) {
      let drawIt = new Wall(wall);
      drawIt.draw(this.ctx);
    }
  }
  
  /// DRAWING STAIRS //
  drawStairs(ctx) {
    if (this.hasOwnProperty('stairs')) {
      for (let stair of this.stairs) {
        if (stair.direction === 0) {
          ctx.fillStyle = '#010101';
          ctx.fillRect(stair.x, stair.y, 30, 30);
          ctx.font = '30px terminal';
          ctx.fillStyle = '#ffffff';
          ctx.fillText ('D', stair.x, stair.y + 25);
        } else if (stair.direction === 1 ) {
          ctx.fillStyle = '#030303';
          ctx.fillRect(stair.x, stair.y, 30, 30);
          ctx.font = '30px terminal';
          ctx.fillStyle = '#ffffff';
          ctx.fillText ('U', stair.x, stair.y + 25);
        }
      }
    } else console.log('no stairs in this room!');
  }
  
  //// DRAWING ITEMS ///
  drawItems() {
    if (this.roomItems !== undefined) {
      for (let item of this.roomItems) {
        this.ctx.font = "20px terminal";
        this.ctx.fillStyle = "#bbbbbb";
        this.ctx.fillText(item.str, item.x, item.y);
        output.innerHTML += ` ${ item.str } ${ item.name.toUpperCase() } <br/>`;
      } 
    } 
  }
    
  /// ROOM DESCRIPTION ///
  writeDescrip() {
    desc.innerHTML = this.roomDescription;
  }
  
  //// USER INPUT ///
  typeInput(e) {
    if (this.ref.hasOwnProperty('info')) {
      init(castleCourtyard, 200, 200);
    } else if (alphabetArray.indexOf(e.key) != -1) {
      str += e.key;
      input.innerHTML = str.toUpperCase();
    } else if (e.keyCode == 8) {
      str = str.substring(0, str.length - 1);
      input.innerHTML = str.toUpperCase();
    } else if (e.keyCode == 13) {
      input.innerHTML = '';
      this.inputChecker(str.split(' '));
      str = '';
    }
  }

  //// INPUT UNDERSTANDING LOGIC ///
  inputChecker(arr) {
    console.log(arr);
    if (arr.length == 1 && arr[0] == 'inventory') {
      if (user.inventory.length === 0) {
        tellme.innerHTML = 'You aren\'t carrying anything yet!';
      } else {
        let inven = '';
        for (let i = 0; i < user.inventory.length; i++) {
          console.log(user.inventory);
          console.log(user.inventory[i]);
          inven += `${ user.inventory[i].str } ${ user.inventory[i].name.toUpperCase() } <br/>`;
        }
        tellme.innerHTML = `- Inventory - <br/> ${ inven }`;
      }
    } else if ((arr.length == 2) && (commandsAsStrings.indexOf(arr[0]) != -1) /*&& (commandableObjectsAsStrings.indexOf(arr[1])  != -1) */) {
        let theCommand = arrayOfCommands[commandsAsStrings.indexOf(arr[0])];
        let theObject = commandableObjects[commandableObjectsAsStrings.indexOf(arr[1])];
        theCommand(theObject, arr[1]);
    } else this.sayWhat();
  }
  
  
  //// WHAT ////
  sayWhat() {
    whatSound.play();
    tellme.innerHTML = 'What???';
    window.setTimeout(function(){tellme.innerHTML='';}, 100);
    window.setTimeout(function(){tellme.innerHTML = 'What???'},150);
    window.setTimeout(function(){tellme.innerHTML='';}, 350);
  }
  
  //// OPEN WALL ///
  openWall() {
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(290, 554, 200, 36);
  }
  
  ///// INFO ////
  writeInfo() {
    if (this.hasOwnProperty('info') === true) {
      this.ctx.font = "20px terminal, monospace";
      this.ctx.fillStyle = "#bbbbbb";
      for (let i = 0; i < this.info.length; i++) {
        this.ctx.fillText(this.info[i], 0, 20 * (i + 3)); 
      }
    } else console.log('Not an info room!');
  }
  
  ///// [admiral akbar voice] IT'S A TRAP!! /////
  itsATrap() {
    if (this.ref.hasOwnProperty('trap')) {
      player.trap = this.ref.trap;
      player.checkthetrap = true;
    } else console.log('Phew, safe for another day');
  }
  
  
} ///// END OF ROOM CONSTRUCTOR


//// CANVAS STATE CLASS ///
class CanvasState {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    this.clear = this.clear.bind(this);
    this.clear();
  }

  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0,0,this.width,this.height);
    output.innerHTML = '';
    tellme.innerHTML = '';
  }
}



//////// SETUP FOR PAGE LOAD //////
var canv;
var theRoom;
var canvas;
var player;
let str = '';

var desc = document.getElementById('roomdesc');
var output = document.getElementById('itemoutput');
var tellme = document.getElementById('tellme');
var input = document.getElementById('inputview');

///// INITIATOR FUNCTION //////
function init(room, x, y) {
  canv = document.getElementById('canvas');
  canvas = new CanvasState(canv);
  player = new User(user, x, y, canvas.ctx);
  theRoom = new Room(canvas, room, player);
}


//// WINDOW ONLOAD ///
window.onload = function() {
  init(splash);
  splashSound.play();
  window.setTimeout(function(){init(intro)}, 7000);
  window.addEventListener('keyup', e => theRoom.typeInput(e));
  window.addEventListener('keydown', e => player.move(e));
};