package ;

import promhx.*;
import promhx.Promise;

class Main {


	public function new()
	{
		trace ("promhx example");

		 var p = new promhx.Promise<Int>();
        var expected = 7;
        var actual = 0;
        // var async = Assert.createAsync(function(){
        //     Assert.equals(expected, actual);
        // });

        p.then(function(a){
            return 1;
        }).catchError(function(e){
            actual += 3;
        });


        p.reject(2);

        p.then(function(a){
            return 1;
        }).catchError(function(e){
            actual += 4;
            // async();
        });
	}

	static public function main() : Void
	{
		var main = new Main();
	}
}

class Message {
    public var content(default, null) : String;
    public function new(content : String){
        this.content = content;
    }
}