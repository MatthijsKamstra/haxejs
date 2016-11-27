package ;

class Main
{

	public function new()
	{
		trace ("Example expose");

		var instance = new MyClass('Jim from Haxe code');
		trace(instance.foo()); // logs a message in the console

		untyped __js__("
var instance2 = new MyClass('Jenny from untyped Haxe code');
console.log(instance2.foo()); // logs a message in the console
		");

	}

	static public function main() : Void
	{
		var main = new Main();
	}
}