import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Aviso de privacidad" };

export default function Privacidad() {
  return (
    <>
      <section className="pagehead grid-bg">
        <span className="halo pagehead__halo" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <p className="kicker">Legal</p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              Aviso de privacidad<span className="dot" aria-hidden="true" />
            </h1>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="card card--static">
              <p>
                <span className="todo">[DATO PENDIENTE: texto de aviso de privacidad redactado por el área legal del cliente]</span>
              </p>
              <p style={{ marginTop: 20 }}>
                Kovex provee tecnología. La operación, las licencias y el cumplimiento regulatorio
                corresponden a cada cliente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
