(function() {
  'use strict'
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
//*SINGLE GREEN CIRCLE//
/*var c = Shape.Circle(200, 200, 50);
c.fillColor = 'green';
c.strokeColor = 'black';*/
paper.view.draw();
//64 GREEN CIRCLES//
  /*var c;
  for(var x=25; x<400; x+=50) {
    for(var y=25; y<400; y+=50) {
      c = Shape.Circle(x, y, 20);
      c.fillColor = 'green';
    }
  }*/
//USER INPUT TOOL//
var tool = new Tool();
/*tool.onMouseDown = function(event) {
  var c = Shape.Circle(event.point.x, event.point.y, 20);
  c.fillColor = 'green';
};*/
/*tool.maxDistance = 20;
tool.minDistance = 5;*/
tool.onMouseUp = function(event) {
	var radius = event.delta.length / 2;
	var circle = new Path.Circle(event.middlePoint, radius);
	circle.fillColor = 'green';
};
  ('main.js loaded')
}())
