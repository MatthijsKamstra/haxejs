package ;

import haxe.Http;
using tink.CoreApi;

class Main {



	public function new(){
// https://try.haxe.org/#D1173

        var future = Future.async(function(cb) {
            var req = new Http('https://try.haxe.org');
        	req.onData = cb;
            req.onError = function(e) trace(e);
            req.request();
        });

        future.handle(function(o) trace(o));

	}
	static public function main() : Void
	{
		var main = new Main();
	}
}