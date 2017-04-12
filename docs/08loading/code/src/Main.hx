package ;

import js.Browser.*;

class Main
{
	public function new(){

		trace ("[Haxe] crossplatform loading data example");

		var url = "http://ip.jsontest.com/";
		var req = new haxe.Http(url);
		req.onData = function (data : String) {
			var result:IpAddress = haxe.Json.parse(data);
			trace('[Haxe] Your IP-address: ${result.ip}');
		};
		req.onError = function (error) {
			console.error('[Haxe] error: $error');
		};
		req.request();
	}

	static public function main() : Void {
		var main = new Main();
	}
}


typedef IpAddress = { ip:String }