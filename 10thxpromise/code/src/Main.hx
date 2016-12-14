package ;

import thx.Error;
import thx.Timer;

using thx.promise.Promise;

class Main {

	public function new()
	{
		trace ("thx.promise example");

		var promise = Promise.create(function(resolve : String -> Void, reject : Error -> Void) {
			Timer.delay(function() {
				if(Math.random() < 0.5)
					resolve("success");
				else
					reject(new Error("failure"));
			}, 100);
		});

		promise.either(
			function(value) trace('SUCCESS $value'),
			function(error) trace('ERROR $error')
		);
	}

	static public function main() : Void
	{
		var main = new Main();
	}
}