package ;

// if you want to use the vanilla js version, you don't need to import jQuery
import jQuery.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("DOM Example");

		//when document is ready
		new JQuery( function():Void { 
            trace( "Jquery DOM ready (easy way)");
            new JQuery(".container").append("<p>Jquery DOM ready (easy way)</p>");
        });
		
		new JQuery(js.Browser.document).ready ( function (){
			trace( "Jquery DOM ready (somewhat simular to original jQuery way)");
			new JQuery(".container").append("<p>Jquery DOM ready (somewhat simular to original jQuery way)</p>");
		});

		var document = js.Browser.document;
		document.addEventListener("DOMContentLoaded", function(event) { 
			trace("VanillaJs DOM ready");
			
			var p = document.createParagraphElement();
			p.innerText = 'VanillaJs DOM ready';

			document.querySelector(".container").appendChild(p);
		});


	}

    static public function main()
    {
        var main = new Main();
	}
}