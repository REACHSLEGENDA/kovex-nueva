"use client";

import { useEffect, useRef } from "react";

type Point3D = { x: number; y: number; z: number };
type Edge = [number, number];

const TOTAL_POINTS = 78;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const POINTS: Point3D[] = Array.from({ length: TOTAL_POINTS }, (_, index) => {
  const y = 1 - (index / (TOTAL_POINTS - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const angle = index * GOLDEN_ANGLE;

  return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
});

const EDGES: Edge[] = POINTS.flatMap((point, index) =>
  POINTS.slice(index + 1).flatMap((candidate, offset) => {
    const dx = point.x - candidate.x;
    const dy = point.y - candidate.y;
    const dz = point.z - candidate.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    return distance < 0.48 ? ([[index, index + offset + 1]] as Edge[]) : [];
  })
);

export default function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let currentX = -0.08;
    let currentY = -0.34;
    let targetX = reducedMotion ? -0.08 : 0;
    let targetY = reducedMotion ? 0.08 : -0.04;

    const draw = () => {
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      const mobile = width < 700;
      const centerX = width * (mobile ? 0.74 : 0.81);
      const centerY = height * (mobile ? 0.43 : 0.48);
      const radius = Math.min(
        height * (mobile ? 0.32 : 0.43),
        width * (mobile ? 0.54 : 0.34)
      );
      const cosX = Math.cos(currentX);
      const sinX = Math.sin(currentX);
      const cosY = Math.cos(currentY);
      const sinY = Math.sin(currentY);

      const projected = POINTS.map((point) => {
        const rotatedX = point.x * cosY - point.z * sinY;
        const rotatedZ = point.x * sinY + point.z * cosY;
        const rotatedY = point.y * cosX - rotatedZ * sinX;
        const depth = point.y * sinX + rotatedZ * cosX;
        const perspective = 2.7 / (3.25 - depth);

        return {
          x: centerX + rotatedX * radius * perspective,
          y: centerY + rotatedY * radius * perspective,
          z: depth,
          scale: perspective,
        };
      });

      const aura = context.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 1.2
      );
      aura.addColorStop(0, "rgba(255, 30, 142, .055)");
      aura.addColorStop(0.55, "rgba(255, 30, 142, .022)");
      aura.addColorStop(1, "rgba(255, 30, 142, 0)");
      context.fillStyle = aura;
      context.fillRect(
        centerX - radius * 1.25,
        centerY - radius * 1.25,
        radius * 2.5,
        radius * 2.5
      );

      context.lineWidth = 0.8;
      EDGES.forEach(([fromIndex, toIndex]) => {
        const from = projected[fromIndex];
        const to = projected[toIndex];
        const depth = Math.max(0, (from.z + to.z + 1.25) / 3.25);
        if (depth < 0.14) return;

        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.strokeStyle = `rgba(255, 30, 142, ${0.035 + depth * 0.17})`;
        context.stroke();
      });

      projected
        .map((point, index) => ({ ...point, index }))
        .sort((a, b) => a.z - b.z)
        .forEach((point) => {
          const depth = Math.max(0.18, (point.z + 1) / 2);
          const pointRadius = (point.index % 9 === 0 ? 2.4 : 1.35) * point.scale;
          context.beginPath();
          context.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
          context.fillStyle =
            point.index % 9 === 0
              ? `rgba(255, 30, 142, ${0.35 + depth * 0.55})`
              : `rgba(255, 255, 255, ${0.1 + depth * 0.42})`;
          context.fill();
        });

      context.save();
      context.translate(centerX, centerY);
      context.rotate(currentY * 0.18);
      context.beginPath();
      context.ellipse(0, 0, radius * 0.97, radius * 0.28, 0, 0, Math.PI * 2);
      context.strokeStyle = "rgba(255, 30, 142, .15)";
      context.lineWidth = 1;
      context.setLineDash([3, 9]);
      context.stroke();
      context.restore();
    };

    const animate = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      draw();

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        frame = requestAnimationFrame(animate);
      }
    };

    const requestDraw = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(animate);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      draw();
    };

    const updateTarget = () => {
      targetX = pointerY * -0.18;
      targetY = -0.04 + pointerX * 0.34 + window.scrollY * 0.00014;
      requestDraw();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
      pointerY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
      updateTarget();
    };

    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      updateTarget();
    };

    const onVisibilityChange = () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!document.hidden) {
        requestDraw();
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (!reducedMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", onPointerLeave);
      window.addEventListener("scroll", updateTarget, { passive: true });
      requestDraw();
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("scroll", updateTarget);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-globe" aria-hidden="true" />;
}
