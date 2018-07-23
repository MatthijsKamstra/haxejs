// Generated by Haxe 3.4.7
(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var pixi_plugins_app_Application = function() {
	this._animationFrameId = null;
	this.pixelRatio = 1;
	this.autoResize = true;
	this.transparent = false;
	this.antialias = false;
	this.forceFXAA = false;
	this.roundPixels = false;
	this.legacy = false;
	this.clearBeforeRender = true;
	this.preserveDrawingBuffer = false;
	this.backgroundColor = 16777215;
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.position = "static";
};
pixi_plugins_app_Application.prototype = {
	start: function(rendererType,parentDom,canvasElement) {
		if(rendererType == null) {
			rendererType = "auto";
		}
		if(canvasElement == null) {
			this.canvas = window.document.createElement("canvas");
			this.canvas.style.width = this.width + "px";
			this.canvas.style.height = this.height + "px";
			this.canvas.style.position = this.position;
		} else {
			this.canvas = canvasElement;
		}
		if(this.autoResize) {
			window.onresize = $bind(this,this._onWindowResize);
		}
		var renderingOptions = { };
		renderingOptions.width = this.width | 0;
		renderingOptions.height = this.height | 0;
		renderingOptions.view = this.canvas;
		renderingOptions.backgroundColor = this.backgroundColor;
		renderingOptions.resolution = this.pixelRatio;
		renderingOptions.antialias = this.antialias;
		renderingOptions.forceFXAA = this.forceFXAA;
		renderingOptions.autoResize = this.autoResize;
		renderingOptions.transparent = this.transparent;
		renderingOptions.clearBeforeRender = this.clearBeforeRender;
		renderingOptions.preserveDrawingBuffer = this.preserveDrawingBuffer;
		renderingOptions.roundPixels = this.roundPixels;
		renderingOptions.legacy = this.legacy;
		if(rendererType == null) {
			this.app = new PIXI.Application(renderingOptions);
		} else if(rendererType == "canvas") {
			renderingOptions.forceCanvas = true;
			this.app = new PIXI.Application(renderingOptions);
		} else {
			this.app = new PIXI.Application(renderingOptions);
		}
		this.stage = this.app.stage;
		this.renderer = this.app.renderer;
		if(parentDom == null) {
			window.document.body.appendChild(this.app.view);
		} else {
			parentDom.appendChild(this.app.view);
		}
		this.app.ticker.add($bind(this,this._onRequestAnimationFrame));
	}
	,_onWindowResize: function(event) {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.app.renderer.resize(this.width,this.height);
		this.canvas.style.width = this.width + "px";
		this.canvas.style.height = this.height + "px";
		if(this.onResize != null) {
			this.onResize();
		}
	}
	,_onRequestAnimationFrame: function() {
		if(this.onUpdate != null) {
			this.onUpdate(this.app.ticker.deltaTime);
		}
	}
};
var Main = function() {
	pixi_plugins_app_Application.call(this);
	console.log("pixi.js example");
	this.position = "fixed";
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.backgroundColor = 26214;
	this.transparent = true;
	this.antialias = false;
	this.onUpdate = $bind(this,this._animate);
	pixi_plugins_app_Application.prototype.start.call(this);
	this._bunny = new PIXI.Sprite(PIXI.Texture.fromImage("assets/bunny.png"));
	this._bunny.anchor.set(0.5);
	this._bunny.position.set(400,300);
	this._graphic = new PIXI.Graphics();
	this._graphic.beginFill(16711680,0.4);
	this._graphic.drawRect(200,150,400,300);
	this._graphic.endFill();
	this.stage.addChild(this._graphic);
	this.stage.addChild(this._bunny);
};
Main.main = function() {
	var main = new Main();
};
Main.__super__ = pixi_plugins_app_Application;
Main.prototype = $extend(pixi_plugins_app_Application.prototype,{
	_animate: function(e) {
		this._bunny.rotation += 0.1;
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Main.main();
})();
