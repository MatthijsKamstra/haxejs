(function ($global) { "use strict";
var Main01 = function() {
	console.log("src/Main01.hx:11:","js.Promise example 01");
	$global.console.log("1");
	var promise = new Promise(function(fulfill,reject) {
		var n = Math.floor(Math.random() * 6) + 1;
		if(n == 6) {
			fulfill(n);
		} else {
			reject(n);
		}
		$global.console.log("2");
	});
	promise.then(function(toss) {
		$global.console.log("Yay, threw a " + toss + ".");
	},function(toss) {
		$global.console.log("Oh, noes, threw a " + toss + ".");
	});
	$global.console.log("3");
};
Main01.main = function() {
	var main = new Main01();
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
Main01.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
