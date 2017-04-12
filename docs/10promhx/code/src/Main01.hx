package ;

import js.Browser;

class Main {


	public function new()
	{

		trace ("promhx example");

		var h = new promhx.haxe.Http("test.txt");
		h.then(function(x){
			trace('content: $x'); // this will be the text content from somefile.txt
		});
		h.catchError(function (e) {
			trace('error: $e');
		});
		h.request(); // initialize request.

	}

	static public function main() : Void
	{
		var main = new Main();
	}
}