(function (console) { "use strict";
var Main = function() {
	console.log("Example");
};
Main.main = function() {
	var main = new Main();
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
