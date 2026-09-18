import React, { useRef, useEffect, useState, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { AppContext } from '../context/AppContext';
import { geoRegions } from '../data/geoArtData';
import GestureCameraHUD from '../components/GestureCameraHUD';
import { ArtworkImage } from '../components/ArtworkImage';
import { getAssetUrl } from '../utils/assetUrl';
import {
  Globe as GlobeIcon,
  ArrowLeft,
  Landmark,
  Palette,
  MapPin,
  ExternalLink,
  Layers
} from 'lucide-react';

// Math helper: Lat/Lng to 3D Cartesian coordinates on sphere
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Procedural Canvas Texture for Minimalist Sci-Fi Earth Globe (Restrained, Elegant, Non-Flashy)
function createEarthTexture(isDark) {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Deep dark slate obsidian ocean
  ctx.fillStyle = isDark ? '#0a0f18' : '#1e293b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle longitude & latitude hairline grid
  ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(148, 163, 184, 0.15)';
  ctx.lineWidth = 1;

  // Parallels
  for (let lat = -80; lat <= 80; lat += 20) {
    const y = ((90 - lat) / 180) * canvas.height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Meridians
  for (let lng = -180; lng <= 180; lng += 30) {
    const x = ((lng + 180) / 360) * canvas.width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Refined dark titanium slate continents
  ctx.fillStyle = isDark ? 'rgba(28, 42, 62, 0.95)' : 'rgba(51, 65, 85, 0.95)';
  ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(148, 163, 184, 0.4)';
  ctx.lineWidth = 1.8;

  const landmasses = [
    // Europe & Mediterranean
    { x: 1040, y: 220, w: 230, h: 180 },
    // Eurasia / Central Asia
    { x: 1210, y: 210, w: 420, h: 240 },
    // Africa
    { x: 1020, y: 410, w: 270, h: 330 },
    // North America
    { x: 290, y: 210, w: 400, h: 280 },
    // South America
    { x: 540, y: 530, w: 220, h: 350 },
    // Australia
    { x: 1640, y: 620, w: 220, h: 190 },
    // East Asia & Japan
    { x: 1470, y: 280, w: 180, h: 160 }
  ];

  landmasses.forEach(land => {
    ctx.beginPath();
    ctx.roundRect(land.x, land.y, land.w, land.h, 35);
    ctx.fill();
    ctx.stroke();
  });

  return new THREE.CanvasTexture(canvas);
}

export default function GlobalExplorer() {
  const { isDark } = useContext(AppContext);

  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const globeRef = useRef(null);
  const pinsGroupRef = useRef(null);
  const pinMeshesRef = useRef([]);

  const [selectedRegion, setSelectedRegion] = useState(geoRegions[0]);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [visibleCityLabels, setVisibleCityLabels] = useState([]);

  // Keep references to state so Three.js render loop and callbacks don't trigger unmounts
  const selectedRegionRef = useRef(selectedRegion);
  useEffect(() => {
    selectedRegionRef.current = selectedRegion;
  }, [selectedRegion]);

  const hoveredRegionRef = useRef(hoveredRegion);
  useEffect(() => {
    hoveredRegionRef.current = hoveredRegion;
  }, [hoveredRegion]);

  // Orbital Controls State with Momentum & Inertia
  const controlsRef = useRef({
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    prevMouseX: 0,
    prevMouseY: 0,
    velocityX: 0,
    velocityY: 0,
    lastMoveTime: 0,
    targetTheta: 1.2,
    targetPhi: 1.3,
    currentTheta: 1.2,
    currentPhi: 1.3,
    targetDist: 5.4,
    currentDist: 5.4,
    autoRotate: true,
    lastInteractionTime: Date.now()
  });

  // Smoothly Focus Camera onto a Region with 100% Exact Mathematical Centering
  const focusRegion = useCallback((region) => {
    if (!region) return;
    setSelectedRegion(region);

    // Exact spherical vector from origin to region pin
    const P = latLngToVector3(region.lat, region.lng, 1.0);
    const targetPhi = Math.acos(Math.max(-0.999, Math.min(0.999, P.y)));
    const targetTheta = Math.atan2(P.x, P.z);

    const c = controlsRef.current;
    // Shortest angular travel path around the globe
    const currentMod = c.currentTheta % (Math.PI * 2);
    let diff = (targetTheta - currentMod) % (Math.PI * 2);
    if (diff > Math.PI) diff -= Math.PI * 2;
    if (diff < -Math.PI) diff += Math.PI * 2;

    c.targetTheta = c.currentTheta + diff;
    c.targetPhi = Math.max(0.18, Math.min(Math.PI - 0.18, targetPhi));
    c.targetDist = 4.4; // Optimal close-up view distance
    c.velocityX = 0;
    c.velocityY = 0;
    c.autoRotate = false;
    c.lastInteractionTime = Date.now();
  }, []);

  const focusRegionRef = useRef(focusRegion);
  useEffect(() => {
    focusRegionRef.current = focusRegion;
  }, [focusRegion]);

  // Stable Gesture Action Dispatcher (No re-mount triggers)
  const handleGestureAction = useCallback((action) => {
    if (action.type === 'no_hand') {
      setHoveredRegion(null);
      return;
    }

    const c = controlsRef.current;
    c.autoRotate = false;
    c.lastInteractionTime = Date.now();

    if (action.type === 'rotate') {
      const dir = action.direction === 'left' ? -1 : 1;
      const speed = (action.speed || 1.2) * 0.016;
      c.targetTheta += dir * speed;
      c.velocityX = dir * speed * 0.35;
    } else if (action.type === 'swipe') {
      const impulse = (action.direction === 'left' ? -0.45 : 0.45) * Math.min(action.velocity / 7, 1.8);
      c.targetTheta += impulse;
    } else if (action.type === 'zoom') {
      c.targetDist = Math.max(3.3, Math.min(7.8, c.targetDist + action.delta * 2.0));
    } else if (action.type === 'open_palm') {
      let closest = null;
      let minAngle = Infinity;
      const camera = cameraRef.current;
      if (camera && pinsGroupRef.current) {
        const camDir = new THREE.Vector3();
        camera.getWorldDirection(camDir).negate();

        geoRegions.forEach(reg => {
          const pinPos = latLngToVector3(reg.lat, reg.lng, 2.4).normalize();
          const angle = camDir.angleTo(pinPos);
          if (angle < minAngle) {
            minAngle = angle;
            closest = reg;
          }
        });

        if (closest && minAngle < 0.9) {
          setHoveredRegion(closest);
        }
      }
    } else if (action.type === 'fist') {
      const currentHov = hoveredRegionRef.current;
      const currentSel = selectedRegionRef.current;
      if (currentHov) {
        focusRegionRef.current?.(currentHov);
      } else if (currentSel) {
        focusRegionRef.current?.(currentSel);
      }
    } else if (action.type === 'fist_again') {
      const sidebarBody = document.querySelector('.explorer-sidebar-body');
      if (sidebarBody) {
        sidebarBody.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  // Three.js WebGL Scene Initialization (ONLY RUNS ONCE ON MOUNT / THEME CHANGE)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.4);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.2 : 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Clean, Restrained Sci-Fi Multi-Source Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.5 : 1.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isDark ? 2.4 : 2.0);
    dirLight1.position.set(6, 8, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7dd3fc, 1.2);
    dirLight2.position.set(-7, -2, -5);
    scene.add(dirLight2);

    const hemiLight = new THREE.HemisphereLight(0xbae6fd, 0x1e293b, 1.0);
    scene.add(hemiLight);

    // 5. High-Resolution Globe Sphere (Smooth 96x96 Mesh)
    const globeRadius = 2.4;
    const globeGeo = new THREE.SphereGeometry(globeRadius, 96, 96);

    // Start with procedural canvas texture for zero-latency initial rendering
    const proceduralTexture = createEarthTexture(isDark);
    const globeMat = new THREE.MeshStandardMaterial({
      map: proceduralTexture,
      roughness: 0.45,
      metalness: 0.15,
      emissive: new THREE.Color(isDark ? 0x0f1e33 : 0x0a1525),
      emissiveIntensity: isDark ? 0.3 : 0.1
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globeMesh);
    globeRef.current = globeMesh;

    // Asynchronously load the generated Minimalist Sci-Fi Earth Texture
    const textureLoader = new THREE.TextureLoader();

    // 1. Sci-Fi Texture (Clean dark slate/charcoal continents, obsidian oceans, subtle cyan grid)
    textureLoader.load(
      getAssetUrl('textures/earth-scifi.jpg'),
      (scifiTex) => {
        scifiTex.wrapS = THREE.RepeatWrapping;
        scifiTex.wrapT = THREE.ClampToEdgeWrapping;
        globeMat.map = scifiTex;
        globeMat.needsUpdate = true;
      },
      undefined,
      () => {
        // Graceful fallback to earth-dark if needed
        textureLoader.load(getAssetUrl('textures/earth-dark.jpg'), (fallbackTex) => {
          globeMat.map = fallbackTex;
          globeMat.needsUpdate = true;
        });
      }
    );

    // 2. Specular Water Reflections Map
    textureLoader.load(
      getAssetUrl('textures/earth_specular_2048.jpg'),
      (specTex) => {
        specTex.wrapS = THREE.RepeatWrapping;
        specTex.wrapT = THREE.ClampToEdgeWrapping;
        globeMat.roughnessMap = specTex;
        globeMat.needsUpdate = true;
      }
    );

    // 5b. Point Matrix Layer (Cybernetic Glowing Points on Globe Surface)
    const pointsGeo = new THREE.BufferGeometry();
    const matrixCoords = [];
    const matrixRadius = globeRadius * 1.008;

    for (let lat = -80; lat <= 80; lat += 4) {
      const phi = (90 - lat) * (Math.PI / 180);
      const circumf = Math.cos(lat * (Math.PI / 180));
      const stepLng = circumf > 0.1 ? Math.max(4, Math.floor(6 / circumf)) : 30;
      for (let lng = -180; lng < 180; lng += stepLng) {
        const theta = (lng + 180) * (Math.PI / 180);
        const x = -(matrixRadius * Math.sin(phi) * Math.cos(theta));
        const z = matrixRadius * Math.sin(phi) * Math.sin(theta);
        const y = matrixRadius * Math.cos(phi);
        matrixCoords.push(x, y, z);
      }
    }

    pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(matrixCoords, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: 0.022,
      color: isDark ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: isDark ? 0.55 : 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const pointMatrixMesh = new THREE.Points(pointsGeo, pointsMat);
    globeMesh.add(pointMatrixMesh);

    // 5c. Atmosphere Rim Mesh (Fresnel rim glow)
    const atmoGeo = new THREE.SphereGeometry(globeRadius * 1.026, 64, 64);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x93c5fd,
      transparent: true,
      opacity: isDark ? 0.18 : 0.10,
      side: THREE.BackSide
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    scene.add(atmoMesh);

    // 5d. Deep Space Starfield
    const starsGeo = new THREE.BufferGeometry();
    const starCoords = [];
    for (let i = 0; i < 800; i++) {
      const r = 35 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starCoords.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    }
    starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starCoords, 3));
    const starsMat = new THREE.PointsMaterial({
      size: 0.04,
      color: isDark ? 0x94a3b8 : 0xcbd5e1,
      transparent: true,
      opacity: isDark ? 0.5 : 0.3
    });
    const starsMesh = new THREE.Points(starsGeo, starsMat);
    scene.add(starsMesh);

    // 6. Flat Planar Geographic Region Pins (Clean Modern Tangential Reticles)
    const pinsGroup = new THREE.Group();
    scene.add(pinsGroup);
    pinsGroupRef.current = pinsGroup;
    pinMeshesRef.current = [];

    const flatCircleGeo = new THREE.CircleGeometry(0.038, 24);
    const flatRingGeo = new THREE.RingGeometry(0.048, 0.076, 32);

    geoRegions.forEach((region) => {
      const pos = latLngToVector3(region.lat, region.lng, globeRadius);

      const pinRoot = new THREE.Group();
      pinRoot.position.copy(pos.clone().multiplyScalar(1.002));
      pinRoot.lookAt(pos.clone().multiplyScalar(2)); // Tangent to sphere surface

      // Planar solid disc
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide
      });
      const coreMesh = new THREE.Mesh(flatCircleGeo, coreMat);
      coreMesh.userData = { region };
      pinRoot.add(coreMesh);

      // Planar pulse ring
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide
      });
      const ringMesh = new THREE.Mesh(flatRingGeo, ringMat);
      pinRoot.add(ringMesh);

      pinsGroup.add(pinRoot);
      pinMeshesRef.current.push({ root: pinRoot, dot: coreMesh, ring: ringMesh, region, pos });
    });

    // 7. Raycasting & Optimized Drag Interaction with Inertia & Pointer Capture
    const raycaster = new THREE.Raycaster();
    const mousePos = new THREE.Vector2();

    const handlePointerDown = (e) => {
      try { container.setPointerCapture?.(e.pointerId); } catch {}
      const c = controlsRef.current;
      c.isDragging = true;
      c.dragStartX = e.clientX;
      c.dragStartY = e.clientY;
      c.prevMouseX = e.clientX;
      c.prevMouseY = e.clientY;
      c.velocityX = 0;
      c.velocityY = 0;
      c.lastMoveTime = performance.now();
      c.autoRotate = false;
      c.lastInteractionTime = Date.now();
    };

    const handlePointerMove = (e) => {
      const c = controlsRef.current;
      if (c.isDragging) {
        const now = performance.now();
        const dt = Math.max(1, now - c.lastMoveTime);
        const deltaX = e.clientX - c.prevMouseX;
        const deltaY = e.clientY - c.prevMouseY;

        // Adaptive sensitivity scaled by camera distance for fine close-up control
        const sensitivity = 0.0042 * (c.currentDist / 5.4);
        c.targetTheta += deltaX * sensitivity;
        c.targetPhi = Math.max(0.18, Math.min(Math.PI - 0.18, c.targetPhi - deltaY * sensitivity));

        // Velocity tracking for inertia throw
        c.velocityX = (deltaX * sensitivity) / (dt / 16);
        c.velocityY = (-deltaY * sensitivity) / (dt / 16);

        c.prevMouseX = e.clientX;
        c.prevMouseY = e.clientY;
        c.lastMoveTime = now;
      }

      // Check pin hover
      const rect = container.getBoundingClientRect();
      mousePos.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mousePos.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mousePos, camera);

      const dots = pinMeshesRef.current.map(p => p.dot);
      const intersects = raycaster.intersectObjects(dots);
      if (intersects.length > 0) {
        const hitRegion = intersects[0].object.userData.region;
        setHoveredRegion(hitRegion);
        container.style.cursor = 'pointer';
      } else {
        setHoveredRegion(null);
        container.style.cursor = c.isDragging ? 'grabbing' : 'grab';
      }
    };

    const handlePointerUp = (e) => {
      const c = controlsRef.current;
      if (c.isDragging) {
        c.isDragging = false;
        try { container.releasePointerCapture?.(e.pointerId); } catch {}

        // Distinguish drag from click: small travel distance = click
        const distMoved = Math.hypot(e.clientX - c.dragStartX, e.clientY - c.dragStartY);
        if (distMoved < 6) {
          const rect = container.getBoundingClientRect();
          mousePos.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          mousePos.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(mousePos, camera);

          const dots = pinMeshesRef.current.map(p => p.dot);
          const intersects = raycaster.intersectObjects(dots);
          if (intersects.length > 0) {
            const hitRegion = intersects[0].object.userData.region;
            focusRegionRef.current?.(hitRegion);
          }
        }
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const c = controlsRef.current;
      c.targetDist = Math.max(3.3, Math.min(7.8, c.targetDist + e.deltaY * 0.0035));
      c.autoRotate = false;
      c.lastInteractionTime = Date.now();
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animId;
    let clock = new THREE.Clock();
    let lastLabelSync = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const c = controlsRef.current;
      const now = performance.now();

      // Resume auto-rotation after 6s of inactivity
      if (!c.isDragging && Date.now() - c.lastInteractionTime > 6000) {
        c.targetTheta -= 0.001;
      }

      // Smooth inertia throw decay on release
      if (!c.isDragging) {
        c.targetTheta += c.velocityX;
        c.targetPhi = Math.max(0.18, Math.min(Math.PI - 0.18, c.targetPhi + c.velocityY));
        c.velocityX *= 0.92;
        c.velocityY *= 0.92;
        if (Math.abs(c.velocityX) < 0.0001) c.velocityX = 0;
        if (Math.abs(c.velocityY) < 0.0001) c.velocityY = 0;
      }

      // Spherical Damping Interpolation
      c.currentTheta += (c.targetTheta - c.currentTheta) * 0.08;
      c.currentPhi += (c.targetPhi - c.currentPhi) * 0.08;
      c.currentDist += (c.targetDist - c.currentDist) * 0.08;

      // Update camera position from spherical coordinates
      const cx = c.currentDist * Math.sin(c.currentPhi) * Math.sin(c.currentTheta);
      const cy = c.currentDist * Math.cos(c.currentPhi);
      const cz = c.currentDist * Math.sin(c.currentPhi) * Math.cos(c.currentTheta);
      camera.position.set(cx, cy, cz);
      camera.lookAt(0, 0, 0);

      // Pulse wave ring animation on planar pins (Reads from refs for zero-overhead performance)
      const currentSelected = selectedRegionRef.current;
      const currentHovered = hoveredRegionRef.current;

      pinMeshesRef.current.forEach(({ ring, region }) => {
        const isSel = currentSelected?.id === region.id;
        const isHov = currentHovered?.id === region.id;
        const baseScale = isSel ? 1.6 : isHov ? 1.3 : 1.0;
        const wave = 1 + 0.35 * Math.sin(elapsed * 4 + region.lat);
        ring.scale.set(baseScale * wave, baseScale * wave, 1);
        ring.material.opacity = isSel ? 0.95 : isHov ? 0.85 : 0.55;
      });

      // City Names Zoom LOD & Backside Culling Calculation (throttled ~30fps)
      if (now - lastLabelSync > 32) {
        lastLabelSync = now;
        const w = container.clientWidth;
        const h = container.clientHeight;
        const dist = c.currentDist;

        // Labels appear when zoomed in (dist <= 5.4), dissolve when zoomed out
        const zoomOpacity = Math.max(0, Math.min(1, (5.5 - dist) / 1.3));

        if (zoomOpacity <= 0.02) {
          setVisibleCityLabels([]);
        } else {
          const camPos = camera.position.clone();
          const nextLabels = [];

          pinMeshesRef.current.forEach(({ region, pos }) => {
            const normal = pos.clone().normalize();
            const camDir = camPos.clone().normalize();
            const dot = normal.dot(camDir);

            // Front-facing hemisphere test
            if (dot > 0.12) {
              const screenPos = pos.clone().project(camera);
              const sx = ((screenPos.x + 1) / 2) * w;
              const sy = ((-screenPos.y + 1) / 2) * h;
              const edgeFade = Math.min(1, Math.max(0, (dot - 0.12) / 0.25));
              const finalOpacity = zoomOpacity * edgeFade;

              nextLabels.push({
                id: region.id,
                nameZh: region.nameZh,
                nameEn: region.nameEn,
                x: Math.round(sx),
                y: Math.round(sy),
                opacity: Number(finalOpacity.toFixed(2)),
                region
              });
            }
          });

          setVisibleCityLabels(nextLabels);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);

      // WebGL Memory Cleanup
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      globeGeo.dispose();
      globeMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      starsGeo.dispose();
      starsMat.dispose();
      flatCircleGeo.dispose();
      flatRingGeo.dispose();
      renderer.dispose();
    };
  }, [isDark]); // DEPENDS ONLY ON THEME, NEVER DESTROYS CANVAS ON HOVER/SELECTION

  return (
    <div className="global-explorer-page">
      {/* Top Header & Navigation Breadcrumb */}
      <div className="global-explorer-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            to="/"
            className="btn btn-outline"
            style={{ borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontSize: '0.82rem' }}
          >
            <ArrowLeft size={14} />
            <span>返回全景总览</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
              <GlobeIcon size={12} />
              <span>3D 全球探索</span>
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>·</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              21 个世界艺术与建筑重镇 · 135+ 件代表地标
            </span>
          </div>
        </div>

        {/* Region Fast Jump Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', maxWidth: '640px', padding: '2px 0' }}>
          {geoRegions.slice(0, 7).map(reg => (
            <button
              key={reg.id}
              type="button"
              className="btn btn-outline"
              onClick={() => focusRegion(reg)}
              style={{
                borderRadius: 'var(--radius-pill)',
                padding: '4px 11px',
                fontSize: '0.74rem',
                backgroundColor: selectedRegion?.id === reg.id ? 'var(--accent-blue-subtle)' : undefined,
                borderColor: selectedRegion?.id === reg.id ? 'var(--accent-blue)' : undefined,
                color: selectedRegion?.id === reg.id ? 'var(--accent-blue)' : undefined,
                whiteSpace: 'nowrap'
              }}
            >
              {reg.nameZh} ({reg.artworksCount})
            </button>
          ))}
        </div>
      </div>

      {/* Split-Screen: Left = 3D Globe Studio, Right = Dedicated Region Inspector */}
      <div className="global-explorer-split">
        {/* Left Column: 3D Globe Viewport */}
        <div className="explorer-globe-col">
          {/* Mount Three.js WebGL Canvas */}
          <div ref={mountRef} style={{ width: '100%', height: '100%', outline: 'none' }} />

          {/* Floating City Badges (Zoom LOD & Front-Facing Culling) */}
          {visibleCityLabels.map((lbl) => (
            <div
              key={lbl.id}
              className="globe-city-badge"
              style={{
                left: `${lbl.x + 10}px`,
                top: `${lbl.y - 12}px`,
                opacity: lbl.opacity,
                pointerEvents: lbl.opacity > 0.4 ? 'auto' : 'none'
              }}
              onClick={() => focusRegion(lbl.region)}
              onMouseEnter={() => setHoveredRegion(lbl.region)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <div className="globe-city-badge-inner">
                <span className="globe-city-dot" />
                <span className="globe-city-title">{lbl.nameZh}</span>
                <span className="globe-city-sub">{lbl.nameEn}</span>
              </div>
            </div>
          ))}

          {/* Subtle Top HUD Overlay */}
          <div className="globe-hud-top">
            <div className="globe-pill">
              <MapPin size={14} style={{ color: 'var(--accent-blue)' }} />
              <span>当前选定：<strong>{selectedRegion.nameZh}</strong> ({selectedRegion.countryZh})</span>
              <span style={{ color: 'var(--text-tertiary)' }}>·</span>
              <span style={{ fontSize: '0.76rem', color: 'var(--accent-sage)', fontWeight: 650 }}>{selectedRegion.artworksCount} 件核心展品</span>
            </div>

            <div className="globe-pill" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
              <span>🖱️ 鼠标拖拽/滚轮 · 📷 隔空单动作 (☝️单指向左 · ✌️双指向右 · 🤟放大 · 🤏缩小 · ✊握拳)</span>
            </div>
          </div>

          {/* Floating AI Camera Hand Gesture Recognizer HUD */}
          <GestureCameraHUD
            onGestureAction={handleGestureAction}
            isRegionSelected={Boolean(selectedRegion)}
            selectedRegion={selectedRegion}
          />
        </div>

        {/* Right Column: Dedicated Region Inspector Sidebar (No popup covering globe!) */}
        <div className="explorer-sidebar-col">
          <div className="explorer-sidebar-header">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
                <MapPin size={11} /> {selectedRegion.countryZh} · {selectedRegion.nameZh}
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                {selectedRegion.nameEn}
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0.15rem 0 0.15rem 0', color: 'var(--text-primary)', fontWeight: 650 }}>
              {selectedRegion.nameZh} 代表艺术与建筑
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.55', margin: 0 }}>
              {selectedRegion.summaryZh}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '0.2rem' }}>
              <span className="chip chip-outline" style={{ fontSize: '0.7rem' }}>
                <Layers size={10} />
                <span>{selectedRegion.artworksCount} 件代表地标</span>
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                点击卡片研读高清图像与考点解析
              </span>
            </div>
          </div>

          {/* Scrollable Masterworks List */}
          <div className="explorer-sidebar-body">
            {selectedRegion.artworks.map((item) => (
              <div key={item.id} className="inspector-artwork-card">
                {/* Artwork Image Frame */}
                <div className="image-box" style={{ height: '145px', borderRadius: '8px', overflow: 'hidden' }}>
                  <ArtworkImage artworkId={item.id} alt={item.title} fit="cover" />
                </div>

                {/* Info Header */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span className={item.category === 'architecture' ? 'chip chip-green' : 'chip chip-blue'} style={{ fontSize: '0.68rem', padding: '2px 7px' }}>
                      {item.category === 'architecture' ? <Landmark size={10} /> : <Palette size={10} />}
                      {item.movementName}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      {item.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '0.98rem', fontFamily: 'var(--font-serif)', fontWeight: 600, margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                    {item.titleZh || item.title}
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.45rem' }}>
                    {item.artistEnglishName || item.artistName}
                  </div>

                  {item.knowledgePoints?.[0] && (
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-subtle)', padding: '5px 8px', borderRadius: '6px', lineHeight: '1.45', marginBottom: '0.65rem' }}>
                      💡 {item.knowledgePoints[0]}
                    </div>
                  )}
                </div>

                {/* Direct Link CTA */}
                <Link
                  to={`/artwork/${item.movementId}/${item.artistId}/${item.id}`}
                  className="btn btn-outline"
                  style={{ width: '100%', fontSize: '0.76rem', padding: '6px 10px', borderRadius: 'var(--radius-pill)', justifyContent: 'center' }}
                >
                  <span>研读考点详情</span>
                  <ExternalLink size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
