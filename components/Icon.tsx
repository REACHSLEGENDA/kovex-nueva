import type { JSX } from "react";

/**
 * Íconos dibujados a mano para Kovex.
 * Lineales, monocromáticos, heredan currentColor. Sin librerías ni marcas ajenas.
 */
export type IconName =
  | "plataforma" | "telefonia" | "crm"
  | "forex" | "cripto" | "indices" | "materias" | "acciones" | "metales" | "bonos"
  | "portal" | "consola" | "pasarela" | "escudo"
  | "dashboard" | "prospectos" | "kanban" | "contactcenter" | "expedientes"
  | "contactos" | "equipo" | "chat" | "csv" | "burn" | "admin"
  | "flecha" | "rayo" | "reloj" | "campana" | "nodo" | "menu" | "cerrar";

const paths: Record<IconName, JSX.Element> = {
  /* --- Líneas de producto --- */
  plataforma: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M2.5 9h19" />
      <path d="M7 17v-3M10.5 17v-5M14 17v-2M17.5 17v-4.5" />
    </>
  ),
  telefonia: (
    <>
      <path d="M4.5 13v-1.5a7.5 7.5 0 0 1 15 0V13" />
      <rect x="2" y="12.5" width="4" height="6" rx="1.5" />
      <rect x="18" y="12.5" width="4" height="6" rx="1.5" />
      <path d="M19.5 18.5v.6a2.4 2.4 0 0 1-2.4 2.4H14" />
    </>
  ),
  crm: (
    <>
      <rect x="2.5" y="4" width="5" height="16" rx="1" />
      <rect x="9.5" y="4" width="5" height="11" rx="1" />
      <rect x="16.5" y="4" width="5" height="7" rx="1" />
    </>
  ),

  /* --- Clases de activo --- */
  forex: (
    <>
      <path d="M3 8.5h14" />
      <path d="M14 5.5l3 3-3 3" />
      <path d="M21 15.5H7" />
      <path d="M10 12.5l-3 3 3 3" />
    </>
  ),
  cripto: (
    <>
      <path d="M12 2.6 20.5 7.3v9.4L12 21.4 3.5 16.7V7.3z" />
      <path d="M9.8 15.8V8.2h3.4a1.9 1.9 0 0 1 0 3.8H9.8" />
      <path d="M9.8 12h3.7a1.9 1.9 0 0 1 0 3.8" />
      <path d="M11.6 6.9v1.3M11.6 15.8v1.3" />
    </>
  ),
  indices: (
    <>
      <path d="M3 20.5h18" />
      <path d="M5.5 20.5V13M10.5 20.5V8M15.5 20.5v-5.5M20.5 20.5V4.5" />
    </>
  ),
  materias: (
    <>
      <ellipse cx="12" cy="5.6" rx="5.8" ry="2.4" />
      <path d="M6.2 5.6v12.8c0 1.33 2.6 2.4 5.8 2.4s5.8-1.07 5.8-2.4V5.6" />
      <path d="M5.4 12h13.2" />
    </>
  ),
  acciones: (
    <>
      <path d="M3 21h18" />
      <rect x="5" y="10" width="3.4" height="7" />
      <path d="M6.7 6.5V10M6.7 17v2.2" />
      <rect x="15.6" y="6" width="3.4" height="6" />
      <path d="M17.3 3.4V6M17.3 12v3" />
      <path d="M10.6 12.8h3.2" />
    </>
  ),
  metales: (
    <>
      <path d="M8.6 8.4h6.8l1.7 3.8H6.9z" />
      <path d="M4.4 13.4h15.2l1.9 4.6H2.5z" />
    </>
  ),
  bonos: (
    <>
      <path d="M5.5 2.8h8.2l4.8 4.8v13.6H5.5z" />
      <path d="M13.7 2.8v4.8h4.8" />
      <path d="M8.6 11h6.4M8.6 13.9h4.2" />
      <circle cx="12" cy="17.6" r="1.7" />
    </>
  ),

  /* --- Plataforma: piezas --- */
  portal: (
    <>
      <rect x="6" y="2.2" width="12" height="19.6" rx="2.4" />
      <path d="M10 5h4" />
      <path d="M9 16.5v-2.5M12 16.5v-5M15 16.5v-3.5" />
    </>
  ),
  consola: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M6.5 9.5 9.5 12.5 6.5 15.5" />
      <path d="M12.5 15.5h5" />
    </>
  ),
  pasarela: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6 14.5h3.5" />
      <circle cx="17.5" cy="14.5" r="1.6" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 2.6 19.5 5.8v6.1c0 4.3-3 7.9-7.5 9.5-4.5-1.6-7.5-5.2-7.5-9.5V5.8z" />
      <path d="M9.2 11.8 11.4 14l3.6-3.7" />
    </>
  ),

  /* --- Módulos del CRM --- */
  dashboard: (
    <>
      <rect x="2.5" y="2.8" width="8.2" height="8.4" rx="1.2" />
      <rect x="13.3" y="2.8" width="8.2" height="5" rx="1.2" />
      <rect x="2.5" y="13.8" width="8.2" height="7.4" rx="1.2" />
      <rect x="13.3" y="10.4" width="8.2" height="10.8" rx="1.2" />
    </>
  ),
  prospectos: (
    <>
      <path d="M8.5 5.5h12M8.5 12h12M8.5 18.5h8" />
      <path d="M3.6 5.5h.01M3.6 12h.01M3.6 18.5h.01" />
    </>
  ),
  kanban: (
    <>
      <rect x="2.5" y="3.5" width="6" height="17" rx="1.2" />
      <rect x="10.5" y="3.5" width="6" height="10" rx="1.2" />
      <path d="M18.5 6.5h3M20 5v3" />
      <rect x="10.5" y="16" width="6" height="4.5" rx="1.2" />
    </>
  ),
  contactcenter: (
    <>
      <path d="M6.2 3.4h2.5l1.5 3.8-2 1.4a12.2 12.2 0 0 0 6.2 6.2l1.4-2 3.8 1.5v2.5a2.2 2.2 0 0 1-2.4 2.2C9.9 18.3 5.2 13.6 4 5.8a2.2 2.2 0 0 1 2.2-2.4z" />
    </>
  ),
  expedientes: (
    <>
      <path d="M5.2 2.8h8.6l5 5v13.4H5.2z" />
      <path d="M13.8 2.8v5h5" />
      <path d="M8.6 15.2l2.2 2.2 4.4-4.6" />
    </>
  ),
  contactos: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M4.8 20.5a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  equipo: (
    <>
      <circle cx="9.2" cy="7.8" r="3.2" />
      <path d="M2.8 19.6a6.4 6.4 0 0 1 12.8 0" />
      <path d="M16 5.4a2.9 2.9 0 0 1 0 5.6" />
      <path d="M17.4 13.8a6.2 6.2 0 0 1 3.8 5" />
    </>
  ),
  chat: (
    <>
      <path d="M3.5 4.5h17v11.4H9.2l-5.7 4.6z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  csv: (
    <>
      <path d="M12 2.8v10.6" />
      <path d="M15.6 9.9 12 13.5 8.4 9.9" />
      <path d="M3.6 15.4v3.4a2.4 2.4 0 0 0 2.4 2.4h12a2.4 2.4 0 0 0 2.4-2.4v-3.4" />
    </>
  ),
  burn: (
    <>
      <path d="M12 2.6s5.4 4.4 5.4 9a5.4 5.4 0 0 1-10.8 0c0-2.3 1.9-4.4 1.9-4.4s.6 2.1 1.9 2.8c.9-2 1.6-4.7 1.6-7.4z" />
    </>
  ),
  admin: (
    <>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 2.4v2.3M12 19.3v2.3M21.6 12h-2.3M4.7 12H2.4M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7M18.8 18.8l-1.7-1.7M6.9 6.9 5.2 5.2" />
    </>
  ),

  /* --- Utilitarios --- */
  flecha: (
    <>
      <path d="M3.5 12h17" />
      <path d="M15 6.5 20.5 12 15 17.5" />
    </>
  ),
  rayo: <path d="M13.4 2.5 5.6 13.6h5.6l-1.2 7.9 8-11.6h-5.6z" />,
  reloj: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2.1" />
    </>
  ),
  campana: (
    <>
      <path d="M6.4 10.4a5.6 5.6 0 0 1 11.2 0c0 4.3 1.6 5.6 1.6 5.6H4.8s1.6-1.3 1.6-5.6z" />
      <path d="M10.2 19a2 2 0 0 0 3.6 0" />
    </>
  ),
  nodo: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8.4" />
    </>
  ),
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  cerrar: <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />,
};

type Props = {
  name: IconName;
  className?: string;
  title?: string;
};

export default function Icon({ name, className = "icon", title }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
