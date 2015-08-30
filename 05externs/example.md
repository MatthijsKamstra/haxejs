#Example externs

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/03vanillajs/code).

I would advice to check [the jQuery example](../01jquery/about.md), its without mentioning it that explicit there, also externs.
The same mechanism that are describe here, are also at work there.

* you need to "embed" the original js-files
* you need to have externals
* and that will enable you to write (very) similar Haxe code


I will give a short example of how to write, by hand, an extern.  
The example is from [here](http://philippe.elsass.me/2014/11/haxe-working-with-javascript-libraries/))


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


if you have a javascript with looks like this  

## foobar.js

So copy and paste the code and save the file in the `bin` folder (`!important`)


```
// JavaScript  
function MyJSClass() {  
}  
MyJSClass.SOME_PROP = 42;  
MyJSClass.someFunc = function() {  
    return "hello";  
}  
MyJSClass.prototype.myProp = null;  
MyJSClass.prototype.myFunc = function(prop) {  
    this.myProp = prop;  
}  
```

## MyJSClass.hx

Create a file with the name `MyJSClass.hx` and save it in the `src` folder (`!important`)

Write your externs by hand like this:

```  
// Haxe extern  
extern class MyJSClass {  
    static var SOME_PROP:Int;  
    static function someFunc():Void;  
  
    var myProp:String;  
    function new();  
    function myFunc(prop:String):Void;    
}  
```

## index.html

Now we have to adjust the index.html

```

```


----


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


