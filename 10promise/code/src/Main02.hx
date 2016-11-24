package ;

import js.Browser;
import js.Browser.console;
import js.Promise;

class Main02 {

	// https://www.toptal.com/javascript/javascript-promises

	public function new()
	{
		trace ("js.Promise example 02");

		tossASix()
			.then(null, logAndTossAgain)   //Roll first time
			.then(null, logAndTossAgain)   //Roll second time
			.then(logSuccess, logFailure); //Roll third and last time
	}


	function dieToss() {
		return Math.floor(Math.random() * 6) + 1;
	}

	function tossASix() {
		return new Promise(function(fulfill, reject) {
			var n = Math.floor(Math.random() * 6) + 1;
			if (n == 6) {
				fulfill(n);
			} else {
				reject(n);
			}
		});
	}

	function logAndTossAgain(toss : Int) {
		console.log("Tossed a " + toss + ", need to try again.");
		return tossASix();
	}

	function logSuccess(toss : Int) {
		console.log("Yay, managed to toss a " + toss + ".");
	}

	function logFailure(toss) {
		console.log("Tossed a " + toss + ". Too bad, couldn't roll a six");
	}

	static public function main() : Void
	{
		var main = new Main02();
	}
}