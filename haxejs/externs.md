# Your Favorites, Extended

**Haxe JS** externs make it possible to extend JavaScript libraries with code completion and other neat features.

Please feel free and choose one of the libraries to learn more about how **Haxe JS** can improve your everyday workflow.

## haxelib

Most of the externs listed here are available using "haxelib", the package manager for **Haxe**.

You can easily install a library located on haxelib using the "install" command, like this:

	haxelib install jQueryExtern  
	haxelib install beanhx  


## Writing Your Own

Making your own externs is pretty simple. If a framework uses the traditional prototypical inheritance structure for JavaScript it can be very simple to create externs.

Frameworks that use a different model, like a class factory, may be harder to map using externs, but it certainly is possible. **Haxe JS** was designed to be flexible to help you work with any library.


There are a lot of great JavaScript libraries out there. This document explains how to use them with Haxe.

Take, for example, this JavaScript code that hides and shows a DOM element by changing its CSS class:

	function DisplayToggle(id) {
	    this.el = document.getElementById(id);
	    this.el.className = "visible";
	    this.visible = true;
	}
	DisplayToggle.prototype.hide = function() {
	    this.el.className = "hidden";
	    this.visible = false;
	}
	DisplayToggle.prototype.show = function() {
	    this.el.className = "visible";
	    this.visible = true;
	}

Save this file as: `DisplayToggle.js`.

### Using: extern class

This is the most elegant way, because it is clean and type-safe.
We create a Haxe file which defines the functions of our external JavaScript library. The extern keyword tells the compiler that the implementation of this class will be available at runtime.

	package ;
	extern class DisplayToggle {
	    public function new(id:String):Void;
	    public function hide():Void;
	    public function show():Void;
	    public var visible(default,null):Bool;
	}

Save this code as `DisplayToggle.hx`.

Now we can use our external JavaScript directly within Haxe. If you use an IDE with autocompletion you will even get autocompletion using this class.

Make sure that the `DisplayToggle.js` is embedded in your HTML file before you add your Haxe generated JavaScript file.

### Using: untyped

Warning: This is not type-safe. Use this method only if you are quite sure about what you are doing.
Somewhere in your Haxe code:

	class Main {
	    static function main() {
	        var dis:Dynamic = untyped __js__('new DisplayToggle("some_id")');
	        dis.hide();
	    }
	}

The `__js__` function will forward the argument string directly to the generated JavaScript. You can read more about this on the [Haxe magic page](http://old.haxe.org/doc/advanced/magic).
This way you will get no autocompletion or errors if you try to access a property or function that does not exist.   
Also make sure that the `DisplayToggle.js` is embedded in you HTML before your haxe-generated JavaScript file.

### Packages

Some notes about the Haxe package structure. Let's say we have the following file:

	package foo.bar;
	class FooBar {
	    public function new() {
	        // some code
	    }
	}

This class will be compiled to a JavaScript object similar to this:

	foo.bar.FooBar = function() {
	    //some code
	}

So if your external library is structured this way, you will need to recreate the package structure within Haxe.

You may also map your package structure to the external library structure using `@:native` compiler metadata.
