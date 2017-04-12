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

		scene.add(camera);

		renderer = new WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		// var geometry = new BoxGeometry( 1, 1, 1 );
		// var material = new MeshBasicMaterial( { color: 0x00ff00 } );
		// cube = new Mesh( geometry, material );
		// scene.add( cube );

		var geometry = new SphereGeometry(50,16,16);
		var material = new MeshLambertMaterial({color: 0xCC0000});


		var sphere = new Mesh( geometry, material);
		scene.add(sphere);


		camera.position.z = 300;

		// create a point light
		var pointLight = new PointLight(0xFFFFFF);

		// set its position
		pointLight.position.x = 10;
		pointLight.position.y = 50;
		pointLight.position.z = 130;

		// add to the scene
		scene.add(pointLight);

	}

	function render(?f:Float):Void {
		window.requestAnimationFrame( render );
		// cube.rotation.x += 0.01;
		// cube.rotation.y += 0.01;
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