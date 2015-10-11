#Example exposing Haxe classes for JavaScript



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


without @expose
```
Uncaught ReferenceError: MyClass is not defined(anonymous function) @ index.html:12
```


hxml
```
-cp src
-js bin/MyClass.js
MyClass
```


## index.html

I have used a more extensive `index.html` in the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/08json/code), but you could work with this minimal version:

```
<html>
    <head>
        <title>Haxe JS - json example</title></head>
        <style type="text/css">
            .user {
                background-color: silver;
                margin: 10px;
                padding: 10px;
            }
        </style>
    </head>
<body>

    <!-- Your Haxe compiled script -->
    <script type="text/javascript" src="example.js"></script>

</body>
</html>

```

## Neko Web Server

We will use a not often mentioned feature from Haxe.

You can run a webserver : [Neko Web Server](http://old.haxe.org/doc/start/neko#using-the-neko-development-webserver-to-serve-http-requests-whose-contents-are-generated-by-haxe)

And the cool part is: **You don't have to install anything if you already have Haxe installed.**

You need the path to your files (so replace `path/to/files` with your own path)   
*example:* `path/to/files/haxejs/07pixi/code/bin/`

```
nekotools server -p 2000 -h localhost -d path/to/files
```

and open your browser to <http://localhost:2000>


## The Haxe build file, javascript.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // javascript.hxml
-cp src
-main Main
-js bin/example.js
-dce full
```


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



