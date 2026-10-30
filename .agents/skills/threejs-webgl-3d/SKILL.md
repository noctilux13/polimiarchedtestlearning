---
name: threejs-webgl-3d
description: >-
  Builds high-performance 3D scenes, WebGL shaders, camera rigs, lighting setups, and 3D interactive
  models using Three.js, React Three Fiber (R3F), and Drei. Activate when the user asks for 3D web
  experiences, WebGL graphics, 3D product showcases, interactive particles, or Three.js scenes.
---

# Three.js & WebGL 3D Development Skill

This skill provides production-ready guidelines and architectures for implementing interactive, high-performance 3D web experiences using **Three.js** and **React Three Fiber (R3F)**.

## Core Architectural Rules

1. **Clean Scene Lifecycle**:
   - Always handle resize events with `camera.aspect = width / height` and `camera.updateProjectionMatrix()`.
   - Implement `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to prevent performance bottlenecks on 4K/Retina screens.
   - Clean up geometries, materials, and textures (`dispose()`) when unmounting components to prevent WebGL memory leaks.

2. **Lighting & Shadows**:
   - Avoid excessive point lights (which trigger costly multi-pass shadow maps).
   - Use `DirectionalLight` with optimized shadow maps (`shadow.mapSize.width = 1024`, `shadow.bias = -0.0001`) or HDRI Environment Maps (`RGBELoader` / `@react-three/drei` `<Environment />`).
   - Use `MeshPhysicalMaterial` or `MeshStandardMaterial` with `roughness` and `metalness` for photorealistic PBR rendering.

3. **Performance Best Practices**:
   - Use `InstancedMesh` for rendering thousands of identical objects (particles, grid tiles, trees).
   - Prefer GLTF / GLB formats with Draco or KTX2 texture compression.
   - Keep draw calls under 100 and polygon counts reasonable for web viewing (< 100k triangles for real-time mobile).

---

## Quick Reference Snippet (Three.js Vanilla Scene)

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
document.getElementById('canvas-container').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
}
animate();
```

For advanced R3F patterns, shaders, glassmorphism, and model loaders, see:
- [Three.js & R3F Patterns](./references/threejs_patterns.md)
