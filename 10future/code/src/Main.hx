package ;

import js.Browser;

import sys.FileSystem;
import sys.io.File;

using tink.CoreApi;

class Main {


	public function new()
	{
		trace ("tink.future example");
		TxtLoaders.loadAll(['existing.txt', 'non-existing.txt']).handle(function(outcome) trace(outcome));
	}

	public function load(url:String):Surprise<String, String>
	{
		var f = Future.trigger();
		if (FileSystem.exists(url))
			f.trigger(Success( File.getContent(url)))
		else
			f.trigger(Failure('Can\'t find $url'));

		return f.asFuture();
	}

	public function loadAll(urls:Array<String>): Future<Array<Outcome<String, String>>> {
		return [ for (url in urls) load(url) ];
	}

	static public function main() : Void
	{
		var main = new Main();
	}
}