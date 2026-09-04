import Link from "next/link";

export default function NoEncontrado() {
  return (
    <section className="pagehead grid-bg" style={{ minHeight: "70svh" }}>
      <span className="halo pagehead__halo" aria-hidden="true" />
      <div className="wrap">
        <p className="kicker">Error 404</p>
        <h1>
          Esta página no existe<span className="dot" aria-hidden="true" />
        </h1>
        <p className="lead" style={{ marginTop: 26, marginBottom: 34 }}>
          La dirección no corresponde a ninguna sección del sitio.
        </p>
        <Link href="/" className="btn btn--pink">Volver al inicio</Link>
      </div>
    </section>
  );
}
