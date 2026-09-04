import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ProductVisual from "@/components/ProductVisual";
import { AUTOMATISMOS, EMBUDOS, MODULOS, RECOVERY, ROLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "CRM operativo",
  description:
    "El CRM operativo del ciclo completo: Ventas, Cumplimiento y Retención sobre un mismo expediente, con pista de Recovery y alcance por rol resuelto en base de datos.",
};

export default function Crm() {
  return (
    <>
      <section className="pagehead grid-bg">
        <span className="halo pagehead__halo" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <p className="kicker">
              <span className="num">03</span>&nbsp;· CRM operativo
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              Del prospecto a la cuenta recuperada
              <span className="dot" aria-hidden="true" />
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              El sistema donde vive todo el ciclo del cliente. Sin Excel y sin pasar datos por
              WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="product-intro">
        <div className="wrap">
          <Reveal>
            <ProductVisual
              src="/images/kovex-crm.png"
              alt="Expediente que avanza por los embudos de Ventas, Cumplimiento y Retención"
            />
          </Reveal>
        </div>
      </section>

      {/* ── a) FLUJO DE TRES EMBUDOS ───────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">El flujo</p>
            <h2>
              Ventas, Cumplimiento, Retención
              <span className="dot" aria-hidden="true" />
            </h2>
            <p>
              Tres departamentos, tres embudos, un solo recorrido. Cada etapa es un estado del
              expediente, no una carpeta distinta.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="scroll-x">
              <div className="flow-crm">
                {EMBUDOS.map((e, i) => (
                  <Fragment key={e.nombre}>
                    <div className="funnel">
                      <div className="funnel__head">
                        <span className="dot dot--sm" aria-hidden="true" />
                        <h3>{e.nombre}</h3>
                        <span className="funnel__n">{e.n}</span>
                      </div>
                      <ol className="stages">
                        {e.etapas.map((etapa) => (
                          <li key={etapa}><span>{etapa}</span></li>
                        ))}
                      </ol>
                    </div>
                    {i < EMBUDOS.length - 1 ? (
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

      {/* ── b) EXPEDIENTE ÚNICO ────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="quote">
              <span className="halo quote__halo" aria-hidden="true" />
              <h2>
                Es el mismo expediente que pasa de mano en mano,{" "}
                <em>no tres registros distintos</em>
                <span className="dot" aria-hidden="true" />
              </h2>
              <p>
                Cuando Ventas cierra, el prospecto aparece solo en Cumplimiento. Cuando
                Cumplimiento aprueba, pasa solo a Retención. Nadie recaptura nada.
              </p>
              <p>
                Y cada quien ve lo suyo: Cumplimiento lee el historial de Ventas pero no lo altera;
                el vendedor sigue viendo su cuenta para su comisión, pero ya no la mueve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── c) RECOVERY ────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">La cuarta pista</p>
            <h2>
              Recovery<span className="dot" aria-hidden="true" />
            </h2>
            <p>
              Para cuentas caídas o enfriadas. Vive dentro de Retención, pero fuera del carril
              normal.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="recovery">
              <div className="recovery__branch" aria-hidden="true" />
              <div className="recovery__body">
                <h3>Una pista aparte, con sus propias etapas</h3>
                <p style={{ marginTop: 16 }}>
                  Administración asigna la cuenta a un agente de Retención, que la trabaja en su
                  propia pista de seis etapas. Un interruptor cambia entre una pista y otra: las
                  cuentas no se revuelven.
                </p>

                <div className="scroll-x">
                  <div className="track">
                    {RECOVERY.map((etapa, i) => (
                      <Fragment key={etapa}>
                        <div className={`track__step ${i >= RECOVERY.length - 2 ? "track__step--end" : ""}`.trim()}>
                          <span className="num">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {etapa}
                        </div>
                        {i < RECOVERY.length - 1 ? (
                          <span className="track__sep" aria-hidden="true">
                            <Icon name="flecha" className="icon icon--sm" />
                          </span>
                        ) : null}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── d) GALERÍA DE MÓDULOS ──────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Las pantallas</p>
            <h2>
              Once módulos, una sola base
              <span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>

          <div className="modules">
            {MODULOS.map((m, i) => (
              <Reveal key={m.nombre} delay={(i % 3) * 70}>
                <article className="card module" style={{ height: "100%" }}>
                  <div className="module__top">
                    <Icon name={m.icon} />
                    <h3>{m.nombre}</h3>
                  </div>
                  <p>{m.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── e) ROLES Y ALCANCE ─────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Quién ve qué</p>
            <h2>
              Alcance por rol<span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <div className="scroll-x">
              <table className="table">
                <caption className="mono" style={{ textAlign: "left", paddingBottom: 18, color: "var(--muted)" }}>
                  Alcance de cada rol dentro del CRM
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Rol</th>
                    <th scope="col">Alcance</th>
                  </tr>
                </thead>
                <tbody>
                  {ROLES.map((r) => (
                    <tr key={r.rol}>
                      <th scope="row">{r.rol}</th>
                      <td>{r.alcance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="punchline">
              <strong>
                No es un filtro de pantalla, es una regla de base de datos
                <span className="dot" aria-hidden="true" />
              </strong>
              <p>
                Un agente no ve la base de otro ni forzando la dirección web. Igual el chat: si no
                estás en un canal, ni siquiera aparece que existe.
              </p>
              <p style={{ marginTop: 14 }}>
                <strong>Auditar perspectiva</strong> permite ver el sistema como lo ve otra
                persona.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── f) AUTOMATISMOS ────────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Lo que pasa solo</p>
            <h2>
              Nadie tiene que acordarse
              <span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <ul className="autos">
              {AUTOMATISMOS.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap cta-final">
          <Reveal>
            <h2>
              Míralo moverse<span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ marginBottom: 30 }}>
              En la demo se arrastra una tarjeta de Ventas a Cumplimiento y se ve aparecer el mismo
              expediente del otro lado, con su historial intacto.
            </p>
            <Link href="/contacto" className="btn btn--pink">Agendar demo</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
