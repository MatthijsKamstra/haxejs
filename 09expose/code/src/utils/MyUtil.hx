package utils;

@:native("GiveItAnotherName")
@:expose
class MyUtil {
	var name:String;

	public function new(name:String) {
		this.name = name;
	}

	public function foo() {
		return 'Utils class "GiveItAnotherName" : $name!';
	}
}
