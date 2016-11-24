package ;

import js.Browser;

class Main 
{

	private var _json : Dynamic;
	private var _doc = js.Browser.document;
	private var _win = js.Browser.window;

	public function new() 
	{
		trace ("json example");

		var req = new haxe.Http('assets/users.json');
		req.onData = function (data : String)
		{
			_json = haxe.Json.parse(data);
			trace ("number of users: " + _json.length);
			createList();
		}
		req.onError = function (error)
		{
			Browser.alert('error: $error');
		}
		req.request(true);

	}

	private function createList():Void
	{
		for (i in 0 ... _json.length)
		{
			var _user : User = _json[i];
			var _txt = "";
			_txt += "Name: " + _user.name + "<br>";
			_txt += "Email: <a href='mailto:" + _user.email + "'>"+_user.email+"</a><br>";
			_txt += "Phone: " + _user.phone + "<br>";


			var _div = _doc.createDivElement();
			_div.className = "user";
			_div.innerHTML = _txt;
			_doc.body.appendChild(_div);
		}
	}


	static public function main() : Void
	{
		var main = new Main();
	}
}


typedef User = 
{
	var id : Int; // 1,
	var name : String;//Leanne Graham",
	var username : String;//Bret",
	var email : String;//Sincere@april.biz",
	var address : {
	  	var street : String;//Kulas Light",
	  	var suite : String;//Apt. 556",
	  	var city : String;//Gwenborough",
	  	var zipcode : String;//92998-3874",
	  	var geo : {
	    	var lat : String;//-37.3159",
	    	var lng : String;//81.1496"
	      };
	};
	var phone : String;//1-770-736-8031 x56442",
	var website : String;//hildegard.org",
	var company : {
	  	var name : String;//Romaguera-Crona",
	  	var catchPhrase : String;//Multi-layered client-server neural-net",
	  	var bs : String;//harness real-time e-markets"
    };
}