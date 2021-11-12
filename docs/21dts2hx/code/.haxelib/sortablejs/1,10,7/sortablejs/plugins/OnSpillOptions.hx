package sortablejs.plugins;

typedef OnSpillOptions = {
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
	dynamic function onSpill(evt:sortablejs.SortableEvent):Void;
};