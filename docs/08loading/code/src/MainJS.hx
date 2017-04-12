package ;

import js.Browser.*;
import js.html.XMLHttpRequest;
import js.Error;

class MainJS
{
	public function new() {

		trace ("[JS] loading data example");

		var url = "http://ip.jsontest.com/";
		var req = new XMLHttpRequest();
		req.open('GET', url);
		req.onload = function() {
			var result:IpAddress = haxe.Json.parse(req.response);
			trace('[JS] Your IP-address: ${result.ip}');
		};
		req.onerror = function(error) {
			console.error('[JS] error: $error');
		};
		req.send();
	}

	static public function main() : Void {
		var main = new MainJS();
	}
}


typedef IpAddress = { ip:String }