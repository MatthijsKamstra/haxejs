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
			trace ("NASA images");


			// Ajax
			JQuery._static.ajax({
				url: "https://api.nasa.gov/planetary/apod",
				data: {
					date : randomDate(),
					concept_tags: "True",
					api_key : "DEMO_KEY"
				},
				success: function( data ) {
					trace ("data.url : " + data.url );
					trace ("data.media_type : " + data.media_type);
					trace ("data.explanation : " + data.explanation);
					trace ("data.concepts : " + data.concepts);
					trace ("data.title : " + data.title);


					new JQuery( "#nasa-container" ).html( "<h2>"+data.title+"</h2><img src='" + data.url + "' alt='"+data.title+"' class='img-responsive center-block' ><p>"+data.explanation+"</p>" );
				}
			});
		});
	}

	function randomDate():String
	{

		// return "1999-01-01";
		return "2014-11-11";
	}

    static public function main() : Void
    {
        var main = new Main();
	}
}