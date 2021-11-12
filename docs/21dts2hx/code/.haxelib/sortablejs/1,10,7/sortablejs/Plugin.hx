package sortablejs;

/**
	A class that all plugins inherit from for the sake of type inference.
**/
@:jsRequire("sortablejs", "Plugin") extern class Plugin extends sortablejs.plugins.SortablePlugin {
	function new();
	static var prototype : Plugin;
}