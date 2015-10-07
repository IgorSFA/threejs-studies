$(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(0x000);
	renderer.setSize(window.innerWidth, window.innerHeight);

	var axis = new THREE.AxisHelper(10);
	scene.add(axis);

	var cubeGeo = new THREE.BoxGeometry(5,5,5);
	var cubeMat = new THREE.MeshBasicMaterial({color: 0xddd, wireframe:true});
	var cube = new THREE.Mesh(cubeGeo, cubeMat);

	cube.position.x = 0;
	cube.position.y = 0;
	cube.position.z = 0;

	scene.add(cube);

	camera.position.x = 40;
	camera.position.y = 40;
	camera.position.z = 40;

	camera.lookAt(scene.position);

	$("#main").append(renderer.domElement);
	renderer.render(scene, camera);
});