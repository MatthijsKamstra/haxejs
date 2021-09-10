(function ($global) { "use strict";
var Main = function() {
	console.log("src/Main.hx:10:","Externs Example");
	console.log("src/Main.hx:14:","MyJSClass.SOME_PROP: " + MyJSClass.SOME_PROP);
	console.log("src/Main.hx:16:","MyJSClass.someFunc(): " + MyJSClass.someFunc());
	var _js = new MyJSClass();
	console.log("src/Main.hx:22:","myProp: " + _js.myProp);
	_js.myFunc("Haxe Externs");
	console.log("src/Main.hx:26:","myProp: " + _js.myProp);
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
})({});
