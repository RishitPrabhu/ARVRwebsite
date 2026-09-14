'use client';

import { useEffect, useRef } from 'react';

type Point3D = [number, number, number];

type PolygonShape = {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  spin: number;
  tilt: number;
  phase: number;
  color: string;
  geometry: Geometry;
};

type AnimatedShape = PolygonShape & {
  scatterX: number;
  scatterY: number;
};

type Geometry = {
  vertices: Point3D[];
  edges: [number, number][];
};

function createSphereGeometry(ringCount: number, segmentCount: number): Geometry {
  const vertices: Point3D[] = [[0, -1, 0]];
  const edges: [number, number][] = [];

  for (let ring = 1; ring <= ringCount; ring += 1) {
    const latitude = (Math.PI * ring) / (ringCount + 1);
    const y = Math.cos(latitude);
    const radius = Math.sin(latitude);

    for (let segment = 0; segment < segmentCount; segment += 1) {
      const longitude = (Math.PI * 2 * segment) / segmentCount;
      vertices.push([Math.cos(longitude) * radius, y, Math.sin(longitude) * radius]);
    }
  }

  const bottomIndex = vertices.length;
  vertices.push([0, 1, 0]);

  for (let segment = 0; segment < segmentCount; segment += 1) {
    const firstRingIndex = 1 + segment;
    edges.push([0, firstRingIndex]);
    edges.push([bottomIndex, 1 + (ringCount - 1) * segmentCount + segment]);
  }

  for (let ring = 0; ring < ringCount; ring += 1) {
    const ringStart = 1 + ring * segmentCount;
    const nextRingStart = ringStart + segmentCount;

    for (let segment = 0; segment < segmentCount; segment += 1) {
      const nextSegment = (segment + 1) % segmentCount;
      edges.push([ringStart + segment, ringStart + nextSegment]);

      if (ring < ringCount - 1) {
        edges.push([ringStart + segment, nextRingStart + segment]);
      }
    }
  }

  return { vertices, edges };
}

const GEOMETRIES: Record<string, Geometry> = {
  cube: {
    vertices: [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7], [0, 6], [1, 7], [2, 4], [3, 5],
    ],
  },
  diamond: {
    vertices: [[0, -1.4, 0], [1, 0, 0], [0, 1.4, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [1, 4], [2, 4], [3, 4],
      [0, 5], [1, 5], [2, 5], [3, 5],
    ],
  },
  pyramid: {
    vertices: [[-1, 0.8, -1], [1, 0.8, -1], [1, 0.8, 1], [-1, 0.8, 1], [0, -1.2, 0]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [1, 4], [2, 4], [3, 4]],
  },
  tetrahedron: {
    vertices: [[0, -1.2, 0], [-1, 0.6, -0.8], [1, 0.6, -0.8], [0, 0.6, 1]],
    edges: [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1]],
  },
  prism: {
    vertices: [[-1, -0.8, -0.65], [0, -0.8, 0.95], [1, -0.8, -0.65], [-1, 0.8, -0.65], [0, 0.8, 0.95], [1, 0.8, -0.65]],
    edges: [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 3], [0, 3], [1, 4], [2, 5]],
  },
  octahedron: {
    vertices: [[0, -1.4, 0], [1, 0, 0], [0, 0, 1], [-1, 0, 0], [0, 0, -1], [0, 1.4, 0]],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [5, 1], [5, 2], [5, 3], [5, 4], [1, 2], [2, 3], [3, 4], [4, 1]],
  },
  doublePyramid: {
    vertices: [[0, -1.4, 0], [-1, 0, -1], [1, 0, -1], [1, 0, 1], [-1, 0, 1], [0, 1.4, 0]],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [2, 3], [3, 4], [4, 1], [5, 1], [5, 2], [5, 3], [5, 4]],
  },
  hexPrism: {
    vertices: [[-1, -0.7, 0], [-0.5, -0.7, 0.86], [0.5, -0.7, 0.86], [1, -0.7, 0], [0.5, -0.7, -0.86], [-0.5, -0.7, -0.86], [-1, 0.7, 0], [-0.5, 0.7, 0.86], [0.5, 0.7, 0.86], [1, 0.7, 0], [0.5, 0.7, -0.86], [-0.5, 0.7, -0.86]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 6], [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11]],
  },
  sphere: createSphereGeometry(3, 7),
};

