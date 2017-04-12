package ;

import promhx.Promise;

// import js.Browser.*;

class Main {


	public function new()
	{
		trace ("promhx example");

		var p = new Promise<Int>();
		trace(untyped p.id + " is the value for untyped p.id");
		js.Lib.debug();
		p.reject(0);
		var k = p.then(function(a){
			return true;
		});
		trace(untyped k.id + " is the value for untyped k.id");

		var l = k.errorPipe(function(e){
			trace('called');
			var m = Promise.promise(false);
			trace(untyped m.id + " is the value for untyped m.id");
			return m;
		});
		trace(untyped l.id + " is the value for untyped l.id");

	}

	static public function main() : Void
	{
		var main = new Main();
	}
}