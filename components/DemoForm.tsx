"use client";

import { useState, type FormEvent } from "react";

const LINEAS = [
  "Plataforma de trading white label",
  "Telefonía en renta",
  "CRM operativo",
  "Las tres líneas",
];

const ENDPOINT = "https://formspree.io/f/maewdweb";

type Estado = "listo" | "enviando" | "enviado" | "error";

export default function DemoForm() {
  const [estado, setEstado] = useState<Estado>("listo");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setEstado("enviando");

    try {
      const respuesta = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!respuesta.ok) throw new Error(String(respuesta.status));
      form.reset();
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  };

  const enviando = estado === "enviando";

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" autoComplete="name" required placeholder="Nombre y apellido" />
        </div>
        <div className="field">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" autoComplete="organization" required placeholder="Razón social o marca" />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="correo">Correo</label>
          <input id="correo" name="email" type="email" autoComplete="email" required placeholder="nombre@empresa.com" />
        </div>
        <div className="field">
          <label htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" required placeholder="+52 55 0000 0000" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="linea">Línea de interés</label>
        <select id="linea" name="linea" defaultValue={LINEAS[3]} required>
          {LINEAS.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      {/* Señuelo para robots: si viene lleno, el envío no es de una persona. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <button type="submit" className="btn btn--pink btn--block" disabled={enviando}>
        {enviando ? "Enviando…" : "Agendar demo"}
      </button>

      {estado === "enviado" ? (
        <p className="form__status" role="status">
          Recibido. Te contestamos al correo que dejaste.
        </p>
      ) : null}

      {estado === "error" ? (
        <p className="form__status form__status--error" role="alert">
          No se pudo enviar. Inténtalo de nuevo o escribe a{" "}
          <a href="mailto:contact@kovex.net">contact@kovex.net</a>.
        </p>
      ) : null}
    </form>
  );
}
