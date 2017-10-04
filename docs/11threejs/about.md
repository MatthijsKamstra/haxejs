# About



# Tips and tricks


Install via haxelib

	haxelib install threejs

and then add `-lib threejs` in the hxml.


Start off with the import of the default Browser stuff and everthing three.js related packages

```
import js.Browser.*;
import js.three.*;
```

this will make copy & paste examples much easier!


Remove js path `THREE`, in Haxe we have the default way of import (see other tip)

```
var scene = new THREE.Scene();
```

will become

```
var scene = new Scene();
```


The render / animation loop will not work in Haxe.
I have no idea why... so I leave that for some one else to explain.
Probably scoping issues.

```
var render = function () {
	// Your animated code goes here
};
```

Just declair the var first:

```
var render = null;
render = function () {
	// Your animated code goes here
};
```

Once you fixed that, you will run into the next fix:

```
var render = null;
render = function () {
	requestAnimationFrame( render );
	// Your animated code goes here
};
```

Javascript is cool like that... Haxe is more strickt!
Not a problem if you know where `requestAnimationFrame` is "located": https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

Just point it to the window

```
var render = null;
render = function () {
	window.requestAnimationFrame( render );
	// Your animated code goes here
};
```

And yet again you are not done

```
// Render Loop
var render = null;
render = function (f:Float) {
	window.requestAnimationFrame( render );
	// Your animated code goes here
};
```

So a typical render loop will start (copy paste) as:


```js
// Render Loop
var render = function () {
  requestAnimationFrame( render );
  // Your animated code goes here

  // Render the scene
  renderer.render(scene, camera);
};
render();
```

will end up in Haxe as

```haxe
// Render Loop
var render = null;
render = function (f:Float) {
	window.requestAnimationFrame( render );
	// Your animated code goes here

	// Render the scene
	renderer.render(scene, camera);
};
render(0);
```

Sometimes you want to change position/rotation/scale via console
I have a little hack for that:

```haxe
// ...
var cube = new Mesh( geometry, material );
untyped window.cube = cube;
```


https://github.com/mrdoob/three.js/blob/dev/examples/webgl_geometry_cube.html
http://threejs.org/examples/#webgl_geometry_cube

http://threejs.org/examples/#webgl_geometry_extrude_shapes2

http://threejs.org



https://lib.haxe.org/p/threejs/