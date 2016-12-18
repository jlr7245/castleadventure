console.log('here are the rooms!');

////////// ROOM WALL COORDINATES

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
  [90, 90, 35, 470], /// west
  [320, 0, 35, 125], [450, 0, 35, 125], [90, 90, 230, 35], [450, 90, 290, 35], /// north
  [715, 90, 35, 70], [715, 160, 65, 35], [715, 250, 65, 35], [715, 280, 35, 280], /// east
  ];
  
const guestroomWest = [
  [30, 0, 455, 35], /// north
  [0, 160, 65, 35], [0, 250, 65, 35], [30, 30, 35, 130], [30, 250, 35, 290], /// west
  [30, 520, 450, 35], /// south
  [450, 30, 35, 525] /// east
  ];
  
const storagewalls = [
  [0, 90, 620, 35], /// north
  [620, 90, 35, 425], /// east
  [0, 90, 35, 425], /// west
  [0, 515, 320, 35], [320, 515, 35, 125], [450, 515, 35, 125], [450, 515, 205, 35] /// south
];
  
  
const squareLargeEast = [
  [290, 0, 35, 65], [450, 0, 35, 65], [30, 30, 290, 35], [450, 30, 290, 35],
  [30, 30, 35, 195], [715, 30, 35, 95], 
  [0, 190, 65, 35], [715, 90, 65, 35], [0, 350, 65, 35], [715, 450, 65, 35], /// east & west entrances
  [30, 350, 35, 195], [715, 450, 35, 95],
  [30, 515, 295, 35], [450, 515, 300, 35], [290, 525, 35, 65], [450, 525, 35, 65]
];


const gardenBottomWalls = [
  [30, 0, 35, 90], [0, 90, 65, 35], [0, 450, 65, 35], [30, 450, 35, 90], /// west
  [715, 0, 35, 545], //// east
  [30, 540, 720, 35] //// south, no north
  
];
  
const gardenTopWalls = [
  [30, 0, 35, 90], [0, 90, 65, 35], [0, 450, 65, 35], [30, 450, 35, 140], /// west
  [715, 0, 35, 590], //// east
  [30, 0, 720, 35] //// north
];

const castleMuseumWalls = [
  [220, 30, 515, 35], /// north
  [220, 30, 35, 515],  /// west
  [715, 90, 65, 35], [715, 450, 65, 35], [715, 30, 35, 95], [715, 450, 35, 95], /// east & west entrances 
  [220, 515, 105, 35], [450, 515, 300, 35], [290, 525, 35, 65], [450, 525, 35, 65]
  ];
  
  
////// SECOND LEVEL
const winecellarWalls = [
  [0, 0, 400, 35],
  [400, 0, 35, 400],
  [0, 0, 35, 400],
  [0, 400, 150, 35], [250, 400, 185, 35], /// south
  [150, 400, 35, 200], [250, 400, 35, 200], /// to next room
  ];
  
  
const longPassage = [
  [150, 0, 35, 590],
  [250, 0, 35, 590],
  ];
  
const windingwalls = [
  [150, 0, 35, 225], [250, 0, 35, 160], /// connecting
  [250, 125, 365, 35], [580, 125, 35, 95], [580, 195, 190, 35], /// top
  [740, 195, 35, 290], [400, 450, 340, 35], /// east wall
  [400, 325, 35, 160], [0, 225, 510, 35], [0, 325, 415, 35], /// west exit
  [475, 225, 35, 160], [500, 290, 165, 95] /// middle
  ];
  

/// WALL CONSTRUCTOR 
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


//// INFORMATIVE SCREENS (really these should be their own class but I'm pretty short on time)

const win = {
  roomName: 'win',
  wallStyle: [],
  info: [`You've Escaped the Castle!`, 
/*  `You have collected these Treasures...`,
  `${ printItems() }`,
  `I'm sure you'll kill a few monsters when they're added to the game...`,
  `And I'm sure you'll have a score when a scoring system is added!`,*/ //// i will add these back in later, I didn't have time to figure out wrapping
  `- Press any key - `,],
  roomDescription: '',
};

