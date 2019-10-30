# VanillaJS

Check the [code folder](https://github.com/MatthijsKamstra/haxejs/tree/master/03vanillajs/code) for more comments.

I have taken some of the examples for the <http://youmightnotneedjquery.com> and converted it to HaxeJS.
The fadeIn is just a rewrite... couldn't get it to work the way they did it.

_The code used in this example can be found [here](https://github.com/MatthijsKamstra/haxejs/tree/master/03vanillajs/code)._

## Request

<http://youmightnotneedjquery.com/#request>
How to get information of an server (in this case NASA)

**jQuery**

```js
$.ajax({
  type: "GET",
  url: "https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY",
  success: function(resp) {},
  error: function() {}
});
```

**vanillaJS**

(IE9+)

```haxe
// ajax call
var request = new js.html.XMLHttpRequest();
request.open('GET', 'https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY', true);

request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		// Success!
		var json = request.responseText;
		trace( "json: " + json );
	} else {
		// We reached our target server, but it returned an error
		trace("oeps: status: " + request.status + " // json: " + request.responseText);

	}
};

request.onerror = function() {
	// There was a connection error of some sort
	trace("error");
};

request.send();
```

## FadeIn

<http://youmightnotneedjquery.com/#fade_in>
This one is totally different from the code used on the website. I couldn't get it to work the way they desribed.

**jQuery**

```js
$(el).fadeIn();
```

**vanillaJS**
(IE9+)

```haxe
// somewhere in your code
fadeIn(el);

// fade
private function fadeIn(pElement:js.html.Element, ?pOpacity:Float )
{
	if(pOpacity == null){
		pOpacity = 0;
	} else {
		pOpacity += 0.1;
	}
	pElement.style.opacity = Std.string (pOpacity);
	if (pOpacity < 1) {
		haxe.Timer.delay(function () { this.fadeIn(pElement,pOpacity); },100);
	} else {
		trace( "Stop fadein"  );
	}
}
```

## Click

An example how to write it in plain JavaScript

**jQuery**

```js
$(".btnclass").click(function() {
  alert("this is a test");
});
```

**vanillaJS**

```haxe
var document = js.Browser.document;
var window = js.Browser.window;
var _btn = document.getElementsByClassName("btnclass")[0]; // select the first one
// onclick
_btn.addEventListener('click', function() {
	window.alert('this is a test');
}, false);
```
