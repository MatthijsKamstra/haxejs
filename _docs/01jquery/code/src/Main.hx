package ;

import js.jquery.JQuery;
import js.Browser.*;

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
			trace ("JQuery example");

			// DOM Traversal and Manipulation
			new JQuery( "button.continue" ).html( "Next Step..." );

			// Event Handling
			var hiddenBox = new JQuery( "#banner-message" );
			new JQuery( "#button-container button" ).on( "click", function( event ) {
				console.log( "click" );
				hiddenBox.show();
			});

			// Ajax
			JQuery.ajax({
				url: "https://api.nasa.gov/planetary/earth/imagery",
				data: {
					lon : 100.75,
					lat : 1.5,
					date : "2014-02-01",
					cloud_score: "True",
					api_key : "DEMO_KEY"
				},
				success: function( data ) {
					new JQuery( "#nasa-container" ).html( "<img src='" + data.url + "' alt='test' >" );
				}
			});

			// https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=DEMO_KEY
		});

	}

    static public function main() : Void
    {
        var main = new Main();
	}
}