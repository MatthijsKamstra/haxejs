(function ($hx_exports, $global) { "use strict";
var Main = function() {
	console.log("src/Main.hx:5:","Example expose");
	var instance = new MyClass("Jim from Haxe code");
	console.log("src/Main.hx:8:",instance.foo());
	
var instance2 = new MyClass('Jenny from untyped Haxe code');
console.log(instance2.foo()); // logs a message in the console
		;
	console.log("src/Main.hx:15:","Example expose with package rename");
	var instance3 = new GiveItAnotherName("Rick from Haxe code");
	console.log("src/Main.hx:18:",instance3.foo());
	
var instance4 = new GiveItAnotherName('Nika from untyped Haxe code');
console.log(instance4.foo()); // logs a message in the console
		;
};
Main.main = function() {
	var main = new Main();
};
var MyClass = $hx_exports["MyClass"] = function(name) {
	this.name = name;
};
MyClass.prototype = {
	foo: function() {
		return "Greetings from " + this.name + "!";
	}
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
var GiveItAnotherName = $hx_exports["GiveItAnotherName"] = function(name) {
	this.name = name;
};
GiveItAnotherName.prototype = {
	foo: function() {
		return "Utils class \"GiveItAnotherName\" : " + this.name + "!";
	}
};
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});
