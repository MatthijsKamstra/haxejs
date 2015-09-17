#About loading a json 

A very common way of loading data in your web-app is the use of `json` files.

Haxe can handle [json](http://api.haxe.org/haxe/Json.html) crossplatform 

> Crossplatform JSON API : it will automatically use the optimized native API if available. Use -D haxeJSON to force usage of the Haxe implementation even if a native API is found : this will provide extra encoding features such as enums (replaced by their index) and StringMaps.


## Test localhost

When you load an example locally (when you test your files on your computer instead of a server) you will get an error message:

```
.... from origin 'file://' has been blocked from loading by Cross-Origin Resource Sharing policy: Received an invalid response. Origin 'null' is therefore not allowed access.

```

To fix that you should open your files via localhost.
There are many ways to do it, but I will use the Haxe solution `Nekoserver`.


## Neko Web Server

We will use a not often mentioned feature from Haxe.

You can run a webserver : [Neko Web Server](http://old.haxe.org/doc/start/neko#using-the-neko-development-webserver-to-serve-http-requests-whose-contents-are-generated-by-haxe)


And the cool part is:
**You don't have to install anything if you already have Haxe installed.**


```
Neko Web Server v1.0 - (c)2006-2013 Haxe Foundation
	Options :
		-p <port> : change server port
		-h <host> : change server host
		-d <dir> : change the server base directory
		-log <file> : set log file
		-rewrite : activate pseudo mod-rewrite for smart urls
```


You need the path to your files (so replace `path/to/files` with your own path)   
*example:* `path/to/files/haxejs/07pixi/code/bin/`

```
nekotools server -p 2000 -h localhost -d path/to/files
```

and open your browser to <http://localhost:2000>


You can also start the webserver with it's defaults (port:2000, host:localhost) 

```
nekotools server
```

But then you have to visit the configure-page the server by going to <http://localhost:2000/server:config>

(or open your terminal in the correct folder)

----

Read more about Neko tools:

* <http://blog.presidentbeef.com/neko_tutorial/tools.html#nekotools>
* <http://old.haxe.org/doc/start/neko>
