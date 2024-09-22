import './style.css';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff, 50);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, .25);
scene.add(ambientLight);



const loader = new GLTFLoader();
loader.load('./FVDUMP.gltf', function (gltf) {
  
  scene.add(gltf.scene);
  console.log('Success');
  
}, undefined, function (error) {
  
  console.error(error);
  
});

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(10, 10, 0);
function animate() {
  requestAnimationFrame( animate );

  controls.update();
  
  renderer.render( scene, camera );
}

animate();