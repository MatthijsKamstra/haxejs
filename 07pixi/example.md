#Example pixi.js

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/07pixi/code) for more comments.

For this example we will be making something very simple.  
But if you feel adventurous check out these [examples](https://github.com/pixijs/pixi-haxe/tree/master/samples)!

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

	haxelib install pixijs

or use NPM

	npm install hxpixijs

and then add `-lib pixijs` in the hxml.



## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 

```
package ;

import pixi.core.display.Container;
import pixi.core.textures.Texture;
import pixi.core.renderers.SystemRenderer;
import pixi.core.renderers.Detector;
import pixi.core.sprites.Sprite;
import js.Browser;

class Main {

    var _bunny:Sprite;
    var _renderer:SystemRenderer;
    var _stage:Container;

    public function new() {
        // Rendering options usage sample
        var options:RenderingOptions = {};
        options.backgroundColor = 0x003366;
        options.resolution = 1;

        _stage = new Container();
        _renderer = Detector.autoDetectRenderer(800, 600, options);

        _bunny = new Sprite(Texture.fromImage("assets/bunny.png"));
        _bunny.anchor.set(0.5, 0.5);
        _bunny.position.set(400, 300);

        _stage.addChild(_bunny);

        Browser.document.body.appendChild(_renderer.view);
        Browser.window.requestAnimationFrame(cast _animate);
    }

    function _animate() {
        Browser.window.requestAnimationFrame(cast _animate);
        _bunny.rotation += 0.1;
        _renderer.render(_stage);
    }

    static public function main() : Void
    {
        var main = new Main();
	}
}
```

## index.html

Remember pixi.js is simply an extern, you have to link jQuery in your html file.

```

<html>
<head>
	<title>Haxe JS - Pixi example</title></head>
<body>


<!-- pixi.js -->
<script type="text/javascript" src="js/pixi.min.js"></script>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="example.js"></script>

</body>
</html>

```

## NekoServer

If you open this file locally in you browser you will have a non working example:

```
index.html:1 Image from origin 'file://' has been blocked from loading by Cross-Origin Resource Sharing policy: Received an invalid response. Origin 'null' is therefore not allowed access.
```

It really says it all, you are not allowed to load image locally.

So we will use another, not often mentioned feature from Haxe:   
[the neko server](http://old.haxe.org/doc/start/neko#using-the-neko-development-webserver-to-serve-http-requests-whose-contents-are-generated-by-haxe)

If you are serious about development you probably have a option or two to do this also like:
* MAMP
* Anvil
* fixme
* fixme
* fixme

You need the path to your files (so replace `path/to/files` with your own path)   
*example:* `path/to/files/haxejs/07pixi/code/bin/`

```
nekotools server -p 2000 -h localhost -d path/to/files
```

and open your browser to <http://localhost:2000>

fixme  
<http://localhost:2000/server:config>


You don't have to install anything if you already have Haxe installed.

Read more about Neko tools:

* <http://blog.presidentbeef.com/neko_tutorial/tools.html#nekotools>
* <http://old.haxe.org/doc/start/neko>


## The Haxe build file, javascript.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // javascript.hxml
-lib pixjs
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
haxe -lib pixijs -cp src -main Main -js bin/example.js -dce full
```

It will have the same result


