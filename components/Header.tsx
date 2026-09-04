"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Wordmark from "./Wordmark";
import { NAV } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El menú móvil se cierra al cambiar de página.
  useEffect(() => setOpen(false), [pathname]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <header className={`header ${stuck ? "is-stuck" : ""} ${open ? "is-open" : ""}`.trim()}>
      <div className="wrap header__bar">
        <Link href="/" className="logo" aria-label="Kovex, ir al inicio">
          <Wordmark title="Kovex" />
        </Link>

        <nav className="nav" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__cta">
          <Link href="/contacto" className="btn btn--pink btn--sm">
            Agendar demo
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "cerrar" : "menu"} className="icon icon--sm" />
          </button>
        </div>
      </div>

      <div id="menu-movil" className={`mobile-nav ${open ? "is-open" : ""}`.trim()}>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isCurrent(item.href) ? "page" : undefined}
          >
            <span>{item.label}</span>
            {isCurrent(item.href) ? <span className="dot dot--sm" aria-hidden="true" /> : null}
          </Link>
        ))}
        <Link href="/contacto" className="btn btn--pink btn--block">
          Agendar demo
        </Link>
      </div>
    </header>
  );
}
