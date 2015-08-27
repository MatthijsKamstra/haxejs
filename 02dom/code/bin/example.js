(function (console) { "use strict";
var Main = function() {
	console.log("DOM Example");
	$(function() {
		console.log("Jquery DOM ready (easy way)");
		$(".container").append("<p>Jquery DOM ready (easy way)</p>");
	});
	$(window.document).ready(function() {
		console.log("Jquery DOM ready (somewhat simular to original jQuery way)");
		$(".container").append("<p>Jquery DOM ready (somewhat simular to original jQuery way)</p>");
	});
	var document = window.document;
	document.addEventListener("DOMContentLoaded",function(event) {
		console.log("VanillaJs DOM ready");
		var p = document.createElement("p");
		p.innerText = "VanillaJs DOM ready";
		document.querySelector(".container").appendChild(p);
	});
};
Main.main = function() {
	var main = new Main();
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
