"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo del hero: rejilla técnica en deriva lenta y dos halos rosas que
 * orbitan. El puntero desplaza los halos unos pocos píxeles.
 * Con prefers-reduced-motion no se registra nada y el CSS apaga el movimiento.
 */
export default function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        node.style.setProperty("--mx", x.toFixed(3));
        node.style.setProperty("--my", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="backdrop" ref={ref} aria-hidden="true">
      <span className="backdrop__grid" />
      <span className="backdrop__halo backdrop__halo--a" />
      <span className="backdrop__halo backdrop__halo--b" />
      <span className="backdrop__sweep" />
    </div>
  );
}
