# Castle Adventure

Original Castle Adventure      |  J's Castle Adventure
:-------------------------:|:-------------------------:
![](assets/castleadventure.png)  |  ![](assets/jscastleadventure.png)

##What is Castle Adventure?
- Castle Adventure is an old freeware/shareware DOS game. Built in 1984 by teenaged programmer Kevin Bales, it quickly spread. Today, it still occupies a place of fond nostalgia for many of us who started playing computer games in the DOS era, but has never been replicated fully for the modern internet browser.
- For more information, see [The Key to the Castle](http://www.thealmightyguru.com/Reviews/CastleAdventure/CA-TheGame.html)


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

