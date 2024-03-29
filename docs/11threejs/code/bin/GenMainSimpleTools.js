(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {};
var GenMainSimpleTools = function() {
	var _gthis = this;
	this.controls = { size : 1, color : "#00FFBC"};
	this.tools();
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
	camera.position.z = 4;
	var renderer = new THREE.WebGLRenderer({ antialias : true});
	renderer.setSize(window.innerWidth,window.innerHeight);
	window.document.body.appendChild(renderer.domElement);
	var geometry = new THREE.OctahedronGeometry(this.controls.size,0);
	var material = new THREE.MeshBasicMaterial({ color : this.controls.color});
	this.mesh = new THREE.Mesh(geometry,material);
	scene.add(this.mesh);
	var render = null;
	render = function(f) {
		_gthis.stats.begin();
		window.requestAnimationFrame(render);
		_gthis.mesh.rotation.x += 0.01;
		_gthis.mesh.rotation.y += 0.01;
		renderer.render(scene,camera);
		_gthis.stats.end();
	};
	render(0);
	var controls = new THREE.OrbitControls(camera,renderer.domElement);
	window.onresize = function() {
		$global.console.log("Window size: " + Std.string(window.innerWidth) + "x" + Std.string(window.innerHeight) + "px");
		renderer.setSize(window.innerWidth,window.innerHeight);
		var aspectRatio = window.innerWidth / window.innerHeight;
		camera.aspect = aspectRatio;
		camera.updateProjectionMatrix();
	};
};
GenMainSimpleTools.__name__ = true;
GenMainSimpleTools.main = function() {
	var app = new GenMainSimpleTools();
};
GenMainSimpleTools.prototype = {
	tools: function() {
		var _gthis = this;
		this.stats = new Stats();
		this.stats.showPanel(0);
		window.document.body.appendChild(this.stats.dom);
		var gui = new dat.gui.GUI();
		var gui = new dat.GUI();
		var c_mesh_size = gui.add(this.controls,"size",0,2);
		var c_mesh_color = gui.addColor(this.controls,"color",0,100);
		c_mesh_size.onChange(function() {
			_gthis.mesh.geometry = new THREE.OctahedronGeometry(_gthis.controls.size,0);
		});
		c_mesh_color.onChange(function() {
			_gthis.mesh.material = new THREE.MeshBasicMaterial({ color : _gthis.controls.color});
		});
	}
};
Math.__name__ = true;
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
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
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
var js_three_ArrayLike = {};
js_three_ArrayLike.get = function(this1,key) {
	return this1[key];
};
js_three_ArrayLike.arrayWrite = function(this1,k,v) {
	this1[k] = v;
	return v;
};
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
GenMainSimpleTools.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=GenMainSimpleTools.js.map