(function ($global) { "use strict";
var Main = function() {
	this.document = window.document;
	var _gthis = this;
	console.log("src/Main.hx:11:","Example VanillaJS");
	this.document.addEventListener("DOMContentLoaded",function(event) {
		console.log("src/Main.hx:14:","VanillaJs DOM ready");
		var div = _gthis.document.getElementById("container-1");
		div.style.opacity = Std.string(0.5);
		var request = new XMLHttpRequest();
		request.open("GET","https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY",true);
		request.onload = function() {
			if(request.status >= 200 && request.status < 400) {
				var json = request.responseText;
				console.log("src/Main.hx:28:","json: " + json);
			} else {
				console.log("src/Main.hx:31:","oeps: status: " + request.status + " // json: " + request.responseText);
			}
		};
		request.onerror = function() {
			console.log("src/Main.hx:37:","error");
		};
		request.send();
		var _el = _gthis.document.getElementsByClassName("image-container")[0];
		var _btnShow = _gthis.document.getElementById("fade-in");
		var _btnHide = _gthis.document.getElementById("fade-out");
		_gthis.fadeIn(_el);
		_btnShow.addEventListener("click",function() {
			_gthis.fadeIn(_el);
		},false);
		_btnHide.addEventListener("click",function() {
			_gthis.fadeOut(_el);
		},false);
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	fadeIn: function(pElement,pOpacity) {
		var _gthis = this;
		if(pOpacity == null) {
			pOpacity = 0;
		} else {
			pOpacity += 0.1;
		}
		pElement.style.opacity = pOpacity == null ? "null" : "" + pOpacity;
		if(pOpacity < 1) {
			haxe_Timer.delay(function() {
				_gthis.fadeIn(pElement,pOpacity);
			},100);
		} else {
			console.log("src/Main.hx:72:","Stop fadein");
		}
	}
	,fadeOut: function(pElement,pOpacity) {
		var _gthis = this;
		if(pOpacity == null) {
			pOpacity = 1;
		} else {
			pOpacity -= 0.1;
		}
		pElement.style.opacity = pOpacity == null ? "null" : "" + pOpacity;
		if(pOpacity > 0) {
			haxe_Timer.delay(function() {
				_gthis.fadeOut(pElement,pOpacity);
			},100);
		} else {
			console.log("src/Main.hx:88:","Stop fadeOut");
		}
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
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
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
Main.main();
})({});
