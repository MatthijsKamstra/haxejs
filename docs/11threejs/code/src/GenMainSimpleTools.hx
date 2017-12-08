package;

import js.Browser.*;
import js.three.*;

import dat.gui.*;

class GenMainSimpleTools {

	// https://medium.com/@necsoft/three-js-101-hello-world-part-1-443207b1ebe1

	// tools
	var stats : Dynamic;
	var controls : Dynamic;
	var mesh : Mesh;

	public function new () {

		controls = {
			size:1,
			color: "#00FFBC"
		}

		tools();

		// ------------------------------------------------
		// BASIC SETUP
		// ------------------------------------------------

		// Create an empty scene
		var scene = new Scene();

		// Create a basic perspective camera
		var camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		camera.position.z = 4;

		// Create a renderer with Antialiasing
		var renderer = new WebGLRenderer({antialias:true});

		// Configure renderer clear color
		// renderer.setClearColor("#000000");

		// Configure renderer size
		renderer.setSize( window.innerWidth, window.innerHeight );

		// Append Renderer to DOM
		document.body.appendChild( renderer.domElement );

		// ------------------------------------------------
		// FUN STARTS HERE
		// ------------------------------------------------

		// Create a Mesh with basic material
		var geometry = new OctahedronGeometry( controls.size, 0 );
		var material = new MeshBasicMaterial( { color: controls.color } );
		mesh = new Mesh( geometry, material );

		// Add mesh to Scene
		scene.add( mesh );

		// Render Loop
		var render = null;
		render = function (f:Float) {

			stats.begin();

			window.requestAnimationFrame( render );

			mesh.rotation.x += 0.01;
			mesh.rotation.y += 0.01;

			// Render the scene
			renderer.render(scene, camera);

			stats.end();

		};

		render(0);


		// var controls = new THREE.OrbitControls( camera, renderer.domElement );
		var controls = new OrbitControls( camera, renderer.domElement );

		window.onresize = function(){
			console.log("Window size: "+window.innerWidth+"x"+window.innerHeight+"px");
			renderer.setSize(window.innerWidth,window.innerHeight);
			var aspectRatio = window.innerWidth/window.innerHeight;
			camera.aspect = aspectRatio;
			camera.updateProjectionMatrix();
		}

		// untyped window.cube = cube;
	}



	function tools (){
		// https://github.com/mrdoob/stats.js/
		stats = untyped __js__ ('new Stats();');
		stats.showPanel( 0 );
		document.body.appendChild( stats.dom );

		// http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
		var gui = new dat.gui.GUI();
		var gui = untyped __js__  ('new dat.GUI()');
		var c_mesh_size = gui.add(controls, 'size', 0,2);
		var c_mesh_color = gui.addColor(controls, 'color', 0,100);

		c_mesh_size.onChange(function(){
			mesh.geometry = new OctahedronGeometry(controls.size, 0);
		});

		c_mesh_color.onChange(function(){
			mesh.material = new MeshBasicMaterial( { color: controls.color } );
		});

		// orbit

		// resize



	}

	static public function main () {
		var app = new GenMainSimpleTools ();
	}
}