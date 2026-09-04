import type { Metadata } from "next";
import Link from "next/link";
import ProductVisual from "@/components/ProductVisual";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cómo se implementa",
  description:
    "Levantamiento, configuración de marca, despliegue y puesta en operación de la plataforma, la telefonía y el CRM de Kovex.",
};

const PASOS = [
  {
    n: "01",
    titulo: "Levantamiento",
    texto:
      "Marca, dominio y nombre de la app. Catálogo de instrumentos por nivel de cuenta. Estructura de departamentos, equipos y roles del CRM.",
  },
  {
    n: "02",
    titulo: "Configuración y marca",
    texto:
      "Se aplica tu logotipo y tu paleta a todo el sistema. Se cargan embudos, etapas, tipificaciones y usuarios, con el alcance que corresponde a cada rol.",
  },
  {
    n: "03",
    titulo: "Despliegue y pruebas",
    texto:
      "En tu infraestructura o gestionado por Kovex. Se prueban precios en vivo y el respaldo automático, la pasarela, el flujo de KYC y los permisos de cada rol.",
  },
  {
    n: "04",
    titulo: "Operación y soporte",
    texto:
      "Carga de base, capacitación de la mesa y acompañamiento en los primeros ciclos completos, de Ventas a Retención.",
  },
];

export default function Implementacion() {
  return (
    <>
      <section className="pagehead grid-bg">
        <span className="halo pagehead__halo" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <p className="kicker">Cómo se implementa</p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              Cuatro pasos hasta operar
              <span className="dot" aria-hidden="true" />
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              El mismo recorrido para una línea o para las tres. Lo que cambia es el alcance del
              levantamiento.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="product-intro">
        <div className="wrap">
          <Reveal>
            <ProductVisual
              src="/images/kovex-implementacion.png"
              alt="Ilustración conceptual de cuatro etapas conectadas: levantamiento, configuración, despliegue y operación"
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ol className="timeline">
            {PASOS.map((p, i) => (
              <li key={p.n}>
                <Reveal delay={i * 60}>
                  <span className="num">{p.n}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={80}>
            <div className="card card--static" style={{ marginTop: 48 }}>
              <p className="kicker">Antes de publicar</p>
              <p>
                <span className="todo">[DATO PENDIENTE: tiempos reales de implementación por paso]</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap cta-final">
          <Reveal>
            <h2>
              Empieza por el levantamiento
              <span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ marginBottom: 30 }}>
              Una sesión para revisar tu operación actual y definir qué líneas entran, con qué
              alcance y sobre qué infraestructura.
            </p>
            <Link href="/contacto" className="btn btn--pink">Agendar demo</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
