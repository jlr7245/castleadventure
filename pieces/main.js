console.log('hello world!');


let necklace = {
  name: 'necklace',
  canWear: true,
  look: 'It looks sparkly!'
};

let sword = {
  name: 'sword',
  wear: false,
  look: 'It looks sharp, be careful!'
};

let helmet = {
  name: 'helmet',
  wear: true,
  look: 'It looks heavy!'
};


let look = function look(object) {
  alert(object.look);
};

let wear = function wear(object) {
  if (object.wear === true) {
    alert(`You are now wearing the ${ object.name }!`);
    //// something here that pushes the object to a User object's array of 'wearing' objects.
  } else alert(`You can't wear that!`);
};


//// do this on load - push object names into an array... or even just have an array of like. objects

let arrayOfObjects = [necklace, sword, helmet];
let objectsAsString = ["necklace", "sword", "helmet"];
let arrayOfCommands = [look, wear];
let commandsAsStrings = ["look", "wear"];


let theValue;
let objectOperated;

$(function() {
  $('#access').on('keydown', function f1(e){
    if (e.keyCode === 13) {
      theValue = $('#access').val();
      arrayCheck(theValue);
    }
  });
});

function arrayCheck(input) {
  let inputVal = theValue.split(' ');
  if (2 < inputVal.length) {
    alert(`I'm not sure what you're trying to ask me.`);
  } else {
    if (objectsAsString.indexOf(inputVal[1]) == -1) {
      alert(`There's no such thing as a ${ inputVal[1] }!`);
    } else {
      objectOperated = arrayOfObjects[objectsAsString.indexOf(inputVal[1])];
    } //// maybe i gotta nest these so the second only runs if the first is true
    if (commandsAsStrings.indexOf(inputVal[0]) == -1) {
      alert(`I don't know what you're trying to do to the ${ inputVal[1]}, but please don't.`);
    } else {
      arrayOfCommands[commandsAsStrings.indexOf(inputVal[0])](objectOperated);
    }
  }
}


