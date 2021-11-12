package sortablejs.plugins;

typedef AutoScrollOptions = {
	/**
		Enable the plugin. Can be `HTMLElement`.
	**/
	@:optional
	var scroll : ts.AnyOf2<Bool, js.html.Element>;
	/**
		if you have custom scrollbar scrollFn may be used for autoscrolling.
	**/
	@:optional
	dynamic function scrollFn(offsetX:Float, offsetY:Float, originalEvent:js.html.Event, touchEvt:js.html.TouchEvent, hoverTargetEl:js.html.Element):ts.AnyOf2<ts.Undefined, String>;
	/**
		`px`, how near the mouse must be to an edge to start scrolling.
	**/
	@:optional
	var scrollSensitivity : Float;
	/**
		`px`, speed of the scrolling.`
	**/
	@:optional
	var scrollSpeed : Float;
	/**
		apply autoscroll to all parent elements, allowing for easier movement.
	**/
	@:optional
	var bubbleScroll : Bool;
};