const death = {
  roomName: 'death',
  wallStyle: [],
  info: [`You're have failed to Escape!`, `- Press any key -`],
  roomDescription: '',
};

//// ROOM OBJECTS
const centralHall = {
  roomName: 'Central Hall',
  wallStyle: square,
  roomDescription: 'You are in The Central Hall. Exits are in all directions. There is a large spiral staircase in the middle.',
};

const welcomeHall = {
  roomName: 'Welcome Hall',
  wallStyle: square,
  lookableAttributes: [stonewalls],
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
  roomItems: [scepter, lamp],
  lookableAttributes: [gate, courtyardWall, stonewalls],
  wallStyle: courtyard,
};

const westBallroom = {
  roomName: 'West Ballroom',
  wallStyle: squareNorthAndEast, 
  staircaseExit: [],
  lookableAttributes: [stonewalls],
  hasMonster: true,
  roomDescription: 'You are in The West Ballroom. There are arch ways to the north & east; a spiral staircase in one corner.',
  roomItems: [wand],
};

const eastBallroom = {
  roomName: 'East Ballroom',
  wallStyle: squareNorthAndWest, 
  lookableAttributes: [stonewalls],
  roomDescription: 'You are in The East Ballroom. There are arch ways to the north & west; a spiral staircase in one corner.',
};

const westDining = {
  roomName: 'West Dining',
  wallStyle: square2NorthEastSouth, //// actually this should be square2NorthEastSouth
  lookableAttributes: [stonewalls],
  roomDescription: 'You are in the West Dining room. There are 2 door ways to the north, & arch ways to the east & south.',
  roomItems: [helmet],
};

const eastDining = {
  roomName: 'East Dining',
  wallStyle: squareLargeEast, //// actually should be squareLargeEast
  /*connectingRooms: [undefined, undefined, eastBallroom, centralHall],*/
  lookableAttributes: [stonewalls],
  roomDescription: 'You are in the East Dining room. The large opening to the east leads to the garden patio.',
  roomItems: [eyeglasses],
};

const anteRoom = {
  roomName: 'Ante Room',
  wallStyle: annex,
  roomDescription: 'You are in the Ante Room. Here People waited for an audience with the King. It was once lined with benches.',
  lookableAttributes: [stonewalls],
  /*connectingRooms: [undefined, undefined, centralHall, undefined],*/
};

const throneRoom = {
  roomName: 'Throne Room',
  wallStyle: throneRm,
  roomDescription: 'You are in the Throne Room. There is a Large Throne at one end of the room.',
  roomMonsters: [],
  roomItems: [scepter],
  addlAttr: [throne],
  lookableAttributes: [stonewalls, throne],
};

const kingsDrRoom = {
  roomName: 'King\'s Dressing Room',
  wallStyle: smallEast,
  roomDescription: 'You are In the Kings Dressing room. It was Once Filled with clothes. There is a Staircase in one corner.',
  lookableAttributes: [stonewalls],
  roomItems: [book],
};

const queensDrRoom = {
  roomName: 'Queen\'s Dressing Room',
  wallStyle: smallWest,
  roomItems: [necklace],
  roomDescription: 'You are in the Queen\'s Dressing room. It was once filled with clothes. There is a Staircase in one corner.',
  lookableAttributes: [stonewalls],
};

const kitchen = {
  name: 'Kitchen',
  wallStyle: kitchenwalls,
  roomDescription: 'You are in The Kitchen. In the Center is a large stone table.',
  addlAttr: [kitchentable],
  lookableAttributes: [stonewalls],
};

const chefsQuarters = {
  name: 'Chef\'s Quarters',
  wallStyle: guestroomWest,
  roomDescription: 'You are in The Chef\'s Quarters. There is a small desk & a Bed here.',
  addlAttr: [], /// desk & bed. there's a wine flask on the desk.
  lookableAttributes: [stonewalls],
};

