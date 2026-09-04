"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

export type Tab = {
  id: string;
  label: string;
  icon: IconName;
  content: ReactNode;
};

/** Pestañas con patrón ARIA completo: flechas, Inicio y Fin. */
export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const uid = useId().replace(/:/g, "");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (i: number) => {
    setActive(i);
    refs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = tabs.length - 1;
    if (e.key === "ArrowRight") { e.preventDefault(); move(active === last ? 0 : active + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); move(active === 0 ? last : active - 1); }
    if (e.key === "Home") { e.preventDefault(); move(0); }
    if (e.key === "End") { e.preventDefault(); move(last); }
  };

  return (
    <div className="tabs">
      <div className="scroll-x">
        <div className="tabs__list" role="tablist" aria-label="Piezas de la plataforma" onKeyDown={onKeyDown}>
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => { refs.current[i] = el; }}
              type="button"
              role="tab"
              id={`${uid}-tab-${tab.id}`}
              className="tabs__tab"
              aria-selected={i === active}
              aria-controls={`${uid}-panel-${tab.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
            >
              <span className="dot dot--sm" aria-hidden="true" />
              <Icon name={tab.icon} className="icon icon--sm" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${uid}-panel-${tab.id}`}
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
