// Generated by Haxe 4.0.0+ef18b627e
(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {};
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var GenMain = function() {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
	camera.position.z = 2;
	var renderer = new THREE.WebGLRenderer({ antialias : true});
	renderer.setClearColor("#2E2B40");
	renderer.setSize(window.innerWidth,window.innerHeight);
	window.document.body.appendChild(renderer.domElement);
	var geometry = new THREE.BoxGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial({ color : "#433F81"});
	var cube01 = new THREE.Mesh(geometry,material);
	scene.add(cube01);
	var geometry1 = new THREE.BoxGeometry(3,3,3);
	var material1 = new THREE.MeshBasicMaterial({ color : "#433F81", wireframe : true, transparent : true});
	var cube01_wireframe = new THREE.Mesh(geometry1,material1);
	scene.add(cube01_wireframe);
	var geometry2 = new THREE.BoxGeometry(1,1,1);
	var material2 = new THREE.MeshBasicMaterial({ color : "#A49FEF"});
	var cube02 = new THREE.Mesh(geometry2,material2);
	scene.add(cube02);
	var geometry3 = new THREE.BoxGeometry(3,3,3);
	var material3 = new THREE.MeshBasicMaterial({ color : "#A49FEF", wireframe : true, transparent : true});
	var cube02_wireframe = new THREE.Mesh(geometry3,material3);
	scene.add(cube02_wireframe);
	var geometry4 = new THREE.BoxGeometry(10,0.05,0.5);
	var material4 = new THREE.MeshBasicMaterial({ color : "#00FFBC"});
	var bar01 = new THREE.Mesh(geometry4,material4);
	bar01.position.z = 0.5;
	scene.add(bar01);
	var geometry5 = new THREE.BoxGeometry(10,0.05,0.5);
	var material5 = new THREE.MeshBasicMaterial({ color : "#ffffff"});
	var bar02 = new THREE.Mesh(geometry5,material5);
	bar02.position.z = 0.5;
	scene.add(bar02);
	var render = null;
	render = function(f) {
		window.requestAnimationFrame(render);
		cube01.rotation.x += 0.01;
		cube01.rotation.y += 0.01;
		cube01_wireframe.rotation.x += 0.01;
		cube01_wireframe.rotation.y += 0.01;
		cube02.rotation.x -= 0.01;
		cube02.rotation.y -= 0.01;
		cube02_wireframe.rotation.x -= 0.01;
		cube02_wireframe.rotation.y -= 0.01;
		bar01.rotation.z -= 0.01;
		bar02.rotation.z += 0.01;
		renderer.render(scene,camera);
	};
	render(0);
};
GenMain.__name__ = true;
GenMain.main = function() {
	var app = new GenMain();
};
Math.__name__ = true;
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
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
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var n = e.__constructs__[o._hx_index];
			var con = e[n];
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g3 = 0;
			var _g11 = o.length;
			while(_g3 < _g11) {
				var i = _g3++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e1 ) {
			var e2 = ((e1) instanceof js__$Boot_HaxeError) ? e1.val : e1;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str1 = "{\n";
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
		if(str1.length != 2) {
			str1 += ", \n";
		}
		str1 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str1 += "\n" + s + "}";
		return str1;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_three__$ArrayLike_ArrayLike_$Impl_$ = {};
js_three__$ArrayLike_ArrayLike_$Impl_$.__name__ = true;
js_three__$ArrayLike_ArrayLike_$Impl_$.get = function(this1,key) {
	return this1[key];
};
js_three__$ArrayLike_ArrayLike_$Impl_$.arrayWrite = function(this1,k,v) {
	this1[k] = v;
	return v;
};
String.__name__ = true;
Array.__name__ = true;
Object.defineProperty(js__$Boot_HaxeError.prototype,"message",{ get : function() {
	return String(this.val);
}});
js_Boot.__toStr = ({ }).toString;
GenMain.main();
})({});

//# sourceMappingURL=GenMain.js.map