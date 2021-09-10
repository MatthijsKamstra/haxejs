(function ($global) { "use strict";
var Main = function() {
	console.log("src/Main.hx:11:","js.Promise NASA example");
	this.getDataNASA("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(function(response) {
		$global.console.log("Success!",response);
	}).catch(function(error) {
		$global.console.error("Failed!",error);
	});
};
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	getDataNASA: function(url) {
		return new Promise(function(resolve,reject) {
			var req = new XMLHttpRequest();
			req.open("GET",url);
			req.onload = function() {
				if(req.status == 200) {
					resolve(req.response);
				} else {
					reject(new Error(req.statusText));
				}
			};
			req.onerror = function() {
				reject(new Error("Network Error"));
			};
			req.send();
		});
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
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
