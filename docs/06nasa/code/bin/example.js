(function ($global) { "use strict";
var Main = function() {
	this.document = window.document;
	var _gthis = this;
	$(function() {
		console.log("src/Main.hx:23:","NASA images");
		_gthis.buildUI();
		$.ajax({ url : "https://api.nasa.gov/planetary/apod", data : { date : _gthis.randomDate(), concept_tags : "True", api_key : "DEMO_KEY"}, success : function(data) {
			console.log("src/Main.hx:36:","data.url : " + data.url);
			console.log("src/Main.hx:37:","data.media_type : " + data.media_type);
			console.log("src/Main.hx:38:","data.explanation : " + data.explanation);
			console.log("src/Main.hx:39:","data.concepts : " + data.concepts);
			console.log("src/Main.hx:40:","data.title : " + data.title);
			$("#nasa-container").html("<h2>" + data.title + "</h2><img src='" + data.url + "' alt='" + data.title + "' class='img-responsive center-block' ><p>" + data.explanation + "</p>");
			$(".back-in-time").click($bind(_gthis,_gthis.onClickHandler));
		}});
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	buildUI: function() {
		var _div = this.document.createElement("div");
		_div.className = "container";
		this.document.body.appendChild(_div);
		var _h2 = this.document.createElement("h2");
		_h2.innerText = "NASA";
		_div.appendChild(_h2);
		var _ahref = this.document.createElement("a");
		_ahref.href = "https://api.nasa.gov/api.html#apod";
		_ahref.appendChild(this.document.createTextNode("https://api.nasa.gov/api.html#apod"));
		console.log("src/Main.hx:69:",_ahref);
		var _p = this.document.createElement("p");
		_p.innerText = "Thx to NASA for suppling there open API (" + Std.string(_ahref) + ")";
		_div.appendChild(_p);
		var _image = this.document.createElement("div");
		_image.id = "nasa-container";
		_image.appendChild(this.document.createTextNode("This text will replaced with an image"));
		_div.appendChild(_image);
		var _btn = this.document.createElement("button");
		_btn.innerText = "back in time";
		_btn.className = "back-in-time";
		_div.appendChild(_btn);
		_div.appendChild(this.document.createComment(".container"));
	}
	,onClickHandler: function(e) {
		console.log("src/Main.hx:90:","go back in time");
	}
	,randomDate: function() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		return year + "-" + StringTools.lpad(month == null ? "null" : "" + month,"0",2) + "-" + StringTools.lpad(day == null ? "null" : "" + day,"0",2);
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	l -= s.length;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	buf_b += s == null ? "null" : "" + s;
	return buf_b;
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
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = "Date";
js_Boot.__toStr = ({ }).toString;
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
