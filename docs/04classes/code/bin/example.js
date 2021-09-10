(function ($global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Shape = function() {
};
Shape.__name__ = true;
var Circle = function() {
	this.radius = 1;
	Shape.call(this);
};
Circle.__name__ = true;
Circle.__super__ = Shape;
Circle.prototype = $extend(Shape.prototype,{
	area: function() {
		return Math.PI * (this.radius * this.radius);
	}
});
var Main = function() {
	console.log("src/Main.hx:10:","Example classes");
	var _point = new Point(10,100);
	console.log("src/Main.hx:15:","_point: " + Std.string(_point));
	var _circle = new Circle();
	console.log("src/Main.hx:19:","circle.area : " + _circle.area());
	var _square = new Square();
	console.log("src/Main.hx:21:","square.area : " + _square.area());
	var _pointA = new Point(100,200);
	var _pointB = new Point(1000,10);
	var distance = utils_MathUtil.distance(_pointA,_pointB);
	console.log("src/Main.hx:29:","The distance is: " + distance);
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Math.__name__ = true;
var Point = function(x,y) {
	this.x = x;
	this.y = y;
};
Point.__name__ = true;
Point.prototype = {
	toString: function() {
		return "Point(" + this.x + "," + this.y + ")";
	}
};
var Square = function() {
	this.side = 1;
	Shape.call(this);
};
Square.__name__ = true;
Square.__super__ = Shape;
Square.prototype = $extend(Shape.prototype,{
	area: function() {
		return this.side * this.side;
	}
});
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var utils_MathUtil = function() { };
utils_MathUtil.__name__ = true;
utils_MathUtil.distance = function(pointA,pointB) {
	var dx = pointA.x - pointB.x;
	var dy = pointA.y - pointB.y;
	return Math.sqrt(dx * dx + dy * dy);
};
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
Main.main();
})({});
