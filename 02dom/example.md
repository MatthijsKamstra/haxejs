#Example DOM ready

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/02dom/code) for more comments.

This is an DOM ready example, the example use two methodes (jQuery and VanillaJS).
Check [document-ready using jQuery](https://learn.jquery.com/using-jquery-core/document-ready/)

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

## Install

If you are going to use the VinillaJS version, you don't have to do anything...

But the use of jQuery you can install it using the command:

	haxelib install jQueryExtern

and then add `-lib jQueryExtern` in the hxml.



## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 
Check the complete [Main.hx](https://github.com/MatthijsKamstra/haxejs/tree/master/02dom/code/src/Main.hx).


**jQuery**

```
$( document ).ready(function() {
    console.log( "ready!" );
});
```

**jQuery Externs**

```
new JQuery(js.Browser.document).ready ( function (){
	trace( "Jquery DOM ready (somewhat simular to original jQuery way)");
	new JQuery(".container").append("<p>Jquery DOM ready (somewhat simular to original jQuery way)</p>");
});
```
or

**jQuery**

```
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});
```


**jQuery Externs**

```
new JQuery( function():Void { 
	trace( "Jquery DOM ready (easy way)");
	new JQuery(".container").append("<p>Jquery DOM ready (easy way)</p>");
});
```

Now try the VanillaJS version:
	
```
var document = js.Browser.document;
document.addEventListener("DOMContentLoaded", function(event) { 
	trace("VanillaJs DOM ready");
	
	var p = document.createParagraphElement();
	p.innerText = 'VanillaJs DOM ready';

	document.querySelector(".container").appendChild(p);
});
```



## The Haxe build file, javascript.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // javascript.hxml
-lib jQueryExtern
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
haxe -lib jQueryExtern -cp src -main Main -js bin/example.js -dce full
```

It will have the same result





## CDN

Remember jQueryExtern is simply an extern, you have to link jQuery in your html file.

You can download the javascript file from [http://jquery.com/](http://jquery.com/) or use CDN.
For this example we will use that


Copy this in the `<head>` or at the bottom of your `<body>`:

```
<!-- from jQuery's CDN (http://jquery.com/download/#using-jquery-with-a-cdn) -->
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="Main.js"></script>
```