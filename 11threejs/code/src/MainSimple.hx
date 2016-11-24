package;

import js.Browser;
import js.*;
import js.three.*;

import js.html.HtmlElement;

import js.three.EmbedMin;

import Math;

class Main
{
	var scene : Scene;
	var camera : PerspectiveCamera;
	var renderer : WebGLRenderer;
	var mesh : Mesh;
	var cube : Mesh;
	var controls : TrackballControls;

	var window = Browser.window;
	var document = Browser.document;

	function new()
	{
		trace("https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene");
		init();
		// animate(0);
		render();
	}

	function init() {
		scene = new Scene();
		camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		renderer = new WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		var geometry = new BoxGeometry( 1, 1, 1 );
		var material = new MeshBasicMaterial( { color: 0x00ff00 } );
		cube = new Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 5;
	}

	function render(?f:Float):Void {
		window.requestAnimationFrame( render );
		cube.rotation.x += 0.1;
		cube.rotation.y += 0.1;
		renderer.render( scene, camera );
	}

	function animate(f:Float):Void {
		window.requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
	}


	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}




	static public function main()
	{
		var main = new Main();
	}
}