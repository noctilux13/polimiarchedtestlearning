import React, { useRef, useEffect, useState, useContext, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { geoRegions } from '../data/geoArtData';
import GestureCameraHUD from '../components/GestureCameraHUD';
import { ArtworkImage } from '../components/ArtworkImage';
import {
  Globe as GlobeIcon,
  ArrowLeft,
  Hand,
  Compass,
  Landmark,
  Palette,
  X,
  ChevronRight,
  Sparkles,
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

// Procedural Canvas Texture for High-Performance Earth Globe
function createEarthTexture(isDark) {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Background ocean
  ctx.fillStyle = isDark ? '#0c1320' : '#e2e8f0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Lat / Long Grid lines
  ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(71, 85, 105, 0.14)';
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

  // Continents approximate silhouette styling
  ctx.fillStyle = isDark ? 'rgba(30, 48, 75, 0.85)' : 'rgba(255, 255, 255, 0.85)';
  ctx.strokeStyle = isDark ? 'rgba(96, 165, 250, 0.45)' : 'rgba(100, 116, 139, 0.4)';
  ctx.lineWidth = 2;

  // Major continental landmass clusters
  const landmasses = [
    // Europe & Mediterranean
    { x: 1050, y: 250, w: 220, h: 180 },
    // Eurasia / Central Asia
    { x: 1200, y: 240, w: 400, h: 220 },
    // Africa
    { x: 1030, y: 440, w: 260, h: 320 },
    // North America
    { x: 300, y: 240, w: 380, h: 260 },
    // South America
    { x: 550, y: 550, w: 200, h: 330 },
    // Australia
    { x: 1650, y: 640, w: 200, h: 180 }
  ];

  landmasses.forEach(land => {
    ctx.beginPath();
    ctx.roundRect(land.x, land.y, land.w, land.h, 40);
    ctx.fill();
    ctx.stroke();
  });

  return new THREE.CanvasTexture(canvas);
}

export default function GlobalExplorer() {
  const { t, isDark } = useContext(AppContext);
  const navigate = useNavigate();

  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const globeRef = useRef(null);
  const pinsGroupRef = useRef(null);
  const pinMeshesRef = useRef([]);

  const [selectedRegion, setSelectedRegion] = useState(geoRegions[0]);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Orbital Controls State
  const controlsRef = useRef({
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0,
    targetTheta: 1.2,
    targetPhi: 1.3,
    currentTheta: 1.2,
    currentPhi: 1.3,
    targetDist: 5.4,
    currentDist: 5.4,
    autoRotate: true,
    lastInteractionTime: Date.now()
  });

  // Smoothly Focus Camera onto a Region
  const focusRegion = useCallback((region) => {
    if (!region) return;
    setSelectedRegion(region);

    // Convert region Lat/Lng into target spherical coordinates
    const targetTheta = -(region.lng + 90) * (Math.PI / 180);
    const targetPhi = (90 - region.lat) * (Math.PI / 180);

    const c = controlsRef.current;
    c.targetTheta = targetTheta;
    c.targetPhi = Math.max(0.2, Math.min(Math.PI - 0.2, targetPhi));
    c.targetDist = 4.3; // Close-up view
    c.autoRotate = false;
    c.lastInteractionTime = Date.now();
  }, []);

  // Gesture Action Dispatcher
  const handleGestureAction = useCallback((action) => {
    const c = controlsRef.current;
    c.autoRotate = false;
    c.lastInteractionTime = Date.now();

    if (action.type === 'swipe') {
      const impulse = (action.direction === 'left' ? -0.45 : 0.45) * Math.min(action.velocity / 7, 1.8);
      c.targetTheta += impulse;
    } else if (action.type === 'zoom') {
      c.targetDist = Math.max(3.3, Math.min(7.8, c.targetDist + action.delta * 2.8));
    } else if (action.type === 'open_palm') {
      // Find region closest to central line of sight
      let closest = null;
      let minAngle = Infinity;
      const camera = cameraRef.current;
      if (camera && pinsGroupRef.current) {
        const camDir = new THREE.Vector3();
        camera.getWorldDirection(camDir).negate(); // Vector from globe center towards camera

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
      // Lock and select current region
      if (hoveredRegion) {
        focusRegion(hoveredRegion);
      } else if (selectedRegion) {
        focusRegion(selectedRegion);
      }
    } else if (action.type === 'fist_again') {
      // Second fist: Open showcase drawer!
      setIsDrawerOpen(true);
    }
  }, [focusRegion, hoveredRegion, selectedRegion]);

  // Three.js WebGL Scene Initialization
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
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(isDark ? 0xbedbfe : 0xffffff, isDark ? 0.9 : 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isDark ? 1.6 : 1.4);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(isDark ? 0x38bdf8 : 0x94a3b8, 0.6);
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    // 5. Globe Sphere
    const globeRadius = 2.4;
    const globeGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthTexture = createEarthTexture(isDark);
    const globeMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.7,
      metalness: 0.15
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globeMesh);
    globeRef.current = globeMesh;

    // Atmosphere Rim Mesh
    const atmoGeo = new THREE.SphereGeometry(globeRadius * 1.025, 48, 48);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x93c5fd,
      transparent: true,
      opacity: isDark ? 0.12 : 0.08,
      side: THREE.BackSide
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    scene.add(atmoMesh);

    // 6. Geographic Region Pins
    const pinsGroup = new THREE.Group();
    scene.add(pinsGroup);
    pinsGroupRef.current = pinsGroup;
    pinMeshesRef.current = [];

    geoRegions.forEach((region) => {
      const pos = latLngToVector3(region.lat, region.lng, globeRadius);

      const pinRoot = new THREE.Group();
      pinRoot.position.copy(pos);
      pinRoot.lookAt(new THREE.Vector3(0, 0, 0)); // Orient perpendicular to sphere

      // Pin core sphere
      const dotGeo = new THREE.SphereGeometry(0.042, 16, 16);
      const dotMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.6,
        roughness: 0.2
      });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.userData = { region };
      pinRoot.add(dotMesh);

      // Pin vertical laser beam
      const beamGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.22, 8);
      const beamMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 });
      const beamMesh = new THREE.Mesh(beamGeo, beamMat);
      beamMesh.position.z = -0.11;
      beamMesh.rotation.x = Math.PI / 2;
      pinRoot.add(beamMesh);

      // Pulse Wave Ring
      const ringGeo = new THREE.RingGeometry(0.045, 0.085, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      pinRoot.add(ringMesh);

      pinsGroup.add(pinRoot);
      pinMeshesRef.current.push({ root: pinRoot, dot: dotMesh, ring: ringMesh, region });
    });

    // 7. Raycasting for Pin Click Selection
    const raycaster = new THREE.Raycaster();
    const mousePos = new THREE.Vector2();

    const handlePointerDown = (e) => {
      controlsRef.current.isDragging = true;
      controlsRef.current.prevMouseX = e.clientX;
      controlsRef.current.prevMouseY = e.clientY;
      controlsRef.current.autoRotate = false;
      controlsRef.current.lastInteractionTime = Date.now();
    };

    const handlePointerMove = (e) => {
      const c = controlsRef.current;
      if (c.isDragging) {
        const deltaX = e.clientX - c.prevMouseX;
        const deltaY = e.clientY - c.prevMouseY;
        c.targetTheta += deltaX * 0.0055;
        c.targetPhi = Math.max(0.15, Math.min(Math.PI - 0.15, c.targetPhi - deltaY * 0.0055));
        c.prevMouseX = e.clientX;
        c.prevMouseY = e.clientY;
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
      c.isDragging = false;

      // Detect click without drag
      const rect = container.getBoundingClientRect();
      mousePos.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mousePos.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mousePos, camera);

      const dots = pinMeshesRef.current.map(p => p.dot);
      const intersects = raycaster.intersectObjects(dots);
      if (intersects.length > 0) {
        const hitRegion = intersects[0].object.userData.region;
        focusRegion(hitRegion);
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const c = controlsRef.current;
      c.targetDist = Math.max(3.2, Math.min(8.2, c.targetDist + e.deltaY * 0.0035));
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

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const c = controlsRef.current;

      // Resume auto-rotation after 6s of inactivity
      if (!c.isDragging && Date.now() - c.lastInteractionTime > 6000) {
        c.targetTheta -= 0.001;
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

      // Pulse wave ring animation on pins
      pinMeshesRef.current.forEach(({ ring, region }) => {
        const isSel = selectedRegion?.id === region.id;
        const isHov = hoveredRegion?.id === region.id;
        const baseScale = isSel ? 1.6 : isHov ? 1.3 : 1.0;
        const wave = 1 + 0.35 * Math.sin(elapsed * 4 + region.lat);
        ring.scale.set(baseScale * wave, baseScale * wave, 1);
        ring.material.opacity = isSel ? 0.9 : 0.45;
      });

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
      atmoGeo.dispose();
      atmoMat.dispose();
      renderer.dispose();
    };
  }, [focusRegion, hoveredRegion, isDark, selectedRegion]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: 'calc(100vh - 80px)', padding: '0.8rem 1.2rem 3rem 1.2rem' }}>
      {/* Top Header & Navigation Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem', flexWrap: 'wrap', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            to="/"
            className="btn btn-outline"
            style={{ borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontSize: '0.82rem' }}
          >
            <ArrowLeft size={14} />
            <span>返回全景总览</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
              <GlobeIcon size={12} />
              <span>3D 全球探索</span>
            </span>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)' }}>·</span>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              21 个世界艺术与建筑重镇 · 135+ 件代表地标
            </span>
          </div>
        </div>

        {/* Region Fast Jump Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', maxWidth: '600px', padding: '2px 0' }}>
          {geoRegions.slice(0, 6).map(reg => (
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

      {/* Main 3D Globe Viewport Container */}
      <div className="globe-viewport-container">
        {/* Mount Three.js WebGL Canvas */}
        <div ref={mountRef} style={{ width: '100%', height: '100%', outline: 'none' }} />

        {/* HUD Overlay: Current Focused Region Pill & Gesture Status */}
        <div className="globe-hud-top">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="globe-pill">
              <MapPin size={15} style={{ color: 'var(--accent-blue)' }} />
              <span>当前选定：<strong>{selectedRegion.nameZh}</strong> ({selectedRegion.countryZh})</span>
              <span style={{ color: 'var(--text-tertiary)' }}>·</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-sage)', fontWeight: 650 }}>{selectedRegion.artworksCount} 件核心展品</span>
            </div>

            {/* View Works Button */}
            <motion.button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsDrawerOpen(true)}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                borderRadius: 'var(--radius-pill)',
                padding: '7px 18px',
                fontSize: '0.82rem',
                boxShadow: 'var(--shadow-card)',
                width: 'fit-content'
              }}
            >
              <Layers size={13} />
              <span>展开此地区作品档案 (或再次握拳)</span>
              <ChevronRight size={13} />
            </motion.button>
          </div>

          {/* Interaction Instruction Badge */}
          <div className="globe-pill" style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
            <span>🖱️ 拖拽旋转 / 滚轮缩放 · 📷 右下角开启手势感应</span>
          </div>
        </div>

        {/* Floating AI Camera Hand Gesture Recognizer HUD */}
        <GestureCameraHUD
          onGestureAction={handleGestureAction}
          isRegionSelected={Boolean(selectedRegion)}
          selectedRegion={selectedRegion}
        />
      </div>

      {/* Vaul-Style Bottom Sheet / Drawer for Selected Region Masterworks */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="globe-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Bottom Drawer Sheet */}
            <motion.div
              className="globe-drawer-sheet"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="globe-drawer-handle" />

              {/* Drawer Header */}
              <div style={{
                padding: '1.2rem 1.8rem 1rem 1.8rem',
                borderBottom: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                    <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
                      <MapPin size={11} /> {selectedRegion.countryZh} · {selectedRegion.nameZh}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{selectedRegion.nameEn}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', margin: '0 0 0.4rem 0', color: 'var(--text-primary)' }}>
                    {selectedRegion.nameZh} 代表艺术与建筑地标
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '720px', lineHeight: '1.6' }}>
                    {selectedRegion.summaryZh}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setIsDrawerOpen(false)}
                  style={{ borderRadius: '50%', width: '36px', height: '36px', padding: 0 }}
                  title="关闭"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Artworks & Architecture Bento Grid */}
              <div style={{ padding: '1.4rem 1.8rem 2.5rem 1.8rem', overflowY: 'auto', flex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {selectedRegion.artworks.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -4, scale: 1.012, transition: { type: 'spring', stiffness: 380, damping: 24 } }}
                      whileTap={{ scale: 0.985 }}
                      className="card card-highlight-blue"
                      style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                      <div>
                        {/* Image Frame */}
                        <div className="image-box" style={{ height: '160px', marginBottom: '0.85rem' }}>
                          <ArtworkImage artworkId={item.id} alt={item.title} fit="cover" />
                        </div>

                        {/* Badges */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span className={item.category === 'architecture' ? 'chip chip-green' : 'chip chip-blue'} style={{ fontSize: '0.68rem', padding: '2px 7px' }}>
                            {item.category === 'architecture' ? <Landmark size={10} /> : <Palette size={10} />}
                            {item.movementName}
                          </span>
                          <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>{item.date}</span>
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: '1.02rem', fontFamily: 'var(--font-serif)', fontWeight: 600, margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>
                          {item.titleZh || item.title}
                        </h3>
                        <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                          {item.artistEnglishName || item.artistName}
                        </div>

                        {/* Knowledge Point Pill */}
                        {item.knowledgePoints?.[0] && (
                          <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-subtle)', padding: '5px 8px', borderRadius: 'var(--radius-xs)', lineHeight: '1.45', marginBottom: '0.8rem' }}>
                            💡 {item.knowledgePoints[0]}
                          </div>
                        )}
                      </div>

                      {/* Detail Link CTA */}
                      <Link
                        to={`/artwork/${item.movementId}/${item.artistId}/${item.id}`}
                        className="btn btn-outline"
                        style={{ width: '100%', fontSize: '0.78rem', padding: '6px 10px', borderRadius: 'var(--radius-pill)', justifyContent: 'center' }}
                      >
                        <span>进入考点详情研读</span>
                        <ExternalLink size={12} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
