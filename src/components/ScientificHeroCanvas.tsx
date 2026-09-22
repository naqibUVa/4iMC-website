"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  colorType: number; // 0: primary, 1: secondary, 2: tertiary/glow
  isChromosomeNode?: boolean;
}

export function ScientificHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Mouse interaction
    const mouse = { x: -1000, y: -1000, radius: 140 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Colors according to theme
    const getPalette = () => {
      if (theme === "light-academic") {
        return {
          primary: "rgba(0, 51, 102, ",     // Duke blue
          secondary: "rgba(29, 78, 216, ",  // Royal blue
          tertiary: "rgba(2, 132, 199, ",   // Sky blue
          link: "rgba(0, 51, 102, 0.08)",
          chromAlpha: 0.25,
        };
      } else if (theme === "multiplex-imaging") {
        return {
          primary: "rgba(34, 211, 238, ",   // Cyan (Alexa 488)
          secondary: "rgba(244, 63, 94, ",  // Magenta (Alexa 568)
          tertiary: "rgba(192, 132, 252, ", // Purple (Cy5)
          link: "rgba(192, 132, 252, 0.12)",
          chromAlpha: 0.65,
        };
      } else {
        // dark-scientific
        return {
          primary: "rgba(56, 189, 248, ",   // Electric sky
          secondary: "rgba(6, 182, 212, ",  // Cyan
          tertiary: "rgba(129, 140, 248, ", // Indigo
          link: "rgba(56, 189, 248, 0.10)",
          chromAlpha: 0.45,
        };
      }
    };

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 14000), 75);

      // 1. Ambient microscopy fluorophore particles
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2.2 + 1.0,
          alpha: Math.random() * 0.4 + 0.2,
          colorType: Math.floor(Math.random() * 3),
          isChromosomeNode: false,
        });
      }

      // 2. Chromosome structure nodes (subtle paired longitudinal arms on right side)
      const cx = width > 768 ? width * 0.72 : width * 0.5;
      const cy = height * 0.5;
      const armLength = Math.min(height * 0.35, 220);
      const nodeCount = 38;

      for (let i = 0; i < nodeCount; i++) {
        const t = (i / (nodeCount - 1)) * 2 - 1; // -1 to 1 along chromosome axis
        // Centromere constriction: narrow at t = 0
        const constriction = 1.0 - 0.65 * Math.exp(-12 * t * t);
        const armWidth = 24 * constriction;

        // Sister chromatid left
        const xOffsetLeft = -armWidth + (Math.random() - 0.5) * 8;
        const yPosLeft = cy + t * armLength + (Math.random() - 0.5) * 6;

        particles.push({
          x: cx + xOffsetLeft,
          y: yPosLeft,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 2.5 + 1.2,
          alpha: Math.random() * 0.5 + 0.3,
          colorType: Math.abs(t) < 0.15 ? 1 : i % 2 === 0 ? 0 : 2, // Centromere has warm accent
          isChromosomeNode: true,
        });

        // Sister chromatid right
        const xOffsetRight = armWidth + (Math.random() - 0.5) * 8;
        const yPosRight = cy + t * armLength + (Math.random() - 0.5) * 6;

        particles.push({
          x: cx + xOffsetRight,
          y: yPosRight,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 2.5 + 1.2,
          alpha: Math.random() * 0.5 + 0.3,
          colorType: Math.abs(t) < 0.15 ? 1 : i % 2 === 0 ? 2 : 0,
          isChromosomeNode: true,
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const palette = getPalette();

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wall bounce with soft damping
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse gentle repulsion / pull
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Color
        let colorPrefix = palette.primary;
        if (p.colorType === 1) colorPrefix = palette.secondary;
        if (p.colorType === 2) colorPrefix = palette.tertiary;

        const finalAlpha = p.isChromosomeNode ? p.alpha * palette.chromAlpha * 1.8 : p.alpha;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${colorPrefix}${finalAlpha})`;
        ctx.shadowColor = `${colorPrefix}0.6)`;
        ctx.shadowBlur = p.isChromosomeNode ? 10 : 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw subtle transport network edges between nearby particles
      ctx.lineWidth = 0.75;
      const maxDistance = width > 768 ? 105 : 75;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const edgeAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = palette.link.replace(/[\d\.]+\)$/, `${edgeAlpha})`);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 transition-opacity duration-700"
      />
      {/* Radial depth gradient overlay to ensure text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 35% 50%, transparent 20%, var(--bg-canvas) 85%)",
        }}
      />
    </div>
  );
}
