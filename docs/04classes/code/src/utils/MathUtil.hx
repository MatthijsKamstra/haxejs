package utils;

class MathUtil 
{

	/**
	 * The Pythagorean theorem: 
	 * The sum of the areas of the two squares on the legs (a and b) equals the area of the square on the hypotenuse (c).
	 * source: http://en.wikipedia.org/wiki/Pythagorean_theorem
	 */

	/**
	 * @example   	var distance:Float = utils.MathUtil.distance(pointa,pointb);
	 *             	trace('The distance is: ', distance);
	 */
	public static function distance(pointA:Point, pointB:Point):Float
	{
		var dx:Float = pointA.x-pointB.x;
		var dy:Float = pointA.y-pointB.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

}
