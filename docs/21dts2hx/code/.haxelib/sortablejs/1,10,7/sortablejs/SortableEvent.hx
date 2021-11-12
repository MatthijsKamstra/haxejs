package sortablejs;

typedef SortableEvent = {
	var clone : js.html.Element;
	/**
		previous list
	**/
	var from : js.html.Element;
	/**
		dragged element
	**/
	var item : js.html.Element;
	/**
		new index within parent
	**/
	var newIndex : Null<Float>;
	/**
		old index within parent
	**/
	var oldIndex : Null<Float>;
	/**
		Returns the object to which event is dispatched (its target).
	**/
	var target : js.html.Element;
	/**
		list, in which moved element.
	**/
	var to : js.html.Element;
	/**
		Old index within parent, only counting draggable elements
	**/
	var oldDraggableIndex : Null<Float>;
	/**
		New index within parent, only counting draggable elements
	**/
	var newDraggableIndex : Null<Float>;
	/**
		Pull mode if dragging into another sortable
	**/
	var pullMode : Null<ts.AnyOf2<Bool, String>>;
	/**
		When MultiDrag is used to sort, this holds a HTMLElement and oldIndex for each item selected.
		
		`oldIndicies[number]` is directly related to `newIndicies[number]`
		
		If MultiDrag is not used to sort, this array will be empty.
	**/
	var oldIndicies : Array<{
		var multiDragElement : js.html.Element;
		var index : Float;
	}>;
	/**
		When MultiDrag is used to sort, this holds a HTMLElement and newIndex for each item.
		
		`oldIndicies[number]` is directly related to `newIndicies[number]`
		
		If MultiDrag is not used to sort, this array will be empty.
	**/
	var newIndicies : Array<{
		var multiDragElement : js.html.Element;
		var index : Float;
	}>;
	/**
		When Swap is used to sort, this will contain the dragging item that was dropped on.
	**/
	var swapItem : Null<js.html.Element>;
	/**
		Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
	**/
	final bubbles : Bool;
	var cancelBubble : Bool;
	/**
		Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.
	**/
	final cancelable : Bool;
	/**
		Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
	**/
	final composed : Bool;
	/**
		Returns the object whose event listener's callback is currently being invoked.
	**/
	final currentTarget : Null<js.html.EventTarget>;
	/**
		Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.
	**/
	final defaultPrevented : Bool;
	/**
		Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.
	**/
	final eventPhase : Float;
	/**
		Returns true if event was dispatched by the user agent, and false otherwise.
	**/
	final isTrusted : Bool;
	var returnValue : Bool;
	final srcElement : Null<js.html.EventTarget>;
	/**
		Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
	**/
	final timeStamp : Float;
	/**
		Returns the type of event, e.g. "click", "hashchange", or "submit".
	**/
	final type : String;
	/**
		Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.
	**/
	function composedPath():Array<js.html.EventTarget>;
	function initEvent(type:String, ?bubbles:Bool, ?cancelable:Bool):Void;
	/**
		If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
	**/
	function preventDefault():Void;
	/**
		Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.
	**/
	function stopImmediatePropagation():Void;
	/**
		When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
	**/
	function stopPropagation():Void;
	final AT_TARGET : Float;
	final BUBBLING_PHASE : Float;
	final CAPTURING_PHASE : Float;
	final NONE : Float;
};