import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


//Create a scene
const scene = new THREE.Scene();

//Create Camera
const camera = new THREE.PerspectiveCamera(
    75, //Field of view 
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, //Near point
    1000); //Far Point

camera.position.z = 12;

//Create a renderer and configure
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//Create Objects of the scene
const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const geometryTwo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const materialTwo = new THREE.MeshNormalMaterial( { color: 0xff0000});
const cube = new THREE.Mesh( geometryTwo, materialTwo );
scene.add( cube );
cube.position.x = -4;

let radius = 4;
// const rateOfChangeOfRadius = 0.01
let angle = Math.PI;
const angularSpeed = 0.04;

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0); // point to orbit around
controls.update()

const grid = new THREE.GridHelper(10, 10);
scene.add(grid);


function animate() {
    angle += angularSpeed;
    // if (radius > 0) {
    //     radius -= rateOfChangeOfRadius;
    // }
    cube.position.x = radius * Math.cos(angle);
    cube.position.y = radius * Math.sin( angle );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}