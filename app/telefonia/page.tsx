import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ProductVisual from "@/components/ProductVisual";

export const metadata: Metadata = {
  title: "Telefonía en renta",
  description:
    "Infraestructura de voz para la mesa, rentada por mes: numeración y troncales, extensiones por agente, colas de llamada y marcación desde el CRM.",
};

const NODOS = [
  {
    n: "01",
    icon: "contactcenter" as const,
    titulo: "Llamada",
    texto: "Entra o sale por troncal propia, con numeración asignada a tu mesa.",
  },
  {
    n: "02",
    icon: "equipo" as const,
    titulo: "Agente",
    texto: "Cae en la cola, se enruta a la extensión y el agente contesta o marca desde el CRM.",
  },
  {
    n: "03",
    icon: "expedientes" as const,
    titulo: "Expediente",
    texto: "Queda escrita contra el prospecto: quién llamó, cuándo, tipificación y resultado.",
  },
];

const VALOR = [
  {
    icon: "nodo" as const,
    titulo: "Numeración y troncales",
    texto: "Listos para operar. No hay que contratar operador aparte ni levantar conmutador.",
  },
  {
    icon: "equipo" as const,
    titulo: "Extensiones y colas",
    texto: "Una extensión por agente, colas por equipo y marcación desde la ficha del prospecto.",
  },
  {
    icon: "expedientes" as const,
    titulo: "Todo contra el expediente",
    texto: "Ninguna llamada queda suelta. La tipificación y el resultado viven en el CRM.",
  },
  {
    icon: "rayo" as const,
    titulo: "Escala agregando líneas",
    texto: "Sin obra, sin conmutador propio y sin reinstalar nada en las estaciones.",
  },
];

export default function Telefonia() {
  return (
    <>
      <section className="pagehead grid-bg">
        <span className="halo pagehead__halo" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <p className="kicker">
              <span className="num">02</span>&nbsp;· Telefonía en renta
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              La voz de la mesa, rentada por mes
              <span className="dot" aria-hidden="true" />
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              Infraestructura de voz lista para operar, conectada al CRM desde el primer día.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="product-intro">
        <div className="wrap">
          <Reveal>
            <ProductVisual
              src="/images/kovex-telefonia.png"
              alt="Flujo de voz conectado entre llamada, agente y expediente"
            />
          </Reveal>
        </div>
      </section>

      {/* ── DIAGRAMA ───────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>
              Llamada, agente, expediente
              <span className="dot" aria-hidden="true" />
            </h2>
            <p>Un solo recorrido. Al final de cada llamada hay un registro, no una nota suelta.</p>
          </Reveal>

          <Reveal delay={60}>
            <div className="scroll-x">
              <div className="flow-phone">
                {NODOS.map((nodo, i) => (
                  <Fragment key={nodo.n}>
                    <div className="flow-phone__node">
                      <Icon name={nodo.icon} className="icon icon--pink" />
                      <span className="mono">{nodo.n}</span>
                      <strong>{nodo.titulo}</strong>
                      <p>{nodo.texto}</p>
                    </div>
                    {i < NODOS.length - 1 ? (
                      <div className="flow-arrow" aria-hidden="true">
                        <Icon name="flecha" className="icon" />
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALOR ──────────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="modules">
            {VALOR.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 70}>
                <article className="card module" style={{ height: "100%" }}>
                  <div className="module__top">
                    <Icon name={v.icon} />
                    <h3>{v.titulo}</h3>
                  </div>
                  <p>{v.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PENDIENTES COMERCIALES ─────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="card card--static">
              <p className="kicker">Condiciones comerciales</p>
              <h3>Falta cerrar antes de publicar</h3>
              <ul className="dots dots--tight" style={{ marginTop: 20 }}>
                <li><span className="todo">[DATO PENDIENTE: países con cobertura]</span></li>
                <li><span className="todo">[DATO PENDIENTE: modelo de cobro]</span></li>
                <li><span className="todo">[DATO PENDIENTE: minutos incluidos]</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap cta-final">
          <Reveal>
            <h2>
              Conecta la mesa<span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ marginBottom: 30 }}>
              La telefonía se contrata sola o junto con el CRM, que es donde la llamada termina de
              tener sentido.
            </p>
            <Link href="/contacto" className="btn btn--pink">Agendar demo</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
