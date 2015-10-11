#Hello world

![](../img/helloworld.png)

Developing Javascript code is really easy with Haxe. Let's see our first HelloWorld example :

	class Test {
		static function main() {
			trace("Hello World !");
		}
	}

Put this class into a file named `Test.hx` and create the file `compile.hxml` in the same directory with the following content :

	-js test.js
	-main Test

To compile open you terminal and type

	cd 

And drag the folder where you saved the files, into the terminal.
It will look something like this
	
	cd /path/to/folder/

press enter and type

	haxe compile.hxml

If an error occurs, it will be displayed. 
If everything went smoothly like it should, this will produce a file named `test.js` that can be embedded into an HTML page such as this one :

	<html>
	<head><title>Haxe JS</title></head>
	<body>

	<script type="text/javascript" src="test.js"></script>

	</body>
	</html>


If you put this code into a file named `test.html` and open it with your webbrowser (like Google Chrome), it should display **Hello World** in your Console.  
(Google Chrome > Hamburger menu > More Tools > Developers tools) 



*Based upon [old.haxe.org - manual](http://old.haxe.org/doc/start/js)*
