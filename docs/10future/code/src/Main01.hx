package ;

import js.Browser.*;
import js.Promise;

class Main01 {

	// example from: https://www.toptal.com/javascript/javascript-promises

	public function new()
	{
		trace ("js.Promise example 01");

		console.log('1');
		var promise = new Promise(function (fulfill, reject){
			var n = Math.floor(Math.random() * 6) + 1;
			if (n == 6) {
				fulfill(n);
			} else {
				reject(n);
			}
			console.log('2');
		});

		promise.then(function ( toss : Int ) {
			console.log('Yay, threw a ' + toss + '.');
		}, function (toss) {
			console.log('Oh, noes, threw a ' + toss + '.');
		});
		console.log('3');
	}

	static public function main() : Void
	{
		var main = new Main01();
	}
}