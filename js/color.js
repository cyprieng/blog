//Change color with mouse position
var $win = $(window),
	w = 0,h = 0,
	rgb = [],
	getWidth = function() {
		w = $win.width();
		h = $win.height();
	};

	$win.resize(getWidth).mousemove(function(e) {

	rgb = [
		Math.round(e.pageX/w * 150) + 50,
		Math.round(e.pageY/h * 150) + 50,
		150
	];

	$(document.body).css('background','rgb('+rgb.join(',')+')');

}).resize();