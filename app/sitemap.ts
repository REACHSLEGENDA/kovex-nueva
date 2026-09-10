import type { MetadataRoute } from "next";

const BASE = "https://kovex.net";

/**
 * Se sirve en /sitemap.xml. Cuando se agregue una ruta nueva, va aquí.
 * `lastModified` es la fecha de compilación: cada despliegue la renueva.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const rutas: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/",               priority: 1.0, changeFrequency: "weekly" },
    { path: "/plataforma",     priority: 0.9, changeFrequency: "monthly" },
    { path: "/crm",            priority: 0.9, changeFrequency: "monthly" },
    { path: "/telefonia",      priority: 0.8, changeFrequency: "monthly" },
    { path: "/implementacion", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacto",       priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacidad",     priority: 0.2, changeFrequency: "yearly" },
    { path: "/terminos",       priority: 0.2, changeFrequency: "yearly" },
  ];

  return rutas.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: ahora,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
