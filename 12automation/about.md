#About automation

> Automate the Boring Stuff with ...

Do you recognize this pattern? 

- CMD + TAB > Terminal
- Cursor + UP
- Enter
- CMD + TAB > Browser
- CMD + R
- CMD + TAB > Sublime Text
- Change files
- Repeat


As a programmer you are looking for patterns, so you can put them a function and use that function *over and over* again.

The same thing applies to compiling/refreshing/updating code.

If you do a lot of the same tasks *over and over and over* again, you should read this example.
Probably for the more experienced programmer, but I guess everybody can enjoy automation.

This example is not about programming or Haxe/NodeJs.  
But about the tedious task around programming.

This example is the same as the first example: a simple "Hello world"!  
*Read more about "[hello world](../00helloworld/about.md)"*

In this example we will build the Haxe with Grunt and let Grunt "watch" the files for changes.
If there are any changes, Grunt will rebuild.

You can achieve he same thing with Nodemon.
Nodemon will restart Node, when the file changes.
In our case it will watch one file, but when it changes it will restart the server.


## UPDATE #1

Everything changed a little by a suggestion from [Clark Jones](https://disqus.com/home/discussion/haxeandnodejs/haxe_and_nodejs_91/#comment-2291149693)! 

![](https://www.npmjs.com/static/images/npm-logo.svg)

I now would suggest you use NPM for automation.   
And visit [the second example](example2.md) I wrote (with a big help from Clark). It uses NPM for watch, livereload, restart Nodemon and one terminal window!  
Check out the [code folder](https://github.com/MatthijsKamstra/haxenode/tree/master/11automation/code2)




## Automation/Task runner

Grunt   
The JavaScript Task Runner

![](http://gruntjs.com/img/grunt-logo.png)

> Why use a task runner?
> In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it through a Gruntfile, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

*source [http://gruntjs.com/](http://gruntjs.com/)*


## Nodemon

To restart node we will use [Nodemon](http://nodemon.io/).

>Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.
>
>Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes. 



## Grunt vs Gulp

There are probably more, but in the JavaScript ecosystem the 2 biggest are 
[Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/)

I will not get into the Grunt vs Gulp discussion.  
Because I like Grunt I will explain Grunt!  
(And its fun to say the word Grunt as many times you can)

It absolutely doesn't mean Gulp is bad, I just leave that example to someone else!



---
