// Generated by Haxe 4.0.0+ef18b627e
(function ($global) { "use strict";
var MainGenSimple = function() {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
	camera.position.z = 4;
	var renderer = new THREE.WebGLRenderer({ antialias : true});
	renderer.setClearColor("#000000");
	renderer.setSize(window.innerWidth,window.innerHeight);
	window.document.body.appendChild(renderer.domElement);
	var geometry = new THREE.BoxGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial({ color : "#433F81"});
	var cube = new THREE.Mesh(geometry,material);
	scene.add(cube);
	var render = null;
	render = function(f) {
		window.requestAnimationFrame(render);
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		renderer.render(scene,camera);
	};
	render(0);
};
MainGenSimple.main = function() {
	var app = new MainGenSimple();
};
MainGenSimple.main();
})({});

//# sourceMappingURL=main_gen_simple.js.map