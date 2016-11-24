#Example 

We will use a simple example to illustrate the workings of automation.  
And to do that we will use the first example we made: the hello world in node.js.  
Read more about "[hello world](../00helloworld/about.md)"


## UPDATE #1

Everything changed a little by a suggestion from [Clark Jones](https://disqus.com/home/discussion/haxeandnodejs/haxe_and_nodejs_91/#comment-2291149693)! 

![](https://www.npmjs.com/static/images/npm-logo.svg)

I now would suggest you use NPM for automation.   
And visit [the second example](example2.md) I wrote (with a big help from Clark). It uses NPM for watch, livereload, restart Nodemon and only one terminal window!  
Check out the [code folder](https://github.com/MatthijsKamstra/haxenode/tree/master/11automation/code2)

That doesn't mean this example doesn't work!   
But the NPM way is much cleaner!  


## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- GruntFile.js
	- javascript.hxml
	- package.json
```


## Install

Check out [the installation](installation.md).


## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 

```
package ;

import js.Node;
import js.node.Http;
import js.node.http.ServerResponse;
import js.node.http.IncomingMessage;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Node.js Hello World Example");
		
		Http.createServer(function (request:IncomingMessage, response:ServerResponse):Void {
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.end('Hello World\n' + Date.now() );
		}).listen(8080);

		trace('Server started: ');		
		trace('open http://localhost:8080');		
		trace('Close Node with CTRL + C');		
	}

	static public function main()
	{
		var main = new Main(); 
	}
}

```


## The Haxe build file, javascript.hxml

Copy and past the following lines in a document named `javascript.hxml`  
This is the short version, you want to chech out the full version open this [file](/code/javascript.hxml);

```
# // javascript.hxml
-lib js-kit
-lib hxnodejs
-cp src
-main Main
-js bin/example.js
# -cmd node bin/example.js // this part will be done by automation
```



## Automate! (no not yet, but getting closer)

Normally you would have a "how to build" instruction for Haxe here.  
But now we will use Grunt to build the `.hxml` file and let Grunt "watch" the files for changes.  
If there are any changes, Grunt will rebuild.

The same thing will be done with Nodemon.  
Nodemon will restart Node, when the file changes.
In our case it will only watch one file (example.js), but when it changes it will restart the server.

To do this we need two extra files:

- package.json
- GruntFile.js


## package.json

I think you only need the "devDependencies", the rest is nice to add (and will stop node complaining about this file).

```
{
	"license": "MIT",
	"description": "Create a website with express",
	"author": "Matthijs Kamstra aka [mck]",
	"private": true,
	"dependencies": {

	},
	"devDependencies": {
		"grunt": "~0.4.1",
		"grunt-contrib-watch": "~0.5.3",
		"grunt-exec" : "~0.4.6",
		"grunt-nodemon" : "*"
	}
}
```

## GruntFile.js

I will not explain everything you see here, you should read about it on the [Grunt website](http://gruntjs.com/getting-started).
But in short:

- `grunt-exec` is a Grunt plugin for executing shell commands.
- `grunt-contrib-watch` lets you watch for changes in files (in this case `.md` and `.hx`)


```
module.exports = function(grunt) {

	// Project configuration.
  	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		exec: {
			haxe: 'haxe javascript.hxml'
		},

		watch: {
			scripts: {
				files: ['**/*.md','**/*.hx'],
				tasks: ['exec'],
				options: {
      				livereload: true
    			},
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec']);

};
```

## Automate! (almost there)

Now we have the correct files, we need to update the node modules
So open the correct folder with you terminal

Something like:

```
cd path/to/this/example/
```

----

Now we update the `node_modules` so we don't get error that way
(this is documented in `package.json`)

```
npm install
```

This will create a new folder with grunt folders in it:

```
+ node_modules
	+ grunt
	+ grunt-contrib-watch
	+ grunt-exec
	+ grunt-nodemon

```

----


Start grunt watch so it will rebuild `javascript.hxml` as soon as file changes

```
grunt watch
```

you will get this in you terminal:

```
Running "watch" task
Waiting...
```

and if you change the Main.hx file (just save it again)

```
Running "watch" task
Waiting...OK
>> File "src/Main.hx" changed.

Running "exec:haxe" (exec) task

Done, without errors.
Completed in 0.968s at Sep 28 2015 21:20:43 GMT+0200 (CEST) - Waiting...
```

Cool huh!

----

So now Grunt will watch changes to the `.hx` and recompile the example.js file.  
Now we need something to restart Node.

We want Nodemon to watch only one file: example.js
So we start Nodemon in the bin folder:

(open a new terminal window, because Grunt is using the other)

```
cd path/to/bin
```

and start watching example.js with NodeMon

```
nodemon example.js
```

And in will see in you terminal (and it will show the date you start it):

```
28 Sep 21:27:43 - [nodemon] v1.7.0
28 Sep 21:27:43 - [nodemon] to restart at any time, enter `rs`
28 Sep 21:27:43 - [nodemon] watching: *.*
28 Sep 21:27:43 - [nodemon] starting `node example.js`
```

If you now change `Main.hx`:

- Grunt watch will see that it's changed and will recompile
- after recompiling, Nodemon will see that the file is changed and will restart Node

and this will go on as long as you change the file 


----

To stop the terminal process (nodemon and grunt watch)

```
Ctrl + c
```



### Automation WIN!

So this way I have automated a lot:

First run:

- Open terminal
- type `haxe javascript.hxml`
- enter
- open Browser `http://localhost:8080`

Updates:

- CMD + TAB > Terminal
- CTRL + c (stop node)
- Cursor + UP (select previous state terminal)
- Enter
- CMD + TAB > Browser
- CMD + R
- CMD + TAB > Sublime Text
- change files
- repeat


To

First run:

- Open terminal
- type `grunt watch`
- enter
- Open terminal
- type `nodemon example.js`
- enter
- open Browser `http://localhost:8080`

Updates:

- CMD + TAB > Browser
- CMD + R
- CMD + TAB > Sublime Text
- change files
- repeat

(with some effort you could even automate the reload of the browser)


-----
