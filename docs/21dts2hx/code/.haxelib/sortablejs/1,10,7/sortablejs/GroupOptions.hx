package sortablejs;

typedef GroupOptions = {
	/**
		group name
	**/
	var name : String;
	/**
		ability to move from the list. clone — copy the item, rather than move.
	**/
	@:optional
	var pull : ts.AnyOf4<Bool, String, haxe.ds.ReadOnlyArray<String>, (to:Sortablejs, from:Sortablejs, dragEl:js.html.Element, event:SortableEvent) -> PullResult>;
	/**
		whether elements can be added from other lists, or an array of group names from which elements can be taken.
	**/
	@:optional
	var put : ts.AnyOf3<Bool, haxe.ds.ReadOnlyArray<String>, (to:Sortablejs, from:Sortablejs, dragEl:js.html.Element, event:SortableEvent) -> PutResult>;
	/**
		a canonical version of pull, created by Sortable
	**/
	@:optional
	dynamic function checkPull(sortable:Sortablejs, activeSortable:Sortablejs, dragEl:js.html.Element, event:SortableEvent):ts.AnyOf3<String, Bool, Array<String>>;
	/**
		a canonical version of put, created by Sortable
	**/
	@:optional
	dynamic function checkPut(sortable:Sortablejs, activeSortable:Sortablejs, dragEl:js.html.Element, event:SortableEvent):ts.AnyOf3<String, Bool, Array<String>>;
	/**
		revert cloned element to initial position after moving to a another list.
	**/
	@:optional
	var revertClone : Bool;
};