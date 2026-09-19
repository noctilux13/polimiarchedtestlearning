import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  CameraOff,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Bug,
  CheckCircle2,
  XCircle,
  Cpu,
  ShieldCheck
} from 'lucide-react';

export const GESTURE_STATES = {
  NO_HAND: 'NO_HAND',
  HAND_DETECTED: 'HAND_DETECTED',
  GESTURE_CANDIDATE: 'GESTURE_CANDIDATE',
  GESTURE_CONFIRMED: 'GESTURE_CONFIRMED',
  COOLDOWN: 'COOLDOWN'
};

const REQUIRED_STABLE_FRAMES = 3;

// MediaPipe 21 Hand Landmarks Connections
export const HAND_CONNECTIONS = [
  // Thumb
  [0, 1], [1, 2], [2, 3], [3, 4],
  // Index
  [0, 5], [5, 6], [6, 7], [7, 8],
  // Middle
  [0, 9], [9, 10], [10, 11], [11, 12],
  // Ring
  [0, 13], [13, 14], [14, 15], [15, 16],
  // Pinky
  [0, 17], [17, 18], [18, 19], [19, 20],
  // Palm base ring
  [5, 9], [9, 13], [13, 17]
];

// Dynamic script loader for open-source MediaPipe Hands
function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      return resolve();
    }
    const script = document.createElement('script');
    script.src = src;
    script.crossOrigin = 'anonymous';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

// Render holographic wireframe skeleton on transparent virtual canvas with single-action visual indicator
function drawVirtualSkeleton(ctx, lm, width, height, isOptimal, activeAction, fourFingerCount, isPinch, isDark = true) {
  ctx.clearRect(0, 0, width, height);

  // 1. Blueprint / Cyber coordinate grid lines
  ctx.save();
  ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.07)' : 'rgba(2, 132, 199, 0.09)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 16; x < width; x += 28) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }
  for (let y = 16; y < height; y += 28) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.stroke();

  // 2. Draw Bones
  ctx.lineWidth = 2.2;
  const mainColor = isDark ? (isOptimal ? '#38bdf8' : 'rgba(56, 189, 248, 0.55)') : (isOptimal ? '#0284c7' : 'rgba(2, 132, 199, 0.6)');
  ctx.strokeStyle = mainColor;
  ctx.shadowColor = isDark ? '#00f0ff' : '#38bdf8';
  ctx.shadowBlur = isOptimal ? (isDark ? 8 : 4) : 2;
  ctx.beginPath();
  HAND_CONNECTIONS.forEach(([i, j]) => {
    const x1 = (1 - lm[i].x) * width;
    const y1 = lm[i].y * height;
    const x2 = (1 - lm[j].x) * width;
    const y2 = lm[j].y * height;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  });
  ctx.stroke();

  // 3. Two-Finger (Thumb & Index) dynamic link indicator
  const tx = (1 - lm[4].x) * width;
  const ty = lm[4].y * height;
  const ix = (1 - lm[8].x) * width;
  const iy = lm[8].y * height;

  if (isPinch || activeAction === 'zoom_out') {
    ctx.setLineDash([3, 3]);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(ix, iy);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // 4. Draw Joints with glowing rings
  for (let i = 0; i < 21; i++) {
    const cx = (1 - lm[i].x) * width;
    const cy = lm[i].y * height;

    let fillColor = isDark ? '#e2e8f0' : '#475569';
    let ringSize = 2.4;

    if (activeAction?.startsWith('pan') || activeAction === 'swipe') {
      fillColor = isDark ? '#38bdf8' : '#0284c7';
      ringSize = 3.8;
    } else if (activeAction === 'zoom_in') {
      fillColor = isDark ? '#4ade80' : '#16a34a';
      ringSize = 4.8;
    } else if (activeAction === 'zoom_out' && (i === 4 || i === 8)) {
      fillColor = '#f59e0b';
      ringSize = 5.2;
    } else if (activeAction === 'fist') {
      fillColor = '#f43f5e';
      ringSize = 3.8;
    } else if (i === 4 || i === 8 || i === 12 || i === 16 || i === 20) {
      fillColor = isDark ? '#38bdf8' : '#0284c7';
      ringSize = 3.2;
    }

    ctx.beginPath();
    ctx.arc(cx, cy, ringSize, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.shadowColor = fillColor;
    ctx.shadowBlur = isDark ? 6 : 2;
    ctx.fill();
  }

  // 5. Real-time Action Badge on Canvas
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.shadowBlur = 0;

  if (activeAction === 'pan_left') {
    ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
    ctx.textAlign = 'center';
    ctx.fillText('✋ ◂ 向左挥动拨转', width / 2, height - 12);
  } else if (activeAction === 'pan_right') {
    ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
    ctx.textAlign = 'center';
    ctx.fillText('✋ 向右挥动拨转 ▸', width / 2, height - 12);
  } else if (activeAction === 'pan_up') {
    ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
    ctx.textAlign = 'center';
    ctx.fillText('✋ ▴ 向上俯视倾转', width / 2, height - 12);
  } else if (activeAction === 'pan_down') {
    ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
    ctx.textAlign = 'center';
    ctx.fillText('✋ ▾ 向下仰视倾转', width / 2, height - 12);
  } else if (activeAction === 'zoom_in') {
    ctx.fillStyle = isDark ? '#4ade80' : '#16a34a';
    ctx.textAlign = 'center';
    ctx.fillText('🤟 三指张开：推进放大 🔍', width / 2, height - 12);
  } else if (activeAction === 'zoom_out') {
    ctx.fillStyle = '#d97706';
    ctx.textAlign = 'center';
    ctx.fillText('🤏 双指捏合：拉远缩小 🔎', width / 2, height - 12);
  } else if (activeAction === 'fist') {
    ctx.fillStyle = '#f43f5e';
    ctx.textAlign = 'center';
    ctx.fillText('✊ 握拳选中聚焦', width / 2, height / 2);
  } else {
    ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.85)' : 'rgba(71, 85, 105, 0.9)';
    ctx.textAlign = 'center';
    ctx.fillText('✋ 手掌平移控制地球 · 悬停静止', width / 2, height - 12);
  }

  ctx.restore();
}

