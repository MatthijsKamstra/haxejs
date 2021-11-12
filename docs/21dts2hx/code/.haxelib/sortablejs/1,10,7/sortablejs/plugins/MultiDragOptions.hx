package sortablejs.plugins;

typedef MultiDragOptions = {
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
	dynamic function onSelect(event:sortablejs.SortableEvent):Void;
	/**
		Called when an item is deselected
	**/
	@:optional
	dynamic function onDeselect(event:sortablejs.SortableEvent):Void;
};