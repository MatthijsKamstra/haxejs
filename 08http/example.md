#Example json

I have created the [user.json](https://github.com/MatthijsKamstra/haxejs/tree/master/08json/code/bin/assets/users.json) with <http://jsonplaceholder.typicode.com/users>.


Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/08json/code) for more comments.

In this example we are going to use VanillaJS and read and use a `.json` file.



## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- javascript.hxml
```



## The Main.hx

This example is getting to big to post here, so if you want to check out the complete file go and check out [Main.hx](https://github.com/MatthijsKamstra/haxejs/tree/master/08json/code/Main.hx) 

So the first part of this code is loading the `json` file. We use <http://api.haxe.org/haxe/Http.html> for that:

```
var req = new haxe.Http('assets/users.json');
req.onData = function (data : String)
{
	Browser.alert('data: $data');
}
req.onError = function (error)
{
	Browser.alert('error: $error');
}
req.request(true);
```

convert data (String) to a `json` file:
<http://api.haxe.org/haxe/Json.html>

```
	// Browser.alert('data: $data');
	_json = haxe.Json.parse(data);
```

And then it's possible to convert the `json` to usable input:

```
for (i in 0 ... _json.length)
{
	var _user = _json[i];
	trace ( "Name: " + _user.name );
}

```

To make that easier I use [`typedef`](http://haxe.org/manual/type-system-typedef.html)

We convert the json data to `User` so when we use a IDE it will use autocompletion

```
typedef User = 
{
	var id : Int; // 1
	var name : String; // Leanne Graham
	var username : String; // Bret
	var email : String; // Sincere@april.biz
	var address : {
	  	var street : String; // Kulas Light
	  	var suite : String; // Apt. 556
	  	var city : String; // Gwenborough
	  	var zipcode : String; // 92998-3874
	  	var geo : {
	    	var lat : String; // -37.3159
	    	var lng : String; // 81.1496
	      };
	};
	var phone : String; // 1-770-736-8031 x56442
	var website : String; // hildegard.org
	var company : {
	  	var name : String; // Romaguera-Crona
	  	var catchPhrase : String; // Multi-layered client-server neural-net
	  	var bs : String; // harness real-time e-markets
    };
}

```



## index.html

I have used a more extensive `index.html` in the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/08json/code), but you could work with this minimal version:

```
<html>
    <head>
        <title>Haxe JS - json example</title></head>
        <style type="text/css">
            .user {
                background-color: silver;
                margin: 10px;
                padding: 10px;
            }
        </style>
    </head>
<body>

    <!-- Your Haxe compiled script -->
    <script type="text/javascript" src="example.js"></script>

</body>
</html>

```

## Neko Web Server

We will use a not often mentioned feature from Haxe.

You can run a webserver : [Neko Web Server](http://old.haxe.org/doc/start/neko#using-the-neko-development-webserver-to-serve-http-requests-whose-contents-are-generated-by-haxe)

And the cool part is: **You don't have to install anything if you already have Haxe installed.**

You need the path to your files (so replace `path/to/files` with your own path)   
*example:* `path/to/files/haxejs/07pixi/code/bin/`

```
nekotools server -p 2000 -h localhost -d path/to/files
```

and open your browser to <http://localhost:2000>


## The Haxe build file, javascript.hxml

There are a lot of different arguments that you are able to pass to the Haxe compiler.
These arguments can also be placed into a text file of one per line with the extension hxml. This file can then be passed directly to the Haxe compiler as a build script.

```
# // javascript.hxml
-cp src
-main Main
-js bin/example.js
-dce full
```


## Build js with Haxe

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml` 
3. type `haxe javascript.hxml`
4. press enter


You could build everything directly in the terminal.

```
haxe -cp src -main Main -js bin/example.js -dce full
```

It will have the same result




Checkout this old try.haxe example:
<http://try.haxe.org/#bfAe8>

