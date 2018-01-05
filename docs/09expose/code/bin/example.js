// Generated by Haxe 3.4.4
(function ($hx_exports) { "use strict";
var Main = function() {
	console.log("Example expose");
	var instance = new MyClass("Jim from Haxe code");
	console.log(instance.foo());
	
var instance2 = new MyClass('Jenny from untyped Haxe code');
console.log(instance2.foo()); // logs a message in the console
		;
	console.log("Example expose with package rename");
	var instance3 = new GiveItAnotherName("Rick from Haxe code");
	console.log(instance3.foo());
	
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
var GiveItAnotherName = $hx_exports["GiveItAnotherName"] = function(name) {
	this.name = name;
};
GiveItAnotherName.prototype = {
	foo: function() {
		return "Utils class \"GiveItAnotherName\" : " + this.name + "!";
	}
};
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
