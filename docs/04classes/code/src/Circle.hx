package;

class Circle extends Shape 
{ 
	private var radius:Float = 1; 

	public function new():Void
	{
		super();	
	}

	override public function area():Float 
	{ 
		return (Math.PI * (radius * radius)); 
	} 
} 
