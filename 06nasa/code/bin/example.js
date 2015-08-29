(function (console) { "use strict";
var Main = function() {
	this._doc = window.document;
	var _g = this;
	$(function() {
		console.log("NASA images");
		_g.buildUI();
		$.ajax({ url : "https://api.nasa.gov/planetary/apod", data : { date : _g.randomDate(), concept_tags : "True", api_key : "DEMO_KEY"}, success : function(data) {
			console.log("data.url : " + data.url);
			console.log("data.media_type : " + data.media_type);
			console.log("data.explanation : " + data.explanation);
			console.log("data.concepts : " + data.concepts);
			console.log("data.title : " + data.title);
			$("#nasa-container").html("<h2>" + data.title + "</h2><img src='" + data.url + "' alt='" + data.title + "' class='img-responsive center-block' ><p>" + data.explanation + "</p>");
			$(".back-in-time").click($bind(_g,_g.onClickHandler));
		}});
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	buildUI: function() {
		var _div = this._doc.createElement("div");
		_div.className = "container";
		this._doc.body.appendChild(_div);
		var _h2 = this._doc.createElement("h2");
		_h2.innerText = "NASA";
		_div.appendChild(_h2);
		var _ahref = this._doc.createElement("a");
		_ahref.href = "https://api.nasa.gov/api.html#apod";
		_ahref.appendChild(this._doc.createTextNode("https://api.nasa.gov/api.html#apod"));
		console.log(_ahref);
		var _p = this._doc.createElement("p");
		_p.innerText = "Thx to NASA for suppling there open API (" + Std.string(_ahref) + ")";
		_div.appendChild(_p);
		var _image = this._doc.createElement("div");
		_image.id = "nasa-container";
		_image.appendChild(this._doc.createTextNode("This text will replaced with an image"));
		_div.appendChild(_image);
		var _btn = this._doc.createElement("button");
		_btn.innerText = "back in time";
		_btn.className = "back-in-time";
		_div.appendChild(_btn);
		_div.appendChild(this._doc.createComment(".container"));
	}
	,onClickHandler: function(e) {
		console.log("go back in time");
	}
	,randomDate: function() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		return year + "-" + StringTools.lpad(month == null?"null":"" + month,"0",2) + "-" + StringTools.lpad(day == null?"null":"" + day,"0",2);
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
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
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
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = ["Date"];
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
