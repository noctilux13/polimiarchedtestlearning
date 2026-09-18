import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CameraOff, Sparkles, Hand, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Eye } from 'lucide-react';

export default function GestureCameraHUD({ onGestureAction, isRegionSelected, selectedRegion }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentGesture, setCurrentGesture] = useState({ type: 'none', label: '等待手势...', icon: '✋' });

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(null);

  // Vision tracking internal states
  const historyRef = useRef({
    prevX: null,
    prevY: null,
    prevArea: null,
    consecutiveFist: 0,
    consecutivePalm: 0,
    lastFistTime: 0,
    hasTriggeredFistAgain: false,
    fistCooldown: 0
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

  // Stop Camera
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
    setCurrentGesture({ type: 'none', label: '手势识别已暂停', icon: '⏸️' });
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  // Optical Hand Processing Loop
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

      // Hand skin-tone & motion mask extraction
      let sumX = 0;
      let sumY = 0;
      let activePixels = 0;
      let minX = w, maxX = 0, minY = h, maxY = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Skin-luma color space filter (YCbCr inspired robust range)
        const isSkin = r > 70 && g > 40 && b > 20 &&
                       (r - g > 12) && (r > b) &&
                       Math.abs(r - g) < 140;

        const pixelIdx = i / 4;
        const x = pixelIdx % w;
        const y = Math.floor(pixelIdx / w);

        // Discard top 10% and bottom 10% to eliminate face/torso dominance if centered
        if (isSkin && y > h * 0.15) {
          sumX += x;
          sumY += y;
          activePixels++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;

          // Draw visual feedback mask on canvas
          data[i] = 120;
          data[i + 1] = 200;
          data[i + 2] = 255;
        }
      }

      ctx.putImageData(imgData, 0, 0);

      const hist = historyRef.current;
      const now = Date.now();

      if (activePixels > 240) {
        const centroidX = sumX / activePixels;
        const centroidY = sumY / activePixels;
        const bboxW = Math.max(maxX - minX, 10);
        const bboxH = Math.max(maxY - minY, 10);
        const bboxArea = bboxW * bboxH;
        const compactness = activePixels / bboxArea; // Fist is dense (>0.58), Open Palm is dispersed (<0.45)

        // Draw Centroid Indicator
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(centroidX, centroidY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(minX, minY, bboxW, bboxH);

        // 1. Gesture: Fist vs Open Palm
        if (compactness > 0.54) {
          hist.consecutiveFist++;
          hist.consecutivePalm = 0;
        } else if (compactness < 0.46) {
          hist.consecutivePalm++;
          hist.consecutiveFist = 0;
        }

        // Fist detected (Confirmed over 3 frames)
        if (hist.consecutiveFist >= 3 && now - hist.fistCooldown > 800) {
          hist.consecutiveFist = 0;
          hist.fistCooldown = now;

          // Check if this is "Fist Again" (within 2.2s of selecting a region)
          if (isRegionSelected && now - hist.lastFistTime < 2400) {
            setCurrentGesture({ type: 'fist_again', label: '再次握拳：打开作品展示！', icon: '✊' });
            onGestureAction?.({ type: 'fist_again' });
            hist.lastFistTime = 0;
          } else {
            setCurrentGesture({ type: 'fist', label: '握拳：选中当前高亮地区', icon: '✊' });
            onGestureAction?.({ type: 'fist' });
            hist.lastFistTime = now;
          }
        }
        // Open Palm (Confirmed over 3 frames)
        else if (hist.consecutivePalm >= 3) {
          setCurrentGesture({ type: 'open_palm', label: '打开手掌：自由漫游探测', icon: '✋' });
          onGestureAction?.({ type: 'open_palm', centroidX: centroidX / w, centroidY: centroidY / h });
        }

        // 2. Gesture: Swipe Left / Swipe Right
        if (hist.prevX !== null) {
          const deltaX = centroidX - hist.prevX;
          if (Math.abs(deltaX) > 7) {
            if (deltaX > 7) {
              setCurrentGesture({ type: 'swipe_right', label: '👉 向右挥动：旋转地球', icon: '👉' });
              onGestureAction?.({ type: 'swipe', direction: 'right', velocity: Math.abs(deltaX) });
            } else {
              setCurrentGesture({ type: 'swipe_left', label: '👈 向左挥动：旋转地球', icon: '👈' });
              onGestureAction?.({ type: 'swipe', direction: 'left', velocity: Math.abs(deltaX) });
            }
          }
        }

        // 3. Gesture: Pinch / Spread (Zoom)
        if (hist.prevArea !== null && bboxArea > 300) {
          const areaRatio = bboxArea / hist.prevArea;
          if (areaRatio > 1.25) {
            setCurrentGesture({ type: 'zoom_in', label: '🔍 靠近张开：放大视野', icon: '🔍' });
            onGestureAction?.({ type: 'zoom', delta: -0.15 });
          } else if (areaRatio < 0.78) {
            setCurrentGesture({ type: 'zoom_out', label: '🔎 捏合远离：缩小全局', icon: '🔎' });
            onGestureAction?.({ type: 'zoom', delta: 0.15 });
          }
        }

        hist.prevX = centroidX;
        hist.prevY = centroidY;
        hist.prevArea = bboxArea;
      } else {
        hist.prevX = null;
        hist.prevY = null;
        hist.prevArea = null;
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
            <div style={{ position: 'relative', width: '100%', height: '140px', backgroundColor: '#070a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                  color: '#4ade80'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                  <span>实时感应中</span>
                </div>
              )}
            </div>

            {/* Gesture Status Badge */}
            <div style={{ padding: '9px 12px', borderBottom: '1px solid var(--border-hairline)' }}>
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
