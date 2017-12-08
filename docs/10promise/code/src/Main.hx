package ;

import js.Browser.*;
import js.Promise;
import js.html.XMLHttpRequest;
import js.Error;

class Main {

	// https://developers.google.com/web/fundamentals/getting-started/primers/promises

	public function new(){
		trace ("js.Promise NASA example");
		getDataNASA('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(function(response) {
			console.log("Success!", response);
		}).catchError(function(error) {
			console.error("Failed!", error);
		});
	}

	function getDataNASA(url) {
		// Return a new promise.
		return new Promise(function(resolve, reject) {
			// Do the usual XHR stuff
			var req = new XMLHttpRequest();
			req.open('GET', url);
			req.onload = function() {
				// This is called even on 404 etc
				// so check the status
				if (req.status == 200) {
					// Resolve the promise with the response text
					resolve(req.response);
				}
				else {
					// Otherwise reject with the status text
					// which will hopefully be a meaningful error
					reject(new Error(req.statusText));
				}
			};

			// Handle network errors
			req.onerror = function() {
				reject(new Error("Network Error"));
			};

			// Make the request
			req.send();
		});
	}

	static public function main() : Void
	{
		var main = new Main();
	}
}