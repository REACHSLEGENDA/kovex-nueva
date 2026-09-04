/**
 * Logotipo Kovex dibujado como contornos, no como texto.
 * Los trazos van incrustados en el archivo: el logotipo se ve idéntico
 * aunque la tipografía del sitio no cargue.
 * Contornos derivados de Archivo Black (SIL Open Font License 1.1).
 *
 * Sistema de coordenadas: altura de mayúsculas 100, línea base en y=100.
 * El punto rosa se apoya en la línea base, a la derecha de la X.
 */

const LETRAS = [
  { ch: "K", d: "M78.5 0H118.3L82.4 41.1L119 100H81.1L60.3 63.4L42.9 77.6V100H10.8V0H42.9V42.7Z" },
  { ch: "O", d: "M230.7 50Q230.7 75.3 216.6 88.5Q202.5 101.7 176.6 101.7Q150.7 101.7 136.7 88.6Q122.7 75.4 122.7 50Q122.7 24.6 136.7 11.4Q150.7 -1.7 176.6 -1.7Q202.5 -1.7 216.6 11.5Q230.7 24.7 230.7 50ZM155.5 45.3V54.7Q155.5 65.3 160.9 71.5Q166.3 77.8 176.6 77.8Q186.9 77.8 192.4 71.5Q197.8 65.3 197.8 54.7V45.3Q197.8 34.7 192.4 28.5Q186.9 22.2 176.6 22.2Q166.3 22.2 160.9 28.5Q155.5 34.7 155.5 45.3Z" },
  { ch: "V", d: "M270.2 100 234.7 0H269L289.1 66.9H289.7L309.9 0H342.7L307.4 100Z" },
  { ch: "E", d: "M351.2 0H437.6V24H383.3V37.8H429.8V60.8H383.3V76H438.7V100H351.2Z" },
  { ch: "X", d: "M553.5 100H514.5L496.1 68.9H495.5L477 100H441L476.7 47.1L444.5 0H483.3L498.4 25.6H499L514.2 0H550.1L517.7 47.2Z" },
];

const ANCHO_LETRAS = 553.5;   // borde derecho de la X
const SEPARACION = 10;        // aire entre la X y el punto
const RADIO = 14.5;           // el punto: 0.29 de la altura de mayúsculas
const CX = ANCHO_LETRAS + SEPARACION + RADIO;
const VB_W = CX + RADIO;

type Props = {
  className?: string;
  /** Escalona la entrada de cada letra. Sólo en el hero. */
  animado?: boolean;
  title?: string;
};

export default function Wordmark({ className = "", animado = false, title = "Kovex" }: Props) {
  return (
    <svg
      className={`mark ${animado ? "mark--anim" : ""} ${className}`.trim()}
      viewBox={`0 -3 ${VB_W} 106`}
      role="img"
      aria-label={title}
      focusable="false"
    >
      {LETRAS.map((l, i) => (
        <path
          key={l.ch}
          className="mark__l"
          d={l.d}
          fill="currentColor"
          style={animado ? { animationDelay: `${120 + i * 70}ms` } : undefined}
        />
      ))}
      <circle
        className="mark__dot"
        cx={CX}
        cy={100 - RADIO}
        r={RADIO}
        fill="var(--pink)"
        style={animado ? { animationDelay: `${120 + LETRAS.length * 70}ms` } : undefined}
      />
    </svg>
  );
}
