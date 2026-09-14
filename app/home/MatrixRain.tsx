'use client';

import { useEffect, useRef } from 'react';

type Stream = {
  x: number;
  y: number;
  speed: number;
  length: number;
  fontSize: number;
  phase: number;
  characters: string[];
};

const CHARACTER_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]()*+-=#$%';
const STREAM_COUNT = 76;

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const streams: Stream[] = [];

    const randomCharacter = () => CHARACTER_SET[Math.floor(Math.random() * CHARACTER_SET.length)];

    const createStream = (index: number): Stream => ({
      x: (index / STREAM_COUNT) * 1.1 - 0.05,
      y: Math.random() * 1.2 - 1.2,
      speed: 0.035 + Math.random() * 0.085,
      length: 8 + Math.floor(Math.random() * 15),
      fontSize: 12 + Math.random() * 7,
      phase: Math.random() * Math.PI * 2,
      characters: Array.from({ length: 22 }, randomCharacter),
    });

    for (let index = 0; index < STREAM_COUNT; index += 1) {
      streams.push(createStream(index));
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const render = (timestamp: number) => {
      const time = timestamp * 0.001;
      context.clearRect(0, 0, width, height);
      context.textAlign = 'center';
      context.textBaseline = 'top';

      streams.forEach((stream) => {
        const x = stream.x * width + Math.sin(time * 0.35 + stream.phase) * 10;
        const headY = stream.y * height;

        for (let index = 0; index < stream.length; index += 1) {
          const y = headY + index * stream.fontSize;
          if (y < -stream.fontSize || y > height + stream.fontSize) continue;

          const brightness = index === 0 ? 0.2 : Math.max(0.03, 0.11 - index * 0.006);
          const character = stream.characters[index % stream.characters.length];
          context.font = `${stream.fontSize}px 'IBM Plex Mono', monospace`;
          context.fillStyle = `rgba(91, 255, 138, ${brightness})`;
          context.fillText(character, x, y);
        }

        if (!reducedMotion) {
          stream.y += stream.speed / Math.max(height / 720, 1);
          if (stream.y * height > height + stream.length * stream.fontSize) {
            stream.y = -Math.random() * 0.35;
            stream.characters = Array.from({ length: 22 }, randomCharacter);
          }
        }
      });

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}
