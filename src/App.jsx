import * as THREE from 'three';

import { useEffect, useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function MyThree() {
  const refContainer = useRef(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    const manager = new THREE.LoadingManager();
    manager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };

    manager.onLoad = function () {
      console.log('Loading complete!');
    };

    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };

    manager.onError = function (url) {
      console.log('There was an error loading ' + url);
    };

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    const pointLight = new THREE.PointLight(0xffffff, 50);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, .25);
    scene.add(ambientLight);


    const loader = new GLTFLoader( manager );
    loader.load('./FVDUMP.gltf', function (gltf) {

      scene.add(gltf.scene);

    }, undefined, function (error) {

      console.error(error);

    });

    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.y = 25;
    camera.rotation.x = 4.75;

    var animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (

    <div ref={refContainer}></div>

  );
}

export default MyThree