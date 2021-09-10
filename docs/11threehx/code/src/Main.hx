import js.Browser.document;
import js.Browser.window;
import js.html.CanvasElement;
import three.Lib;
import three.cameras.PerspectiveCamera;
import three.geometries.BoxGeometry;
import three.helpers.PointLightHelper;
import three.lights.PointLight;
import three.math.Color;
import three.materials.MeshBasicMaterial;
import three.materials.MeshPhongMaterial;
import three.objects.Group;
import three.objects.Mesh;
import three.renderers.Renderer;
import three.renderers.WebGLRenderer;
import three.scenes.Scene;

class Main {
	static var canvas:CanvasElement;
	static var renderer:Renderer;
	static var scene:Scene;
	static var camera:PerspectiveCamera;
	static var mesh:Group;

	static function update(?time:Float) {
		window.requestAnimationFrame(update);

		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;
		mesh.rotation.z += 0.03;

		renderer.render(scene, camera);
	}

	static function handleWindowResize(e) {
		var w = window.innerWidth;
		var h = window.innerHeight;
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
		renderer.setSize(w, h);
	}

	static function main() {
		window.onload = function() {
			canvas = document.createCanvasElement();
			document.body.appendChild(canvas);

			renderer = new WebGLRenderer({antialias: true, canvas: canvas});
			renderer.setSize(window.innerWidth, window.innerHeight);

			scene = new Scene();

			camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 10000);
			camera.position.set(0, 100, 300);
			camera.lookAt(scene.position);
			scene.add(camera);

			var light1 = new PointLight(0x0000ff, 2);
			light1.position.set(100, 30, 100);
			scene.add(light1);
			scene.add(new PointLightHelper(light1, 10));

			var light2 = new PointLight(0xff0000, 2);
			light2.position.set(-100, 30, 100);
			scene.add(light2);
			scene.add(new PointLightHelper(light2, 10));

			var geometry = new BoxGeometry(50, 50, 50, 1, 1, 1);
			var materials = [
				new MeshPhongMaterial({color: new Color(0x000000), shininess: 100}),
				new MeshBasicMaterial({color: new Color(0xffffff), wireframe: true})
			];

			mesh = new Group();
			for (m in materials)
				mesh.add(new Mesh(geometry, m));
			scene.add(mesh);

			window.addEventListener('resize', handleWindowResize, false);
			window.requestAnimationFrame(update);
		}
	}
}
