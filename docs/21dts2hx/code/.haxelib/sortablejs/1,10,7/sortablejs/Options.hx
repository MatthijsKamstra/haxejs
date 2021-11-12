package sortablejs;

typedef Options = {
	/**
		ms, animation speed moving items when sorting, `0` — without animation
	**/
	@:optional
	var animation : Float;
	/**
		Class name for the chosen item
	**/
	@:optional
	var chosenClass : String;
	@:optional
	var dataIdAttr : String;
	/**
		time in milliseconds to define when the sorting should start
	**/
	@:optional
	var delay : Float;
	/**
		Only delay if user is using touch
	**/
	@:optional
	var delayOnTouchOnly : Bool;
	/**
		Direction of Sortable
		(will be detected automatically if not given)
	**/
	@:optional
	var direction : ts.AnyOf2<(evt:SortableEvent, target:js.html.Element, dragEl:js.html.Element) -> Direction, String>;
	/**
		Disables the sortable if set to true.
	**/
	@:optional
	var disabled : Bool;
	/**
		Class name for the dragging item
	**/
	@:optional
	var dragClass : String;
	/**
		Specifies which items inside the element should be draggable
	**/
	@:optional
	var draggable : String;
	@:optional
	var dragoverBubble : Bool;
	@:optional
	var dropBubble : Bool;
	/**
		distance mouse must be from empty sortable
		to insert drag element into it
	**/
	@:optional
	var emptyInsertThreshold : Float;
	/**
		Easing for animation. Defaults to null.
		
		See https://easings.net/ for examples.
		
		For other possible values, see
		https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp
	**/
	@:optional
	var easing : String;
	/**
		Class name for the cloned DOM Element when using forceFallback
	**/
	@:optional
	var fallbackClass : String;
	/**
		Appends the cloned DOM Element into the Document's Body
	**/
	@:optional
	var fallbackOnBody : Bool;
	/**
		Specify in pixels how far the mouse should move before it's considered as a drag.
	**/
	@:optional
	var fallbackTolerance : Float;
	@:optional
	var fallbackOffset : {
		var x : Float;
		var y : Float;
	};
	/**
		Selectors that do not lead to dragging (String or Function)
	**/
	@:optional
	var filter : ts.AnyOf2<String, (event:ts.AnyOf2<js.html.Event, js.html.TouchEvent>, target:js.html.Element, sortable:Sortablejs) -> Bool>;
	/**
		ignore the HTML5 DnD behaviour and force the fallback to kick in
	**/
	@:optional
	var forceFallback : Bool;
	/**
		Class name for the drop placeholder
	**/
	@:optional
	var ghostClass : String;
	/**
		To drag elements from one list into another, both lists must have the same group value.
		You can also define whether lists can give away, give and keep a copy (clone), and receive elements.
	**/
	@:optional
	var group : ts.AnyOf2<String, GroupOptions>;
	/**
		Drag handle selector within list items
	**/
	@:optional
	var handle : String;
	@:optional
	var ignore : String;
	/**
		Will always use inverted swap zone if set to true
	**/
	@:optional
	var invertSwap : Bool;
	/**
		Threshold of the inverted swap zone
		(will be set to `swapThreshold` value by default)
	**/
	@:optional
	var invertedSwapThreshold : Float;
	/**
		Call `event.preventDefault()` when triggered `filter`
	**/
	@:optional
	var preventOnFilter : Bool;
	/**
		Remove the clone element when it is not showing,
		rather than just hiding it
	**/
	@:optional
	var removeCloneOnHide : Bool;
	/**
		sorting inside list
	**/
	@:optional
	var sort : Bool;
	@:optional
	var store : {
		dynamic function get(sortable:Sortablejs):Array<String>;
		dynamic function set(sortable:Sortablejs):Void;
	};
	/**
		Threshold of the swap zone.
		Defaults to `1`
	**/
	@:optional
	var swapThreshold : Float;
	/**
		How many *pixels* the point should move before cancelling a delayed drag event
	**/
	@:optional
	var touchStartThreshold : Float;
	@:optional
	dynamic function setData(dataTransfer:js.html.DataTransfer, draggedElement:js.html.Element):Void;
	/**
		Element dragging started
	**/
	@:optional
	dynamic function onStart(event:SortableEvent):Void;
	/**
		Element dragging ended
	**/
	@:optional
	dynamic function onEnd(event:SortableEvent):Void;
	/**
		Element is dropped into the list from another list
	**/
	@:optional
	dynamic function onAdd(event:SortableEvent):Void;
	/**
		Created a clone of an element
	**/
	@:optional
	dynamic function onClone(event:SortableEvent):Void;
	/**
		Element is chosen
	**/
	@:optional
	dynamic function onChoose(event:SortableEvent):Void;
	/**
		Element is unchosen
	**/
	@:optional
	dynamic function onUnchoose(event:SortableEvent):Void;
	/**
		Changed sorting within list
	**/
	@:optional
	dynamic function onUpdate(event:SortableEvent):Void;
	/**
		Called by any change to the list (add / update / remove)
	**/
	@:optional
	dynamic function onSort(event:SortableEvent):Void;
	/**
		Element is removed from the list into another list
	**/
	@:optional
	dynamic function onRemove(event:SortableEvent):Void;
	/**
		Attempt to drag a filtered element
	**/
	@:optional
	dynamic function onFilter(event:SortableEvent):Void;
	/**
		Event when you move an item in the list or between lists
	**/
	@:optional
	dynamic function onMove(evt:MoveEvent, originalEvent:js.html.Event):ts.AnyOf3<Bool, ts.Undefined, Int>;
	/**
		Called when dragging element changes position
	**/
	@:optional
	dynamic function onChange(evt:SortableEvent):Void;
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
	/**
		Enable the plugin
	**/
	@:optional
	var multiDrag : Bool;
	/**
		Class name for selected item
	**/
	@:optional
	var selectedClass : String;
	/**
		Key that must be down for items to be selected
	**/
	@:optional
	var multiDragKey : Any;
	/**
		Called when an item is selected
	**/
	@:optional
	dynamic function onSelect(event:SortableEvent):Void;
	/**
		Called when an item is deselected
	**/
	@:optional
	dynamic function onDeselect(event:SortableEvent):Void;
	/**
		This plugin, when enabled,
		will cause the dragged item to be reverted to it's original position if it is *spilled*
		(ie. it is dropped outside of a valid Sortable drop target)
	**/
	@:optional
	var revertOnSpill : Bool;
	/**
		This plugin, when enabled,
		will cause the dragged item to be removed from the DOM if it is *spilled*
		(ie. it is dropped outside of a valid Sortable drop target)
	**/
	@:optional
	var removeOnSpill : Bool;
	/**
		Called when either `revertOnSpill` or `RemoveOnSpill` plugins are enabled.
	**/
	@:optional
	dynamic function onSpill(evt:SortableEvent):Void;
	/**
		Enable swap mode
	**/
	@:optional
	var swap : Bool;
	/**
		Class name for swap item (if swap mode is enabled)
	**/
	@:optional
	var swapClass : String;
};