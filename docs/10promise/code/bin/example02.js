(function ($global) { "use strict";
var Main02 = function() {
	console.log("src/Main02.hx:11:","js.Promise example 02");
	this.tossASix().then(null,$bind(this,this.logAndTossAgain)).then(null,$bind(this,this.logAndTossAgain)).then($bind(this,this.logSuccess),$bind(this,this.logFailure));
};
Main02.main = function() {
	var main = new Main02();
};
Main02.prototype = {
	tossASix: function() {
		return new Promise(function(fulfill,reject) {
			var n = Math.floor(Math.random() * 6) + 1;
			if(n == 6) {
				fulfill(n);
			} else {
				reject(n);
			}
		});
	}
	,logAndTossAgain: function(toss) {
		$global.console.log("Tossed a " + toss + ", need to try again.");
		return this.tossASix();
	}
	,logSuccess: function(toss) {
		$global.console.log("Yay, managed to toss a " + toss + ".");
	}
	,logFailure: function(toss) {
		$global.console.log("Tossed a " + toss + ". Too bad, couldn't roll a six");
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
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
Main02.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
