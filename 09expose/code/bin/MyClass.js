// Generated by Haxe 3.4.7
(function ($hx_exports) { "use strict";
var MyClass = $hx_exports["MyClass"] = function(name) {
	this.name = name;
};
MyClass.prototype = {
	foo: function() {
		return "Greetings from " + this.name + "!";
	}
};
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
