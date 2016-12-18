console.log('items connected');


const user = {
  name: 'Hello',
  inventory: [],
  inventoryAsString: [],
  fightPoints: 30,
  isWearing: [],
};


///// ADDITIONAL ATTRIBUTES


/// ENVIRONMENT ATTRIBUTES
const gate = {
  name: 'gate',
  look: 'It looks very Strong.',
  open: 'You don\'t have a key!',
  collide: 'The gate is locked.',
  getit: 'That could be Difficult!',
  carriable: false,
};

const courtyardWall = {
  name: 'wall',
  look: `The writing on the wall says "${ user.name } WAS HERE - 1984"... looks like you've been here a while.`,
  carriable: false,
};

const stonewalls = {
  name: 'wall',
  look: 'The WALLS are made of Gray Stone.',
  carriable: false,
};

//// DRAWN ATTRIBUTES

const throne = {
  name: 'throne',
  look: 'The throne is made of stone.',
  getit: 'THRONES are too heavy!',
  carriable: false,
};

const kitchentable = {
  name: 'table',
  look: 'It\'s made of Stone.',
  getit: 'TABLES are too heavy!',
  carriable: false,
};

/// DRAWN ITEMS

const necklace = {
  name: 'necklace',
  x: 450,
  y: 100,
  str: '§',
  look: 'On the back it says Protection Against Traps.',
  getit: 'Get it yourself!',
  gettable: false,
  carriable: true,
  wear: 'Okay. I\'m wearing it.',
  wearable: true,
  waveable: false,
};


const book = {
  name: 'book',
  x: 300,
  y: 200,
  str: `═`,
  look: `It is titled 'The Gate'`,
  getit: 'Done.',
  gettable: true,
  carriable: true,
  wearable: false,
  waveable: false,
};

const eyeglasses = {
  name: 'eye glasses',
  x: 300,
  y: 300,
  str: '@@',
  look: `They're Bifocals`,
  getit: 'Done.',
  gettable: true,
  carriable: true,
  wearable: true,
  wear: `Ok. I'm wearing them.`,
  waveable: false,
}

///////// OBJECT ARRAYS

let commandableObjects = [
  /* room attributes */ gate, courtyardWall, stonewalls,
  /* drawn attributes */ throne, kitchentable, 
  /* drawn items */ necklace, book, eyeglasses
  ];
  
let commandableObjectsAsStrings = [
  /* room attributes */ 'gate', 'walls', 'wall', 
  /* drawn attributes */ 'throne', 'table', 
  /* drawn items */ 'necklace', 'book', 'glasses',
  ];


function look(obj, str) {
  if (commandableObjectsAsStrings.indexOf(str) == -1) tellme.innerHTML = `I can't see a ${ str.toUpperCase() }, and I don't have a ${ str.toUpperCase() }!`;
    else if ((obj.carriable === true) && (user.inventory.indexOf(obj) !== -1)) tellme.innerHTML = obj.look;
    else if ((obj.carriable === false) && (theRoom.lookableAttributes.indexOf(obj) !== -1)) tellme.innerHTML = obj.look;
    else if ((obj.carriable === true) && (user.inventory.indexOf(obj) == -1)) tellme.innerHTML = 'You Don\'t Have it!';
    else if (theRoom.lookableAttributes.indexOf(obj) == -1) tellme.innerHTML = `I can't see a ${ str.toUpperCase() }, and I don't have a ${ str.toUpperCase() }!`;
    else theRoom.sayWhat();
}

function getit(obj, str) {
  if (commandableObjectsAsStrings.indexOf(str) == -1) {
    theRoom.sayWhat();
  } else if (user.inventory.indexOf(obj) != -1) {
    tellme.innerHTML = 'You already have it!';
  } else if ((obj.gettable === false) && (obj.carriable === true) && (theRoom.roomItems.indexOf(obj) !== -1) && (user.inventory.indexOf(obj) == -1)) {
    tellme.innerHTML = 'Get it Yourself!';
  } else if ((obj.gettable === true) && (theRoom.roomItems.indexOf(obj) !== -1)) {
    //// something contextual about the player's position and the object's position
    user.inventory.push(obj);
    tellme.innerHTML = obj.getit;
  } else {tellme.innerHTML = 'That could be Difficult!'}
}

function wear(obj) {
  if ((obj.wearable === true) && (user.inventory.indexOf(obj) !== -1)) {
    user.isWearing.push(obj);
    tellme.innerHTML = obj.wear;
  } else { tellme.innerHTML = 'That could be Difficult!' }
}

function wave(obj, str) {
  if (commandableObjectsAsStrings.indexOf(str) == -1) {
    theRoom.sayWhat();
  } else if ((user.inventory.indexOf(obj) !== -1) && (obj.waveable === true)) {
    tellme.innerHTML = obj.wave;
    //// something contextual here
  } else if ((user.inventory.indexOf(obj) !== -1) && (obj.waveable === false)) tellme.innerHTML = `You look awful Silly waving that ${ str.toUpperCase() }!`;
    else tellme.innerHTML = 'You don\'t have it!';
}

function read(obj, str) {
  if ((obj == book) && (user.inventory.indexOf(obj) !== -1) && (user.isWearing.indexOf(eyeglasses) !== -1)) tellme.innerHTML = 'The book reads: <br/> Wave Scepter';
  else if ((obj == book) && (user.inventory.indexOf(obj) !== -1)) tellme.innerHTML = 'You can\'t see well enough. It\'s all Blurry.';
  else tellme.innerHTML = `You can't read That!`;
  
}

let arrayOfCommands = [look, getit, getit, wear, read];

let commandsAsStrings = ['look', 'get', 'take', 'wear', 'read'];

