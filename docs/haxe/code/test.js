(function ($global) { "use strict";
var Test = function() { };
Test.main = function() {
	console.log("Test.hx:3:","Hello World !");
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
Test.main();
})({});
