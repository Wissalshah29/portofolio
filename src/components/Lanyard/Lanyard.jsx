import { useRef, useEffect, useCallback } from 'react';
import './Lanyard.css';

const ROPE_LENGTH = 200; // px from anchor to card top
const GRAVITY    = 0.5;
const DAMPING    = 0.975;
const MAX_ANGLE  = 1.1; // radians (~63°)

export default function Lanyard() {
  const sceneRef  = useRef(null);
  const cardRef   = useRef(null);
  const ropeRef   = useRef(null);
  const animRef   = useRef(null);

  // Mutable physics state — no re-renders needed
  const state = useRef({
    angle   : 0.25,   // initial tilt
    vel     : 0,
    dragging: false,
    prevX   : 0,
    dragVx  : 0,
  });

  const getAnchorX = () => (sceneRef.current?.offsetWidth ?? 260) / 2;

  const applyTransforms = useCallback((angleDeg, cardX, cardY) => {
    if (ropeRef.current) {
      ropeRef.current.style.transform  = `translateX(-50%) rotate(${angleDeg}deg)`;
      ropeRef.current.style.height     = ROPE_LENGTH + 'px';
    }
    if (cardRef.current) {
      cardRef.current.style.left      = cardX + 'px';
      cardRef.current.style.top       = cardY + 'px';
      cardRef.current.style.transform = `translateX(-50%) rotate(${angleDeg}deg)`;
    }
  }, []);

  const tick = useCallback(() => {
    const s = state.current;

    if (!s.dragging) {
      // Simple pendulum: α = -(g/L)·sin(θ)
      s.vel += -(GRAVITY / ROPE_LENGTH) * Math.sin(s.angle) * ROPE_LENGTH * 0.01;
      s.vel *= DAMPING;
      s.angle += s.vel;
    }

    const angleDeg = s.angle * (180 / Math.PI);
    const anchorX  = getAnchorX();
    const cardX    = anchorX + Math.sin(s.angle) * ROPE_LENGTH;
    const cardY    = 7       + Math.cos(s.angle) * ROPE_LENGTH;

    applyTransforms(angleDeg, cardX, cardY);
    animRef.current = requestAnimationFrame(tick);
  }, [applyTransforms]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [tick]);

  // ── Drag handlers ──────────────────────────────────────────────
  const onPointerDown = useCallback((e) => {
    e.preventDefault();
    const s = state.current;
    s.dragging = true;
    s.prevX    = e.clientX;
    s.dragVx   = 0;
    cardRef.current?.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    const s = state.current;
    if (!s.dragging) return;

    const rect = sceneRef.current?.getBoundingClientRect();
    if (!rect) return;

    const anchorX = getAnchorX();
    const anchorY = rect.top + 7;
    const dx      = e.clientX - (rect.left + anchorX);
    const dy      = e.clientY - anchorY;
    const angle   = Math.atan2(dx, Math.max(dy, 10));

    s.angle  = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, angle));
    s.dragVx = e.clientX - s.prevX;
    s.prevX  = e.clientX;
  }, []);

  const onPointerUp = useCallback(() => {
    const s    = state.current;
    s.dragging = false;
    s.vel      = s.dragVx * 0.012;
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup',   onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup',   onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  return (
    <div className="lanyard-wrapper">
      <div className="lanyard-scene" ref={sceneRef}>

        {/* Anchor bolt */}
        <div className="lanyard-anchor" />

        {/* Rope */}
        <div className="lanyard-rope" ref={ropeRef} />

        {/* Card */}
        <div
          className="lanyard-card"
          ref={cardRef}
          onPointerDown={onPointerDown}
        >
          <div className="card-hole" />
          <div className="card-photo-wrap">
            <img
              src="/portofolio/assets/wissal.png"
              alt="Wissal Shah"
              draggable={false}
            />
          </div>
          <div className="card-stripe" />
          <div className="card-body">
            <h3>Wissal Shah</h3>
            <p>AI Automation · Full-Stack Dev</p>
            <span className="card-badge">Open to Work</span>
          </div>
        </div>

      </div>
    </div>
  );
}
