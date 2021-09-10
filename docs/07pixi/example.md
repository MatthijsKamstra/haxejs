# Example pixi.js

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/07pixi/code) for more comments.

For this example we will be making something very simple.
But if you feel adventurous check out these [examples](https://github.com/pixijs/pixi-haxe/tree/master/samples)!

_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/07pixi/code)._

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

Since its put on haxelib, you can install it using the command:

	haxelib install pixijs

or use NPM

	npm install hxpixijs

and then add `-lib pixijs` in the hxml.



## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```haxe
package ;

import pixi.plugins.app.Application;
import pixi.core.graphics.Graphics;
import pixi.core.textures.Texture;
import pixi.core.sprites.Sprite;
import js.Browser;

class Main extends Application {

    var _bunny:Sprite;
    var _graphic:Graphics;


    public function new()
    {
        super();

        trace ("pixi.js example");

        position = Application.POSITION_FIXED;
        width = Browser.window.innerWidth;
        height = Browser.window.innerHeight;
        backgroundColor = 0x006666;
        transparent = true;
        antialias = false;
        onUpdate = _animate;
        super.start();

        _bunny = new Sprite(Texture.fromImage("assets/bunny.png"));
        _bunny.anchor.set(0.5);
        _bunny.position.set(400, 300);

        _graphic = new Graphics();
        _graphic.beginFill(0xFF0000, 0.4);
        _graphic.drawRect(200, 150, 400, 300);
        _graphic.endFill();

        stage.addChild(_graphic);
        stage.addChild(_bunny);
    }

    function _animate(e:Float) {
        _bunny.rotation += 0.1;
    }

    static public function main() : Void
    {
        var main = new Main();
    }
}
```

## index.html

Remember pixi.js is simply an extern, you have to link pixi.js in your html file.

```html

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

If you open this file locally in a Chrome browser you will have a non working example:

```
index.html:1 Image from origin 'file://' has been blocked from loading by Cross-Origin Resource Sharing policy: Received an invalid response. Origin 'null' is therefore not allowed access.
```

It really says it all, you are not allowed to load image locally.

So to fix this there are a couple options

- Use Firefox or Safari browser, they don't have this limitation
- Open Chrome via terminal and allow file access: `open -a Google\ Chrome --args --allow-file-access-from-files`
- Use `nekotools server`
- Use python server (if you have that)
- If your serious about webdevelopement you probably have something like Mamp or something simular (for example Anvil)

So we will use another, not often mentioned feature from Haxe:
[the neko server](http://old.haxe.org/doc/start/neko#using-the-neko-development-webserver-to-serve-http-requests-whose-contents-are-generated-by-haxe)


You need the path to your files (so replace `path/to/files` with your own path)
*example:* `path/to/files/haxejs/07pixi/code/bin/`

```
nekotools server -p 2000 -h localhost -d path/to/files
```

and open your browser to <http://localhost:2000>

Or, in OSX, you can use:

```
cd path/to/files
python -m SimpleHTTPServer 2000
```

fixme
<http://localhost:2000/server:config>


You don't have to install anything if you already have Haxe installed.

Read more about Neko tools:

* <http://blog.presidentbeef.com/neko_tutorial/tools.html#nekotools>
* <http://old.haxe.org/doc/start/neko>


## The Haxe build file, build.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // build.hxml
-lib pixjs
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
haxe -lib pixijs -cp src -main Main -js bin/example.js -dce full
```

It will have the same result


