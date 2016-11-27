package;

@:expose
class MyClass
{
	var name:String;

	public function new(name:String) {
		this.name = name;
	}

	public function foo() {
		return 'Greetings from $name!';
	}

}