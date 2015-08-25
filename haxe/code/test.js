(function (console) { "use strict";
var Test = function() { };
Test.main = function() {
	console.log("Hello World !");
};
Test.main();
})(typeof console != "undefined" ? console : {log:function(){}});
