"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Etiqueta = "div" | "section" | "nav" | "article" | "aside" | "ul" | "li" | "p";

type Props = {
  children: ReactNode;
  as?: Etiqueta;
  delay?: number;
  className?: string;
};

/**
 * Entrada por fade + 12px de desplazamiento al aparecer en pantalla.
 * Con prefers-reduced-motion el contenido se pinta de inmediato, sin observador.
 */
export default function Reveal({ children, as = "div", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducido || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Lo que ya quedó por encima del viewport al cargar (enlace con ancla,
    // vuelta atrás, recarga a media página) se pinta de inmediato: el
    // observador nunca dispara hacia arriba y quedaría invisible.
    if (node.getBoundingClientRect().bottom <= 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // El tipo se fija en "div" para que TS acepte ref/className; en tiempo de
  // ejecución se renderiza la etiqueta semántica que pide cada uso.
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
