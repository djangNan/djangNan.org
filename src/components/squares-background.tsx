"use client";

import { useEffect, useRef } from "react";

const SQUARE_SIZE = 52;
const SPEED = 0.32;
const GLOW_RADIUS = 220;

export function SquaresBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const handleMove = (e: MouseEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.active = true;
    };
    const handleLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isDark = document.documentElement.classList.contains("dark");

      ctx.clearRect(0, 0, w, h);

      if (!reducedMotion) {
        offsetRef.current.x = (offsetRef.current.x + SPEED) % SQUARE_SIZE;
        offsetRef.current.y = (offsetRef.current.y + SPEED * 0.6) % SQUARE_SIZE;
      }

      const startX = -offsetRef.current.x;
      const startY = -offsetRef.current.y;

      ctx.strokeStyle = isDark
        ? "rgba(255,255,255,0.055)"
        : "rgba(10,10,10,0.055)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = startX; x < w + SQUARE_SIZE; x += SQUARE_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = startY; y < h + SQUARE_SIZE; y += SQUARE_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      const p = pointerRef.current;
      if (p.active) {
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          GLOW_RADIUS,
        );
        gradient.addColorStop(0, "rgba(249,115,22,0.22)");
        gradient.addColorStop(0.5, "rgba(249,115,22,0.06)");
        gradient.addColorStop(1, "rgba(249,115,22,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(
          p.x - GLOW_RADIUS,
          p.y - GLOW_RADIUS,
          GLOW_RADIUS * 2,
          GLOW_RADIUS * 2,
        );

        const cellX =
          Math.floor((p.x - startX) / SQUARE_SIZE) * SQUARE_SIZE + startX;
        const cellY =
          Math.floor((p.y - startY) / SQUARE_SIZE) * SQUARE_SIZE + startY;
        ctx.fillStyle = isDark
          ? "rgba(249,115,22,0.14)"
          : "rgba(249,115,22,0.1)";
        ctx.fillRect(cellX, cellY, SQUARE_SIZE, SQUARE_SIZE);
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="squares-vignette" />
      <div className="noise-overlay" />
    </div>
  );
}
