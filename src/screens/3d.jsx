import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const MyThree = ({scrollPosition}) => {
    const refContainer = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / (window.innerHeight),
            0.1,
            1000
        );


        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, (window.innerHeight));
        refContainer.current.appendChild(renderer.domElement);
        //const controls = new OrbitControls(camera, renderer.domElement);
        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;
            camera.position.z = t * -0.01 - 3;
            console.log(i);
        }

        window.addEventListener("scroll", moveCamera);

        const pointLight = new THREE.PointLight(0xffffff, 50);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);


        const loader = new GLTFLoader();
        loader.load("./models/LLL.gltf", function (gltf) {
            scene.add(gltf.scene);
        });

        camera.position.set(0.14, 2.237098333534017, -3);
        camera.rotation.set(0.019253660622957067, 0,0);
        camera.position.setY(2);
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            camera.rotation.y += 0.001;
        };
        animate();

        return () => {
            // Cleanup on component unmount
            refContainer.current.removeChild(renderer.domElement);
        };
    }, []);

    useEffect(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollPosition / maxScroll;

        console.log(scrollProgress);
    }, [scrollPosition]);

    return <div className=" h-screen w-screen bg-black" ref={refContainer} />;
};


export default MyThree;
