(function ($hx_exports, $global) { "use strict";
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
var GiveItAnotherName = $hx_exports["GiveItAnotherName"] = function(name) {
	this.name = name;
};
GiveItAnotherName.prototype = {
	foo: function() {
		return "Utils class \"GiveItAnotherName\" : " + this.name + "!";
	}
};
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});
