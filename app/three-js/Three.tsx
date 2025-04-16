"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import { error } from "console";
import { or } from "three/tsl";

function Three() {
  const refContainer = useRef<HTMLDivElement | null>(null);

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

    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // Testing out loaders and model importing (models were gotten from Sketchfab)
    // Had to modify resource path in gltf files
    const loader = new GLTFLoader();
    loader.load(
      "models\\smol_ame_in_an_upcycled_terrarium_hololiveen\\scene.gltf",
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    camera.position.z = 5;

    const orbitControls = new OrbitControls(camera, renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (refContainer.current) {
        refContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={refContainer}></div>;
}

export default Three;
