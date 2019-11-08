package;

import three.materials.MeshBasicMaterial;
import three.objects.Mesh;
import three.geometries.BoxGeometry;
import three.renderers.WebGLRenderer;
import three.cameras.PerspectiveCamera;
import three.scenes.Scene;
import js.Browser.*;

class MainGen {
	public function new() {
		// ------------------------------------------------
		// BASIC SETUP
		// ------------------------------------------------

		// Create an empty scene
		var scene = new Scene();

		// Create a basic perspective camera
		var camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 2;

		// Create a renderer with Antialiasing
		var renderer = new WebGLRenderer({antialias: true});

		// Configure renderer clear color
		renderer.setClearColor("#2E2B40");

		// Configure renderer size
		renderer.setSize(window.innerWidth, window.innerHeight);

		// Append Renderer to DOM
		document.body.appendChild(renderer.domElement);

		// ------------------------------------------------
		// FUN STARTS HERE
		// ------------------------------------------------

		var geometry = new BoxGeometry(1, 1, 1);
		var material = new MeshBasicMaterial({color: "#433F81"});
		var cube01 = new Mesh(geometry, material);
		scene.add(cube01);

		var geometry = new BoxGeometry(3, 3, 3);
		var material = new MeshBasicMaterial({color: "#433F81", wireframe: true});
		var cube01_wireframe = new Mesh(geometry, material);
		scene.add(cube01_wireframe);

		var geometry = new BoxGeometry(1, 1, 1);
		var material = new MeshBasicMaterial({color: "#A49FEF"});
		var cube02 = new Mesh(geometry, material);
		scene.add(cube02);

		var geometry = new BoxGeometry(3, 3, 3);
		var material = new MeshBasicMaterial({color: "#A49FEF", wireframe: true});
		var cube02_wireframe = new Mesh(geometry, material);
		scene.add(cube02_wireframe);

		var geometry = new BoxGeometry(10, 0.05, 0.5);
		var material = new MeshBasicMaterial({color: "#00FFBC"});
		var bar01 = new Mesh(geometry, material);
		bar01.position.z = 0.5;
		scene.add(bar01);

		var geometry = new BoxGeometry(10, 0.05, 0.5);
		var material = new MeshBasicMaterial({color: "#ffffff"});
		var bar02 = new Mesh(geometry, material);
		bar02.position.z = 0.5;
		scene.add(bar02);

		// Render Loop
		var render = null;
		render = function(f:Float) {
			window.requestAnimationFrame(render);

			cube01.rotation.x += 0.01;
			cube01.rotation.y += 0.01;

			cube01_wireframe.rotation.x += 0.01;
			cube01_wireframe.rotation.y += 0.01;

			cube02.rotation.x -= 0.01;
			cube02.rotation.y -= 0.01;

			cube02_wireframe.rotation.x -= 0.01;
			cube02_wireframe.rotation.y -= 0.01;

			bar01.rotation.z -= 0.01;
			bar02.rotation.z += 0.01;

			// Render the scene
			renderer.render(scene, camera);
		};

		render(0);
	}

	static public function main() {
		var app = new MainGen();
	}
}
