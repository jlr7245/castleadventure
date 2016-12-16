let user = {
  name: 'Hello',
  items: [],
  fightPoints: 30,
};

////// ROOM ATTRIBUTES

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
};



///// ROOM ITEMS

