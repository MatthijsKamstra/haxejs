package ;

import jQuery.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{

	private var currentOffset:Int = 0;

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


					// new JQuery ("#nasa-container").append("<button class='back-in-time'>back</button>");
					// new JQuery (".back-in-time").click(onClickHandler);
				}
			});
		});
	}

	function onClickHandler(e)
	{
		trace('go back in time');
	}

	function randomDate():String
	{
		var date = Date.now();
		var year = date.getFullYear();
		var month = date.getMonth()+1; // start from zero
		var day = date.getDate();
		// return "1999-01-01";
		return year + "-" + StringTools.lpad (Std.string(month),"0",2) + "-" + StringTools.lpad (Std.string(day),"0",2);
	}

    static public function main() : Void
    {
        var main = new Main();
	}
}