package;

import three.loaders.TextureLoader;
import three.materials.MeshBasicMaterial;
import three.objects.Mesh;
import three.geometries.BoxGeometry;
import three.renderers.WebGLRenderer;
import three.cameras.PerspectiveCamera;
import three.scenes.Scene;
import js.Browser.*;

class MainCrate {
	var camera:PerspectiveCamera;
	var scene:Scene;
	var renderer:WebGLRenderer;
	var mesh:Mesh;

	function new() {
		trace("Example");
		init();
		animate(0);
	}

	function init() {
		camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 400;
		scene = new Scene();
		var texture = new TextureLoader().load('crate.gif');
		// var geometry = new BoxBufferGeometry( 200, 200, 200 );
		var geometry = new BoxGeometry(200, 200, 200);
		var material = new MeshBasicMaterial({map: texture});
		mesh = new Mesh(geometry, material);
		scene.add(mesh);
		renderer = new WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);
		//
		window.addEventListener('resize', onWindowResize, false);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function animate(f:Float):Void {
		window.requestAnimationFrame(animate);
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.01;
		renderer.render(scene, camera);
	}

	static public function main() {
		var main = new MainCrate();
	}
}
