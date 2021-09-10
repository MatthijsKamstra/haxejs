package;

class Main {
	public function new() {
		trace("Example expose");

		var instance = new MyClass('Jim from Haxe code');
		trace(instance.foo()); // logs a message in the console

		js.Syntax.code("
var instance2 = new MyClass('Jenny from untyped Haxe code');
console.log(instance2.foo()); // logs a message in the console
		");

		trace("Example expose with package rename");

		var instance3 = new utils.MyUtil('Rick from Haxe code');
		trace(instance3.foo()); // logs a message in the console

		js.Syntax.code("
var instance4 = new GiveItAnotherName('Nika from untyped Haxe code');
console.log(instance4.foo()); // logs a message in the console
		");
	}

	static public function main():Void {
		var main = new Main();
	}
}
