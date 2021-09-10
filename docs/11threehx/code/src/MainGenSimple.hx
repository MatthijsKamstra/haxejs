package;

import three.materials.MeshBasicMaterial;
import three.objects.Mesh;
import three.geometries.BoxGeometry;
import three.renderers.WebGLRenderer;
import three.cameras.PerspectiveCamera;
import three.scenes.Scene;
import js.Browser.*;

class MainGenSimple {
	// https://medium.com/@necsoft/three-js-101-hello-world-part-1-443207b1ebe1
	public function new() {
		// ------------------------------------------------
		// BASIC SETUP
		// ------------------------------------------------

		// Create an empty scene
		var scene = new Scene();

		// Create a basic perspective camera
		var camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 4;

		// Create a renderer with Antialiasing
		var renderer = new WebGLRenderer({antialias: true});

		// Configure renderer clear color
		renderer.setClearColor("#000000");

		// Configure renderer size
		renderer.setSize(window.innerWidth, window.innerHeight);

		// Append Renderer to DOM
		document.body.appendChild(renderer.domElement);

		// ------------------------------------------------
		// FUN STARTS HERE
		// ------------------------------------------------

		// Create a Cube Mesh with basic material
		var geometry = new BoxGeometry(1, 1, 1);
		var material = new MeshBasicMaterial({color: "#433F81"});
		var cube = new Mesh(geometry, material);

		// Add cube to Scene
		scene.add(cube);

		// Render Loop
		var render = null;
		render = function(f:Float) {
			window.requestAnimationFrame(render);

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			// Render the scene
			renderer.render(scene, camera);
		};

		render(0);

		// untyped window.cube = cube;
	}

	static public function main() {
		var app = new MainGenSimple();
	}
}
