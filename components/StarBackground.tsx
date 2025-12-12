'use client';

import React, { useRef, useEffect } from 'react';

function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedX: number;
      speedY: number;
      type: 'star' | 'dust';
    }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 3000);
      const numDust = Math.floor((canvas.width * canvas.height) / 1000);

      // Background Stars
      for (let i = 0; i < numStars; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random() * 0.8 + 0.2,
          speedX: (Math.random() - 0.5) * 0.05,
          speedY: (Math.random() - 0.5) * 0.05,
          type: 'star',
        });
      }

      // Foreground Stardust
      for (let i = 0; i < numDust; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 0.8,
          alpha: Math.random() * 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          type: 'dust',
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === 'star') {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          // Twinkle
          if (Math.random() > 0.99) p.alpha = Math.random() * 0.8 + 0.2;
        } else {
          ctx.fillStyle = `rgba(0, 243, 255, ${p.alpha})`; // Cyan tint for dust
          // Shimmer
          p.alpha += (Math.random() - 0.5) * 0.02;
          if (p.alpha < 0) p.alpha = 0;
          if (p.alpha > 0.5) p.alpha = 0.5;
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Dense Nebula Background */}
      <div
        className="absolute inset-0 bg-space-black"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, var(--color-space-nebula) 0%, transparent 80%),
            radial-gradient(circle at 80% 20%, var(--color-space-purple) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, var(--color-space-deep) 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
          opacity: 0.6
        }}
      />
      {/* Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export default React.memo(StarBackground);
