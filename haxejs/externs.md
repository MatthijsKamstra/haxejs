# Your Favorites, Extended

**haxe JS** externs make it possible to extend Javascript libraries with code completion and other neat features.

Please feel free and choose one of the above libraries to learn more about how **haxe JS** can improve your everyday workflow.

## haxelib

Most of the externs listed here are available using "haxelib", the package manager for **haxe JS**.

You can easily install a library located on haxelib using the "install" command, like this:

	haxelib install joapp  
	haxelib install enyo  


## Writing Your Own

Making your own externs is pretty simple. If a framework uses the traditional prototypical inheritance structure for Javascript, like Jo, it can be very simple to create externs.

Frameworks that use a different model, like a class factory, may be harder to map using externs, but it certainly is possible. **haxe JS** was designed to be flexible to help you work with any library.


## Examples


* jQuery
* SENCHA TOUCH
* [three.js](https://github.com/labe-me/haxe-three.js)
* [node.js](http://matthijskamstra.github.io/haxenode/)
* Jo
* Enyo



##jQuery
#### Already Installed
Support for jQuery is already included with haxe JS.

####Code Completion
With a compatible editor, you can write code for jQuery using code completion. Don't have the API memorized? No problem. Code completion also requires less typing, similar to tab completion in a command-prompt or terminal.

#### Example
Make sure you have downloaded haxe, then here is an example jQuery project you can use to get started.

The example includes a project file for FlashDevelop, as well as a *.hxml file you can use to build the JS file yourself, like this:

haxe "jQuery Example.hxml"
It takes only a split-second to build. Open "index.html" to view it in your browser, or hit Ctrl+Enter in FlashDevelop to build and run in the same step.




## Sensa
#### Available on haxelib
With haxe installed, you can easily add externs for Sencha Touch 2 by opening a command-prompt or terminal:

	haxelib install senchatouch

#### Code Completion
With a compatible code editor, you can receive code completion for Sencha Touch types and configuration objects


#### More Productive
When you are creating a robust application using Sencha Touch, haxe JS enables you to catch errors fast, before you open your browser, and makes it simple to manage code with classes, enums, interfaces and other new OOP features for Javascript.

#### Example
You can download the "Getting Started" application, which illustrates some of the basics of panels and content in Sencha Touch 2.  

## JO

#### Available on haxelib
With haxe installed, you can easily install externs for Jo using a command-prompt or terminal:

	haxelib install joapp

#### Code Completion
With a compatible code editor, you can easily reference Jo classes, methods and properties.


#### Perfect Fit
Jo was made for applications, and is designed to embrace Javascript, not fight it. The Jo framework works naturally as classes in haxe JS.

#### Example
Make sure haxe is installed, and that you have added Jo support using haxelib. Next, try out the example project, based on one of the Jo "Kitchen Sink" applications.



## Enyo
#### Available on haxelib
With haxe installed, you can easily install externs for Enyo using a command-prompt or terminal:

	haxelib install enyo
	
#### Code Completion
Enyo has a large and robust API, which can be difficult to remember. Creating applications with haxe JS means that you can be an Enyo expert, even if you are still new to the framework.


#### Definitions and Instances
Support for Enyo is tricky, because it follows a factory model. You define simple objects, pass them through the builder, and on the other side you have fully decorated class instances.

As a result, the default classes for Enyo are mapped to object definitions. If you create a new enyo.Button, it will be similar to defining a simple object: { kind: "enyo.Button" }

When you would like completion for an object instance, a second set of definitions are included with "Instance" added to each name. For example, enyo.Button has a property called "caption", while enyo.ButtonInstance has two methods, "getCaption" and "setCaption", due to Enyo's transformative nature.

#### Example
With haxe installed, you can try an example project, based on the Enyo "Style Matters" application. Similar to testing Enyo applications normally, you will need to test in a Webkit-based browser, and may need to disable security features to allow local AJAX file requests.

You may also need to check the path to "enyo.js" in the "Export/index.html" file to make sure it lines up with the one on your system. If you do not have Enyo on your system already, it is included with the webOS SDK.
