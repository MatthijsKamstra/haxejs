(function (console, $hx_exports) { "use strict";
var MyClass = $hx_exports.MyClass = function(name) {
	this.name = name;
};
MyClass.prototype = {
	foo: function() {
		return "Greetings from " + this.name + "!";
	}
};
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
