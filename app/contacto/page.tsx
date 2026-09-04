import type { Metadata } from "next";
import DemoForm from "@/components/DemoForm";
import ProductVisual from "@/components/ProductVisual";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Agendar demo",
  description:
    "Agenda una demo de la plataforma white label, la telefonía en renta o el CRM operativo.",
};

export default function Contacto() {
  return (
    <>
      <section className="pagehead grid-bg">
        <span className="halo pagehead__halo" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <p className="kicker">Contacto</p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              Agenda una demo<span className="dot" aria-hidden="true" />
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              Se hace sobre el sistema real: se abre la consola, se mueve una cuenta y se ve el
              registro.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="product-intro">
        <div className="wrap">
          <Reveal>
            <ProductVisual
              src="/images/kovex-contacto.png"
              alt="Ilustración conceptual de una demo conectada de plataforma, telefonía y expediente CRM"
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta-final">
          <Reveal>
            <h2>
              Cuéntanos qué opera tu mesa
              <span className="dot" aria-hidden="true" />
            </h2>
            <ul className="dots" style={{ marginTop: 30 }}>
              <li>Qué línea te interesa, o si son las tres.</li>
              <li>Cuántos agentes trabajan hoy en la mesa.</li>
              <li>Con qué sistema operas ahora y qué se te está cayendo.</li>
            </ul>
            <p style={{ marginTop: 30 }}>
              O escríbenos directo:{" "}
              <a href="mailto:contact@kovex.net" className="link-arrow">
                <span>contact@kovex.net</span>
              </a>
            </p>

            <p className="canales">
              <a href="https://www.facebook.com/Kovexnet" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <span className="dot dot--sm" aria-hidden="true" />
              <a href="https://www.instagram.com/kovex_net/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="card card--static">
              <DemoForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
