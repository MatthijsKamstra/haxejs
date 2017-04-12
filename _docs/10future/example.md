#Example promise

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/10promise/code) for more comments.

If you want an extra explanation about Promise just visite the [about](about.md) page.

_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/10promise/code)._

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


## First example

This example is the first I would check out.
It's originally from: <https://www.toptal.com/javascript/javascript-promises>

The complete code for you to try (without installing Haxe):
<iframe src="https://try.haxe.org/embed/25CF5" width="100%" height="300" frameborder="no" allowfullscreen>
    <a href="https://try.haxe.org/#25CF5">Try Haxe !</a>
</iframe>

Because we copy/paste the original code from the example, we need to add two imports

```
import js.Browser.*;   // to make sure console.log works
import js.Promise;     // and the Promise
```

> The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject. Like `throw` in plain old JavaScript, it's customary, but not required, to reject with an Error object.

```
var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then..
    if (/* everything turned out fine */) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});
```

And this is how to use the promise

```
promise.then(function(result) {
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});
```


You can always just [copy/paste](code/src/Main01.hx) the code into your favorite editor and save it in the `src` folder.

<!--

```
package ;

import js.Browser.*;
import js.Promise;

class Main01 {

    public function new()
    {
        var promise = new Promise(function (fulfill, reject){
            var n =  Math.floor(Math.random() * 6) + 1;
            if (n == 6) {
                fulfill(n);
            } else {
                reject(n);
            }
        });
        promise.then(function ( toss : Int ) {
            console.log('Yay, threw a ' + toss + '.');
        }, function (toss) {
            console.log('Oh, noes, threw a ' + toss + '.');
        });
    }

    static public function main() : Void { var main = new Main01(); }
}
```
 -->


## Second example

This example is the next version of the first example
It's originally from: <https://www.toptal.com/javascript/javascript-promises>

<iframe src="https://try.haxe.org/embed/866F4" width="100%" height="300" frameborder="no" allowfullscreen>
    <a href="https://try.haxe.org/#866F4">Try Haxe !</a>
</iframe>

This example will let you roll (a maximum off) 3 times. If you roll a 6 it will stop rolling.
If not it will continue till it does. Unless you roll more then 3 times. Then it will just mention that you were not able to roll a 6.

The `tossASix` function creates the promise. And it will `fulfill` when `n` is a 6. Lower then a 6 will trigger a `reject`.

```
tossASix()
    .then(null, logAndTossAgain)   // Roll first time
    .then(null, logAndTossAgain)   // Roll second time
    .then(logSuccess, logFailure); // Roll third and last time
```

This is how we use the promise. The `tossASix` returns the promise. It's possible to chain a couple of `.then`.
In this example, if there is no `logSuccess` (`null`), the `logAndTossAgain` will create a promise again.
But if there is a `logSuccess` it will skip "then" and show that response.


You can always just [copy/paste](code/src/Main02.hx) the code into your favorite editor and save it in the `src` folder.


## Third example

This example is from: <https://developers.google.com/web/fundamentals/getting-started/primers/promises>
And the [Nasa Example](../06nasa/example.md)


<iframe src="https://try.haxe.org/embed/DeD82" width="100%" height="300" frameborder="no" allowfullscreen>
    <a href="https://try.haxe.org/#DeD82">Try Haxe !</a>
</iframe>

Usually you can just copy/paste pure JavaScript examples and with little to no adjustments it will work!

In this case it will not work:

```
get('story.json').then(function(response) {
    console.log("Success!", response);
}).catch(function(error) {
    console.log("Failed!", error);
});
```

`catch` is an Haxe keyword, so you can't use that.
So in this case `catch` is replace with `catchError`

```
getDataNASA(url).then(function(response) {
    console.log("Success!", response);
}).catchError(function(error) {
    console.error("Failed!", error);
});

```

Just remember that `.catchError` (or the original `.catch`) syntactic sugar is for `.then(null, function(error) {}) ... ` but more readable.

```
get('story.json').then(function(response) {
    console.log("Success!", response);
}).then(null, function(error) {
    console.log("Failed!", error);
});
```

Works the same.


The original example works a little bit different because it loads a local file, you can find that example [here](code/src/Main03.hx).

This example can be [copy/paste](code/src/Main.hx) into your favorite editor and save it in the `src` folder.




## index.html

the html is not that exciting, so we can keep that the same for all examples and check out the console info

```

<html>
<head>
	<title>Haxe JS - Promise example</title></head>
<body>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="example.js"></script>

</body>
</html>

```


## The Haxe build file, build.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // build.hxml
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

It will have the same result


