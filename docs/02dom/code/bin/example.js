(function ($global) { "use strict";
var Main = function() {
	console.log("src/Main.hx:11:","DOM Example");
	$(function() {
		console.log("src/Main.hx:15:","Jquery DOM ready (easy way)");
		$(".container").append("<p>Jquery DOM ready (easy way)</p>");
	});
	$(window.document).ready(function() {
		console.log("src/Main.hx:20:","Jquery DOM ready (somewhat simular to original jQuery way)");
		$(".container").append("<p>Jquery DOM ready (somewhat simular to original jQuery way)</p>");
	});
	var document = window.document;
	document.addEventListener("DOMContentLoaded",function(event) {
		console.log("src/Main.hx:26:","VanillaJs DOM ready");
		var p = document.createElement("p");
		p.innerText = "VanillaJs DOM ready";
		document.querySelector(".container").appendChild(p);
	});
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
