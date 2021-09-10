# Example DOM ready

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/02dom/code) for more comments.

This is an DOM ready example, the example use two methodes (jQuery and VanillaJS).
Check [document-ready using jQuery](https://learn.jquery.com/using-jquery-core/document-ready/)

_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/02dom/code)._


## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- build.hxml
```

## Install

If you are going to use the VanillaJS version, you don't have to do anything...

## The index.html

To understand the examples better, you need to know that the `index.html` we will be using ([check out the source](https://github.com/MatthijsKamstra/haxejs/blob/master/02dom/code/bin/index.html))
has a `div` with `class="container"`.

```

<html>
<head>
	<title>Haxe JS - DOM example</title></head>
<body>

<div class="container"></div>

<!-- from jQuery's CDN (http://jquery.com/download/#using-jquery-with-a-cdn) -->
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="example.js"></script>

</body>
</html>

```
Read more about [CDN](#cdn)



## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.
Check the complete [Main.hx](https://github.com/MatthijsKamstra/haxejs/tree/master/02dom/code/src/Main.hx).



**jQuery**

```js
$( document ).ready(function() {
    console.log( "ready!" );
});
```

**jQuery in Haxe**

```haxe
import js.jquery.JQuery;

new JQuery(js.Browser.document).ready ( function (){
	trace( "Jquery DOM ready (somewhat simular to original jQuery way)");
	new JQuery(".container").append("<p>Jquery DOM ready (somewhat simular to original jQuery way)</p>");
});
```
or

**jQuery**

```js
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});
```


**jQuery in Haxe**

```haxe
import js.jquery.JQuery;

new JQuery( function():Void {
	trace( "Jquery DOM ready (easy way)");
	new JQuery(".container").append("<p>Jquery DOM ready (easy way)</p>");
});
```

Now try the VanillaJS version:

```haxe
var document = js.Browser.document;
document.addEventListener("DOMContentLoaded", function(event) {
	trace("VanillaJs DOM ready");

	var p = document.createParagraphElement();
	p.innerText = 'VanillaJs DOM ready';

	document.querySelector(".container").appendChild(p);
});
```


## question asked to the community

I was looking for a good DOM tutorial, and found this question:
**Does there exist any decent Haxe/JS tutorial? Particularly DOM manipulation.**
<https://groups.google.com/forum/#!topic/haxelang/y084mee_YDw>

The answers are nice, so I'll copy/paste it here:

*Phillipe Elsass answered it nicely *

>It's not Haxe DOM model which is unintuitive - it's HTML DOM model.
>Haxe doesn't reinvent how the DOM works.
>
>In JS you would write:
>
```js
var doc = window.document;
var div = doc.createElement("div");
div.innerHTML = "Hello <b>JS</b>";
doc.body.appendChild(div);
```
>In Haxe you'll write:
>
```haxe
var doc = js.Browser.window.document;
var div = doc.createDivElement(); // or doc.createElement("div");
div.innerHTML = "Hello <b>HTML</b>";
doc.body.appendChild(div);
```

*And Jason O'Neil added the jQuery version*
>
```
import js.jquery.JQuery.JQueryHelper.*;
...
var div = J("<div>Hello<b>HTML</b></div>");
div.appendTo( js.Browser.document.body );
```


_ps: Jason also has done some js experiments [here](https://github.com/Justinfront/divtastic3)_


----


## The Haxe build file, build.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // build.hxml
-lib jQueryExtern
-cp src
-main Main
-js bin/example.js
-dce full
```


## Build js with Haxe

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `build.hxml`
3. type `haxe build.hxml`
4. press enter


You could build everything directly in the terminal.

```
haxe -lib jQueryExtern -cp src -main Main -js bin/example.js -dce full
```

It will have the same result





## CDN

Remember jQueryExtern is simply an extern, you have to link jQuery in your html file.

You can download the JavaScript file from [http://jquery.com/](http://jquery.com/) or use CDN.
For this example we will use that


Copy this in the `<head>` or at the bottom of your `<body>`:

```html
<!-- from jQuery's CDN (http://jquery.com/download/#using-jquery-with-a-cdn) -->
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="Main.js"></script>
```

-----