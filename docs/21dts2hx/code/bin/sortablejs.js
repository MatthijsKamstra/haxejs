(function ($global) { "use strict";
var Main = function() {
	console.log("src/Main.hx:5:","SortableJs");
	var el = window.document.getElementById("example1");
	var sortable = new Sortablejs(el,{ animation : 150, ghostClass : "bg-danger"});
};
Main.main = function() {
	var main = new Main();
};
var Sortablejs = require("sortablejs");
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
})({});
