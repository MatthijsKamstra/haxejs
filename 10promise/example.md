#Example promise

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/10promise/code) for more comments.

For this example we will be making something very simple.

_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/10promise/code)._

## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
        - Main.hx
        - Main01.hx
		- Main02.hx
	- build.hxml
```


## The Main01.hx


This example is the first I would check out.

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```
package ;

import js.Browser.*;
import js.Promise;

class Main {

    // https://www.toptal.com/javascript/javascript-promises

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

## index.html



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


