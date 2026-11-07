import React, { useRef, useEffect, useCallback } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function FireworksCanvas({ triggerCount = 0 }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const isVisibleRef = useRef(true);
  const prefersReducedMotion = useReducedMotion();

  // Color palettes for festival sparklers
  const fireworkColors = [
    '#F5C76A', '#FF9E1B', '#E63946', '#06D6A0', '#118AB2', '#FF70A6', '#FFF4DC', '#FFA500'
  ];

  // Helper to create a burst of particles at (x, y)
  const createBurst = useCallback((x, y) => {
    if (prefersReducedMotion) return;

    const count = prefersReducedMotion ? 10 : 36;
    const baseColor = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.2 - 0.1);
      const speed = Math.random() * 4.5 + 1.5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.015,
        color: Math.random() > 0.4 ? baseColor : '#FFF4DC',
        size: Math.random() * 2.5 + 1.5,
        gravity: 0.06,
        friction: 0.98
      });
    }
  }, [prefersReducedMotion]);

  // Handle external trigger
  useEffect(() => {
    if (triggerCount > 0 && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = rect.width * (0.3 + Math.random() * 0.4);
      const y = rect.height * (0.25 + Math.random() * 0.35);
      createBurst(x, y);
      // Double burst with slight delay
      setTimeout(() => {
        createBurst(rect.width * (0.2 + Math.random() * 0.6), rect.height * (0.2 + Math.random() * 0.4));
      }, 160);
    }
  }, [triggerCount, createBurst]);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Pause animation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const render = () => {
      if (isVisibleRef.current && ctx && width && height) {
        // Subtle trail clear
        ctx.fillStyle = 'rgba(8, 10, 24, 0.25)';
        ctx.fillRect(0, 0, width, height);

        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.vx *= p.friction;
          p.vy *= p.friction;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Click on canvas to burst
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createBurst(x, y);
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleCanvasClick}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        cursor: 'crosshair',
        touchAction: 'manipulation'
      }}
      aria-label="Interactive fireworks sky. Click or tap to launch celebratory fireworks."
    />
  );
}
