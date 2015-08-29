#Example Classes

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/04classes/code) for more comments.

Classes are important but I couldn't think of a good example how to explain it.
That's why I use the example from the [haxe.org - manual](http://haxe.org/manual/types-class-instance.html)

*I used to be a Flash-developer and I missed the Point Class. So it seems fitting to use this example*

# How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- javascript.hxml
```


## Point.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 

```
class Point 
{
	var x : Int;
	var y : Int;

	public function new(x,y) {
		this.x = x;
		this.y = y;
	}
	public function toString() {
		return "Point("+x+","+y+")";
	}
}
```

Add this to the Main.hx

	var _point = new Point(10,100);
	trace ("_point: " + _point);

And you have create your first Haxe/JS class


#Inheritance

Found this example of inheritance
<http://help.adobe.com/en_US/ActionScript/3.0_ProgrammingAS3/WS5b3ccc516d4fbf351e63e3d118a9b90204-7fcd.html>

> Inheritance is a form of code reuse that allows programmers to develop new classes that are based on existing classes. The existing classes are often referred to as base classes or superclasses, while the new classes are usually called subclasses. A key advantage of inheritance is that it allows you to reuse code from a base class yet leave the existing code unmodified. Moreover, inheritance requires no changes to the way that other classes interact with the base class. Rather than modifying an existing class that may have been thoroughly tested or may already be in use, using inheritance you can treat that class as an integrated module that you can extend with additional properties or methods. Accordingly, you use the extends keyword to indicate that a class inherits from another class.

## Shape.hx

```
package;
class Shape 
{
	public function new():Void{}
	
	public function area():Float 
	{ 
		return -1; 
	} 
}

```
## Circle.hx

```
package;

class Circle extends Shape 
{ 
	private var radius:Float = 1; 

	public function new():Void
	{
		super();	
	}

	override public function area():Float 
	{ 
		return (Math.PI * (radius * radius)); 
	} 
} 
```
```
## Square.hx

```
package;

class Square extends Shape 
{ 
	private var side:Float = 1; 

	public function new():Void
	{
		super();
	}
	
	override public function area():Float 
	{ 
		return (side * side); 
	} 
} 
```

## Main.hx
```
// circle and square
var _circle:Circle = new Circle(); 
trace("circle.area : " + _circle.area()); // output: 3.141592653589793 
var _square:Square = new Square(); 
trace("square.area : " + _square.area()); // output: 1
```

