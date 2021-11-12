// @:jsRequire("sortablejs")
@:native('Sortable')
extern class Sortablejs {
	/**
		Sortable's main constructor.
	**/
	function new(element:js.html.Element, options:sortablejs.Options);

	public var options:sortablejs.Options;
	public var el:js.html.Element;

	/**
		Options getter/setter
	**/
	@:overload(function<K>(name:K):Dynamic {})
	function option<K>(name:K, value:Dynamic):Void;

	/**
		For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
	**/
	function closest(element:js.html.Element, ?selector:String):Null<js.html.Element>;

	/**
		Sorts the elements according to the array.
	**/
	function sort(order:haxe.ds.ReadOnlyArray<String>):Void;

	/**
		Saving and restoring of the sort.
	**/
	function save():Void;

	/**
		Removes the sortable functionality completely.
	**/
	function destroy():Void;

	/**
		Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
	**/
	function toArray():Array<String>;

	static var prototype:Sortablejs;
	static var active:Null<Sortablejs>;
	static var utils:sortablejs.Utils;

	/**
		Mounts a plugin to Sortable
	**/
	static function mount(sortablePlugins:haxe.extern.Rest<sortablejs.plugins.SortablePlugin>):Void;

	/**
		Creation of new instances.
	**/
	static function create(element:js.html.Element, ?options:sortablejs.Options):Sortablejs;

	/**
		The element being dragged.
	**/
	static var dragged:Null<js.html.Element>;

	/**
		The ghost element.
	**/
	static var ghost:Null<js.html.Element>;

	/**
		The clone element.
	**/
	static var clone:Null<js.html.Element>;

	/**
		Get the Sortable instance on an element.
	**/
	static function get(element:js.html.Element):Null<Sortablejs>;

	/**
		Get the Sortable version
	**/
	static final version:String;
}
