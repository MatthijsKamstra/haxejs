package sortablejs;

typedef Utils = {
	/**
		Attach an event handler function
	**/
	function on(element:js.html.Element, event:String, fn:js.html.EventListenerOrEventListenerObject):Void;
	/**
		Remove an event handler function
	**/
	function off(element:js.html.Element, event:String, fn:js.html.EventListenerOrEventListenerObject):Void;
	/**
		Get the values of all the CSS properties.
		
		Get the value of style properties.
		
		Set one CSS property.
	**/
	@:overload(function<K>(element:js.html.Element, prop:K):Dynamic { })
	@:overload(function<K>(element:js.html.Element, prop:K, value:Dynamic):Void { })
	function css(element:js.html.Element):js.html.CSSStyleDeclaration;
	/**
		Get elements by tag name.
	**/
	function find(context:js.html.Element, tagName:String, ?iterator:(value:js.html.Element, index:Float) -> Void):js.html.NodeListOf<js.html.Element>;
	/**
		Check the current matched set of elements against a selector.
	**/
	function is(element:js.html.Element, selector:String):Bool;
	/**
		For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	**/
	function closest(element:js.html.Element, selector:String, ?context:js.html.Element):Null<js.html.Element>;
	/**
		Add or remove one classes from each element
	**/
	function toggleClass(element:js.html.Element, name:String, state:Bool):Void;
};