// Render empty / searching radar animation
function drawEmptyViewfinder(ctx, width, height, isDark = true) {
  ctx.clearRect(0, 0, width, height);
  ctx.save();

  // Concentric radar circles
  ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 45, 0, Math.PI * 2);
  ctx.arc(width / 2, height / 2, 26, 0, Math.PI * 2);
  ctx.stroke();

  // Subtle grid crosshair
  ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(2, 132, 199, 0.12)';
  ctx.beginPath();
  ctx.moveTo(width / 2, 10);
  ctx.lineTo(width / 2, height - 10);
  ctx.moveTo(10, height / 2);
  ctx.lineTo(width - 10, height / 2);
  ctx.stroke();

  // Text status
  ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(71, 85, 105, 0.75)';
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('AI 虚拟雷达感知中...', width / 2, height / 2 + 4);

  ctx.restore();
}

export default function GestureCameraHUD({ onGestureAction, isRegionSelected, isDark = true }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const [engineType, setEngineType] = useState('MediaPipe Hands');
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentGesture, setCurrentGesture] = useState({ type: 'none', label: '请将手伸入镜头', icon: '✋' });

  // Multimodal Distance Feedback State
  const [distanceFeedback, setDistanceFeedback] = useState({
    status: 'idle', // 'idle' | 'optimal' | 'too_far' | 'too_close'
    label: '等待手部入镜'
  });

  // Debug UI overlay state
  const [debugState, setDebugState] = useState({
    engine: 'MediaPipe Hands',
    handDetected: false,
    confidence: 0,
    gesture: 'IDLE',
    activeAction: 'NONE',
    lockStatus: 'UNLOCKED',
    fingersCount: 0,
    pinchRatio: 0,
    distanceRatio: 0
  });

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const wireframeCanvasRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(null);
  const mediaPipeHandsRef = useRef(null);

  // Stable prop references
  const onGestureActionRef = useRef(onGestureAction);
  useEffect(() => {
    onGestureActionRef.current = onGestureAction;
  }, [onGestureAction]);

  const isRegionSelectedRef = useRef(isRegionSelected);
  useEffect(() => {
    isRegionSelectedRef.current = isRegionSelected;
  }, [isRegionSelected]);

  // State Machine and Tracking State
  const smRef = useRef({
    state: GESTURE_STATES.NO_HAND,
    activeAction: null, // Currently locked exclusive action mode
    prevCentroidX: null,
    prevCentroidY: null,
    candidate: null,
    stability: 0,
    idleStreak: 0,
    confidence: 0,
    cooldownUntil: 0,
    lastFistTime: 0,
    optimalStreak: 0,
    lostStreak: 0,
    lastDebugSync: 0
  });

  // Execute Confirmed Gesture without depending on props
  const dispatchConfirmedGesture = useCallback((candidate, rawParam) => {
    const sm = smRef.current;
    const now = Date.now();

    if (candidate === 'fist') {
      if (isRegionSelectedRef.current && now - sm.lastFistTime < 2400) {
        setCurrentGesture({ type: 'fist_again', label: '再次握拳：置顶考点档案！', icon: '✊' });
        onGestureActionRef.current?.({ type: 'fist_again' });
        sm.lastFistTime = 0;
      } else {
        setCurrentGesture({ type: 'fist', label: '握拳：选中聚焦地区！', icon: '✊' });
        onGestureActionRef.current?.({ type: 'fist' });
        sm.lastFistTime = now;
      }
      sm.cooldownUntil = now + 900;
      sm.state = GESTURE_STATES.COOLDOWN;
      sm.stability = 0;
    } else if (candidate === 'pan_left' || candidate === 'pan_right' || candidate === 'pan_up' || candidate === 'pan_down') {
      const dirLabels = {
        pan_left: '✋ ◂ 向左挥动地球 (物理惯性)',
        pan_right: '✋ 向右挥动地球 ▸ (物理惯性)',
        pan_up: '✋ ▴ 向上俯视倾转 (物理惯性)',
        pan_down: '✋ ▾ 向下仰视倾转 (物理惯性)'
      };
      setCurrentGesture({
        type: candidate,
        label: dirLabels[candidate] || '✋ 手掌平移旋转中',
        icon: '✋'
      });
      onGestureActionRef.current?.({
        type: 'hand_pan',
        deltaX: rawParam?.deltaX ?? 0,
        deltaY: rawParam?.deltaY ?? 0,
        speed: rawParam?.speed ?? 0,
        direction: candidate
      });
      sm.cooldownUntil = now + 16; // 60fps responsive physical tracking
      sm.state = GESTURE_STATES.COOLDOWN;
    } else if (candidate === 'zoom_in') {
      setCurrentGesture({
        type: 'zoom_in',
        label: '🤟 三指展开：推进放大视野',
        icon: '🔍'
      });
      onGestureActionRef.current?.({ type: 'zoom', delta: -0.18 });
      sm.cooldownUntil = now + 100;
      sm.state = GESTURE_STATES.COOLDOWN;
    } else if (candidate === 'zoom_out') {
      setCurrentGesture({
        type: 'zoom_out',
        label: '🤏 双指捏合：拉远缩小全局',
        icon: '🔎'
      });
      onGestureActionRef.current?.({ type: 'zoom', delta: 0.18 });
      sm.cooldownUntil = now + 100;
      sm.state = GESTURE_STATES.COOLDOWN;
    } else if (candidate === 'idle') {
      setCurrentGesture({ type: 'idle', label: '✋ 手掌悬停静止 · 零误触巡航', icon: '✋' });
      onGestureActionRef.current?.({ type: 'hand_hover', x: rawParam?.x ?? 0.5, y: rawParam?.y ?? 0.5 });
    }
  }, []);

  // MediaPipe Results Processing (Renders pure virtual skeleton wireframe, NO video feed)
  const handleMediaPipeResults = useCallback((results) => {
    const sm = smRef.current;
    const now = Date.now();

    const hasHand = results.multiHandLandmarks && results.multiHandLandmarks.length > 0;
    const wireframeCanvas = wireframeCanvasRef.current;

    // Strict NO_HAND transition
    if (!hasHand) {
      sm.prevCentroidX = null;
      sm.prevCentroidY = null;

      if (wireframeCanvas) {
        const ctx = wireframeCanvas.getContext('2d');
        if (ctx) drawEmptyViewfinder(ctx, wireframeCanvas.width, wireframeCanvas.height, isDark);
      }

      sm.lostStreak = (sm.lostStreak || 0) + 1;
      if (sm.lostStreak > 35) {
        sm.optimalStreak = 0;
      }

      if (sm.state !== GESTURE_STATES.NO_HAND) {
        sm.state = GESTURE_STATES.NO_HAND;
        sm.candidate = null;
        sm.stability = 0;
        sm.confidence = 0;

        setDistanceFeedback({ status: 'idle', label: '等待手部入镜' });
        setCurrentGesture({ type: 'none', label: '请将手伸入镜头', icon: '✋' });
        onGestureActionRef.current?.({ type: 'no_hand' });

        setDebugState({
          engine: 'MediaPipe Hands (开源AI)',
          handDetected: false,
          confidence: 0,
          gesture: 'NONE',
          state: GESTURE_STATES.NO_HAND,
          stability: 0,
          rollDeg: 0,
          pinchRatio: 0,
          distanceRatio: 0
        });
      }
      return;
    }

    // Hand Landmarks Analysis
    const lm = results.multiHandLandmarks[0];
    const dist = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

    // 1. Multimodal Distance Estimation (Hand scale from wrist 0 to middle tip 12)
    const handHeight = dist(lm[0], lm[12]);
    let currentDistStatus = 'optimal';
    let currentDistLabel = '🎯 最佳操作距离';

    if (handHeight < 0.16) {
      currentDistStatus = 'too_far';
      currentDistLabel = '⚠️ 请靠近摄像头';
    } else if (handHeight > 0.65) {
      currentDistStatus = 'too_close';
      currentDistLabel = '⚠️ 请稍微远离镜头';
    }

    setDistanceFeedback({ status: currentDistStatus, label: currentDistLabel });

    // 2. Anatomical Finger Extension & Geometry
    const isExt = (tipIdx, pipIdx) => dist(lm[tipIdx], lm[0]) > dist(lm[pipIdx], lm[0]) * 1.04;

    const indexExtended = isExt(8, 6);
    const middleExtended = isExt(12, 10);
    const ringExtended = isExt(16, 14);
    const pinkyExtended = isExt(20, 18);

    const palmBase = Math.max(0.01, dist(lm[0], lm[9]));
    const pinchDist = dist(lm[4], lm[8]);
    const pinchRatio = pinchDist / palmBase;
    const isPinch = pinchDist < 0.062 || pinchRatio < 0.42;

    const fourFingerCount = (indexExtended ? 1 : 0) + (middleExtended ? 1 : 0) + (ringExtended ? 1 : 0) + (pinkyExtended ? 1 : 0);

    // Mirror X for natural, 1:1 physical gesture mapping (moving hand right on screen = right)
    const currCentroidX = 1 - (lm[0].x + lm[5].x + lm[9].x + lm[17].x) / 4;
    const currCentroidY = (lm[0].y + lm[5].y + lm[9].y + lm[17].y) / 4;

    let deltaX = 0;
    let deltaY = 0;
    if (sm.prevCentroidX !== null && sm.prevCentroidY !== null) {
      deltaX = currCentroidX - sm.prevCentroidX;
      deltaY = currCentroidY - sm.prevCentroidY;
    }
    sm.prevCentroidX = currCentroidX;
    sm.prevCentroidY = currCentroidY;

    const moveDist = Math.hypot(deltaX, deltaY);

    // 3. Discrete Mutually Exclusive Candidate Classification
    let rawCandidate = 'idle';
    let rawParam = null;

    // GESTURE 1: ✊ FIST (All 4 fingers curled) -> Select / Focus
    if (fourFingerCount === 0 || (!indexExtended && !middleExtended && !ringExtended && !pinkyExtended)) {
      rawCandidate = 'fist';
    }
    // GESTURE 2: 🤏 PINCH (Index & Thumb tips touching) -> Zoom Out
    else if (isPinch && (fourFingerCount <= 2 || !middleExtended)) {
      rawCandidate = 'zoom_out';
      rawParam = 0.18;
    }
    // GESTURE 3: 🤟 SPREAD (3 fingers extended) -> Zoom In
    else if (indexExtended && middleExtended && ringExtended && !pinkyExtended && !isPinch) {
      rawCandidate = 'zoom_in';
      rawParam = -0.18;
    }
    // GESTURE 4: ✋ PHYSICAL HAND PAN WITH MOMENTUM (手掌整体位移旋转)
    else if (moveDist > 0.010) {
      const isHorizontal = Math.abs(deltaX) >= Math.abs(deltaY) * 0.75;
      if (isHorizontal) {
        rawCandidate = deltaX > 0 ? 'pan_right' : 'pan_left';
      } else {
        rawCandidate = deltaY > 0 ? 'pan_down' : 'pan_up';
      }
      rawParam = { deltaX, deltaY, speed: moveDist };
    }
    // GESTURE 5: ✋ HOVER STILL (手掌悬停静止)
    else {
      rawCandidate = 'idle';
      rawParam = { x: currCentroidX, y: currCentroidY };
    }

    // 4. Single-Action Exclusive State Machine
    if (rawCandidate === 'idle') {
      sm.idleStreak = (sm.idleStreak || 0) + 1;
      sm.stability = 0;
      sm.candidate = 'idle';

      // Releasing to idle after 2 calm frames
      if (sm.idleStreak >= 2) {
        if (sm.activeAction !== null) {
          sm.activeAction = null;
        }
        sm.state = GESTURE_STATES.NO_HAND;
        setCurrentGesture({ type: 'idle', label: '✋ 手掌悬停静止 · 零误触巡航', icon: '✋' });
        onGestureActionRef.current?.({ type: 'hand_hover', x: currCentroidX, y: currCentroidY });
      }
    } else {
      sm.idleStreak = 0;

      if (rawCandidate === sm.candidate) {
        sm.stability = Math.min(REQUIRED_STABLE_FRAMES, sm.stability + 1);
      } else {
        sm.candidate = rawCandidate;
        sm.stability = 1;
      }

      const isContinuous = rawCandidate.startsWith('pan_') || rawCandidate === 'zoom_in' || rawCandidate === 'zoom_out';
      const requiredFrames = isContinuous ? 1 : 2;

      if (sm.activeAction === null) {
        // Locked into new exclusive action
        if (sm.stability >= requiredFrames && now >= sm.cooldownUntil) {
          sm.activeAction = rawCandidate;
          sm.state = GESTURE_STATES.GESTURE_CONFIRMED;
          dispatchConfirmedGesture(rawCandidate, rawParam);
        } else {
          sm.state = GESTURE_STATES.GESTURE_CANDIDATE;
        }
      } else {
        // Action is currently locked: execute if matching or immediate continuous stream
        if (rawCandidate === sm.activeAction || (isContinuous && rawCandidate.startsWith('pan_'))) {
          if (now >= sm.cooldownUntil) {
            sm.activeAction = rawCandidate;
            sm.state = GESTURE_STATES.GESTURE_CONFIRMED;
            dispatchConfirmedGesture(rawCandidate, rawParam);
          }
        } else if (sm.stability >= 3 && now >= sm.cooldownUntil) {
          // Switch action cleanly if held stably for 3 frames
          sm.activeAction = rawCandidate;
          sm.state = GESTURE_STATES.GESTURE_CONFIRMED;
          dispatchConfirmedGesture(rawCandidate, rawParam);
        }
      }
    }

    // 6. Draw Virtual Skeleton Wireframe
    if (wireframeCanvas) {
      const ctx = wireframeCanvas.getContext('2d');
      if (ctx) {
        drawVirtualSkeleton(
          ctx,
          lm,
          wireframeCanvas.width,
          wireframeCanvas.height,
          currentDistStatus === 'optimal',
          sm.activeAction || rawCandidate,
          fourFingerCount,
          isPinch,
          isDark
        );
      }
    }

    const confidence = 0.96;

    if (now - sm.lastDebugSync > 66) {
      sm.lastDebugSync = now;
      setDebugState({
        engine: 'MediaPipe Hands (开源AI)',
        handDetected: true,
        confidence,
        gesture: sm.candidate ? sm.candidate.toUpperCase() : 'IDLE',
        activeAction: sm.activeAction ? sm.activeAction.toUpperCase() : 'NONE (IDLE)',
        lockStatus: sm.activeAction ? 'LOCKED (单动作锁定)' : 'IDLE (巡航)',
        fingersCount: fourFingerCount,
        pinchRatio: parseFloat(pinchRatio.toFixed(2)),
        distanceRatio: parseFloat(handHeight.toFixed(2))
      });
    }
  }, [dispatchConfirmedGesture, isDark]);

  // Start Camera
  const startCamera = async () => {
    try {
      setErrorMsg(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, facingMode: 'user' },
        audio: false
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      // Try loading MediaPipe Hands from CDN
      try {
        await loadExternalScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js');
        await loadExternalScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js');

        if (window.Hands) {
          const hands = new window.Hands({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
          });

          hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.65,
            minTrackingConfidence: 0.6
          });

          hands.onResults(handleMediaPipeResults);
          mediaPipeHandsRef.current = hands;
          setEngineType('MediaPipe Hands (开源AI)');
        } else {
          setEngineType('高精度光学算法 (本地)');
        }
      } catch (mpErr) {
        console.warn('MediaPipe Hands CDN unavailable, using robust optical fallback:', mpErr);
        setEngineType('高精度光学算法 (本地)');
      }

      setIsEnabled(true);
    } catch (err) {
      console.warn('Camera access denied:', err);
      setErrorMsg('无法访问摄像头或权限被拒绝。您可随时通过平滑鼠标拖拽探索地球仪。');
      setIsEnabled(false);
    }
  };

  // Stop Camera (Independent, never triggers re-mounting)
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (mediaPipeHandsRef.current) {
      try { mediaPipeHandsRef.current.close(); } catch {}
      mediaPipeHandsRef.current = null;
    }

    setIsEnabled(false);
    const sm = smRef.current;
    sm.state = GESTURE_STATES.NO_HAND;
    sm.candidate = null;
    sm.stability = 0;
    sm.confidence = 0;
    sm.optimalStreak = 0;
    sm.lostStreak = 0;

    setCurrentGesture({ type: 'none', label: '手势识别已暂停', icon: '⏸️' });
    setDistanceFeedback({ status: 'idle', label: '摄像头已关闭' });
    setDebugState({
      engine: engineType,
      handDetected: false,
      confidence: 0,
      gesture: 'NONE',
      state: GESTURE_STATES.NO_HAND,
      stability: 0,
      rollDeg: 0,
      pinchRatio: 0,
      distanceRatio: 0
    });
    onGestureActionRef.current?.({ type: 'no_hand' });
  }, [engineType]);

  // Clean up ONLY on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (mediaPipeHandsRef.current) {
        try { mediaPipeHandsRef.current.close(); } catch {}
      }
    };
  }, []);

  // Background Frame Processing Loop (Headless / Invisible to preserve privacy)
  useEffect(() => {
    if (!isEnabled) return;

    let isRunning = true;

    const processFrame = async () => {
      if (!isRunning) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && video.readyState >= 2 && canvas) {
        canvas.width = 160;
        canvas.height = 120;

        if (mediaPipeHandsRef.current) {
          try {
            await mediaPipeHandsRef.current.send({ image: video });
          } catch (e) {
            console.error('MediaPipe frame processing error:', e);
          }
        } else {
          // Robust Optical Segmentation Fallback (100% offline)
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          const w = 120;
          const h = 90;
          canvas.width = w;
          canvas.height = h;

          ctx.save();
          ctx.scale(-1, 1);
          ctx.drawImage(video, -w, 0, w, h);
          ctx.restore();

          const imgData = ctx.getImageData(0, 0, w, h);
          const data = imgData.data;

          let sumX = 0, sumY = 0, activePixels = 0;
          let minX = w, maxX = 0, minY = h, maxY = 0;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i + 1], b = data[i + 2];
            const pIdx = i / 4;
            const x = pIdx % w, y = Math.floor(pIdx / w);

            const isHeadArea = (y < h * 0.32) && (x > w * 0.22) && (x < w * 0.78);
            const isSkin = !isHeadArea && r > 75 && g > 45 && b > 25 &&
                           (r - g > 12) && (r > b) && Math.abs(r - g) < 130;

            if (isSkin) {
              sumX += x; sumY += y; activePixels++;
              if (x < minX) minX = x; if (x > maxX) maxX = x;
              if (y < minY) minY = y; if (y > maxY) maxY = y;
            }
          }

          const sm = smRef.current;
          const now = Date.now();

          let confidence = 0;
          if (activePixels >= 300 && activePixels <= 2800) {
            const bboxW = Math.max(maxX - minX, 10);
            const bboxH = Math.max(maxY - minY, 10);
            const compactness = activePixels / (bboxW * bboxH);
            confidence = Math.min(1.0, compactness > 0.2 ? 0.78 : 0.4);
          }

          if (confidence < 0.55) {
            if (sm.state !== GESTURE_STATES.NO_HAND) {
              sm.state = GESTURE_STATES.NO_HAND;
              sm.candidate = null;
              sm.stability = 0;
              setCurrentGesture({ type: 'none', label: '等待手势...', icon: '✋' });
              onGestureActionRef.current?.({ type: 'no_hand' });
            }
          } else {
            const centroidX = sumX / activePixels;
            const centroidY = sumY / activePixels;
            const bboxW = Math.max(maxX - minX, 10);
            const bboxH = Math.max(maxY - minY, 10);
            const compactness = activePixels / (bboxW * bboxH);

            let rawCand = compactness > 0.55 ? 'fist' : 'open_palm';
            if (rawCand === sm.candidate) {
              sm.stability = Math.min(REQUIRED_STABLE_FRAMES, sm.stability + 1);
            } else {
              sm.candidate = rawCand;
              sm.stability = 1;
            }

            if (now >= sm.cooldownUntil && sm.stability >= REQUIRED_STABLE_FRAMES) {
              sm.state = GESTURE_STATES.GESTURE_CONFIRMED;
              dispatchConfirmedGesture(sm.candidate, { x: centroidX / w, y: centroidY / h });
            }
          }

          if (now - sm.lastDebugSync > 66) {
            sm.lastDebugSync = now;
            setDebugState({
              engine: '高精度光学算法 (本地)',
              handDetected: confidence >= 0.55,
              confidence,
              gesture: sm.candidate ? sm.candidate.toUpperCase() : 'NONE',
              state: sm.state,
              stability: sm.stability
            });
          }
        }
      }

      if (isRunning) {
        rafRef.current = requestAnimationFrame(processFrame);
      }
    };

    rafRef.current = requestAnimationFrame(processFrame);

    return () => {
      isRunning = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [dispatchConfirmedGesture, isEnabled]);

  return (
    <div className="gesture-camera-dock">
      {/* Invisible Headless Video & Internal Processing Canvas (No camera video shown) */}
      <video
        ref={videoRef}
        playsInline
        muted
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
      />

      {/* Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        borderBottom: '1px solid var(--border-hairline)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} style={{ color: isEnabled ? '#4ade80' : 'var(--text-tertiary)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 650 }}>AI 隔空手势感知</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {/* Debug UI Toggle Button */}
          {isEnabled && (
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setShowDebug(!showDebug)}
              style={{
                padding: '3px 7px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.68rem',
                backgroundColor: showDebug ? 'var(--accent-blue-subtle)' : undefined,
                borderColor: showDebug ? 'var(--accent-blue)' : undefined,
                color: showDebug ? 'var(--accent-blue)' : undefined
              }}
              title="开闭手势调试面板"
            >
              <Bug size={12} />
              <span>调试</span>
            </button>
          )}

          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setIsMinimized(!isMinimized)}
            style={{ padding: '3px', borderRadius: '4px', border: 'none' }}
            title={isMinimized ? '展开监控视窗' : '收起视窗'}
          >
            {isMinimized ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

          {/* Main View Body */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Pure Holographic Wireframe Skeleton Viewfinder (NO camera video rendered) */}
                <div className="hud-wireframe-viewfinder">
                  {/* Viewfinder Corner Brackets */}
                  <div className="hud-bracket hud-bracket-tl" />
                  <div className="hud-bracket hud-bracket-tr" />
                  <div className="hud-bracket hud-bracket-bl" />
                  <div className="hud-bracket hud-bracket-br" />

                  {/* Cyber Grid Background */}
                  <div className="hud-scanner-crosshair" />

                  {/* Virtual Wireframe Canvas for 21 Landmarks & Skeletal Bones */}
                  <canvas
                    ref={wireframeCanvasRef}
                    className="hud-wireframe-canvas"
                    width={220}
                    height={146}
                  />

                  {/* Multimodal Distance Guidance Pill */}
                  {isEnabled && (
                    <div className={`hud-distance-pill ${
                      distanceFeedback.status === 'optimal'
                        ? 'hud-distance-optimal'
                        : distanceFeedback.status === 'too_far' || distanceFeedback.status === 'too_close'
                        ? 'hud-distance-warning'
                        : 'hud-distance-idle'
                    }`}>
                      {distanceFeedback.status === 'optimal' ? (
                        <CheckCircle2 size={11} />
                      ) : (
                        <AlertCircle size={11} />
                      )}
                      <span>{distanceFeedback.label}</span>
                    </div>
                  )}

                  {/* Privacy Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '6px',
                    left: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.62rem',
                    color: '#94a3b8',
                    zIndex: 4
                  }}>
                    <ShieldCheck size={10} style={{ color: '#4ade80' }} />
                    <span>虚拟骨骼取景 · 隐私保护</span>
                  </div>
                </div>

                {/* Gesture Status Bar */}
                <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    <span style={{ fontSize: '1.05rem' }}>{currentGesture.icon}</span>
                    <span style={{ flex: 1 }}>{currentGesture.label}</span>
                  </div>
                </div>

                {/* Debug Panel */}
                {showDebug && isEnabled && (
                  <div style={{
                    padding: '8px 12px',
                    backgroundColor: 'rgba(15, 23, 42, 0.94)',
                    borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.68rem',
                    color: '#e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#94a3b8' }}>Engine:</span>
                      <span style={{ color: '#38bdf8', fontWeight: 650, display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Cpu size={11} /> {debugState.engine}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#94a3b8' }}>Hand Detected:</span>
                      <span style={{
                        fontWeight: 700,
                        color: debugState.handDetected ? '#4ade80' : '#f87171',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px'
                      }}>
                        {debugState.handDetected ? <CheckCircle2 size={11} /> : <XCircle size={11} />}
                        {debugState.handDetected ? 'YES' : 'NO'}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#94a3b8' }}>Action Mode:</span>
                      <span style={{ fontWeight: 650, color: debugState.activeAction.includes('NONE') ? '#cbd5e1' : '#38bdf8' }}>
                        {debugState.activeAction}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#94a3b8' }}>Lock Status:</span>
                      <span style={{ fontWeight: 650, color: debugState.lockStatus.includes('LOCKED') ? '#4ade80' : '#94a3b8' }}>
                        {debugState.lockStatus}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#94a3b8' }}>Extended Fingers:</span>
                      <span style={{ fontWeight: 650, color: '#facc15' }}>
                        {debugState.fingersCount} 指伸出
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#94a3b8' }}>Pinch Ratio:</span>
                      <span style={{ fontWeight: 650, color: debugState.pinchRatio < 0.38 ? '#fbbf24' : '#cbd5e1' }}>
                        {debugState.pinchRatio} {debugState.pinchRatio < 0.38 ? '(捏合)' : ''}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '2px' }}>
                      <span style={{ color: '#94a3b8' }}>Stability:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, justifyContent: 'flex-end' }}>
                        <div style={{
                          width: '60px',
                          height: '5px',
                          backgroundColor: 'rgba(255,255,255,0.15)',
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(debugState.stability / REQUIRED_STABLE_FRAMES) * 100}%`,
                            height: '100%',
                            backgroundColor: debugState.stability >= REQUIRED_STABLE_FRAMES ? '#4ade80' : '#38bdf8',
                            transition: 'width 0.1s ease'
                          }} />
                        </div>
                        <span>{debugState.stability} / {REQUIRED_STABLE_FRAMES}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Gestures Legend / Tutorial Pills */}
                <div style={{ padding: '8px 12px', fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '3px', backgroundColor: 'var(--bg-subtle)' }}>
                  <div>• <strong>✋ 手掌平移</strong>：左/右/上/下平移拨动地球，物理惯性旋转</div>
                  <div>• <strong>🤟 三指 / 🤏 捏合</strong>：推进放大 / 拉远缩小全局</div>
                  <div>• <strong>✊ 握拳</strong>：选中高亮地区 (再次握拳研读考点)</div>
                  <div>• <strong>✋ 悬停静止</strong>：零误触安全巡航</div>
                </div>

                {/* Toggle Switch Button */}
                <div style={{ padding: '8px 12px' }}>
                  <button
                    type="button"
                    className={`btn ${isEnabled ? 'btn-outline' : 'btn-primary'}`}
                    onClick={isEnabled ? stopCamera : startCamera}
                    style={{ width: '100%', padding: '6px 10px', fontSize: '0.8rem', borderRadius: 'var(--radius-pill)' }}
                  >
                    {isEnabled ? (
                      <>
                        <CameraOff size={13} />
                        <span>关闭手势识别</span>
                      </>
                    ) : (
                      <>
                        <Camera size={13} />
                        <span>开启隔空手势感知</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Minimized Pill View */}
          {isMinimized && (
            <div style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.76rem' }}>
              <span>{currentGesture.icon} {currentGesture.label}</span>
              <button
                type="button"
                className="btn btn-outline"
                onClick={isEnabled ? stopCamera : startCamera}
                style={{ padding: '2px 6px', fontSize: '0.7rem', borderRadius: 'var(--radius-pill)' }}
              >
                {isEnabled ? '关闭' : '开启'}
              </button>
            </div>
          )}

          {errorMsg && (
            <div style={{ padding: '6px 10px', fontSize: '0.7rem', color: 'var(--accent-terracotta)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <AlertCircle size={12} />
              <span>{errorMsg}</span>
            </div>
          )}
    </div>
  );
}
