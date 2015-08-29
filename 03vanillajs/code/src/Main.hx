package ;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	private var _doc = js.Browser.document;
	private var _win = js.Browser.window;


	function new()
	{
		trace("Example VanillaJS");


		_doc.addEventListener("DOMContentLoaded", function(event) { 
			trace("VanillaJs DOM ready");
			
			// fade element 
			var div : js.html.Element = _doc.getElementById("container-1");
			div.style.opacity = Std.string (0.5);

			// ajax call
			var request = new js.html.XMLHttpRequest();
			request.open('GET', 'https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY', true);

			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					// Success!
					var json = request.responseText;
					trace( "json: " + json );
				} else {
					// We reached our target server, but it returned an error
					trace("oeps: status: " + request.status + " // json: " + request.responseText);

				}
			};

			request.onerror = function() {
				// There was a connection error of some sort
				trace("error");
			};

			request.send();
			
			
			// show and hide
			var _el = _doc.getElementsByClassName("image-container")[0];
			var _btnShow = _doc.getElementById("fade-in");
			var _btnHide = _doc.getElementById("fade-out");

			fadeIn(_el);

			// onclick
			_btnShow.addEventListener('click', function() {
				fadeIn(_el);
			}, false);

			_btnHide.addEventListener('click', function() {
				fadeOut(_el);
			}, false);

		});
	}

	
	private function fadeIn(pElement:js.html.Element, ?pOpacity:Float ) 
	{
		if(pOpacity == null){
			pOpacity = 0;
		} else {
			pOpacity += 0.1;
		}
		pElement.style.opacity = Std.string (pOpacity);
		if (pOpacity < 1) {
			haxe.Timer.delay(function () { this.fadeIn(pElement,pOpacity); },100);
		} else {
			trace( "Stop fadein"  );
		}
	}

	private function fadeOut(pElement:js.html.Element, ?pOpacity:Float ) 
	{
		if(pOpacity == null){
			pOpacity = 1;
		} else {
			pOpacity -= 0.1;
		}
		pElement.style.opacity = Std.string (pOpacity);
		if (pOpacity > 0) {
			haxe.Timer.delay(function () { this.fadeOut(pElement,pOpacity); },100);
		} else {
			trace( "Stop fadeOut"  );
		}
	}


    static public function main()
    {
        var main = new Main();
	}
}