# About loading in Haxe

In a [json example](../08json/about.md) we loaded a Json with [`haxe.Http`](http://api.haxe.org/haxe/Http.html).

> This class can be used to handle Http requests consistently across platforms.

Which means that whatever target you use (PHP, JavaScript, Python, etc), you can use this class.

The Haxe class will be transpiled into native (target) code.

I personally like that. But I can also think of situations this is not what you want.

So this example is about Haxe code vs native JavaScript code.

Just remember that if you compare the source code you will see a increase number of lines with the Haxe Http version. This is normal but might be a reason to use the vanilla JS version.
If you would use a library (JQuary for example) to load data this will be simular. Mostely because the code will work in all browsers on all platforms. This a the main reason to use an library (or in our case Haxe Http), it has all the edge-case covered.

