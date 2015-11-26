# Cheat Sheet

This document aims to give developers familiar with JavaScript a quickstart to Haxe. For more Haxe specific documentation please refer to the main Haxe.org website:

* [Haxe Syntax](http://haxe.org/ref/syntax)
* [Haxe Language Reference](http://haxe.org/ref)

#### Additional Features

Haxe includes support for:

* [Enums](http://haxe.org/manual/types-enum-instance.html)
* [Type parameters](http://Haxe.org/manual/type-system-type-parameters.html)
* [Strong Typing](http://Haxe.org/manual/types.html) 
* [Iterators](http://haxe.org/manual/lf-iterators.html)
* [Conditional compilation](http://Haxe.org/manual/lf-condition-compilation.html) 
* [Inlining](http://Haxe.org/manual/class-field-inline.html) 
* and more! ([check here](index.md))


---

### Haxe &amp; JavaScript common syntax comparison

This guide is based off from [OpenFL's guide](http://www.openfl.org/archive/developer/documentation/actionscript-developers/) and [HaxeFlixel'd guide](http://haxeflixel.com/documentation/as3-and-haxe-comparison/).

---

<!--

## Basic Types

**JavaScript**

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects>


1 Boolean  `var x = true;`
3 Number
	- number `var number = 10;`
	- float `var float = 10.1;`
	- int `var int = Math.floor( 10 );`
4 Object `var o = new Object(); // var o = {};`
5 void `void function foobar(){}`
6 Array `var array = new Array(); // var array = [];`



**Haxe**

1 Bool
2 Int `var intvalue : Int = 10; // var ten = 10;`
3 Number
	- `var number = 10; // var number : Float = 10;`
	- `var float = 10.1; // var float : Float = 10.1;`
	- `var int = 10; // var int : Int = 10;`
4 Dynamic `var o:Dynamic = {}`
5 Void `function foobar():Void{}`
6 Array<Dynamic> `var array = new Array<Dynamic>();`

-->



## Package Declarations
 
**JavaScript**

CommonJS vs AMD vs ES2015 module
```
need example
```

**Haxe**


```
package com.example.myapplication;
```


## Defining a Class
 
**JavaScript**

prototypal inheritance 

```
need example
```

**Haxe**

classical inheritance

```
class MyClass {

	public function new () {
	
	}

}
```


## Loops

**JavaScript**



```
// (classic C-style for-loop)
for (i = 0; i < 100; i++) {
 
}
 
for each (value in items) {
 
}
 
for (propertyName in object) {
 
}
```

**Haxe**


```
// (iterator based for-loop)
for (i in 0...100) {
 
}
 
for (value in items) {
 
}
 
var fields = Reflect.fields (object);
for (propertyName in fields) {
 
}
```




## Logging

**JavaScript**

```
console.log("hello world");
```

**Haxe**

```
trace("hello world");
```



## Switch Statements

**JavaScript**  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch>

```
switch (value) 
{
	case 1:
		console.log ("Equal to 1");
		break;
   default:
		console.log ("Not equal to 1");
	  break;

}
	   
```

**Haxe**

```
switch (value) 
{
   case 1:
	  trace ("Equal to 1");

   default:
	  trace ("Not equal to 1");

}
	   
```

## Type Inference


**JavaScript**  
Dynamic typing

```
var hi = "Hello World";
console.log ( typeof hi );
// type is "String"
hi = 1;
console.log ( typeof hi );
// type is "Number"


```        

**Haxe**  
Static typing

```
var hi = "Hello World";
$type (hi); // Warning : String
// type is String
// even works for code completion
hi = 1; // Int should be String
// will not compile

```        



 
## Type Casting


**JavaScript**

```
var car:Car = vehicle as Car;

var toString:String = String (10);
var toNumber:Number = Number ("10");
var toInteger:int = int (10.1);
```        

**Haxe**

```
var car:Car = cast vehicle;

// or for a safe cast:

var car = cast (vehicle, Car);

var toString = Std.string (10);
var toNumber = Std.parseFloat ("10");
var toInteger = Std.int (10.1);
```        




## Checking for Null

**JavaScript**

```
if (object == null) {

}

if (!object) {

}
```        

**Haxe**

```
if (object == null) {

}
```

## Hash Tables

**JavaScript**

```
var table  = new Object (); // or just {}
table["key"] = 100;

console.log (table.hasOwnProperty ("key"));

for (var key in table) {

   trace (key + " = " + table[key]);

}

delete table["key"];
```	

**Haxe**

```
var table = new Map<String, Int> ();
table.set ("key", 100);

trace (table.exists ("key"));

for (key in table.keys ()) 
{
	trace (key + " = " + table.get (key));
}

table.remove ("key");
```
 

## Rest Parameters

**JavaScript**

<https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Functions/rest_parameters>

```
function test (...params):void {

}

test (1, 2, 3);
```     

**Haxe**

```
function test (params:Array<Dynamic>) {

}

Reflect.makeVarArgs (test) (1, 2, 3);
```
 
<!-- 

Reflection
AS3

var foo = object["foo"];

bar.apply (this, [ "hi" ]);
		

Haxe

var foo = Reflect.field (object, "foo");

Reflect.callMethod (this, bar, [ "hi" ]);
		
-->
 

## Function Types

**JavaScript**

```
function hello (msg:String):void {

}

var type:Function = hello;
```		

Haxe

```
function hello (msg:String):Void {

}

var type:String->Void = hello;

// can also use Dynamic
```		

 

## Getters and Setters

**JavaScript**

```
var lost = {
	loc : "Island",
	get location () {
		return this.loc;
	},
	set location(val) {
		this.loc = val;
	}
};
console.log(lost.location); // will return "Island"
lost.location = "Another island";
console.log(lost.location); // will now return "Another island"
```		



**Haxe**

```
public var location(get_location, set_location):String;
private var _location:String = "Island";

function get_location():String {
	return _location;
}
function set_location(value:String):String {
	return _location = value;
}

....

trace(location); // will return "Island"
location = "Another island";
trace(location); // will now return "Another island"

```        






