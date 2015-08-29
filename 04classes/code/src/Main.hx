package ;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Example classes");


		// point class
		var _point = new Point(10,100);
		trace ("_point: " + _point);

		// circle and square
		var _circle:Circle = new Circle(); 
		trace("circle.area : " + _circle.area()); // output: 3.141592653589793 
		var _square:Square = new Square(); 
		trace("square.area : " + _square.area()); // output: 1

		// distance between two points
		
		var _pointA = new Point (100,200);
		var _pointB = new Point (1000,10);

		var distance:Float = utils.MathUtil.distance(_pointA,_pointB);
	 	trace('The distance is: ' + distance);

	}

    static public function main()
    {
        var main = new Main();
	}
}