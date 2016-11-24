package ;

import js.Node;
import js.node.Http;
import js.node.http.ServerResponse;
import js.node.http.IncomingMessage;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Node.js Hello World Example");
		
		Http.createServer(function (request:IncomingMessage, response:ServerResponse):Void {
			response.writeHead(200, {'Content-Type': 'text/html'});
			
			#if debug
			response.write('<script src="http://0.0.0.0:35729/livereload.js" type="text/javascript"></script>'); 
			#end

			response.end('<b>Hello World</b><br>' + Date.now() ); 
		}).listen(8080);

		trace('Server started: ');
		trace('open http://localhost:8080');
		trace('Close Node with CTRL + C');		
	}

	static public function main()
	{
		var main = new Main();   
	}
}