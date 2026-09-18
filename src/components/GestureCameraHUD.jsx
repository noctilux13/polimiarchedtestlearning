import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CameraOff, Sparkles, Hand, ChevronDown, ChevronUp, AlertCircle, Bug, CheckCircle2, XCircle } from 'lucide-react';

export const GESTURE_STATES = {
  NO_HAND: 'NO_HAND',
  HAND_DETECTED: 'HAND_DETECTED',
  GESTURE_CANDIDATE: 'GESTURE_CANDIDATE',
  GESTURE_CONFIRMED: 'GESTURE_CONFIRMED',
  COOLDOWN: 'COOLDOWN'
};

const REQUIRED_STABLE_FRAMES = 5;

export default function GestureCameraHUD({ onGestureAction, isRegionSelected, selectedRegion }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showDebug, setShowDebug] = useState(true); // Toggleable Debug UI
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentGesture, setCurrentGesture] = useState({ type: 'none', label: '等待手势...', icon: '✋' });

  // Lightweight state for the Debug UI overlay
  const [debugState, setDebugState] = useState({
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

  // High-performance State Machine & Optical Tracking internal refs
  const smRef = useRef({
    state: GESTURE_STATES.NO_HAND,
    candidate: null,
    stability: 0,
    confidence: 0,
    cooldownUntil: 0,
    lastFistTime: 0,
    prevX: null,
    prevY: null,
    prevArea: null,
    lastDebugSync: 0
  });

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
        videoRef.current.play();
      }
      setIsEnabled(true);
    } catch (err) {
      console.warn('Camera access denied or unavailable:', err);
      setErrorMsg('无法访问摄像头或权限已被拒绝。您仍可通过鼠标平滑控制 3D 地球仪。');
      setIsEnabled(false);
    }
  };

  // Stop Camera & Reset State Machine completely
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsEnabled(false);
    const sm = smRef.current;
    sm.state = GESTURE_STATES.NO_HAND;
    sm.candidate = null;
    sm.stability = 0;
    sm.confidence = 0;
    sm.prevX = null;
    sm.prevY = null;
    sm.prevArea = null;

    setCurrentGesture({ type: 'none', label: '手势识别已暂停', icon: '⏸️' });
    setDebugState({
      handDetected: false,
      confidence: 0,
      gesture: 'NONE',
      state: GESTURE_STATES.NO_HAND,
      stability: 0
    });
    onGestureAction?.({ type: 'no_hand' });
  }, [onGestureAction]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  // Optical Hand Processing & State Machine Loop
  useEffect(() => {
    if (!isEnabled) return;

    const processFrame = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas || video.readyState < 2) {
        rafRef.current = requestAnimationFrame(processFrame);
        return;
      }

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      const w = 120;
      const h = 90;
      canvas.width = w;
      canvas.height = h;

      // Draw mirrored video frame
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(video, -w, 0, w, h);
      ctx.restore();

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      // Step A: Skin-tone & Hand Geometric Segmentation
      let sumX = 0;
      let sumY = 0;
      let activePixels = 0;
      let minX = w, maxX = 0, minY = h, maxY = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const pixelIdx = i / 4;
        const x = pixelIdx % w;
        const y = Math.floor(pixelIdx / w);

        // Filter out the upper-center head/face area where webcam users usually sit
        const isHeadArea = (y < h * 0.32) && (x > w * 0.22) && (x < w * 0.78);

        // Robust human skin color metric (YCbCr / normalized RGB range)
        const isSkin = !isHeadArea &&
                       r > 75 && g > 45 && b > 25 &&
                       (r - g > 12) && (r > b) &&
                       Math.abs(r - g) < 130;

        if (isSkin) {
          sumX += x;
          sumY += y;
          activePixels++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;

          // Mask feedback tint
          data[i] = Math.min(255, data[i] + 30);
          data[i + 1] = Math.min(255, data[i + 1] + 80);
          data[i + 2] = Math.min(255, data[i + 2] + 120);
        }
      }

      ctx.putImageData(imgData, 0, 0);

      const sm = smRef.current;
      const now = Date.now();

      // Step B: Calculate Hand Confidence (0.00 ~ 1.00)
      // Normal single hand at 120x90 occupies between 300 and 2600 pixels
      let handConfidence = 0;
      let bboxW = 0, bboxH = 0, bboxArea = 0, compactness = 0;
      let centroidX = 0, centroidY = 0;

      if (activePixels >= 280 && activePixels <= 3000) {
        centroidX = sumX / activePixels;
        centroidY = sumY / activePixels;
        bboxW = Math.max(maxX - minX, 10);
        bboxH = Math.max(maxY - minY, 10);
        bboxArea = bboxW * bboxH;
        compactness = activePixels / Math.max(10, bboxArea);

        const aspectRatio = bboxW / bboxH;
        const pixelScore = Math.max(0, 1.0 - Math.abs(activePixels - 1200) / 1600);
        const aspectScore = (aspectRatio >= 0.45 && aspectRatio <= 2.1) ? 1.0 : Math.max(0, 1.0 - Math.abs(aspectRatio - 1.2));
        const compactnessScore = (compactness >= 0.22 && compactness <= 0.86) ? 1.0 : Math.max(0, 1.0 - Math.abs(compactness - 0.5) * 2);

        handConfidence = Math.max(0, Math.min(1.0, pixelScore * 0.4 + aspectScore * 0.3 + compactnessScore * 0.3));
      }

      sm.confidence = handConfidence;

      // Step C: Strict State Machine Evaluation
      // 1. NO_HAND Condition (< 0.55 confidence)
      if (handConfidence < 0.55) {
        if (sm.state !== GESTURE_STATES.NO_HAND) {
          sm.state = GESTURE_STATES.NO_HAND;
          sm.candidate = null;
          sm.stability = 0;
          sm.prevX = null;
          sm.prevY = null;
          sm.prevArea = null;

          setCurrentGesture({ type: 'none', label: '未检测到手部', icon: '✋' });
          onGestureAction?.({ type: 'no_hand' });
        }

        // Throttle debug update to ~15fps
        if (now - sm.lastDebugSync > 66) {
          sm.lastDebugSync = now;
          setDebugState({
            handDetected: false,
            confidence: Number(handConfidence.toFixed(2)),
            gesture: 'NONE',
            state: GESTURE_STATES.NO_HAND,
            stability: 0
          });
        }

        rafRef.current = requestAnimationFrame(processFrame);
        return;
      }

      // 2. HAND_DETECTED (confidence >= 0.55)
      // Visual feedback: Draw Bounding Box and Centroid
      const stateStrokeColor = sm.state === GESTURE_STATES.GESTURE_CONFIRMED ? '#4ade80' :
                               sm.state === GESTURE_STATES.COOLDOWN ? '#f59e0b' :
                               sm.state === GESTURE_STATES.GESTURE_CANDIDATE ? '#38bdf8' : '#94a3b8';

      ctx.strokeStyle = stateStrokeColor;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(minX, minY, bboxW, bboxH);

      ctx.fillStyle = stateStrokeColor;
      ctx.beginPath();
      ctx.arc(centroidX, centroidY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Step D: Classify Raw Gesture Candidate for this frame
      let rawCandidate = null;
      let rawVelocity = 0;

      // Check horizontal movement (Swipe)
      if (sm.prevX !== null) {
        const deltaX = centroidX - sm.prevX;
        if (Math.abs(deltaX) > 7.5) {
          rawCandidate = deltaX > 0 ? 'swipe_right' : 'swipe_left';
          rawVelocity = Math.abs(deltaX);
        }
      }

      // Check zoom via bounding box area ratio
      if (!rawCandidate && sm.prevArea !== null && bboxArea > 350) {
        const areaRatio = bboxArea / sm.prevArea;
        if (areaRatio > 1.30) {
          rawCandidate = 'zoom_in';
        } else if (areaRatio < 0.72) {
          rawCandidate = 'zoom_out';
        }
      }

      // Check static shape (Fist vs Open Palm)
      if (!rawCandidate) {
        if (compactness > 0.56) {
          rawCandidate = 'fist';
        } else if (compactness < 0.48) {
          rawCandidate = 'open_palm';
        } else {
          rawCandidate = sm.candidate || 'open_palm';
        }
      }

      sm.prevX = centroidX;
      sm.prevY = centroidY;
      sm.prevArea = bboxArea;

      // Step E: Temporal Frame Stability Verification
      if (rawCandidate === sm.candidate) {
        sm.stability = Math.min(REQUIRED_STABLE_FRAMES, sm.stability + 1);
      } else {
        sm.candidate = rawCandidate;
        sm.stability = 1;
      }

      // Step F: Check Cooldown
      if (now < sm.cooldownUntil) {
        sm.state = GESTURE_STATES.COOLDOWN;
      } else {
        // Step G: Gesture Confirmation (Must hold 5 consecutive frames)
        if (sm.stability >= REQUIRED_STABLE_FRAMES) {
          sm.state = GESTURE_STATES.GESTURE_CONFIRMED;

          if (sm.candidate === 'fist') {
            // Check if this is "Fist Again" (within 2.4s of selecting a region)
            if (isRegionSelected && now - sm.lastFistTime < 2400) {
              setCurrentGesture({ type: 'fist_again', label: '再次握拳：打开作品展示！', icon: '✊' });
              onGestureAction?.({ type: 'fist_again' });
              sm.lastFistTime = 0;
            } else {
              setCurrentGesture({ type: 'fist', label: '握拳：选中高亮地区', icon: '✊' });
              onGestureAction?.({ type: 'fist' });
              sm.lastFistTime = now;
            }
            sm.cooldownUntil = now + 900;
            sm.state = GESTURE_STATES.COOLDOWN;
            sm.stability = 0;
          } else if (sm.candidate === 'swipe_left' || sm.candidate === 'swipe_right') {
            const dir = sm.candidate === 'swipe_left' ? 'left' : 'right';
            setCurrentGesture({
              type: sm.candidate,
              label: dir === 'left' ? '👈 向左挥动：旋转地球' : '👉 向右挥动：旋转地球',
              icon: dir === 'left' ? '👈' : '👉'
            });
            onGestureAction?.({ type: 'swipe', direction: dir, velocity: rawVelocity || 8 });
            sm.cooldownUntil = now + 400;
            sm.state = GESTURE_STATES.COOLDOWN;
            sm.stability = 0;
          } else if (sm.candidate === 'zoom_in' || sm.candidate === 'zoom_out') {
            const delta = sm.candidate === 'zoom_in' ? -0.15 : 0.15;
            setCurrentGesture({
              type: sm.candidate,
              label: sm.candidate === 'zoom_in' ? '🔍 靠近张开：放大视野' : '🔎 捏合远离：缩小全局',
              icon: sm.candidate === 'zoom_in' ? '🔍' : '🔎'
            });
            onGestureAction?.({ type: 'zoom', delta });
            sm.cooldownUntil = now + 450;
            sm.state = GESTURE_STATES.COOLDOWN;
            sm.stability = 0;
          } else if (sm.candidate === 'open_palm') {
            // Continuous wandering raycast
            setCurrentGesture({ type: 'open_palm', label: '打开手掌：自由漫游探测', icon: '✋' });
            onGestureAction?.({ type: 'open_palm', centroidX: centroidX / w, centroidY: centroidY / h });
          }
        } else if (sm.stability >= 2) {
          sm.state = GESTURE_STATES.GESTURE_CANDIDATE;
        } else {
          sm.state = GESTURE_STATES.HAND_DETECTED;
        }
      }

      // Step H: Update Debug State
      if (now - sm.lastDebugSync > 66) {
        sm.lastDebugSync = now;
        setDebugState({
          handDetected: true,
          confidence: Number(handConfidence.toFixed(2)),
          gesture: sm.candidate ? sm.candidate.toUpperCase() : 'NONE',
          state: sm.state,
          stability: sm.stability
        });
      }

      rafRef.current = requestAnimationFrame(processFrame);
    };

    rafRef.current = requestAnimationFrame(processFrame);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isEnabled, isRegionSelected, onGestureAction]);

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
          <span style={{ fontSize: '0.8rem', fontWeight: 650 }}>AI 隔空手势识别</span>
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
            title="一键开闭手势识别调试面板"
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

      {/* Main Body */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Video & Vision Feedback Canvas */}
            <div style={{ position: 'relative', width: '100%', height: '140px', backgroundColor: '#070a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <video
                ref={videoRef}
                playsInline
                muted
                style={{ display: 'none' }}
              />
              <canvas
                ref={canvasRef}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: isEnabled ? 'block' : 'none'
                }}
              />

              {!isEnabled && (
                <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-tertiary)' }}>
                  <Hand size={28} style={{ margin: '0 auto 6px auto', opacity: 0.6 }} />
                  <div style={{ fontSize: '0.74rem' }}>点击下方开启手势感知</div>
                </div>
              )}

              {isEnabled && (
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.66rem',
                  color: debugState.handDetected ? '#4ade80' : '#94a3b8'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: debugState.handDetected ? '#4ade80' : '#94a3b8' }} />
                  <span>{debugState.handDetected ? '手部追踪中' : '搜索手部...'}</span>
                </div>
              )}
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
                    <span>关闭手势摄像头</span>
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
