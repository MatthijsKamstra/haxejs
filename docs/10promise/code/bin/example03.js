(function ($global) { "use strict";
var Main03 = function() {
	console.log("src/Main03.hx:11:","js.Promise example 00");
	this.getStory("story.json").then(function(response) {
		$global.console.log("Success!",response);
	}).catch(function(error) {
		$global.console.error("Failed!",error);
	});
};
Main03.main = function() {
	var main = new Main03();
};
Main03.prototype = {
	getStory: function(url) {
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
Main03.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
