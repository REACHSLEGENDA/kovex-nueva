import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Wordmark from "@/components/Wordmark";
import HeroBackdrop from "@/components/HeroBackdrop";
import ProductVisual from "@/components/ProductVisual";
import { LINEAS } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero">
        <HeroBackdrop />
        <div className="wrap">
          <Reveal>
            <p className="kicker">Infraestructura para brokers y mesas de inversión</p>
          </Reveal>

          <h1>
            <Wordmark className="hero__mark" animado title="Kovex" />
            <span className="hero__rule" aria-hidden="true" />
            <span className="hero__tag">
              La tecnología
              <br />
              que opera tu mesa<span className="dot" aria-hidden="true" />
            </span>
          </h1>

          <Reveal delay={800}>
            <p className="lead">
              La plataforma de trading, la telefonía y el CRM que tu operación necesita, con tu
              marca.
            </p>
          </Reveal>

          <Reveal delay={880}>
            <div className="hero__actions">
              <Link href="/contacto" className="btn btn--pink">Agendar demo</Link>
              <Link href="#lineas" className="btn btn--ghost">Ver las tres líneas</Link>
            </div>
          </Reveal>

          <Reveal delay={960} as="nav" className="hero__index-wrap">
            <div className="hero__index">
              {LINEAS.map((l) => (
                <Link key={l.href} href={l.href}>
                  <span className="num">{l.n}</span>
                  <strong>{l.nombre}</strong>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRES LÍNEAS ────────────────────────────────────── */}
      <section id="lineas" className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Tres líneas de producto</p>
            <h2>
              Se venden por separado.
              <br />
              Trabajan juntas<span className="dot" aria-hidden="true" />
            </h2>
            <p>
              Kovex no opera cuentas ni custodia fondos. Construye y entrega el sistema con el que
              tu mesa trabaja todos los días: la plataforma donde opera tu cliente, la voz con la
              que lo atiendes y el CRM donde vive su expediente.
            </p>
          </Reveal>

          <div className="lines">
            {LINEAS.map((l, i) => (
              <Reveal key={l.href} delay={i * 80}>
                <article className="card line-card" style={{ height: "100%" }}>
                  <span className="line-card__n" aria-hidden="true">{l.n}</span>
                  <ProductVisual src={l.imagen} alt={l.imagenAlt} compact />
                  <Icon name={l.icon} className="icon icon--lg" />
                  <h3>{l.nombre}</h3>
                  <p>{l.frase}</p>
                  <ul className="dots dots--tight">
                    {l.puntos.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <Link href={l.href} className="link-arrow">
                    <span>Ver detalle</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRANJA DE MARCA ────────────────────────────────── */}
      <section className="stripe">
        <div className="wrap">
          <Reveal>
            <h2>
              Tu logo. Tu paleta. Tu dominio. <em>Tu app instalable</em>
              <span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── EXPEDIENTE ÚNICO (adelanto del CRM) ────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="quote">
              <span className="halo quote__halo" aria-hidden="true" />
              <p className="kicker">CRM operativo</p>
              <h2>
                Es el mismo expediente que pasa de mano en mano,{" "}
                <em>no tres registros distintos</em>
                <span className="dot" aria-hidden="true" />
              </h2>
              <p>
                Cuando Ventas cierra, el prospecto aparece solo en Cumplimiento. Cuando Cumplimiento
                aprueba, pasa solo a Retención. Nadie recaptura nada.
              </p>
              <p style={{ marginTop: 30 }}>
                <Link href="/crm" className="link-arrow">
                  <span>Ver el CRM completo</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section section--tight" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap cta-final">
          <Reveal>
            <h2>
              Ponlo a operar<span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ marginBottom: 30 }}>
              Una demo sobre el sistema real. Sin presentación de ventas: se abre la consola, se
              mueve una cuenta y se ve el registro.
            </p>
            <Link href="/contacto" className="btn btn--pink">Agendar demo</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
