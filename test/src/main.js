console.log('main.js is connected!');

/**
 * This is where the "state" of the game lives. Information about
 * the current room, references to the dom elements, information
 * about where the walls are, etc all lives here. 
 */
const gameState = {
  elementStore: {
    roomDiv: null,
    environmentDiv: null,
  },
  currentRoom: null,
  allWallCoords: null,

  switchRoom: function(room) {
    this.clear();
    this.currentRoom = rooms[room];
    this.drawRoom();
  },

  drawRoom: function() {
    // TODO: map should not have side effects
    this.allWallCoords = this.currentRoom.walls.map(wall => {
      const newWall = document.createElement('div');
      newWall.setAttribute(
        'style',
        `top: ${wall[0]}px; left: ${wall[1]}px; height: ${wall[2]}px; width: ${wall[3]}px`,
      );
      newWall.setAttribute('class', 'wall');
      this.elementStore.roomDiv.appendChild(newWall);
      return newWall.getBoundingClientRect();
    });
    this.elementStore.environmentDiv.innerHTML = this.currentRoom.environment;
  },
  /**
   * This method clears the `room` div.
   */
  clear: function() {
    this.elementStore.roomDiv.innerHTML = '';
  },
};

// ======= END OF STATE

/**
 * This object has a bunch of subobjects that contain
 * information about each individual room. In a larger
 * version of this game, this would also have references
 * to the items in each room and any monsters contained within it.
 */
const rooms = {
  courtyard: {
    walls: [
      [0, 0, 400, 25],
      [0, 0, 25, 250],
      [0, 350, 25, 250],
      [375, 0, 25, 600],
      [0, 575, 400, 25],
    ],
    environment: 'You are in a courtyard.',
  },
  entrance: {
    walls: [
      [100, 0, 200, 25],
      [100, 0, 25, 250],
      [0, 225, 125, 25],
      [0, 350, 125, 25],
      [100, 350, 25, 250],
      [100, 575, 200, 25],
      [300, 0, 25, 250],
      [300, 225, 100, 25],
      [300, 350, 100, 25],
      [300, 350, 25, 250],
    ],
    environment:
      'You are in the Entrance room. Exits are to the north & south.',
  },
  welcomehall: {
    walls: [
      [25, 25, 125, 25],
      [25, 25, 25, 225],
      [0, 225, 50, 25],
      [0, 350, 50, 25],
      [25, 350, 25, 225],
      [25, 550, 125, 25],
      [125, 550, 25, 50],
      [225, 550, 25, 50],
      [225, 550, 125, 25],
      [350, 350, 25, 225],
      [350, 350, 50, 25],
      [350, 225, 50, 25],
      [350, 25, 25, 225],
      [125, 0, 25, 50],
      [225, 0, 25, 50],
      [225, 25, 125, 25]
    ],
    environment:
      'You are in The Welcome Hall. This room was used to welcome guests. There are large archways in all four walls.',
  },
};

/**
 * This function runs when the page loads. It initializes the game 
 * and tells it what room to start in. Then it loops through the buttons
 * and adds a click event to each one.
 * 
 */
function init() {
  // setting up the initial game
  gameState.elementStore.roomDiv = document.getElementById('room');
  gameState.elementStore.environmentDiv = document.getElementById(
    'environment',
  );
  gameState.switchRoom('courtyard');
  // adding the event listener
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {
      // takes whatever the `data-room` attribute of the target is
      // and switches to that particular room
      gameState.switchRoom(e.target.dataset.room);
    });
  });
  // adding the typing event listener
  document.addEventListener('keypress', (e) => {
    console.log(e.key);
  })
}

document.addEventListener('DOMContentLoaded', init);
