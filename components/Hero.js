'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import * as THREE from 'three';

export default function Hero() {
  const canvasRef = useRef(null);
  const clockTextRef = useRef(null);

  // Session clock in the telemetry corner
  useEffect(() => {
    const tick = () => {
      const t = new Date();
      if (clockTextRef.current) {
        clockTextRef.current.textContent = [t.getHours(), t.getMinutes(), t.getSeconds()]
          .map((n) => String(n).padStart(2, '0'))
          .join(':');
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Three.js scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080f, 0.035);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    scene.add(new THREE.AmbientLight(0x404a7a, 0.8));
    const pCyan = new THREE.PointLight(0x4de8ff, 1.6, 30);
    pCyan.position.set(6, 4, 6);
    scene.add(pCyan);
    const pMag = new THREE.PointLight(0xff4da6, 1.4, 30);
    pMag.position.set(-6, -3, 5);
    scene.add(pMag);

    // Portal core
    const core = new THREE.Group();
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.1, 1),
      new THREE.MeshStandardMaterial({ color: 0x0e1124, metalness: 0.6, roughness: 0.35, flatShading: true })
    );
    const icoWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.12, 1),
      new THREE.MeshBasicMaterial({ color: 0x4de8ff, wireframe: true, transparent: true, opacity: 0.5 })
    );
    core.add(ico, icoWire);

    const inner = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.85, 0),
      new THREE.MeshBasicMaterial({ color: 0xff4da6, wireframe: true, transparent: true, opacity: 0.85 })
    );
    core.add(inner);
    scene.add(core);

    // Orbit rings
    function ring(radius, color, tiltX, tiltZ) {
      const r = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.015, 8, 120),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 })
      );
      r.rotation.set(tiltX, 0, tiltZ);
      scene.add(r);
      return r;
    }
    const ring1 = ring(3.2, 0x4de8ff, Math.PI / 2.4, 0.3);
    const ring2 = ring(3.55, 0xff4da6, Math.PI / 1.9, -0.45);

    // Floating satellites
    const sats = [];
    const satGeos = [
      new THREE.TetrahedronGeometry(0.28),
      new THREE.BoxGeometry(0.3, 0.3, 0.3),
      new THREE.OctahedronGeometry(0.26),
    ];
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(
        satGeos[i % 3],
        new THREE.MeshStandardMaterial({
          color: i % 2 ? 0x4de8ff : 0xff4da6,
          emissive: i % 2 ? 0x103a44 : 0x441030,
          metalness: 0.5,
          roughness: 0.4,
          flatShading: true,
        })
      );
      m.userData = {
        r: 3.6 + Math.random() * 2.6,
        speed: 0.15 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
        yAmp: (Math.random() - 0.5) * 2.4,
        spin: 0.5 + Math.random(),
      };
      scene.add(m);
      sats.push(m);
    }

    // Starfield
    const N = 900;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 46;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 4;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: 0x8c9cff, size: 0.05, transparent: true, opacity: 0.8 })
    );
    scene.add(stars);

    // Grid floor
    const grid = new THREE.GridHelper(60, 60, 0x4de8ff, 0x1a2050);
    grid.position.y = -4.6;
    grid.material.transparent = true;
    grid.material.opacity = 0.22;
    scene.add(grid);

    // Mouse parallax
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);
    resize();

    const clock = new THREE.Clock();
    let raf;
    function animate() {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const dt = reduceMotion ? 0.08 : 1;

      core.rotation.y = t * 0.18 * dt;
      core.rotation.x = Math.sin(t * 0.22) * 0.18 * dt;
      inner.rotation.x = t * 0.7 * dt;
      inner.rotation.z = t * 0.5 * dt;
      inner.scale.setScalar(1 + Math.sin(t * 1.8) * 0.06 * dt);

      ring1.rotation.z = 0.3 + t * 0.1 * dt;
      ring2.rotation.z = -0.45 - t * 0.08 * dt;

      sats.forEach((s) => {
        const u = s.userData;
        const a = u.phase + t * u.speed * dt;
        s.position.set(Math.cos(a) * u.r, Math.sin(a * 0.7) * u.yAmp, Math.sin(a) * u.r * 0.6);
        s.rotation.x = t * u.spin * dt;
        s.rotation.y = t * u.spin * 0.7 * dt;
      });

      stars.rotation.y = t * 0.012 * dt;
      grid.position.z = (t * 1.2 * dt) % 1;

      tx += (mx - tx) * 0.04;
      ty += (my - ty) * 0.04;
      camera.position.x = tx * 1.4;
      camera.position.y = -ty * 0.9;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();

    // Cleanup on unmount — important in React
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((mat) => mat.dispose());
        }
      });
    };
  }, []);

  return (
    <div id="hero">
      <canvas id="three-canvas" ref={canvasRef} />
      <div className="hero-frame">
        <i /><i /><i /><i />
      </div>
      <div className="hero-telemetry">
        FOV <span>110°</span> · IPD <span>63.5mm</span>
        <br />
        RENDER <span>WEBGL · 60FPS</span>
        <br />
        SESSION <span ref={clockTextRef}>--:--:--</span>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-eyebrow">// AR · VR · Game Development</div>
        <h1>
          <span className="chroma" data-text="BUILD WORLDS.">BUILD WORLDS.</span>
          <br />
          <span className="alt">BREAK REALITY.</span>
        </h1>
        <p className="hero-sub">
          The official AR/VR &amp; Game Development Club of Symbiosis Institute of Technology, Pune —
          where students design immersive experiences, ship playable games, and prototype the spatial web.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-primary" href="/join">
            Join the Club →
          </Link>
          <Link className="btn btn-ghost" href="/projects">
            Explore Projects
          </Link>
        </div>
      </div>
      <div className="scroll-hint">SCROLL ▾</div>
    </div>
  );
}
