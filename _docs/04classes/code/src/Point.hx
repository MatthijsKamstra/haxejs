package;

class Point 
{
	public var x : Int;
	public var y : Int;

	public function new(x,y) {
		this.x = x;
		this.y = y;
	}
	public function toString() {
		return "Point("+x+","+y+")";
	}
}