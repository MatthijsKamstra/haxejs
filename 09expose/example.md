#Example exposing Haxe classes for JavaScript

So you want to write a library so others can use you code? Sure that is possible in Haxe... **easily**!


_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/09expose/code)._


## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- javascript.hxml
```



## The Main.hx

I am not going to write something difficult here, you eventually will. But it will inform you about how to share you code.

```
class MyClass
{
	var name:String;

	function new(name:String) {
		this.name = name;
	}

	public function foo() {
		return 'Greetings from $name!';
	}

}
```

Biggest change in this class from previous examples: there is no entry point

```
	static public function main() : Void
	{
		var main = new Main();
	}
```



Create a hxml file

```
# javascript.hxml
-cp src
-js bin/MyClass.js
MyClass
```

And again there is no entry point: `-main Main`.


Are you not sure how to build the Haxe file into JavaScript, [check this](#build)


When we export this class to JavaScript it will be transpiled into:


```
(function (console) { "use strict";
var MyClass = function(name) {
	this.name = name;
};
MyClass.prototype = {
	foo: function() {
		return "Greetings from " + this.name + "!";
	}
};
})(typeof console != "undefined" ? console : {log:function(){}});
```

See, **no** way to access that code.
This is great, because you don't want your code influencing other javascript libraries by accident.

But what if you want other scripts to use your code?

---

To fix that we add `@:expose` to the class.


```
@:expose
class MyClass
{
	var name:String;

	function new(name:String) {
		this.name = name;
	}

	public function foo() {
		return 'Greetings from $name!';
	}

}
```

We look at the generated JavaScript code again:

```
(function (console, $hx_exports) { "use strict";
var MyClass = $hx_exports.MyClass = function(name) {
	this.name = name;
};
MyClass.prototype = {
	foo: function() {
		return "Greetings from " + this.name + "!";
	}
};
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
```

Huh?

Let's add it to a html page, like you normally would.
And let's see how we access this script:

```
<html>
	<head>
		<title>Haxe JS - expose</title>

	<!-- Your Haxe compiled script -->
	<script type="text/javascript" src="MyClass.js"></script>

	<script type="text/javascript">
		// JavaScript code
		var instance = new MyClass('Mark');
		console.log(instance.foo()); // logs a message in the console
	</script>
	</head>
<body>
</body>
</html>
```

Yes, in your browsers console log you will find the correct line: `Greetings from Mark!`

----

Not convinced?
Remove the @:expose to the class, rebuild the JavaScript and test it in the browser with previous mentioned html.

You will get:
```
Uncaught ReferenceError: MyClass is not defined(anonymous function) @ index.html:12
```

Nice?

<a name="hxml"></a>
## The Haxe build file, javascript.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.


```
-cp src
-js bin/MyClass.js
MyClass
```


<a name="build"></a>
## Build js with Haxe

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml`
3. type `haxe javascript.hxml`
4. press enter


You could build everything directly in the terminal.

```
haxe -cp src -main Main -js bin/example.js -dce full
```

It will have the same result