const storageroom = {
  name: 'Storage Room',
  wallStyle: storagewalls,
  roomDescription: 'You are in the Storage room. There are Two large shelves in the middle, and a Small Staircase in one corner.',
  lookableAttributes: [stonewalls],
  stairs: [
    {direction: 0, x: 100, y: 150}
    ],
    floor: 1,
};

const gardenBottom = {
  name: 'South Garden',
  wallStyle: gardenBottomWalls,
  roomDescription: 'You are in The South end of The Castle garden. In the center is a fountain.',
  lookableAttributes: [stonewalls],
};

const gardenTop = {
  name: 'North Garden',
  wallStyle: gardenTopWalls,
  roomDescription: 'You are In The North end of the Castle Garden. It is overgrown with bushes.',
  lookableAttributes: [stonewalls],
  roomItems: [lamp]
};

const castleMuseum = {
  name: 'Castle Museum',
  wallStyle: castleMuseumWalls,
  roomDescription: 'You are in The Castle Museum. This room was once decorated with many artifacts.',
  lookableAttributes: [stonewalls],
  roomItems: [sword],
};


//// level 0
const wineCellar = {
  name: 'Royal Wine Cellar',
  wallStyle: winecellarWalls,
  roomDescription: 'You are in the Royal Wine Cellar. It is filled with many Barrels. At one end is a Large metal Door.',
  stairs: [
    {direction: 1, x: 100, y: 150},
    ],
  floor: 0,
};

const basementPassage = {
  name: 'passageway',
  wallStyle: longPassage,
  roomDescription: 'You are in a long Passageway.',
  floor: 0,
};

const firstWindingPassage = {
  name: 'Winding Passage',
  wallStyle: windingwalls,
  roomDescription: 'You are in a Winding Passage.',
  floor: 0,
  trap: {
    userX: 100,
    x: 0,
    y: 225,
    w: 415,
    h: 130,
  }
};



/// setting connecting rooms


//// level 1
centralHall.connectingRooms = [anteRoom, eastDining, welcomeHall, westDining];
welcomeHall.connectingRooms = [centralHall, eastBallroom, entranceRoom, westBallroom];
entranceRoom.connectingRooms = [welcomeHall, undefined, castleCourtyard, undefined];
castleCourtyard.connectingRooms = [entranceRoom, undefined, win, undefined];
westBallroom.connectingRooms = [westDining, welcomeHall, undefined, undefined];
eastBallroom.connectingRooms = [eastDining, undefined, undefined, welcomeHall];
westDining.connectingRooms = [kitchen, centralHall, westBallroom, undefined];
eastDining.connectingRooms = [castleMuseum, gardenBottom, eastBallroom, centralHall];
anteRoom.connectingRooms = [throneRoom, undefined, centralHall, undefined];
throneRoom.connectingRooms = [undefined, queensDrRoom, anteRoom, kingsDrRoom];
kingsDrRoom.connectingRooms = [undefined, throneRoom, undefined, undefined];
queensDrRoom.connectingRooms = [undefined, undefined, undefined, throneRoom];
kitchen.connectingRooms = [storageroom, chefsQuarters, westDining, undefined];
chefsQuarters.connectingRooms = [undefined, undefined, undefined, kitchen];
storageroom.connectingRooms = [undefined, undefined, kitchen, undefined, wineCellar, undefined];
gardenBottom.connectingRooms = [gardenTop, undefined, undefined, eastDining];
gardenTop.connectingRooms = [undefined, undefined, gardenBottom, castleMuseum];
castleMuseum.connectingRooms = [undefined, gardenTop, eastDining, undefined];


//// level 2
wineCellar.connectingRooms = [undefined, undefined, basementPassage, undefined, undefined, storageroom];
basementPassage.connectingRooms = [wineCellar, undefined, firstWindingPassage, undefined, undefined, undefined];
firstWindingPassage.connectingRooms = [firstWindingPassage, undefined, undefined, undefined, undefined, undefined];


