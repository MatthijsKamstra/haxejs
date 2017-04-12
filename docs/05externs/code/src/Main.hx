package ;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Externs Example");

		// statics
		
		trace ("MyJSClass.SOME_PROP: " + MyJSClass.SOME_PROP); // 42 (Answer to The Ultimate Question of Life, the Universe, and Everything)

		trace ("MyJSClass.someFunc(): " + MyJSClass.someFunc()); // hello


		// 
		var _js = new MyJSClass();
		
		trace ("myProp: " + _js.myProp); // null

		_js.myFunc("Haxe Externs");

		trace ("myProp: " + _js.myProp); // Haxe Externs

	}

    static public function main()
    {
        var main = new Main();
	}
}