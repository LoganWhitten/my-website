import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const MyThree = () => {
    const refContainer = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        refContainer.current.appendChild(renderer.domElement);
        const controls = new OrbitControls(camera, renderer.domElement);

        const pointLight = new THREE.PointLight(0xffffff, 50);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        loader.load("./models/FVDUMP.gltf", function (gltf) {
            scene.add(gltf.scene);
        });

        camera.position.y = 25;
        camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            // Cleanup on component unmount
            refContainer.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={refContainer} />;
};

export default MyThree;
