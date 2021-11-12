import js.Browser.*;

class Main {
	function new() {
		trace("SortableJs");
		var el = document.getElementById('example1');
		var sortable = new Sortablejs(el, {
			animation: 150,
			ghostClass: 'bg-danger'
		});
	}

	static public function main() {
		var main = new Main();
	}
}
