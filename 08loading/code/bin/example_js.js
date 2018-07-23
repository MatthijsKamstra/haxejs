// Generated by Haxe 3.4.7
(function () { "use strict";
var MainJS = function() {
	console.log("[JS] loading data example");
	var url = "http://ip.jsontest.com/";
	var req = new XMLHttpRequest();
	req.open("GET",url);
	req.onload = function() {
		var result = JSON.parse(req.response);
		console.log("[JS] Your IP-address: " + result.ip);
	};
	req.onerror = function(error) {
		window.console.error("[JS] error: " + error);
	};
	req.send();
};
MainJS.main = function() {
	var main = new MainJS();
};
MainJS.main();
})();
