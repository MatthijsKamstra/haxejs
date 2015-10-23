#Example jQuery

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/06nasa/code) for more comments.

This is an NASA api example, it also uses [http://jquery.com/](http://jquery.com/).
You can get an api key if you plan to use it a lot and that is without a price.
But it also works without one.

_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/06nasa/code)._

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

Since its put on haxelib, you can install it using the command:

	haxelib install jQueryExtern

and then add `-lib jQueryExtern` in the hxml.



## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 
Check the complete [Main.hx](https://github.com/MatthijsKamstra/haxejs/tree/master/06nasa/code/src/Main.hx).

```
// Ajax
JQuery._static.ajax({
	url: "https://api.nasa.gov/planetary/apod",
	data: {
		date : randomDate(),
		concept_tags: "True",
		api_key : "DEMO_KEY"
	},
	success: function( data ) {
		trace ("data.url : " + data.url );
		trace ("data.media_type : " + data.media_type);
		trace ("data.explanation : " + data.explanation);
		trace ("data.concepts : " + data.concepts);
		trace ("data.title : " + data.title);
		
		new JQuery( "#nasa-container" ).html( "<h2>"+data.title+"</h2><img src='" + data.url + "' alt='"+data.title+"' class='img-responsive center-block' ><p>"+data.explanation+"</p>" );
	}
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

You can download the JavaScript file from [http://jquery.com/](http://jquery.com/) or use CDN.
For this example we will use that


Copy this in the `<head>` or at the bottom of your `<body>`:

```
<!-- from jQuery's CDN (http://jquery.com/download/#using-jquery-with-a-cdn) -->
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="Main.js"></script>
```