///// ROOM SHAPES

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
  
//// ROOM OBJECTS

var welcomeHall = {
  roomName: 'Welcome Hall',
  wallStyle: square,
  connectingRooms: [null, null, entranceRoom, null],
};

var entranceRoom = {
  roomName: 'Entrance Room',
  roomOrder: 2,
  roomDescription: 'You are in the Entrance room. Exits are to the north and south.',
  lookableAttributes: [stonewalls],
  wallStyle: annexextended,
  connectingRooms: [welcomeHall, null, castleCourtyard, null]
};

var castleCourtyard = {
  roomName: 'Castle Courtyard',
  roomOrder: 1,
  roomDescription: 'You are in the Castle Courtyard. To the north is a large Doorway. To the south is a large Gate.',
  roomMonsters: [],
  roomItems: [],
  lookableAttributes: [gate, courtyardWall],
  wallStyle: courtyard,
  connectingRooms: [entranceRoom, null, null, null]
};