# build file

Strangely enough I had never though about creating a tutorial about the build file.
But there is a lot you can do with it, so I will try to shead some light on it

## hello world

Because this is an exercise with the build files, I will use the "hello world" [example](../00helloworld) because its very simple to understand. If you you have any doubt about what to do, read the tutorial again.

So lets create a `Main.hx` with the following code:

```haxe
class Main {

	function new() {
		trace("Hello world");
	}

	static public function main() {
		var main = new Main();
	}
}
```




## The Haxe build file, build.hxml

So what do you want to do with this `Main.hx` file?

Taken from the [Haxe manual](https://haxe.org/manual/compiler-usage.html):

>>>
The Haxe Compiler is typically invoked from command line with several arguments which have to answer two questions:

- What should be compiled?
- What should the output be?
>>>

So to create a simple way to compile you need to answer those two questions

## 1. What should be compiled?

We use the following arguments

- `-cp path` Adds a class path where .hx source files or packages (sub-directories) can be found.
- `-main dot_path` Sets the main class.

If we would build from the terminal:

```bash
haxe -cp src -main Main
```

And if we would use a `build.hxml`

```haxe
# // build.hxml
-cp src
-main Main
```

But this will not work (yet!), finish with step 2

## 2. What should the output be?

Now we need to add the traget we want to output to

In this example I will use the JavaScript target but on the [Compiler Usage](https://haxe.org/manual/compiler-usage.html# common-arguments) page you can find more

Use the following argument:

- `-js file_name.js` Generates JavaScript source code in specified file.


If we would build from the terminal:

```bash
haxe -cp src -main Main -js bin/example.js
```

And if we would use a `build.hxml`

```haxe
# // build.hxml
-cp src
-main Main
-js bin/example.js
```


## Other global arguments

again check the Haxe manual [other-global-arguments](https://haxe.org/manual/compiler-usage.html# other-global-arguments)

And I will highlight a couple that are very useful and why


- `-dce` <std|full|no> Set the Dead Code Elimination mode (default std).

Sometimes you write code, that doesn't end up in production ... Sometimes you have your own (util) library that you sometimes use.

Normally all this code in included in your code, even when you don't use it. A good example is Jquery: mostly use for easy access to selectors but it also can do ajax call... If you don't use the ajax calls, this feature is embedded in "your" code.

[Dead Code Elemination](https://haxe.org/manual/cr-dce.html) will remove code that you don't use.


- `-debug` Add debug information to the compiled code.

This information also generates the [source-map](https://haxe.org/manual/debugging-source-map.html) which makes it easier to debug JavaScript code in the browser. It will map the js files code lines back to the original .hx files/classes. Very useful for debugging.

- `--no-traces` Don't compile `trace` calls in the program.

If you use the default loggin methode [trace](https://haxe.org/manual/debugging-trace-log.html) in Haxe, you have all the niceties from that logging system.
But useally you don't want that logging in the release/production version of your app. Use this to remove it!

- `-resource <file>[@name]` Add a named resource file.

Useful to embed [resource](https://haxe.org/manual/cr-resources.html) files in your code. Think  `config.json` or `welcome_massage.txt` which you want to use immediatly

- `-cmd` Run the specified command after a successful compilation.

Maybe you want a do something after Haxe compiler is ready. Something simple like `-cmd echo 'done'` or `-cmd node main.js` to run the node.js build directly after created.



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