#Example two

![](https://www.npmjs.com/static/images/npm-logo.svg)

I love the Haxe community. This is a great example of how I hoped this documentation would work.
In the comments of my other [automation example](example.md) I get a suggestion from [Clark Jones](https://disqus.com/home/discussion/haxeandnodejs/haxe_and_nodejs_91/#comment-2291149693) I could improve by doing this:

- without Grunt
- but use NPM
- shorter / cleaner
- livereload (I couldn't get that to work)
- how to be more awesome!


I was a little thin on time, so couldn't write/researched it at once... [So Clark documented it in the comments](https://disqus.com/home/discussion/haxeandnodejs/haxe_and_nodejs_91/#comment-2292315372)

**I really did't know NPM could do that, but I happy I do know now!**

We will use a simple example to illustrate the workings of automation.
And to do that we will use the first example we made: the hello world in node.js.
Read more about "[hello world](../00helloworld/about.md)"

There are some little adjustments for livereload, but crucial to get that working.
**AND** a conditional compilation flag added so when you remove `-debug` from the `.hmxl` file the livereload will also disappear from the html.


_Check out the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/11automation/code2)_

## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- javascript.hxml
	- package.json
```


## Install

Check out [the installation2](installation2.md).


## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```
package ;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Javascript Hello World Example");
	}

	static public function main()
	{
		var main = new Main();
	}
}

```


## The Haxe build file, javascript.hxml

Copy and past the following lines in a document named `javascript.hxml`
This is the short version, you want to check out the full version open this [file](/code2/javascript.hxml);

```
-cp src
-main Main
-js bin/example.js
-D source-map-content
-debug
-dce full
```



## Automate! (no not yet, but getting closer)

Normally you would have a "how to build" instruction for Haxe here.
But now we will use NPM to build the `.hxml` file and let NPM "watch" the files for changes.
If there are any changes, NPM will rebuild.


To do this we need an extra file:

- package.json

## package.json

Because we will be using NPM for more then only updating the "devDependencies", we also need the "scripts".

```
{
	"license": "MIT",
	"description": "Create a website with express",
	"author": "Matthijs Kamstra aka [mck]",
	"private": true,
	"scripts": {
		"prewatch": "haxe javascript.hxml",
		"watch": "onchange '**/*.hx' '**/*.md' -v -- haxe javascript.hxml & nodemon bin/example.js & livereload bin/"
  	},
  	"devDependencies": {
		"livereload": "^0.3.7",
		"onchange": "^2.0.0"
  	}
}

```


## Automate! (almost there)

Now we have the correct files, we need to update the node modules.
So open the correct folder with you terminal

Something like:

```
cd path/to/this/example/
```

----

Now we update the `node_modules` so we don't get error that way (this is documented in `package.json`)

```
npm install
```

This will create a new folder with modules-folders in it:

```
+ node_modules
	+ livereload
	+ onchange

```

----


Start NPM watch so it will rebuild `javascript.hxml` as soon as file changes

```
npm run watch
```

And your done!


Cool huh!

----

To stop the terminal process

```
Ctrl + c
```



### Automation WIN!

So this way we have automated a lot!

Lets look what we had to do before the automation:


**First run:**

- Open terminal
- type `haxe javascript.hxml`
- enter
- open Browser `http://localhost:8080`

**Updates:**

- CMD + TAB > Terminal
- CTRL + c (stop node)
- Cursor + UP (select previous state terminal)
- Enter
- CMD + TAB > Browser
- CMD + R
- CMD + TAB > Sublime Text
- change files
- repeat

----

And that is changed into:

----

**First run:**

- Open terminal
- type `npm run watch`
- enter
- open Browser `http://localhost:8080`

**Updates:**

- CMD + TAB > Browser
- CMD + TAB > Sublime Text
- change files
- repeat


(or if you have two monitors, just see the updates on your second screen!!!!!)


**win win win!**


-----
