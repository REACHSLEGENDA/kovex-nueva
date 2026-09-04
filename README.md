# Kovex — sitio B2B

Next.js 16 (App Router) + TypeScript. Sitio multipágina, oscuro por defecto,
sin versión clara.

## Correr

```bash
npm install
npm run dev
```

Producción: `npm run build && npm start`.

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Hero con el logotipo a tamaño de portada, las tres líneas, franja de marca, adelanto del CRM |
| `/plataforma` | Línea 01 — portal, consola, pasarela, seguridad, siete clases de activo |
| `/telefonia` | Línea 02 — diagrama llamada → agente → expediente |
| `/crm` | Línea 03 — flujo de tres embudos, expediente único, Recovery, módulos, roles, automatismos |
| `/implementacion` | Los cuatro pasos hasta operar |
| `/contacto` | Formulario de demo |
| `/privacidad`, `/terminos` | Pendientes de redacción legal |

## Estructura

- `app/globals.css` — sistema de diseño completo. **Todo el color sale de las
  variables de `:root`.** No hay colores literales sueltos fuera de ese bloque.
- `components/Wordmark.tsx` — el logotipo con los contornos incrustados como
  trazos SVG, no como texto. Se ve idéntico aunque la tipografía no cargue.
  Contornos derivados de Archivo Black (SIL Open Font License 1.1).
- `components/HeroBackdrop.tsx` — fondo dinámico del hero: rejilla en deriva,
  dos halos que orbitan y paralaje suave con el puntero.
- `components/Icon.tsx` — todos los íconos, dibujados aquí, lineales,
  monocromáticos, heredando `currentColor`. Sin librerías ni marcas ajenas.
- `components/Reveal.tsx` — entrada por fade + 12 px. Se apaga por completo con
  `prefers-reduced-motion`.
- `lib/content.ts` — textos y listas de las tres líneas, embudos, módulos y roles.

## Antes de publicar

Cada `[DATO PENDIENTE]` aparece marcado en pantalla, en rosa y con borde
punteado, para que no se escape:

1. **Legal** — texto del aviso de privacidad y de los términos.
2. **Dominio** — `metadataBase` en `app/layout.tsx` apunta a un dominio de
   ejemplo; cámbialo por el real para que las tarjetas sociales resuelvan.

Ya resueltos: contacto en `contact@kovex.net` (sin teléfono ni domicilio),
formulario conectado a Formspree, plazo de implementación de dos semanas como
máximo y condiciones comerciales de telefonía (cobertura mundial, cobro por
pasarela o transferencia, minutos según plan).

## Decisiones que conviene no deshacer

- No hay sellos, licencias ni membresías regulatorias en ninguna parte: Kovex
  vende software. La nota legal del pie lo dice explícitamente.
- No hay logotipos de terceros, ni cifras de clientes, países o testimonios.
- El rosa es acento: un solo botón rosa sólido por pantalla, el resto fantasma.
