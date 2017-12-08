package;

class Square extends Shape 
{ 
	private var side:Float = 1; 

	public function new():Void
	{
		super();
	}
	
	override public function area():Float 
	{ 
		return (side * side); 
	} 
} 
