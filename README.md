# Castle Adventure

Original Castle Adventure      |  J's Castle Adventure
:-------------------------:|:-------------------------:
![](assets/castleadventure.png)  |  ![](assets/jscastleadventure.png)

##What is Castle Adventure?
- Castle Adventure is an old freeware/shareware DOS game. Built in 1984 by teenaged programmer Kevin Bales, it quickly spread. Today, it still occupies a place of fond nostalgia for many of us who started playing computer games in the DOS era, but has never been replicated fully for the modern internet browser.
- For more information, see [The Key to the Castle](http://www.thealmightyguru.com/Reviews/CastleAdventure/CA-TheGame.html)


##Technical Discussion
<dl>
<dt>HTML</dt>
<dd>The game makes heavy use of the HTML5 Canvas element - drawing on and manipulating it with Javascript functions.</dd>
<dt>CSS</dt>
<dd>There is a small amount of CSS that impacts gameplay - notably the blinking cursor by the user input.</dd>
<dt>JavaScript</dt>
<dd>I made use of JavaScript ES6 to build out the logic, display, and interaction behind the game.</dd>
</dl>

###Notes on Game Structure

The driving forces behind the game are three ES6 classes - `User`, `CanvasState`, and `Room`. `CanvasState` describes the state of the HTML5 canvas element; `User` contains the functions for moving, colliding, and switching between rooms; and `Room` takes both of those classes along with a room name to display the current room with the user's position and inventory on the screen. I think of it as a big funnel: all the pieces are dumped into the `Room` funnel and align to create what the user sees on the page.

Here's the beginning of `Room`'s constructor function as an example:

```javascript
class Room {
  constructor(canv, room, player) {
    for (let key in canv) { this[key] = canv[key]; }
    for (let attr in room) { this[attr] = room[attr]; } // looping through object passed
    this.ref = room; // need the room object in rooms.js to be accessible by this class and the User class in order to pick up objects
    this.drawWalls();
    this.player = player;
    /// other parameters & method calls
    }
  //// methods
}
```

##The Making of Castle Adventure
<dl>
<dt>Author</dt>
<dd>J Silverstein</dd>
<dt>Castle Adventure created by</dt>
<dd>Kevin Bales</dd>
<dt>Credits</dt>
<dd>Sounds from the <a href="http://www.vgmpf.com/Wiki/index.php?title=Castle_Adventure_%28DOS%29" target="_blank">VideoGame Music Preservation Foundation</a> and <a href="https://www.youtube.com/watch?v=PmiEld3Zw4A" target="_blank">SwitchLeft on YouTube</a></dd>
<dd><a href="http://simonsarris.com/blog/510-making-html5-canvas-useful" target="_blank">A Gentle Introduction to Making HTML5 Canvas Interactive</a> by Simon Sarris was very helpful to me when I was trying to figure out how to structure a script that edits the canvas.</dd>
<dd>Artem Gordinsky's CodePen <a href="http://codepen.io/ArtemGordinsky/pen/GnLBq" target="_blank">"Blinking Cursor in CSS3"</a> was very helpful when I went to make the user input field, although I used a different method of implementation.</dd>
<dd>I was the recipient of some very helpful advice on StackOverflow: see <a href="http://stackoverflow.com/questions/41169190/using-class-methods-to-draw-on-html5-canvas-scope-problems-js-es6" target="_blank">here</a> and <a href="http://stackoverflow.com/questions/41175295/resetting-a-class-parameter-upon-new-instance-of-that-class-js-es6" target="_blank">here</a>.
</dl>

## Opportunities for Further Growth

While the game as it currently is accomplishes the goals I wished to accomplish, there is, as always, room for growth.

### Fixing Known Glitches
- Font of some items is not the original font
- Player marker behavior on using stairs is a little buggy
- Room collision sound is delayed
- Win & lose screens won't display inventory
- Win & lose screens retain player position

### Cleaning Up Code
- Use `.hasOwnProperty()` for item interaction instead of having an excessive number of properties
- Revisit collision logic to see if it can be shortened... mostly it is the same function four different times, which seems like it can be done more efficiently.
- Consolidate some methods so my constructor functions aren't as long

## Future Stages of Development
#### Level 1
- Addition of "room flavor" - i.e. throne, bushes, shelves, etc.
- Addition of maze rooms
- Fairy and Vampire-type monsters

#### Level 2 
- Addition of ogres to fight... ogres will need their own initial-position and speed. 
- ***Fight-based loss scenario***
- Easter egg: keycode combo that will make the game imitate the original game's glitchy save patterns as seen [here](https://youtu.be/5ec6AbA-KSQ?t=7m15s). 

#### Level 3
- Expansion of game - up to 40 rooms
- Scoring system
- Adding a drop command and a max-length for the item inventory 

#### Level 4
- Exact, complete duplicate of original game
- Memory of high score

#### Level 5 _Castle's Sky_
- Generative version of the game - rooms are created on the fly without being specifically defined.

##Checking Win/Loss State
I spent most of my childhood playing this dang game and losing -- years and years -- so, even though this is a very abbreviated version, I thought I'd add the instructions on how to beat it. :) See annotated map (original from [We Love Dos Games](http://www.welovedosgames.net/article/Castle%20Adventure%20by%20Kevin%20Bales%20-%20Maps%20and%20Walkthrough/) ) below - the objects & stairs in each room differ a little bit in my game, but the layout is the same.

Also, you can Look, Rub, Get, Take, Wave, and Wear objects, and check your Inventory.

<dl>
<dt>Checking for a Win</dt>
<dd>Get the Lamp (in the North Garden)</dd>
<dd>Get the Necklace (in the Queen's Dressing Room)</dd>
<dd>Wear the Necklace (this is important!)<dd>
<dd>Go downstairs (in the corner of the Storage Room)<dd>
<dd>I don't have a map for downstairs, but there's only one route -- go to the King's Secret Room at the end of the Winding Passage<dd>
<dd>Head back upstairs to the Courtyard</dd>
<dd>Wave the scepter!</dd>
<dt>Checking for a Loss</dt>
<dd>Get the Lamp</dd>
<dd>Go downstairs in the Storage Room</dd>
<dd>You should die halfway through the Winding Passage :) </dd>
</dl>

![annotated map](assets/annotatedmap.jpg)
