# build file




## The Haxe build file, build.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
Place these arguments into a text file of one per line with the extension hxml. This file can then passed directly to the Haxe compiler as a build script.

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
3. Type `haxe build.hxml`
4. Press enter


It will output

	Example




You could build everything directly in the terminal.

```
haxe -cp src -main Main -js bin/example.js -dce full
```

It will have the same result