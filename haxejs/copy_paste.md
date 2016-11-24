# Copy & paste

I sometime just need to test something quickly.
And so I `copy` & `paste` an example from internet.

This is usually doesn't work out of the box...
But I have some tips and tricks to get this working.


## console.log / debugging

In Haxe you usually use the Haxe specific way of logging: `trace()`

But you can always use the platform specific way.
In the case of JavaScript:

```
console.log('test');
```

A handy shortcut for `console.log` is in package [js.Browser](http://api.haxe.org/js/Browser.html#console)

So you could rewrite everything to that:
```
// console.log('foo');
Browser.console.log('foo');
```

But it's *MUCH* easier to add it to you imports

```
import js.Browser.console; 	// if you only want to use console.log
import js.Browser.*; 		// if you also want to use window, document, alert, etc

```

and then your console.log will just work without any changes to the copied cody


## document, window, console, location

The same as previous example.
This is easily fixed with the correct import:

```
import js.Browser.*;
```

And then a simple VanillaJS example works out of the box.

```
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("VanillaJs DOM ready");
	trace('host: ', location.host);
});
```


## for loop

Okay this thing will not work!

**JavaScript** uses a classic C-style for-loop
```
for (i = 0; i < 100; i++) {
	console.log(i);
}
```


**Haxe** uses a iterator based for-loop
You will have to change that to:
```
for (i in 0...100) {
	console.log(i);
}
```

check [cheatsheet.html#loops](https://matthijskamstra.github.io/haxejs/haxejs/cheatsheet.html#loops) for more examples


## imports

Mostly its just search where the packages are located
Its to difficult to get you out off all your copy pasting, but for example:

```
var req = new XMLHttpRequest();
```

works with the correct import

```
import js.html.XMLHttpRequest;
```

Sometimes you just need to add `new`:

```
reject(Error(req.statusText));
```

doesn't work, even if you have imported the correct package

```
import js.Error;
```

just call the constructor:

```
reject(new Error(req.statusText));
```



## ;

Okay .... stupid but JavaScript is more flexible with this.
Just follow the instructions from the Haxe compiler.





## Start document

Okay maybe a little much but I use this example / test document a lot...
Perhaps someone has some use for it.

Main.hx

```
package ;

import js.Browser.*;

class Main
{
	function new() {
		trace('Example');
	}


	static public function main(){
		var main = new Main();
	}
}

```

build.hxml

```
-cp src
-main Main
-js bin/example.js
-D source-map-content
-debug
-dce full
```