const SHAPES: PolygonShape[] = [
  { x: -0.58, y: -0.12, z: 0.35, size: 0.16, speed: 0.34, spin: 0.9, tilt: 0.45, phase: 0.2, color: '#4DE8FF', geometry: GEOMETRIES.cube },
  { x: 0.56, y: -0.28, z: 0.05, size: 0.21, speed: 0.22, spin: -0.55, tilt: 0.75, phase: 1.8, color: '#FF4DA6', geometry: GEOMETRIES.diamond },
  { x: 0.44, y: 0.38, z: 0.65, size: 0.13, speed: 0.42, spin: 1.25, tilt: 0.3, phase: 3.4, color: '#FFC24D', geometry: GEOMETRIES.pyramid },
  { x: -0.42, y: 0.45, z: 0.25, size: 0.11, speed: 0.28, spin: -1.1, tilt: 0.6, phase: 4.2, color: '#4DE8FF', geometry: GEOMETRIES.tetrahedron },
  { x: 0.04, y: -0.46, z: 0.8, size: 0.09, speed: 0.3, spin: 0.8, tilt: 0.9, phase: 5.1, color: '#FF4DA6', geometry: GEOMETRIES.prism },
  { x: -0.1, y: 0.12, z: 0.15, size: 0.07, speed: 0.5, spin: -1.4, tilt: 0.35, phase: 2.4, color: '#FFC24D', geometry: GEOMETRIES.diamond },
  { x: 0.72, y: 0.08, z: 0.5, size: 0.08, speed: 0.26, spin: 1.5, tilt: 0.8, phase: 0.8, color: '#4DE8FF', geometry: GEOMETRIES.tetrahedron },
  { x: -0.74, y: 0.18, z: 0.7, size: 0.1, speed: 0.2, spin: -0.7, tilt: 0.55, phase: 4.8, color: '#FF4DA6', geometry: GEOMETRIES.prism },
  { x: 0.18, y: 0.58, z: 0.35, size: 0.08, speed: 0.32, spin: -1.2, tilt: 0.5, phase: 1.2, color: '#FFC24D', geometry: GEOMETRIES.octahedron },
  { x: -0.18, y: -0.68, z: 0.3, size: 0.07, speed: 0.4, spin: 1.1, tilt: 0.65, phase: 2.8, color: '#4DE8FF', geometry: GEOMETRIES.doublePyramid },
  { x: 0.78, y: 0.52, z: 0.6, size: 0.075, speed: 0.24, spin: -1.4, tilt: 0.4, phase: 4.5, color: '#FF4DA6', geometry: GEOMETRIES.hexPrism },
  { x: -0.82, y: -0.42, z: 0.75, size: 0.085, speed: 0.3, spin: 0.75, tilt: 0.9, phase: 5.6, color: '#FFC24D', geometry: GEOMETRIES.sphere },
  { x: 0.84, y: -0.56, z: 0.25, size: 0.065, speed: 0.46, spin: -0.9, tilt: 0.3, phase: 3.7, color: '#4DE8FF', geometry: GEOMETRIES.sphere },
  { x: -0.62, y: 0.62, z: 0.5, size: 0.07, speed: 0.27, spin: 1.3, tilt: 0.7, phase: 0.5, color: '#FF4DA6', geometry: GEOMETRIES.sphere },
  { x: 0.3, y: 0.68, z: 0.85, size: 0.06, speed: 0.35, spin: -1.5, tilt: 0.5, phase: 2.1, color: '#FFC24D', geometry: GEOMETRIES.octahedron },
];

function rotatePoint(point: Point3D, rotation: number, tilt: number): Point3D {
  const [x, y, z] = point;
  const cosRotation = Math.cos(rotation);
  const sinRotation = Math.sin(rotation);
  const rotatedX = x * cosRotation - z * sinRotation;
  const rotatedZ = x * sinRotation + z * cosRotation;
  const cosTilt = Math.cos(tilt);
  const sinTilt = Math.sin(tilt);

  return [rotatedX, y * cosTilt - rotatedZ * sinTilt, y * sinTilt + rotatedZ * cosTilt];
}

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let frameId = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let pointerX = 0;
    let pointerY = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shapes: AnimatedShape[] = SHAPES.map((shape) => ({
      ...shape,
      scatterX: 0,
      scatterY: 0,
    }));

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const drawShape = (shape: AnimatedShape, time: number) => {
      const depth = 1 + shape.z;
      const sceneScale = Math.min(width, height);
      const rotation = time * shape.speed * shape.spin + shape.phase;
      const points = shape.geometry.vertices.map((vertex) => {
        const rotated = rotatePoint(vertex, rotation, shape.tilt);
        const perspective = 1 / (2.4 - rotated[2]);
        return {
          x: width * (0.5 + shape.x * 0.55 + shape.scatterX) + rotated[0] * shape.size * sceneScale * perspective,
          y: height * (0.5 + shape.y * 0.72 + shape.scatterY) + rotated[1] * shape.size * sceneScale * perspective,
          depth: rotated[2] * depth,
        };
      });

      context.lineWidth = shape.size > 0.2 ? 1.15 : 0.8;
      context.strokeStyle = shape.color;
      context.globalAlpha = shape.size > 0.2 ? 0.3 : 0.2;
      context.beginPath();
      shape.geometry.edges.forEach(([start, end]) => {
        context.moveTo(points[start].x, points[start].y);
        context.lineTo(points[end].x, points[end].y);
      });
      context.stroke();

      context.fillStyle = shape.color;
      context.globalAlpha = 0.55;
      points.forEach((point) => {
        context.beginPath();
        context.arc(point.x, point.y, shape.size > 0.2 ? 1.8 : 1.2, 0, Math.PI * 2);
        context.fill();
      });
    };

    const render = (timestamp: number) => {
      const time = reducedMotion ? 1 : timestamp * 0.001;
      context.clearRect(0, 0, width, height);
      shapes.forEach((shape) => {
        const shapeX = shape.x * 0.55;
        const shapeY = shape.y * 0.72;
        const distanceX = shapeX - pointerX;
        const distanceY = shapeY - pointerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const scatterStrength = distance < 0.5 ? (0.5 - distance) * 0.38 : 0;
        const targetX = distance > 0 ? (distanceX / distance) * scatterStrength : 0;
        const targetY = distance > 0 ? (distanceY / distance) * scatterStrength : 0;
        shape.scatterX += (reducedMotion ? 0 : targetX - shape.scatterX) * 0.08;
        shape.scatterY += (reducedMotion ? 0 : targetY - shape.scatterY) * 0.08;
      });
      context.save();
      context.translate(pointerX * 8, pointerY * 5);
      shapes.forEach((shape) => drawShape(shape, time));
      context.restore();
      context.globalAlpha = 1;
      frameId = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" aria-hidden="true" />;
}
