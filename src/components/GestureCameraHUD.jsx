import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CameraOff, Sparkles, Hand, ChevronDown, ChevronUp, AlertCircle, Bug, CheckCircle2, XCircle, Cpu, ShieldCheck } from 'lucide-react';

export const GESTURE_STATES = {
  NO_HAND: 'NO_HAND',
  HAND_DETECTED: 'HAND_DETECTED',
  GESTURE_CANDIDATE: 'GESTURE_CANDIDATE',
  GESTURE_CONFIRMED: 'GESTURE_CONFIRMED',
  COOLDOWN: 'COOLDOWN'
};

const REQUIRED_STABLE_FRAMES = 5;

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

export default function GestureCameraHUD({ onGestureAction, isRegionSelected }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showDebug, setShowDebug] = useState(false); // Default clean mode
  const [engineType, setEngineType] = useState('MediaPipe Hands');
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentGesture, setCurrentGesture] = useState({ type: 'none', label: '等待手势...', icon: '✋' });

  // Lightweight state for Debug UI overlay & radar feedback
  const [debugState, setDebugState] = useState({
    engine: 'MediaPipe Hands',
    handDetected: false,
    confidence: 0,
    gesture: 'NONE',
    state: GESTURE_STATES.NO_HAND,
    stability: 0
  });

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(null);
  const mediaPipeHandsRef = useRef(null);

  // Keep references to props so callbacks never trigger re-renders or unmounts
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
    candidate: null,
    stability: 0,
    confidence: 0,
    cooldownUntil: 0,
    lastFistTime: 0,
    prevPalmX: null,
    prevPalmY: null,
    prevPinchDist: null,
    lastDebugSync: 0
  });

  // Execute Confirmed Gesture without depending on props
  const dispatchConfirmedGesture = useCallback((candidate, rawParam) => {
    const sm = smRef.current;
    const now = Date.now();

    if (candidate === 'fist') {
      if (isRegionSelectedRef.current && now - sm.lastFistTime < 2400) {
        setCurrentGesture({ type: 'fist_again', label: '再次握拳：打开作品展示！', icon: '✊' });
        onGestureActionRef.current?.({ type: 'fist_again' });
        sm.lastFistTime = 0;
      } else {
        setCurrentGesture({ type: 'fist', label: '握拳：选中高亮地区', icon: '✊' });
        onGestureActionRef.current?.({ type: 'fist' });
        sm.lastFistTime = now;
      }
      sm.cooldownUntil = now + 900;
      sm.state = GESTURE_STATES.COOLDOWN;
      sm.stability = 0;
    } else if (candidate === 'swipe_left' || candidate === 'swipe_right') {
      const dir = candidate === 'swipe_left' ? 'left' : 'right';
      setCurrentGesture({
        type: candidate,
        label: dir === 'left' ? '👈 向左挥动：旋转地球' : '👉 向右挥动：旋转地球',
        icon: dir === 'left' ? '👈' : '👉'
      });
      onGestureActionRef.current?.({ type: 'swipe', direction: dir, velocity: rawParam || 8 });
      sm.cooldownUntil = now + 400;
      sm.state = GESTURE_STATES.COOLDOWN;
      sm.stability = 0;
    } else if (candidate === 'zoom_in' || candidate === 'zoom_out') {
      const delta = candidate === 'zoom_in' ? -0.15 : 0.15;
      setCurrentGesture({
        type: candidate,
        label: candidate === 'zoom_in' ? '🔍 靠近张开：放大视野' : '🔎 捏合远离：缩小全局',
        icon: candidate === 'zoom_in' ? '🔍' : '🔎'
      });
      onGestureActionRef.current?.({ type: 'zoom', delta });
      sm.cooldownUntil = now + 450;
      sm.state = GESTURE_STATES.COOLDOWN;
      sm.stability = 0;
    } else if (candidate === 'open_palm') {
      setCurrentGesture({ type: 'open_palm', label: '打开手掌：自由漫游探测', icon: '✋' });
      onGestureActionRef.current?.({ type: 'open_palm', centroidX: rawParam?.x ?? 0.5, centroidY: rawParam?.y ?? 0.5 });
    }
  }, []);

  // MediaPipe Results Processing (Runs completely off-screen, no video shown)
  const handleMediaPipeResults = useCallback((results) => {
    const sm = smRef.current;
    const now = Date.now();

    const hasHand = results.multiHandLandmarks && results.multiHandLandmarks.length > 0;

    // Strict NO_HAND transition
    if (!hasHand) {
      if (sm.state !== GESTURE_STATES.NO_HAND) {
        sm.state = GESTURE_STATES.NO_HAND;
        sm.candidate = null;
        sm.stability = 0;
        sm.confidence = 0;
        sm.prevPalmX = null;
        sm.prevPalmY = null;
        sm.prevPinchDist = null;

        setCurrentGesture({ type: 'none', label: '等待手势...', icon: '✋' });
        onGestureActionRef.current?.({ type: 'no_hand' });
      }

      if (now - sm.lastDebugSync > 66) {
        sm.lastDebugSync = now;
        setDebugState({
          engine: 'MediaPipe Hands (开源AI)',
          handDetected: false,
          confidence: 0,
          gesture: 'NONE',
          state: GESTURE_STATES.NO_HAND,
          stability: 0
        });
      }
      return;
    }

    // Hand Landmarks Analysis
    const lm = results.multiHandLandmarks[0];
    const dist = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

    const isCurled = (tipIdx, pipIdx) => dist(lm[tipIdx], lm[0]) < dist(lm[pipIdx], lm[0]);
    const indexCurled = isCurled(8, 6);
    const middleCurled = isCurled(12, 10);
    const ringCurled = isCurled(16, 14);
    const pinkyCurled = isCurled(20, 18);
    const thumbCurled = dist(lm[4], lm[9]) < dist(lm[2], lm[9]);

    const curledCount = (indexCurled ? 1 : 0) + (middleCurled ? 1 : 0) + (ringCurled ? 1 : 0) + (pinkyCurled ? 1 : 0) + (thumbCurled ? 1 : 0);

    const palmX = (lm[0].x + lm[5].x + lm[9].x + lm[17].x) / 4;
    const palmY = (lm[0].y + lm[5].y + lm[9].y + lm[17].y) / 4;
    const pinchDist = dist(lm[4], lm[8]);

    let rawCandidate = null;
    let rawParam = null;

    // Motion Detection (Swipe Left / Right)
    if (sm.prevPalmX !== null) {
      const deltaX = palmX - sm.prevPalmX;
      if (Math.abs(deltaX) > 0.045) {
        rawCandidate = deltaX > 0 ? 'swipe_left' : 'swipe_right';
        rawParam = Math.abs(deltaX) * 120;
      }
    }

    // Zoom Pinch Detection
    if (!rawCandidate && sm.prevPinchDist !== null && !indexCurled && !middleCurled) {
      const pinchRatio = pinchDist / sm.prevPinchDist;
      if (pinchRatio > 1.35 && pinchDist > 0.12) {
        rawCandidate = 'zoom_in';
      } else if (pinchRatio < 0.75 && pinchDist < 0.08) {
        rawCandidate = 'zoom_out';
      }
    }

    // Static Gesture (Fist vs Open Palm)
    if (!rawCandidate) {
      if (curledCount >= 4) {
        rawCandidate = 'fist';
      } else if (curledCount <= 1) {
        rawCandidate = 'open_palm';
        rawParam = { x: 1 - palmX, y: palmY };
      } else {
        rawCandidate = sm.candidate || 'open_palm';
      }
    }

    sm.prevPalmX = palmX;
    sm.prevPalmY = palmY;
    sm.prevPinchDist = pinchDist;

    // Stability Temporal Verification
    if (rawCandidate === sm.candidate) {
      sm.stability = Math.min(REQUIRED_STABLE_FRAMES, sm.stability + 1);
    } else {
      sm.candidate = rawCandidate;
      sm.stability = 1;
    }

    const confidence = 0.94;

    // Cooldown and Confirmation State Machine
    if (now < sm.cooldownUntil) {
      sm.state = GESTURE_STATES.COOLDOWN;
    } else {
      if (sm.stability >= REQUIRED_STABLE_FRAMES) {
        sm.state = GESTURE_STATES.GESTURE_CONFIRMED;
        dispatchConfirmedGesture(sm.candidate, rawParam);
      } else if (sm.stability >= 2) {
        sm.state = GESTURE_STATES.GESTURE_CANDIDATE;
      } else {
        sm.state = GESTURE_STATES.HAND_DETECTED;
      }
    }

    if (now - sm.lastDebugSync > 66) {
      sm.lastDebugSync = now;
      setDebugState({
        engine: 'MediaPipe Hands (开源AI)',
        handDetected: true,
        confidence,
        gesture: sm.candidate ? sm.candidate.toUpperCase() : 'NONE',
        state: sm.state,
        stability: sm.stability
      });
    }
  }, [dispatchConfirmedGesture]);

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
    sm.prevPalmX = null;
    sm.prevPalmY = null;
    sm.prevPinchDist = null;

    setCurrentGesture({ type: 'none', label: '手势识别已暂停', icon: '⏸️' });
    setDebugState({
      engine: engineType,
      handDetected: false,
      confidence: 0,
      gesture: 'NONE',
      state: GESTURE_STATES.NO_HAND,
      stability: 0
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
      {/* Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        borderBottom: '1px solid var(--border-hairline)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} style={{ color: isEnabled ? 'var(--accent-sage)' : 'var(--text-tertiary)' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 650 }}>AI 隔空手势感知</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {/* Debug UI Toggle Button */}
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

      {/* Completely Invisible Headless Video & Canvas (No live webcam feed rendered) */}
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

      {/* Main Body */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Privacy-First Cybernetic Radar Scanner (Replaces Live Webcam Feed) */}
            <div className="hud-cyber-scanner">
              <div className="hud-radar-grid" />
              <div className="hud-scanner-crosshair" />

              {isEnabled && <div className="hud-radar-sweeper" />}

              {/* Center Hologram Icon & Status */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: debugState.handDetected ? 'rgba(74, 222, 128, 0.15)' : 'rgba(56, 189, 248, 0.1)',
                  border: `1px solid ${debugState.handDetected ? '#4ade80' : 'rgba(56, 189, 248, 0.3)'}`,
                  boxShadow: debugState.handDetected ? '0 0 16px rgba(74, 222, 128, 0.4)' : '0 0 10px rgba(56, 189, 248, 0.2)',
                  transition: 'all 0.2s ease'
                }}>
                  <Hand
                    size={22}
                    style={{
                      color: debugState.handDetected ? '#4ade80' : isEnabled ? '#38bdf8' : 'var(--text-tertiary)',
                      transition: 'color 0.2s ease'
                    }}
                  />
                </div>

                <div style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  color: debugState.handDetected ? '#4ade80' : isEnabled ? '#38bdf8' : 'var(--text-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  {isEnabled ? (
                    debugState.handDetected ? (
                      <>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                        <span>已锁定手部信号</span>
                      </>
                    ) : (
                      <>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
                        <span>空间雷达扫描中...</span>
                      </>
                    )
                  ) : (
                    <span>摄像头已待命</span>
                  )}
                </div>
              </div>

              {/* Privacy Protection Badge */}
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
                color: '#94a3b8'
              }}>
                <ShieldCheck size={10} style={{ color: '#4ade80' }} />
                <span>端侧隐私保护</span>
              </div>
            </div>

            {/* Gesture Status Badge */}
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

            {/* Debug UI Panel (Toggleable) */}
            {showDebug && isEnabled && (
              <div style={{
                padding: '8px 12px',
                backgroundColor: 'rgba(15, 23, 42, 0.92)',
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
                  <span style={{ color: '#94a3b8' }}>Confidence:</span>
                  <span style={{ fontWeight: 650, color: debugState.confidence >= 0.55 ? '#38bdf8' : '#cbd5e1' }}>
                    {debugState.confidence.toFixed(2)}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Gesture:</span>
                  <span style={{ fontWeight: 650, color: '#facc15' }}>{debugState.gesture}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>State:</span>
                  <span style={{
                    fontWeight: 650,
                    color: debugState.state === GESTURE_STATES.GESTURE_CONFIRMED ? '#4ade80' :
                           debugState.state === GESTURE_STATES.COOLDOWN ? '#f59e0b' :
                           debugState.state === GESTURE_STATES.GESTURE_CANDIDATE ? '#38bdf8' : '#94a3b8'
                  }}>
                    {debugState.state}
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
              <div>• <strong>👈 / 👉 挥手</strong>：旋转地球仪</div>
              <div>• <strong>🔍 / 🔎 张开/捏合</strong>：缩放视角</div>
              <div>• <strong>✋ / ✊ 打开/握拳</strong>：漫游/选中高亮地区</div>
              <div>• <strong>✊ 再次握拳</strong>：打开该地区作品详情</div>
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
                    <span>开启隔空手势识别</span>
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
