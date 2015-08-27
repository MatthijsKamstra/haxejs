package ;

import jQuery.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		//when document is ready
		new JQuery(function():Void 
		{ 
			//your magic
			trace ("jQuery example");

			// DOM Traversal and Manipulation
			new JQuery( "button.continue" ).html( "Next Step..." );

			// Event Handling
			var hiddenBox = new JQuery( "#banner-message" );
			new JQuery( "#button-container button" ).on( "click", function( event ) {
				trace( "click: " );
				hiddenBox.show();
			});

			// Ajax
			// example will not run locally, it will need https

		});
	}

    static public function main() : Void
    {
        var main = new Main();
	}
}