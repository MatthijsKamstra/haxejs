(function ($global) { "use strict";
class Main {
	constructor() {
		console.log("src/Main.hx:3:","Hello world");
	}
	static main() {
		new Main();
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

//# sourceMappingURL=_.js.map