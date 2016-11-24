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
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.end('Hello World\n' + Date.now() );
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