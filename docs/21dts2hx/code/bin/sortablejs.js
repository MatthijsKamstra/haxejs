(function ($global) { "use strict";
class Main {
	constructor() {
		console.log("src/Main.hx:5:","SortableJs");
		let el = window.document.getElementById("example1");
		let sortable = new Sortable(el,{ animation : 150, ghostClass : "bg-danger"});
	}
	static main() {
		let main = new Main();
	}
}
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
{
}
Main.main();
})({});
