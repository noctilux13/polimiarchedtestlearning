import React, { useRef, useEffect, useState, useContext, useCallback, useMemo } from 'react';
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
  Layers,
  Compass,
  ChevronRight
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

// High-grade circular soft-radial glow sprite texture for WebGL particles
function createGlowPointTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.28, 'rgba(186, 230, 253, 1)');
  grad.addColorStop(0.60, 'rgba(56, 189, 248, 0.90)');
  grad.addColorStop(0.85, 'rgba(14, 165, 233, 0.40)');
  grad.addColorStop(1, 'rgba(14, 165, 233, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

// Cultural Geographic Clusters for easy navigation and neighbor shuttling
const REGION_CLUSTERS = [
  {
    id: 'italy',
    name: '🇮🇹 意大利文艺复兴与古典重镇',
    shortName: '🇮🇹 意大利圈',
    ids: ['milan-lombardy', 'turin-piedmont', 'florence-tuscany', 'rome-vatican', 'venice-veneto']
  },
  {
    id: 'westEurope',
    name: '⚜️ 西欧低地与英伦',
    shortName: '⚜️ 西欧与低地',
    ids: ['paris-france', 'marseille-france', 'brussels-lowcountries', 'london-uk']
  },
  {
    id: 'centralIberia',
    name: '🏰 中欧与伊比利亚半岛',
    shortName: '🏰 中欧与伊比利亚',
    ids: ['berlin-germany', 'vienna-austria', 'prague-czech', 'zurich-switzerland', 'barcelona-spain', 'madrid-bilbao-spain']
  },
  {
    id: 'americasOther',
    name: '🌐 美洲与全球其他重镇',
    shortName: '🌐 美洲与其他',
    ids: ['newyork-eastcoast', 'washington-charlottesville', 'chicago-midwest', 'losangeles-westcoast', 'brasilia-brazil', 'noumea-oceania']
  }
];

// European 2nd-Level Country/Cultural Zone Organization (Solves high density clustering)
const EUROPE_COUNTRIES = [
  {
    id: 'italy',
    nameZh: '意大利',
    nameEn: 'Italy',
    flag: '🇮🇹',
    regionIds: ['milan-lombardy', 'turin-piedmont', 'florence-tuscany', 'rome-vatican', 'venice-veneto'],
    summaryZh: '文艺复兴发源地、巴洛克风暴与古典神殿',
    lat: 42.5,
    lng: 12.5
  },
  {
    id: 'france',
    nameZh: '法国',
    nameEn: 'France',
    flag: '🇫🇷',
    regionIds: ['paris-france', 'marseille-france'],
    summaryZh: '哥特大教堂、洛可可宫廷与现代柯布西耶探索',
    lat: 46.5,
    lng: 2.5
  },
  {
    id: 'spain',
    nameZh: '西班牙',
    nameEn: 'Spain',
    flag: '🇪🇸',
    regionIds: ['barcelona-spain', 'madrid-bilbao-spain'],
    summaryZh: '高迪加泰罗尼亚新艺术、伊斯兰摩尔遗风与解构先锋',
    lat: 40.2,
    lng: -3.7
  },
  {
    id: 'germany',
    nameZh: '德国',
    nameEn: 'Germany',
    flag: '🇩🇪',
    regionIds: ['berlin-germany'],
    summaryZh: '包豪斯现代主义摇篮、表现主义与普鲁士古典重器',
    lat: 52.52,
    lng: 13.40
  },
  {
    id: 'austria',
    nameZh: '奥地利',
    nameEn: 'Austria',
    flag: '🇦🇹',
    regionIds: ['vienna-austria'],
    summaryZh: '维也纳分离派、哈布斯堡巴洛克皇城与瓦格纳现代探索',
    lat: 48.20,
    lng: 16.37
  },
  {
    id: 'uk',
    nameZh: '英国',
    nameEn: 'United Kingdom',
    flag: '🇬🇧',
    regionIds: ['london-uk'],
    summaryZh: '垂直哥特式、工艺美术运动与高技派（High-Tech）建筑',
    lat: 51.50,
    lng: -0.12
  },
  {
    id: 'lowcountries',
    nameZh: '低地国家 (比利时/荷兰)',
    nameEn: 'Low Countries',
    flag: '🇧🇪',
    regionIds: ['brussels-lowcountries'],
    summaryZh: '霍塔新艺术运动有机植物形态与风格派新造型主义',
    lat: 50.85,
    lng: 4.35
  },
  {
    id: 'switzerland',
    nameZh: '瑞士',
    nameEn: 'Switzerland',
    flag: '🇨🇭',
    regionIds: ['zurich-switzerland'],
    summaryZh: '达达主义发源地与勒·柯布西耶晚期展馆',
    lat: 47.37,
    lng: 8.54
  },
  {
    id: 'czech',
    nameZh: '捷克',
    nameEn: 'Czech Republic',
    flag: '🇨🇿',
    regionIds: ['prague-czech'],
    summaryZh: '中欧百塔之城、波希米亚哥特、巴洛克与立体主义建筑实验',
    lat: 50.07,
    lng: 14.43
  }
];

const EUROPE_REGION_IDS = new Set(EUROPE_COUNTRIES.flatMap(c => c.regionIds));
const isEuropeRegion = (region) => Boolean(region && EUROPE_REGION_IDS.has(region.id));

// Offline Vector Continent Footprints ([lat, lng] polygons on equirectangular projection)
const CONTINENT_POLYGONS = [
  // Western & Central Europe
  [[36, -9], [43, -9], [44, -1], [49, -1], [54, 8], [58, 10], [55, 14], [54, 19], [46, 16], [42, 19], [40, 23], [37, 23], [36, 14], [36, -9]],
  // Scandinavia
  [[55, 12], [63, 10], [70, 20], [70, 30], [60, 25], [55, 12]],
  // British Isles
  [[50, -5], [54, -3], [58, -5], [58, -2], [54, 0], [50, 1], [50, -5]],
  // Italian Peninsula ("the boot") & Sicily
  [[46, 7], [46, 13], [44, 12], [41, 15], [38, 16], [38, 14], [40, 14], [44, 8], [46, 7]],
  [[37, 12.5], [38.5, 13.5], [38, 15.5], [36.8, 15.0], [37, 12.5]],
  // Eurasia & Northern Asia
  [[42, 28], [48, 38], [55, 37], [68, 45], [72, 70], [75, 110], [72, 140], [60, 160], [45, 140], [35, 128], [30, 122], [22, 114], [10, 105], [8, 98], [22, 88], [8, 77], [25, 68], [30, 50], [38, 35], [42, 28]],
  // Japan
  [[31, 130], [34, 132], [36, 137], [40, 140], [44, 144], [42, 141], [35, 139], [33, 135], [31, 130]],
  // Africa
  [[36, -6], [36, 11], [32, 25], [30, 32], [22, 37], [12, 43], [12, 51], [5, 48], [-12, 40], [-25, 33], [-34, 26], [-34, 18], [-22, 14], [-5, 12], [5, 2], [5, -4], [15, -17], [28, -13], [36, -6]],
  // Madagascar
  [[-12, 49], [-16, 50], [-25, 47], [-25, 44], [-16, 44], [-12, 49]],
  // North America
  [[25, -80], [30, -81], [38, -75], [44, -66], [48, -64], [52, -56], [60, -65], [68, -65], [72, -85], [72, -125], [65, -168], [58, -158], [49, -125], [32, -117], [23, -110], [18, -104], [16, -94], [25, -80]],
  // Greenland
  [[60, -45], [65, -53], [78, -68], [83, -30], [70, -20], [60, -45]],
  // South America
  [[12, -72], [10, -62], [5, -52], [-5, -35], [-15, -39], [-23, -43], [-34, -54], [-45, -65], [-55, -67], [-50, -74], [-38, -73], [-18, -70], [-5, -80], [8, -77], [12, -72]],
  // Australia & New Zealand
  [[-12, 130], [-12, 136], [-17, 138], [-12, 142], [-22, 150], [-34, 151], [-38, 144], [-35, 137], [-32, 132], [-35, 118], [-22, 114], [-15, 124], [-12, 130]],
  [[-35, 173], [-38, 178], [-41, 175], [-46, 170], [-46, 166], [-42, 171], [-35, 173]],
  // Antarctica
  [[-65, -180], [-65, 180], [-88, 180], [-88, -180], [-65, -180]]
];

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
  const [activeClusterFilter, setActiveClusterFilter] = useState('all');
  const [europeNavMode, setEuropeNavMode] = useState('artwork_view'); // 'artwork_view' by default; 'country_select' triggered by fist when facing Europe
  const [activeCountryIndex, setActiveCountryIndex] = useState(0);

  // Keep references to state so Three.js render loop and callbacks don't trigger unmounts
  const selectedRegionRef = useRef(selectedRegion);
  useEffect(() => {
    selectedRegionRef.current = selectedRegion;
  }, [selectedRegion]);

  const hoveredRegionRef = useRef(hoveredRegion);
  useEffect(() => {
    hoveredRegionRef.current = hoveredRegion;
  }, [hoveredRegion]);

  const europeNavModeRef = useRef(europeNavMode);
  useEffect(() => {
    europeNavModeRef.current = europeNavMode;
  }, [europeNavMode]);

  const activeCountryIndexRef = useRef(activeCountryIndex);
  useEffect(() => {
    activeCountryIndexRef.current = activeCountryIndex;
  }, [activeCountryIndex]);

  // Orbital Controls State with Momentum & Hand Pan Inertia
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
    targetDist: 5.2,
    currentDist: 5.2,
    autoRotate: true,
    lastInteractionTime: Date.now()
  });

  // Focus and select European Country by index (with smooth spherical camera guidance)
  const focusCountryByIndex = useCallback((index) => {
    const safeIdx = (index + EUROPE_COUNTRIES.length) % EUROPE_COUNTRIES.length;
    setActiveCountryIndex(safeIdx);
    const country = EUROPE_COUNTRIES[safeIdx];
    if (!country) return;

    // Point to the primary representative region
    const primaryReg = geoRegions.find(r => r.id === country.regionIds[0]);
    if (primaryReg) {
      setSelectedRegion(primaryReg);
    }

    const P = latLngToVector3(country.lat, country.lng, 1.0);
    const targetPhi = Math.acos(Math.max(-0.999, Math.min(0.999, P.y)));
    const targetTheta = Math.atan2(P.x, P.z);

    const c = controlsRef.current;
    const currentMod = c.currentTheta % (Math.PI * 2);
    let diff = (targetTheta - currentMod) % (Math.PI * 2);
    if (diff > Math.PI) diff -= Math.PI * 2;
    if (diff < -Math.PI) diff += Math.PI * 2;

    c.targetTheta = c.currentTheta + diff;
    c.targetPhi = Math.max(0.18, Math.min(Math.PI - 0.18, targetPhi));
    c.targetDist = 3.5;
    c.velocityX = 0;
    c.velocityY = 0;
    c.autoRotate = false;
    c.lastInteractionTime = Date.now();

    const cardElem = document.getElementById(`europe-country-${country.id}`);
    if (cardElem) {
      cardElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, []);

  const focusCountryByIndexRef = useRef(focusCountryByIndex);
  useEffect(() => {
    focusCountryByIndexRef.current = focusCountryByIndex;
  }, [focusCountryByIndex]);

  // Smoothly Focus Camera onto a Region with 100% Exact Mathematical Centering & Adaptive European Zoom
  const focusRegion = useCallback((region, enterArtworkView = true) => {
    if (!region) return;
    setSelectedRegion(region);

    const isEurope = isEuropeRegion(region);
    if (isEurope) {
      const cIdx = EUROPE_COUNTRIES.findIndex(c => c.regionIds.includes(region.id));
      if (cIdx !== -1) {
        setActiveCountryIndex(cIdx);
      }
      if (enterArtworkView) {
        setEuropeNavMode('artwork_view');
      }
    } else {
      setEuropeNavMode('artwork_view');
    }

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

    // Adaptive Zoom Distance: Close-up 3.4 for dense European clusters to spread out pins; 4.5 for others
    c.targetDist = isEurope ? 3.4 : 4.5;

    c.velocityX = 0;
    c.velocityY = 0;
    c.autoRotate = false;
    c.lastInteractionTime = Date.now();
  }, []);

  const focusRegionRef = useRef(focusRegion);
  useEffect(() => {
    focusRegionRef.current = focusRegion;
  }, [focusRegion]);

  // Stable Gesture Action Dispatcher (Handles hand pan translation with physical inertia damping)
  const handleGestureAction = useCallback((action) => {
    if (action.type === 'no_hand' || action.type === 'hand_hover') {
      // Hover/still hand: dampen any remaining rotation to stop immediately
      const c = controlsRef.current;
      c.velocityX *= 0.5;
      c.velocityY *= 0.5;
      return;
    }

    const c = controlsRef.current;
    c.autoRotate = false;
    c.lastInteractionTime = Date.now();

    const inEurope = isEuropeRegion(selectedRegionRef.current);
    const inCountrySelect = inEurope && europeNavModeRef.current === 'country_select';

    if (action.type === 'hand_pan') {
      // European Country Navigation via vertical hand pan
      if (inCountrySelect && (action.direction === 'pan_up' || action.direction === 'pan_down')) {
        if (action.direction === 'pan_up') {
          focusCountryByIndexRef.current?.(activeCountryIndexRef.current - 1);
        } else {
          focusCountryByIndexRef.current?.(activeCountryIndexRef.current + 1);
        }
        return;
      }

      // Hand Translation: smooth natural rotation with small-to-medium physical momentum
      // Reverse sign so the visible front face of the globe rotates in the direction the hand moves
      const panSensX = 2.4;
      const panSensY = 2.0;

      c.targetTheta -= action.deltaX * panSensX;
      c.targetPhi = Math.max(0.18, Math.min(Math.PI - 0.18, c.targetPhi + action.deltaY * panSensY));

      // Natural impulse velocity (decayed by 0.88 in animation loop for ~25°~40° travel then full stop)
      c.velocityX = -action.deltaX * panSensX * 0.42;
      c.velocityY = action.deltaY * panSensY * 0.42;
    } else if (action.type === 'zoom') {
      c.targetDist = Math.max(3.2, Math.min(7.8, c.targetDist + action.delta * 1.8));
    } else if (action.type === 'fist') {
      // 1. If currently in European country select mode:
      // Fist confirms the country selection and enters artwork detail view
      if (inCountrySelect) {
        setEuropeNavMode('artwork_view');
        const country = EUROPE_COUNTRIES[activeCountryIndexRef.current];
        if (country) {
          const primaryReg = geoRegions.find(r => r.id === country.regionIds[0]);
          if (primaryReg) {
            focusRegionRef.current?.(primaryReg, true);
          }
        }
        return;
      }

      // 2. Center-of-Screen Selection (Fixed: Locks onto region closest to central line of sight)
      const cam = cameraRef.current;
      if (cam) {
        const camDir = cam.position.clone().normalize();
        let centerRegion = null;
        let maxDot = -Infinity;

        geoRegions.forEach((reg) => {
          const pinVec = latLngToVector3(reg.lat, reg.lng, 1.0).normalize();
          const dot = pinVec.dot(camDir);
          if (dot > maxDot) {
            maxDot = dot;
            centerRegion = reg;
          }
        });

        if (centerRegion && maxDot > 0.12) {
          if (isEuropeRegion(centerRegion)) {
            const cIdx = EUROPE_COUNTRIES.findIndex(c => c.regionIds.includes(centerRegion.id));
            if (cIdx !== -1) {
              setActiveCountryIndex(cIdx);
            }
            setEuropeNavMode('country_select');
            focusRegionRef.current?.(centerRegion, false);
          } else {
            focusRegionRef.current?.(centerRegion, true);
          }
        }
      }
    } else if (action.type === 'fist_again') {
      if (inEurope && europeNavModeRef.current === 'artwork_view') {
        // Return to European country select list
        setEuropeNavMode('country_select');
      } else {
        const sidebarBody = document.querySelector('.explorer-sidebar-body');
        if (sidebarBody) {
          sidebarBody.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
    camera.position.set(0, 0, 5.2);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.55 : 1.45;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Multi-Source Sci-Fi Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 2.2 : 2.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isDark ? 2.8 : 2.5);
    dirLight1.position.set(6, 8, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xbae6fd, 1.8);
    dirLight2.position.set(-7, -2, -5);
    scene.add(dirLight2);

    const hemiLight = new THREE.HemisphereLight(0xbae6fd, 0x1e293b, 1.0);
    scene.add(hemiLight);

    // 5. High-Fidelity 3D Particle Globe (真经纬度高精度粒子地球仪)
    const globeRadius = 2.4;

    // 5a. Inner Dark Void Core (Occludes backside particles for authentic 3D spherical depth)
    const coreGeo = new THREE.SphereGeometry(globeRadius * 0.988, 48, 48);
    const coreMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x060913 : 0x0a1628
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // 5b. Particle Sprite Texture (Circular radial soft glow)
    const glowTex = createGlowPointTexture();

    // 5c. High-Density Continent-Mapped Particle Cloud
    const particleCount = 26000;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const goldenPhi = Math.PI * (Math.sqrt(5) - 1);

    // Offscreen Canvas for Geographic Sampling (1024x512 equirectangular map)
    const sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = 1024;
    sampleCanvas.height = 512;
    const sCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });

    // Step 1: Draw instant offline continent vector polygons (White ocean = 255, Black land = 0)
    sCtx.fillStyle = '#ffffff';
    sCtx.fillRect(0, 0, 1024, 512);
    sCtx.fillStyle = '#000000';

    CONTINENT_POLYGONS.forEach(poly => {
      sCtx.beginPath();
      poly.forEach(([lat, lng], idx) => {
        const px = Math.round(((lng + 180) / 360) * 1024);
        const py = Math.round(((90 - lat) / 180) * 512);
        if (idx === 0) sCtx.moveTo(px, py);
        else sCtx.lineTo(px, py);
      });
      sCtx.closePath();
      sCtx.fill();
    });

    function computeParticles(data, w, h) {
      let pIdx = 0;
      for (let i = 0; i < particleCount; i++) {
        const yNorm = 1 - (i / (particleCount - 1)) * 2;
        const phi = Math.acos(Math.max(-0.999, Math.min(0.999, yNorm)));
        const lat = 90 - (phi * 180) / Math.PI;
        const theta = (goldenPhi * i) % (Math.PI * 2);
        const lng = ((theta * 180) / Math.PI) - 180;

        const u = Math.max(0, Math.min(1, (lng + 180) / 360));
        const v = Math.max(0, Math.min(1, (90 - lat) / 180));

        const px = Math.min(w - 1, Math.floor(u * w));
        const py = Math.min(h - 1, Math.floor(v * h));
        const dIdx = (py * w + px) * 4;

        // In equirectangular specular mask, land is dark (black=0), ocean is bright specular (white=255)
        const brightness = (data[dIdx] * 0.299 + data[dIdx + 1] * 0.587 + data[dIdx + 2] * 0.114) / 255;
        const isLand = brightness < 0.5;

        // Exact 3D spherical position matching latLngToVector3 100%
        const pt = latLngToVector3(lat, lng, globeRadius * 1.008);

        if (isLand) {
          particlePositions[pIdx * 3] = pt.x;
          particlePositions[pIdx * 3 + 1] = pt.y;
          particlePositions[pIdx * 3 + 2] = pt.z;

          if (brightness < 0.15) {
            // Core continent interior node: luminous azure / deep cobalt
            particleColors[pIdx * 3] = isDark ? 0.45 : 0.12;
            particleColors[pIdx * 3 + 1] = isDark ? 0.92 : 0.58;
            particleColors[pIdx * 3 + 2] = isDark ? 1.00 : 0.96;
          } else {
            // Coastline boundary highlight: pure brilliant white-cyan glow
            particleColors[pIdx * 3] = isDark ? 1.00 : 0.28;
            particleColors[pIdx * 3 + 1] = isDark ? 1.00 : 0.72;
            particleColors[pIdx * 3 + 2] = 1.00;
          }
        } else {
          // Subtle oceanic matrix grid dots (Dimmed down heavily to make continents pop)
          const keepOcean = (i % 16 === 0) || Math.abs(lat) < 0.6;
          if (keepOcean) {
            const opt = latLngToVector3(lat, lng, globeRadius * 1.002);
            particlePositions[pIdx * 3] = opt.x;
            particlePositions[pIdx * 3 + 1] = opt.y;
            particlePositions[pIdx * 3 + 2] = opt.z;
            particleColors[pIdx * 3] = isDark ? 0.012 : 0.86;
            particleColors[pIdx * 3 + 1] = isDark ? 0.05 : 0.90;
            particleColors[pIdx * 3 + 2] = isDark ? 0.12 : 0.94;
          } else {
            particlePositions[pIdx * 3] = 0;
            particlePositions[pIdx * 3 + 1] = 0;
            particlePositions[pIdx * 3 + 2] = 0;
            particleColors[pIdx * 3] = 0;
            particleColors[pIdx * 3 + 1] = 0;
            particleColors[pIdx * 3 + 2] = 0;
          }
        }
        pIdx++;
      }
    }

    // Run initial computation immediately with vector continents
    computeParticles(sCtx.getImageData(0, 0, 1024, 512).data, 1024, 512);

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isDark ? 0.064 : 0.056,
      map: glowTex,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particleMesh);
    globeRef.current = particleMesh;

    // Step 2: Asynchronously load NASA specular high-res texture to refine coastlines & islands
    const specularImg = new Image();
    specularImg.crossOrigin = 'anonymous';
    specularImg.src = getAssetUrl('textures/earth_specular_2048.jpg');
    specularImg.onload = () => {
      sCtx.drawImage(specularImg, 0, 0, 1024, 512);
      const detailedData = sCtx.getImageData(0, 0, 1024, 512).data;
      computeParticles(detailedData, 1024, 512);
      particleGeo.attributes.position.needsUpdate = true;
      particleGeo.attributes.color.needsUpdate = true;
    };

    // 5d. Atmospheric Floating Halo Particles (Dimmed to subtle whisper)
    const haloGeo = new THREE.BufferGeometry();
    const haloCoords = [];
    for (let i = 0; i < 480; i++) {
      const hr = globeRadius * (1.035 + Math.random() * 0.05);
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const sinPhi = Math.sin(phi);
      haloCoords.push(
        hr * sinPhi * Math.cos(theta),
        hr * sinPhi * Math.sin(theta),
        hr * Math.cos(phi)
      );
    }
    haloGeo.setAttribute('position', new THREE.Float32BufferAttribute(haloCoords, 3));
    const haloMat = new THREE.PointsMaterial({
      size: 0.020,
      map: glowTex,
      color: isDark ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: isDark ? 0.12 : 0.07,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const haloMesh = new THREE.Points(haloGeo, haloMat);
    scene.add(haloMesh);

    // 5e. Great-Circle 3D Cultural Flight Arcs with Traveling Pulses
    const arcGroup = new THREE.Group();
    scene.add(arcGroup);

    const ARC_ROUTES = [
      { from: [41.9, 12.5], to: [48.8, 2.3] },    // Rome - Paris
      { from: [48.8, 2.3], to: [51.5, -0.1] },    // Paris - London
      { from: [51.5, -0.1], to: [40.7, -74.0] },  // London - New York
      { from: [41.9, 12.5], to: [43.7, 11.2] },   // Rome - Florence
      { from: [48.8, 2.3], to: [41.4, 2.2] },     // Paris - Barcelona
      { from: [41.9, 12.5], to: [45.4, 12.3] },   // Rome - Venice
      { from: [45.4, 9.19], to: [45.0, 7.69] },   // Milan - Turin
      { from: [40.7, -74.0], to: [41.8, -87.6] }  // New York - Chicago
    ];

    const arcPulseMeshes = [];
    const pulseGeo = new THREE.SphereGeometry(0.022, 10, 10);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95
    });

    ARC_ROUTES.forEach((route, idx) => {
      const p1 = latLngToVector3(route.from[0], route.from[1], globeRadius * 1.008);
      const p2 = latLngToVector3(route.to[0], route.to[1], globeRadius * 1.008);

      const chordDist = p1.distanceTo(p2);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const midAltitude = globeRadius * (1.06 + Math.min(0.22, chordDist * 0.07));
      const controlPoint = mid.normalize().multiplyScalar(midAltitude);

      const curve = new THREE.QuadraticBezierCurve3(p1, controlPoint, p2);
      const curvePoints = curve.getPoints(44);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: isDark ? 0.20 : 0.14,
        blending: THREE.AdditiveBlending
      });
      const arcLine = new THREE.Line(curveGeo, curveMat);
      arcGroup.add(arcLine);

      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      pulse.position.copy(p1);
      arcGroup.add(pulse);
      arcPulseMeshes.push({ mesh: pulse, curve, offset: idx * 0.1 });
    });

    // 5f. Deep Space Starfield (Dimmed to subtle ambience)
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
      size: 0.022,
      color: isDark ? 0x94a3b8 : 0xcbd5e1,
      transparent: true,
      opacity: isDark ? 0.15 : 0.08
    });
    const starsMesh = new THREE.Points(starsGeo, starsMat);
    scene.add(starsMesh);

    // 6. Flat Planar Geographic Region Pins (Tangential Reticles)
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
      const pinCoreMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide
      });
      const pinCoreMesh = new THREE.Mesh(flatCircleGeo, pinCoreMat);
      pinCoreMesh.userData = { region };
      pinRoot.add(pinCoreMesh);

      // Planar pulse ring
      const pinRingMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide
      });
      const pinRingMesh = new THREE.Mesh(flatRingGeo, pinRingMat);
      pinRoot.add(pinRingMesh);

      pinsGroup.add(pinRoot);
      pinMeshesRef.current.push({ root: pinRoot, dot: pinCoreMesh, ring: pinRingMesh, region, pos });
    });

    // 7. Raycasting & Screen-Space Magnetic Snap (28px Magnetic Radius for European Density)
    const raycaster = new THREE.Raycaster();
    const mousePos = new THREE.Vector2();
    const SNAP_RADIUS = 28;

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

        // Adaptive sensitivity scaled by camera distance
        const sensitivity = 0.0042 * (c.currentDist / 5.2);
        c.targetTheta += deltaX * sensitivity;
        c.targetPhi = Math.max(0.18, Math.min(Math.PI - 0.18, c.targetPhi - deltaY * sensitivity));

        // Velocity tracking for inertia throw
        c.velocityX = (deltaX * sensitivity) / (dt / 16);
        c.velocityY = (-deltaY * sensitivity) / (dt / 16);

        c.prevMouseX = e.clientX;
        c.prevMouseY = e.clientY;
        c.lastMoveTime = now;
      }

      const rect = container.getBoundingClientRect();
      const mousePxX = e.clientX - rect.left;
      const mousePxY = e.clientY - rect.top;

      // Screen-space 28px magnetic snap: projects front-facing pins onto 2D viewport
      let nearestRegion = null;
      let minScreenDist = Infinity;
      const camPos = camera.position.clone();

      pinMeshesRef.current.forEach(p => {
        const normal = p.pos.clone().normalize();
        const camDir = camPos.clone().normalize();
        if (normal.dot(camDir) > 0.12) {
          const screenPos = p.pos.clone().project(camera);
          const sx = ((screenPos.x + 1) / 2) * rect.width;
          const sy = ((-screenPos.y + 1) / 2) * rect.height;
          const dist = Math.hypot(mousePxX - sx, mousePxY - sy);
          if (dist < minScreenDist) {
            minScreenDist = dist;
            nearestRegion = p.region;
          }
        }
      });

      if (minScreenDist < SNAP_RADIUS && nearestRegion) {
        setHoveredRegion(nearestRegion);
        container.style.cursor = 'pointer';
      } else {
        // Fallback to 3D raycaster
        mousePos.x = (mousePxX / rect.width) * 2 - 1;
        mousePos.y = -(mousePxY / rect.height) * 2 + 1;
        raycaster.setFromCamera(mousePos, camera);

        const dots = pinMeshesRef.current.map(p => p.dot);
        const intersects = raycaster.intersectObjects(dots);
        if (intersects.length > 0) {
          setHoveredRegion(intersects[0].object.userData.region);
          container.style.cursor = 'pointer';
        } else {
          setHoveredRegion(null);
          container.style.cursor = c.isDragging ? 'grabbing' : 'grab';
        }
      }
    };

    const handlePointerUp = (e) => {
      const c = controlsRef.current;
      if (c.isDragging) {
        c.isDragging = false;
        try { container.releasePointerCapture?.(e.pointerId); } catch {}

        // Distinguish drag from click: small travel distance = click
        const distMoved = Math.hypot(e.clientX - c.dragStartX, e.clientY - c.dragStartY);
        if (distMoved < 7) {
          const rect = container.getBoundingClientRect();
          const mousePxX = e.clientX - rect.left;
          const mousePxY = e.clientY - rect.top;

          // Magnetic snap click
          let nearestRegion = null;
          let minScreenDist = Infinity;
          const camPos = camera.position.clone();

          pinMeshesRef.current.forEach(p => {
            const normal = p.pos.clone().normalize();
            const camDir = camPos.clone().normalize();
            if (normal.dot(camDir) > 0.12) {
              const screenPos = p.pos.clone().project(camera);
              const sx = ((screenPos.x + 1) / 2) * rect.width;
              const sy = ((-screenPos.y + 1) / 2) * rect.height;
              const dist = Math.hypot(mousePxX - sx, mousePxY - sy);
              if (dist < minScreenDist) {
                minScreenDist = dist;
                nearestRegion = p.region;
              }
            }
          });

          if (minScreenDist < SNAP_RADIUS && nearestRegion) {
            focusRegionRef.current?.(nearestRegion);
          } else {
            mousePos.x = (mousePxX / rect.width) * 2 - 1;
            mousePos.y = -(mousePxY / rect.height) * 2 + 1;
            raycaster.setFromCamera(mousePos, camera);

            const dots = pinMeshesRef.current.map(p => p.dot);
            const intersects = raycaster.intersectObjects(dots);
            if (intersects.length > 0) {
              focusRegionRef.current?.(intersects[0].object.userData.region);
            }
          }
        }
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const c = controlsRef.current;
      c.targetDist = Math.max(3.2, Math.min(7.8, c.targetDist + e.deltaY * 0.0035));
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

    // 9. Animation Loop (with 0.88 physics inertia decay for hand panning)
    let animId;
    let clock = new THREE.Clock();
    let lastLabelSync = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const c = controlsRef.current;
      const now = performance.now();

      // Resume subtle idle rotation after 7s of inactivity
      if (!c.isDragging && Date.now() - c.lastInteractionTime > 7000) {
        c.targetTheta -= 0.0008;
      }

      // Smooth inertia throw decay (0.88 damping: turns 25°~40° naturally and comes to a full stop)
      if (!c.isDragging) {
        c.targetTheta += c.velocityX;
        c.targetPhi = Math.max(0.18, Math.min(Math.PI - 0.18, c.targetPhi + c.velocityY));
        c.velocityX *= 0.88;
        c.velocityY *= 0.88;
        if (Math.abs(c.velocityX) < 0.0001) c.velocityX = 0;
        if (Math.abs(c.velocityY) < 0.0001) c.velocityY = 0;
      }

      // Spherical Damping Interpolation
      c.currentTheta += (c.targetTheta - c.currentTheta) * 0.085;
      c.currentPhi += (c.targetPhi - c.currentPhi) * 0.085;
      c.currentDist += (c.targetDist - c.currentDist) * 0.085;

      // Update camera position from spherical coordinates
      const cx = c.currentDist * Math.sin(c.currentPhi) * Math.sin(c.currentTheta);
      const cy = c.currentDist * Math.cos(c.currentPhi);
      const cz = c.currentDist * Math.sin(c.currentPhi) * Math.cos(c.currentTheta);
      camera.position.set(cx, cy, cz);
      camera.lookAt(0, 0, 0);

      // Animate flying pulses along cultural arcs
      arcPulseMeshes.forEach(({ mesh, curve, offset }) => {
        const t = (elapsed * 0.16 + offset) % 1.0;
        const pt = curve.getPoint(t);
        mesh.position.copy(pt);
        const pScale = 1.0 + 0.4 * Math.sin(t * Math.PI);
        mesh.scale.set(pScale, pScale, pScale);
      });

      // Atmospheric halo subtle drift
      haloMesh.rotation.y = elapsed * 0.012;

      // Pulse wave ring animation on planar pins
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

        // Labels appear when zoomed in (dist <= 5.5), dissolve when zoomed out
        const zoomOpacity = Math.max(0, Math.min(1, (5.6 - dist) / 1.4));

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
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      glowTex.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      pulseGeo.dispose();
      pulseMat.dispose();
      arcGroup.children.forEach(child => {
        child.geometry?.dispose();
        child.material?.dispose();
      });
      starsGeo.dispose();
      starsMat.dispose();
      flatCircleGeo.dispose();
      flatRingGeo.dispose();
      renderer.dispose();
    };
  }, [isDark]);

  // Precompute stats (regions and total artworks) for each European country
  const europeCountriesWithStats = useMemo(() => {
    return EUROPE_COUNTRIES.map(c => {
      const regs = c.regionIds.map(id => geoRegions.find(r => r.id === id)).filter(Boolean);
      const count = regs.reduce((sum, r) => sum + (r.artworksCount || r.artworks?.length || 0), 0);
      return {
        ...c,
        regions: regs,
        totalArtworksCount: count
      };
    });
  }, []);

  const isEurope = isEuropeRegion(selectedRegion);
  const currentCountry = useMemo(() => {
    if (!isEurope) return null;
    return europeCountriesWithStats[activeCountryIndex] || europeCountriesWithStats[0];
  }, [isEurope, europeCountriesWithStats, activeCountryIndex]);

  // Culture Cluster Shuttle list for current selected region
  const activeCluster = useMemo(() => {
    return REGION_CLUSTERS.find(c => c.ids.includes(selectedRegion.id)) || REGION_CLUSTERS[0];
  }, [selectedRegion]);

  const neighborRegions = useMemo(() => {
    if (!activeCluster) return [];
    return activeCluster.ids.map(id => geoRegions.find(r => r.id === id)).filter(Boolean);
  }, [activeCluster]);

  // Filtered regions for topbar
  const displayedRegions = useMemo(() => {
    if (activeClusterFilter === 'all') return geoRegions;
    const cluster = REGION_CLUSTERS.find(c => c.id === activeClusterFilter);
    return cluster ? cluster.ids.map(id => geoRegions.find(r => r.id === id)).filter(Boolean) : geoRegions;
  }, [activeClusterFilter]);

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

        {/* Region Culture Group Filter & Fast Jump Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}>
          {/* Group Category Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', borderRight: '1px solid var(--border-subtle)', paddingRight: '8px' }}>
            <button
              type="button"
              className={`btn ${activeClusterFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveClusterFilter('all')}
              style={{ borderRadius: 'var(--radius-pill)', padding: '3px 9px', fontSize: '0.72rem' }}
            >
              全部 (21)
            </button>
            {REGION_CLUSTERS.map(cluster => (
              <button
                key={cluster.id}
                type="button"
                className={`btn ${activeClusterFilter === cluster.id ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveClusterFilter(cluster.id)}
                style={{ borderRadius: 'var(--radius-pill)', padding: '3px 9px', fontSize: '0.72rem', whiteSpace: 'nowrap' }}
              >
                {cluster.shortName} ({cluster.ids.length})
              </button>
            ))}
          </div>

          {/* City Pills in Current Category */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', overflowX: 'auto', maxWidth: '420px', padding: '2px 0' }}>
            {displayedRegions.map(reg => (
              <button
                key={reg.id}
                type="button"
                className="btn btn-outline"
                onClick={() => focusRegion(reg, true)}
                style={{
                  borderRadius: 'var(--radius-pill)',
                  padding: '3px 9px',
                  fontSize: '0.72rem',
                  backgroundColor: selectedRegion?.id === reg.id ? 'var(--accent-blue-subtle)' : undefined,
                  borderColor: selectedRegion?.id === reg.id ? 'var(--accent-blue)' : undefined,
                  color: selectedRegion?.id === reg.id ? 'var(--accent-blue)' : undefined,
                  whiteSpace: 'nowrap'
                }}
              >
                {reg.nameZh}
              </button>
            ))}
          </div>
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
              onClick={() => focusRegion(lbl.region, true)}
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
              {isEurope && europeNavMode === 'country_select' ? (
                <span>欧洲大区 · <strong>{currentCountry?.flag} {currentCountry?.nameZh}</strong> ({activeCountryIndex + 1}/{EUROPE_COUNTRIES.length})</span>
              ) : (
                <span>当前选定：<strong>{selectedRegion.nameZh}</strong> ({selectedRegion.countryZh})</span>
              )}
              <span style={{ color: 'var(--text-tertiary)' }}>·</span>
              <span style={{ fontSize: '0.76rem', color: 'var(--accent-sage)', fontWeight: 650 }}>
                {isEurope && europeNavMode === 'country_select'
                  ? `${currentCountry?.totalArtworksCount || 0} 件艺术与建筑`
                  : `${selectedRegion.artworksCount} 件核心展品`}
              </span>
            </div>

            <div className="globe-pill" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
              <span>
                {isEurope && europeNavMode === 'country_select'
                  ? '✋ 手掌上翻/下翻 (或鼠标点击) 选国 · ✊ 再次握拳确认进入'
                  : '🖱️ 鼠标拖拽/滚轮/磁吸 · 📷 手势 (✋拨转 · 🤏张开放大 · 👌捏合缩小 · ✊握拳选中)'}
              </span>
            </div>
          </div>

          {/* Floating AI Camera Hand Gesture Recognizer HUD (supports light blueprint theme) */}
          <GestureCameraHUD
            onGestureAction={handleGestureAction}
            isRegionSelected={Boolean(selectedRegion)}
            isEuropeCountrySelect={isEurope && europeNavMode === 'country_select'}
            selectedRegion={selectedRegion}
            isDark={isDark}
          />
        </div>

        {/* Right Column: Dedicated Region Inspector Sidebar */}
        {isEurope && europeNavMode === 'country_select' ? (
          /* European Country Selection Mode (Level 1 Hierarchy) */
          <div className="explorer-sidebar-col">
            <div className="explorer-sidebar-header">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setEuropeNavMode('artwork_view')}
                style={{ borderRadius: 'var(--radius-pill)', padding: '3px 10px', fontSize: '0.72rem', marginBottom: '8px', gap: '4px', alignSelf: 'flex-start' }}
              >
                <ArrowLeft size={12} />
                <span>◂ 返回当前城市作品浏览</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
                  🇪🇺 欧洲艺术与建筑文化区
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  Europe Cultural Spheres
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: '0.15rem 0 0.15rem 0', color: 'var(--text-primary)', fontWeight: 650 }}>
                欧洲艺术与建筑文化区
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.55', margin: '0 0 0.45rem 0' }}>
                欧洲重镇与代表作高度密集。请通过手掌上下翻动或鼠标直接选择国家与地区，深入研读：
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 10px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--accent-blue)', fontWeight: 650 }}>💡 手势导航：</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                  手掌向上翻（上一国）/ 向下翻（下一国）· 再次握拳确认进入
                </span>
              </div>
            </div>

            {/* Scrollable European Country Cards List */}
            <div className="explorer-sidebar-body">
              {europeCountriesWithStats.map((country, idx) => {
                const isActive = idx === activeCountryIndex;
                return (
                  <div
                    key={country.id}
                    id={`europe-country-${country.id}`}
                    className={`europe-country-card ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      focusCountryByIndex(idx);
                      setEuropeNavMode('artwork_view');
                    }}
                    onMouseEnter={() => {
                      setActiveCountryIndex(idx);
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <span style={{ fontSize: '1.25rem' }}>{country.flag}</span>
                        <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)', fontWeight: 650 }}>
                          {country.nameZh}
                        </strong>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                          {country.nameEn}
                        </span>
                      </div>
                      <span className="chip chip-outline" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                        {country.regions.length} 重镇 · {country.totalArtworksCount} 杰作
                      </span>
                    </div>

                    <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', margin: '0 0 8px 0', lineHeight: '1.45' }}>
                      {country.summaryZh}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {country.regions.map(r => (
                          <span key={r.id} style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', background: 'var(--bg-subtle)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-hairline)' }}>
                            {r.nameZh}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        className={`btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                        style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: 'var(--radius-pill)', gap: '4px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          focusCountryByIndex(idx);
                          setEuropeNavMode('artwork_view');
                        }}
                      >
                        <span>进入研读</span>
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Artwork Masterworks View (Level 2 Hierarchy for Europe, Direct View for others) */
          <div className="explorer-sidebar-col">
            <div className="explorer-sidebar-header">
              {/* If in Europe: Button to European Country Selector Next Page */}
              {isEurope && (
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setEuropeNavMode('country_select')}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '3px 10px', fontSize: '0.72rem', marginBottom: '8px', gap: '5px', alignSelf: 'flex-start' }}
                >
                  <Layers size={12} style={{ color: 'var(--accent-blue)' }} />
                  <span>🇪🇺 进入欧洲国家选择 (或旋转至欧洲握拳进入下一页)</span>
                  <ChevronRight size={12} />
                </button>
              )}

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

              {/* If in Europe: Sub-regions/Cities in this Country */}
              {isEurope && currentCountry && currentCountry.regions.length > 1 && (
                <div className="neighbor-cities-strip" style={{ marginTop: '0.65rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                    <Compass size={12} style={{ color: 'var(--accent-blue)' }} />
                    <span>{currentCountry.flag} {currentCountry.nameZh} · 重镇穿梭</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {currentCountry.regions.map(reg => (
                      <button
                        key={reg.id}
                        type="button"
                        className={`neighbor-city-pill ${selectedRegion.id === reg.id ? 'active' : ''}`}
                        onClick={() => focusRegion(reg, true)}
                      >
                        <span>{reg.nameZh}</span>
                        <span style={{ opacity: 0.65, fontSize: '0.66rem' }}>({reg.artworksCount})</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* If not in Europe: Neighbor Regions in the Global Cluster */}
              {!isEurope && neighborRegions.length > 1 && (
                <div className="neighbor-cities-strip" style={{ marginTop: '0.65rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                    <Compass size={12} style={{ color: 'var(--accent-blue)' }} />
                    <span>{activeCluster.name} · 快速穿梭</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {neighborRegions.map(reg => (
                      <button
                        key={reg.id}
                        type="button"
                        className={`neighbor-city-pill ${selectedRegion.id === reg.id ? 'active' : ''}`}
                        onClick={() => focusRegion(reg, true)}
                      >
                        <span>{reg.nameZh}</span>
                        <span style={{ opacity: 0.65, fontSize: '0.66rem' }}>({reg.artworksCount})</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '0.45rem' }}>
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
        )}
      </div>
    </div>
  );
}
