/* jshint maxerr:2000 */
/* es6 version of https://github.com/simonsarris/Canvas-tutorials/blob/master/shapes.js written as practice / learning with the canvas */


class Shape  { // class that passes data to all drawn objects
  constructor(x, y, w, h, fill) {
    this.x = x || 0;
    this.y = y || 0; /// the `y || 0` give us default values if nothing's defined in what we're passing it to
    this.w = w || 1;
    this.h = h || 1;
    this.fill = fill || '#aaaaaa';
  }
  
  draw(ctx) { /// draws our rectangle to a given context
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  
  /// determine if point is inside the shape's bounds when moused over
  contains(mx, my) {
    return (this.x <= mx) && (this.x + this.w >= mx) && 
    (this.y <= my) && (this.y + this.h >= my);
  }
} /// end of class

class CanvasState {
  constructor(canvas) { ///J/ def need all of this
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    //// addl setup stuff
    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
      this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
      this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
      this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
      this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
    }
    
    var html = document.body.parentNode;
    this.htmlTop = html.offsetTop;
    this.htmlLeft = html.offsetLeft;
    
    this.valid = false;
    this.shapes = []; /// collection of things to be drawn /J/ definitely need
    this.dragging = false; /// keep track of when we are dragging the selected object.. ///J/// probably don't need
    this.selection = null; ///J/// probably don't need
    this.dragoffx = 0; ///J/ probably don't need
    this.dragoffy = 0; ///J/ probably don't need
    //// mouse events (probably dont need these but good practice yeah?)
    var myState = this; ///J/ assigning our canvas object to a variable so we can access it within the closure below
    canvas.addEventListener('mousedown', function(e) { e.preventDefault(); return false;}, false); /// I don't understand this line
    canvas.addEventListener('mousedown', function (e) {
      var mouse = myState.getMouse(e);
      var mx = mouse.x;
      var shapes = myState.shapes; 
      var my = mouse.y;
      for (var i = shapes.length - 1; i >= 0; i--) {
        if (shapes[i].contains(mx,my)) {
          var mySel = shapes[i]; /// keep track of where in the object we clicked so we can move it smoothly
          myState.dragoffx = mx - mySel.x;
          myState.dragoffy = my = mySel.y;
          myState.dragging = true;
          myState.selection = mySel;
          myState.valid = false;
          return;
        }
      }/// haven't returned means we failed to select anything .. if there was a state selected we have to deselect...
      if (myState.selection) {
        myState.selection = null;
        myState.valid = false;
      }
    }, true);
    canvas.addEventListener('mousemove', function(e) {
      if (myState.dragging) {
        var mouse = myState.getMouse(e);
        //// we are using the offset so we don't drag the object by its x0,y0 top left
        myState.selection.x = mouse.x - myState.dragoffx;
        myState.selection.y = mouse.y - myState.dragoffy;
        myState.valid = false; // something's dragging so we must redraw
      }
    }, true);
    canvas.addEventListener('mouseup', function(e) {
      myState.dragging = false;
    }, true);
    
    /// doubleclick to make new shapes
    canvas.addEventListener('dblclick', function(e) {
      var mouse = myState.getMouse(e);
      myState.addShape(new Shape(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(0,255,0,0.6)'));
    }, true);
    
    this.selectionColor = '#cc0000';
    this.selectionWidth = 2;
    this.interval = 30;
    setInterval(function() {myState.draw();}, myState.interval); // set up to smoothly update the canvas so we can move things around... but we have to clear the canvas between each draw.... otherwise we get solid lines.... geez
  }  /// end of constructor
  
  // methods go here
  
  addShape(shape) {
    this.shapes.push(shape);
    this.valid = false;
  }
  
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  
  draw() {
    /// if our state is invalid...
    if (!this.valid) {
      var ctx = this.ctx;
      var shapes = this.shapes;
      this.clear();
      /// adding stuff we want all the time
      for (let i = 0; i < shapes.length; i++) { /// draw the shapes in order to let later shapes be on top of earlier ones...
        var shape = shapes[i];
        shapes[i].draw(ctx);
      }
      //// draw selection
      if (this.selection !== null) {
        ctx.strokeStyle = this.selectionColor;
        ctx.lineWidth = this.selectionWidth;
        var mySel = this.selection;
        ctx.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
      }
      this.valid = true;
    }
  }
  
  getMouse(e) {
    var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
    if (element.offsetParent !== undefined) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }
    offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;
    
    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;
    
    return {x: mx, y: my};
  }
  
} // end of class

function init() {
  var s = new CanvasState(document.getElementById('canvas'));
  s.addShape(new Shape(40,40,50,50));
  s.addShape(new Shape(60,140,40,60, 'lightskyblue'));
  s.addShape(new Shape(80,150,60,30, 'rgba(127,255,212,.5'));
  s.addShape(new Shape(125,80,30,80,'rgba(245,222,179,.7'));
}

document.onload = function() {
  init();
};