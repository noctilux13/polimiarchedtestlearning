# Three.js & React Three Fiber (R3F) Recipes

## 1. React Three Fiber (R3F) Floating Glass / Frosted Mesh

```tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GlassShape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.6}
          roughness={0.15}
          transmission={0.98}
          ior={1.4}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#09090b' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <GlassShape />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
```

---

## 2. GLTF / GLB Model Loading with Suspense

```tsx
import React, { Suspense } from 'react';
import { useGLTF, Center } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} scale={1.5} />
    </Center>
  );
}

useGLTF.preload('/models/product.glb');
```

---

## 3. Interactive Floating Particles Background (Vanilla Three.js)

```javascript
const particleCount = 1500;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i += 3) {
  positions[i] = (Math.random() - 0.5) * 20;
  positions[i + 1] = (Math.random() - 0.5) * 20;
  positions[i + 2] = (Math.random() - 0.5) * 20;

  colors[i] = 0.8 + Math.random() * 0.2;
  colors[i + 1] = 0.8 + Math.random() * 0.2;
  colors[i + 2] = 1.0;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: 0.04,
  vertexColors: true,
  transparent: true,
  opacity: 0.75,
  blending: THREE.AdditiveBlending,
});

const particleSystem = new THREE.Points(geometry, material);
scene.add(particleSystem);
```
