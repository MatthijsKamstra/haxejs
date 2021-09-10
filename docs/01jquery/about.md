# About Haxe and jQuery

You can't say JavaScript and **NOT** mention [jQuery](http://jquery.com/).

How will that work with Haxe?

<!--
Okay here it gets difficult, so if you don't want to be confused, press [here to jump to the difference](#jquery)

----

## It's complicated

The jQuery externs are embedded into the Haxe compiler .
Nothing to do here, you would think

	http://api.haxe.org/js/JQuery.html

But it's based upon the jQuery version 1.6.4 and incomplete.


That ticked off Andi Li and he wrote the jQuery externs who are up-to-date with the jQuery version 1.11.3 / 2.1.4. Requires Haxe 3.1.0+.

	https://github.com/andyli/jQueryExternForHaxe



But something changed: Andy started working for the HaxeFoundation.
And his work on the jQueryExterns are joined into the compiler.
I can't find out when will happen, but it will ... Starting from Haxe 3.3.+


Till that time I will be talking about the jQueryExtern till something changes

----
-->

<a name="jquery"></a>
## Using the jQuery classes

There is some difference between how you use jQuery and the jQuery extern.

For a typical JS starting point with jQuery, you write:

```js
$(function(){
    //do your magic
});
```

If you don't know, its a short-hand that bind your magic codes to the document ready event, same as you write:

```js
$(document).ready(function(){
    //do your magic
});
```

Both will result in `Unknown identifier : $`

Haxe does not allow using `$` as a class name or a function name, but `$` is just a short-hand to jQuery.
Yet Haxe requires all class names start with capital letter, so it is JQuery not jQuery.
You start your Haxe/JS codes using the jQuery extern as following:

```haxe
import js.jquery.JQuery;

class Main {
    static public function main():Void {
        new JQuery(function():Void { // when document is ready
            // your magic
        });
    }
}
```


It seems to be a few lines more than JS. But you already know, the extra lines are the same for all other haxe targets, it's how Haxe program starts.
The main point is `new JQuery(...)` which is the same as `$(...)` in JS.



## Using jQuery in Haxe

This tutorial is based upon the first post from Andi about jQueryExterns: [http://blog.onthewings.net/2010/08/03/using-jquery-in-haxe/](http://blog.onthewings.net/2010/08/03/using-jquery-in-haxe/)

