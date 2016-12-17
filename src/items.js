console.log('items connected');


const user = {
  name: 'Hello',
  inventory: [],
  inventoryAsString: [],
  fightPoints: 30,
  isWearing: [],
};


///// ADDITIONAL ATTRIBUTES

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
};

function look(obj) {
  tellme.innerHTML = obj.look;
}

function getit(obj) {
  if (user.inventory.indexOf(obj) != -1) {
    tellme.innerHTML = 'You already have it!';
  } else if (obj.gettable === true) {
    user.inventory.push(obj);
    tellme.innerHTML = obj.getit;
  } else {tellme.innerHTML = 'That could be Difficult!'}
}

function wear(obj) {
  if (obj.wearable === true) {
    user.isWearing.push(obj);
    tellme.innerHTML = obj.wear;
  } else { tellme.innerHTML = 'That could be Difficult!' }
}

let arrayOfCommands = [look, getit, wear];
let commandsAsStrings = ['look', 'get', 'wear'];