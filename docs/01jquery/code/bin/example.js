(function ($global) { "use strict";
var Main = function() {
	$(function() {
		console.log("src/Main.hx:14:","JQuery example");
		$("button.continue").html("Next Step...");
		var hiddenBox = $("#banner-message");
		$("#button-container button").on("click",null,function(event) {
			$global.console.log("click");
			hiddenBox.show();
		});
		$.ajax({ url : "https://api.nasa.gov/planetary/earth/imagery", data : { lon : 100.75, lat : 1.5, date : "2014-02-01", cloud_score : "True", api_key : "DEMO_KEY"}, success : function(data) {
			$("#nasa-container").html("<img src='" + data.url + "' alt='test' >");
		}});
	});
};
Main.main = function() {
	var main = new Main();
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
