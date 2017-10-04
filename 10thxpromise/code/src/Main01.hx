package ;

import js.Browser.*;
import thx.Error;

using thx.promise.Promise;

class Main01 {

	// example from: https://www.toptal.com/javascript/javascript-promises

	public function new()
	{
		trace ("thx.promise example 01");

		console.log('1. create promise');
		var promise = Promise.create(function (resolve, reject){
			var n = Math.floor(Math.random() * 6) + 1;
			if (n == 6) {
				resolve(n);
			} else {
				reject(new Error(Std.string(n)));
			}
			console.log('2. promise done');
		});


		promise.success(function(value) {
			console.log('Yay, threw a ' + value + '.');
		});

		promise.failure(function(error) {
			console.log('Oh, noes, threw a ' + error + '.');
		});


		console.log('2. promise  executed');
	}

	static public function main() : Void
	{
		var main = new Main01();
	}
}