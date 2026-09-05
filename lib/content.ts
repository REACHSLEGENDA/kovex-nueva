import type { IconName } from "@/components/Icon";

export const NAV = [
  { href: "/plataforma", label: "Plataforma" },
  { href: "/telefonia", label: "Telefonía" },
  { href: "/crm", label: "CRM" },
  { href: "/implementacion", label: "Implementación" },
  { href: "/contacto", label: "Contacto" },
];

/* ── Las tres líneas de producto ───────────────────────────── */

export type Linea = {
  n: string;
  href: string;
  icon: IconName;
  nombre: string;
  frase: string;
  puntos: string[];
  imagen: string;
  imagenAlt: string;
};

export const LINEAS: Linea[] = [
  {
    n: "01",
    href: "/plataforma",
    icon: "plataforma",
    nombre: "Plataforma de trading white label",
    frase: "Sitio público, portal del cliente y consola administrativa. Entregado con tu marca.",
    imagen: "/images/kovex-plataforma.png",
    imagenAlt: "Terminal de trading en escritorio y móvil",
    puntos: [
      "Terminal con gráficos profesionales y órdenes a mercado o programadas con SL/TP.",
      "Precios en vivo con continuidad operativa y respaldo automático.",
      "Siete clases de activo en un mismo portal.",
      "Instalable como aplicación en iPhone, Android y escritorio.",
    ],
  },
  {
    n: "02",
    href: "/telefonia",
    icon: "telefonia",
    nombre: "Telefonía en renta",
    frase: "Infraestructura de voz para la mesa, rentada por mes.",
    imagen: "/images/kovex-telefonia.png",
    imagenAlt: "Flujo de voz entre llamada, agente y expediente",
    puntos: [
      "Numeración y troncales listos para operar.",
      "Extensiones por agente y colas de llamada.",
      "Marcación desde el CRM, sin cambiar de pantalla.",
      "Cada llamada queda registrada contra el expediente del prospecto.",
    ],
  },
  {
    n: "03",
    href: "/crm",
    icon: "crm",
    nombre: "CRM operativo",
    frase: "Del prospecto a la cuenta recuperada, en un solo expediente.",
    imagen: "/images/kovex-crm.png",
    imagenAlt: "Expediente que avanza por los embudos del CRM",
    puntos: [
      "Ventas, Cumplimiento y Retención sobre el mismo registro.",
      "Pista de Recovery para cuentas caídas o enfriadas.",
      "Kanban: se arrastra la tarjeta y cambia la etapa.",
      "Visibilidad y permisos definidos para cada rol.",
    ],
  },
];

/* ── Clases de activo ──────────────────────────────────────── */

export const ACTIVOS: { icon: IconName; label: string }[] = [
  { icon: "forex", label: "Forex" },
  { icon: "cripto", label: "Cripto" },
  { icon: "indices", label: "Índices" },
  { icon: "materias", label: "Materias primas" },
  { icon: "acciones", label: "Acciones" },
  { icon: "metales", label: "Metales" },
  { icon: "bonos", label: "Bonos" },
];

/* ── Embudos del CRM ───────────────────────────────────────── */

export type Embudo = { n: string; nombre: string; etapas: string[] };

export const EMBUDOS: Embudo[] = [
  {
    n: "01",
    nombre: "Ventas",
    etapas: [
      "Nuevo lead",
      "Contactado",
      "Interesado",
      "Asesoría",
      "Depósito pendiente",
      "Ganado",
    ],
  },
  {
    n: "02",
    nombre: "Cumplimiento",
    etapas: [
      "KYC pendiente",
      "Documentos en revisión",
      "Contrato pendiente",
      "Aprobado",
    ],
  },
  {
    n: "03",
    nombre: "Retención",
    etapas: [
      "Bienvenida",
      "Perfil de riesgo",
      "Primera estrategia",
      "Seguimiento",
      "Re-depósito",
      "Consolidación",
      "Fidelización",
    ],
  },
];

export const RECOVERY = [
  "Asignado",
  "Contactado",
  "En negociación",
  "Re-depósito",
  "Recuperado",
  "No recuperado",
];

/* ── Módulos del CRM ───────────────────────────────────────── */

export const MODULOS: { icon: IconName; nombre: string; texto: string }[] = [
  {
    icon: "dashboard",
    nombre: "Dashboard",
    texto:
      "Capital del periodo, medidor de comisión, indicadores, embudo con conversión etapa a etapa y actividad reciente.",
  },
  {
    icon: "prospectos",
    nombre: "Prospectos",
    texto:
      "La lista de trabajo diaria. Buscar, filtrar, importar y asignar. Ficha ancha de dos columnas con los siete pasos arriba.",
  },
  {
    icon: "kanban",
    nombre: "Negociaciones",
    texto:
      "Kanban: se arrastra la tarjeta y cambia la etapa. Arriba se elige el embudo y, en Retención, la pista. También hay vista de lista.",
  },
  {
    icon: "contactcenter",
    nombre: "Contact Center",
    texto: "La cola de llamadas, con marcación, tipificación y resultado.",
  },
  {
    icon: "expedientes",
    nombre: "Revisión total",
    texto:
      "Expedientes documentales. Seis documentos requeridos, varios archivos por documento, cada uno se aprueba o rechaza por separado.",
  },
  {
    icon: "contactos",
    nombre: "Contactos",
    texto: "El directorio completo, con historial de contacto y tipificación acumulada.",
  },
  {
    icon: "equipo",
    nombre: "Equipo",
    texto: "Estructura de departamentos, equipos y agentes, con su alcance y su carga.",
  },
  {
    icon: "chat",
    nombre: "Chat interno",
    texto:
      "Canales por equipo y mensajes directos, con burbuja flotante disponible en todas las pantallas.",
  },
  {
    icon: "csv",
    nombre: "Importar / Exportar",
    texto:
      "CSV y Excel, con detección de duplicados y reporte de errores por renglón antes de escribir nada.",
  },
  {
    icon: "burn",
    nombre: "Burn",
    texto: "Depuración de base: lo que se descarta, quién lo descartó y por qué.",
  },
  {
    icon: "admin",
    nombre: "Admin",
    texto:
      "Usuarios, roles, embudos, tipificaciones y parámetros del sistema, con bitácora de cada cambio.",
  },
];

/* ── Roles y alcance ───────────────────────────────────────── */

export const ROLES = [
  { rol: "Superadmin", alcance: "Todo. Todos los equipos, todos los embudos, todos los expedientes." },
  { rol: "Gerente", alcance: "Su departamento completo, con todos los equipos y agentes que dependen de él." },
  { rol: "Supervisor", alcance: "Su equipo: los agentes a su cargo y las cuentas de esos agentes." },
  { rol: "Agente", alcance: "Solo lo suyo. Su base, sus negociaciones, sus llamadas." },
];

/* ── Automatismos ──────────────────────────────────────────── */

export const AUTOMATISMOS = [
  "Prospectos y negociaciones siempre cuadran en ambos sentidos.",
  "Reasignas al agente y su negociación se va con él.",
  "Base nueva asignada: suena, avisa y queda en la campana.",
  "Seguimiento programado: avisa 15 minutos antes.",
  "Mensaje nuevo en el chat: suena estés donde estés.",
  "Todo queda registrado: quién movió qué y cuándo.",
];
