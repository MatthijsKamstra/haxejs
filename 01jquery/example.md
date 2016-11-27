#Example jQuery

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/01jquery/code) for more comments.

This is a jQuery example, the example are taken from the hompage of [http://jquery.com/](http://jquery.com/).

**Quick reminder:**
>Haxe does not allow using `$` as a class name or a function name, but `$` is just a short-hand to jQuery.
>However, Haxe requires all class names start with capital letter, so it is JQuery not jQuery.

So in short: you replace `$(...)` with `new JQuery(...)` and it will work.

*Read more about this [here](about.md)*

_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/01jquery/code)._


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

## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

### DOM Traversal and Manipulation

Get the `<button>` element with the class 'continue' and change it's HTML to 'Next Step...'

```
new JQuery( "button.continue" ).html( "Next Step..." );
```

### Event Handling

Show the `#banner-message` element that is hidden with  `display:none` in it's CSS when any button in `#button-container` is clicked.

```
var hiddenBox = new JQuery( "#banner-message" );
new JQuery( "#button-container button" ).on( "click", function( event ) {
	hiddenBox.show();
});
```

### Ajax

Thanks for NASA for suppling this awesome (no api-key needed) API.

Call a local script on the server `https://api.nasa.gov/planetary/earth/imagery` with the query parameter `lon, lat, date, cloud_score, api_key` and replace the element `#nasa-container`'s html with the returned text.

```
// Ajax
JQuery.ajax({
	url: "https://api.nasa.gov/planetary/earth/imagery",
	data: {
		lon : 100.75,
		lat : 1.5,
		date : "2014-02-01",
		cloud_score: "True",
		api_key : "DEMO_KEY"
	},
	success: function( data ) {
		new JQuery( "#nasa-container" ).html( "<img src='" + data.url + "' alt='test' >" );
	}
});
```

<iframe src="http://try.haxe.org/embed/50b76" width="100%" height="300" frameborder="no" allowfullscreen>
	<a href="http://try.haxe.org/#50b76">Try Haxe !</a>
</iframe>


So, when you code in JS like:

	$("#myMightyDiv").hide();

now you do the same in Haxe:

	new JQuery("#myMightyDiv").hide();

Simple.



It is same as how you use jQuery in JS. But instead of `$`, you refer jQuery as `JQuery`.

eg. Hiding all li object:

```
new JQuery("li").hide(); //same as $("li").hide() in JS
```

<!--
Static methods of jQuery can be accessed from JQuery._static.

eg. An Ajax example:

````
JQuery._static.get("ajax/test.html", function(data) {
    js.Lib.alert(data);
});
```
-->

## The Haxe build file, build.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // build.hxml
// -lib jQueryExtern
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
haxe -cp src -main Main -js bin/example.js -dce full
```
<!--
```
haxe -lib jQueryExtern -cp src -main Main -js bin/example.js -dce full
```
 -->
It will have the same result


## CDN

Just remember the jQuery-Extern is simply an extern, you have to link jQuery in your html file.

You can download the javascript file from [http://jquery.com/](http://jquery.com/) or use CDN.
For this example we will use that.

Copy this in the `<head>` or at the bottom of your `<body>`:

```
<!-- from jQuery's CDN (http://jquery.com/download/#using-jquery-with-a-cdn) -->
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="example.js"></script>
```