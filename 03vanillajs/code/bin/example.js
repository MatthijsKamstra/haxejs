(function (console) { "use strict";
var Main = function() {
	this._doc = window.document;
	var _g = this;
	console.log("Example VanillaJS");
	this._doc.addEventListener("DOMContentLoaded",function(event) {
		console.log("VanillaJs DOM ready");
		var div = _g._doc.getElementById("container-1");
		div.style.opacity = Std.string(0.5);
		var request = new XMLHttpRequest();
		request.open("GET","https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY",true);
		request.onload = function() {
			if(request.status >= 200 && request.status < 400) {
				var json = request.responseText;
				console.log("json: " + json);
			} else console.log("oeps: status: " + request.status + " // json: " + request.responseText);
		};
		request.onerror = function() {
			console.log("error");
		};
		request.send();
		var _el = _g._doc.getElementsByClassName("image-container")[0];
		var _btnShow = _g._doc.getElementById("fade-in");
		var _btnHide = _g._doc.getElementById("fade-out");
		_g.fadeIn(_el);
		_btnShow.addEventListener("click",function() {
			_g.fadeIn(_el);
		},false);
		_btnHide.addEventListener("click",function() {
			_g.fadeOut(_el);
		},false);
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	fadeIn: function(pElement,pOpacity) {
		var _g = this;
		if(pOpacity == null) pOpacity = 0; else pOpacity += 0.1;
		if(pOpacity == null) pElement.style.opacity = "null"; else pElement.style.opacity = "" + pOpacity;
		if(pOpacity < 1) haxe_Timer.delay(function() {
			_g.fadeIn(pElement,pOpacity);
		},100); else console.log("Stop fadein");
	}
	,fadeOut: function(pElement,pOpacity) {
		var _g = this;
		if(pOpacity == null) pOpacity = 1; else pOpacity -= 0.1;
		if(pOpacity == null) pElement.style.opacity = "null"; else pElement.style.opacity = "" + pOpacity;
		if(pOpacity > 0) haxe_Timer.delay(function() {
			_g.fadeOut(pElement,pOpacity);
		},100); else console.log("Stop fadeOut");
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
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
String.__name__ = true;
Array.__name__ = true;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
