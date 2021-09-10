(function ($global) { "use strict";
var MainJS = function() {
	console.log("src/MainJS.hx:11:","[JS] loading data example");
	var url = "http://ip.jsontest.com/";
	var req = new XMLHttpRequest();
	req.open("GET",url);
	req.onload = function() {
		var result = JSON.parse(req.response);
		console.log("src/MainJS.hx:18:","[JS] Your IP-address: " + result.ip);
	};
	req.onerror = function(error) {
		$global.console.error("[JS] error: " + error);
	};
	req.send();
};
MainJS.main = function() {
	var main = new MainJS();
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
MainJS.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
