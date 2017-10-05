# About Promise

The Promise object is used for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never.

[promise](https://en.wikipedia.org/wiki/Futures_and_promises)

The "promise" variables contain values that are not immediately available. However, you can specify callback functions that will trigger when the values do become available.

There are a couple of haxelibs that do the same, but in this example we will use the default Haxe implemention [js.Promise](http://api.haxe.org/js/Promise.html)


# About thx.promise

Because of Haxe we want a lib specific written in Haxe for Haxe.
For the simple reason that we can use it on more platforms (like JavaScript and Node.js)

In that case there are a couple of version you can use, but I choose for [thx.promise](https://github.com/fponticelli/thx.promise) from Franco Ponticelli.

He create a lib with stuff he was missing in Haxe: <http://thx-lib.org/> and one of that libs is [thx.promise](http://thx-lib.org/lib/thx.promise/)

The reason I choose this lib is because it's a close as possible to the [js.Promise](../10promise/about.md).



