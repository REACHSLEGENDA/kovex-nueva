import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Tabs, { type Tab } from "@/components/Tabs";
import ProductVisual from "@/components/ProductVisual";
import { ACTIVOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plataforma de trading white label",
  description:
    "Sitio público, portal del cliente y consola administrativa. Precios en vivo con respaldo automático, siete clases de activo, pasarela cripto y aislamiento por fila en base de datos.",
};

const TABS: Tab[] = [
  {
    id: "portal",
    label: "Portal del cliente",
    icon: "portal",
    content: (
      <div className="tabs__panel">
        <div>
          <h3>Donde opera tu cliente</h3>
          <p>
            Una terminal completa dentro del portal: gráficos profesionales con velas, indicadores
            y dibujo técnico, y órdenes a mercado o programadas con stop loss y take profit.
          </p>
          <p>
            Los precios llegan en vivo por WebSocket. Si la fuente principal falla, entra la
            segunda sin que el usuario lo note.
          </p>
        </div>
        <ul className="dots">
          <li>Siete clases de activo en un mismo portal.</li>
          <li>Cartera, historial de órdenes e informes.</li>
          <li>Calendario económico, mensajes y soporte, sin salir del portal.</li>
          <li>Verificación KYC con carga de documentos y revisión desde administración.</li>
          <li>Tema claro y oscuro reales, no un filtro invertido.</li>
          <li>
            Instalable como aplicación en iPhone, Android y escritorio: ícono propio, pantalla
            completa y splash screens nativas por dispositivo.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "consola",
    label: "Consola administrativa",
    icon: "consola",
    content: (
      <div className="tabs__panel">
        <div>
          <h3>Donde tu mesa administra</h3>
          <p>
            Alta y aprobación de cuentas, con activación de acceso que no depende del depósito: el
            cliente puede entrar antes de fondear.
          </p>
          <p>Todo lo que se toca queda escrito, con actor y fecha.</p>
        </div>
        <ul className="dots">
          <li>Depósitos, retiros y ajustes de saldo con registro de auditoría.</li>
          <li>Catálogo de instrumentos configurable por nivel de cuenta: Estándar y VIP.</li>
          <li>Mensajería a clientes desde la propia consola.</li>
          <li>Archivado de cuentas y bitácora completa de movimientos.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "pasarela",
    label: "Pasarela de pagos",
    icon: "pasarela",
    content: (
      <div className="tabs__panel">
        <div>
          <h3>Cobro en criptomonedas</h3>
          <p>
            La confirmación del pago llega servidor a servidor, con firma <span className="num">HMAC</span>{" "}
            verificada. El saldo se acredita de forma atómica e idempotente.
          </p>
          <p>Un mismo aviso nunca acredita dos veces, aunque el proveedor lo reenvíe.</p>
        </div>
        <ul className="dots">
          <li>Confirmación fuera del navegador: el cliente no puede falsificarla.</li>
          <li>Acreditación atómica: se aplica completa o no se aplica.</li>
          <li>Reintentos del proveedor tratados como el mismo evento.</li>
          <li>El flujo de pago no expulsa al usuario de la aplicación instalada.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "seguridad",
    label: "Seguridad",
    icon: "escudo",
    content: (
      <div className="tabs__panel">
        <div>
          <h3>El aislamiento no es de pantalla</h3>
          <p>
            Aislamiento por fila en base de datos (<span className="num">RLS</span>): un cliente no
            puede leer los datos de otro ni manipulando la dirección web.
          </p>
          <p>Lo que el navegador no debe poder hacer, no se resuelve en el navegador.</p>
        </div>
        <ul className="dots">
          <li>Operaciones sensibles resueltas en el servidor.</li>
          <li>Bitácora de auditoría de cada movimiento, con actor y fecha.</li>
          <li>Permisos verificados en cada consulta, no sólo al pintar la interfaz.</li>
        </ul>
      </div>
    ),
  },
];

export default function Plataforma() {
  return (
    <>
      <section className="pagehead grid-bg">
        <span className="halo pagehead__halo" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <p className="kicker">
              <span className="num">01</span>&nbsp;· Plataforma white label
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              Una plataforma de trading completa, con tu marca
              <span className="dot" aria-hidden="true" />
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              Tres piezas: sitio público, portal del cliente y consola administrativa. Se entrega
              con tu logotipo, tu paleta y tu dominio.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="rule" />

      <section className="product-intro">
        <div className="wrap">
          <Reveal>
            <ProductVisual
              src="/images/kovex-plataforma.png"
              alt="Terminal de trading en escritorio y móvil"
            />
          </Reveal>
        </div>
      </section>

      {/* ── PESTAÑAS ───────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>
              Qué incluye<span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <Tabs tabs={TABS} />
          </Reveal>
        </div>
      </section>

      {/* ── CLASES DE ACTIVO ───────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Siete clases de activo</p>
            <h2>
              Un solo portal<span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="assets">
              {ACTIVOS.map((a) => (
                <div key={a.label}>
                  <Icon name={a.icon} className="icon icon--lg" />
                  <span>{a.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO SE ENTREGA ────────────────────────────────── */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Cómo se entrega</p>
            <h2>
              Sale con tu nombre, no con el nuestro
              <span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <div className="lines" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <Reveal>
              <article className="card" style={{ height: "100%" }}>
                <h3>Marca del cliente</h3>
                <ul className="dots dots--tight" style={{ marginTop: 18 }}>
                  <li>Logotipo y paleta aplicados a todo el sistema.</li>
                  <li>Dominio propio.</li>
                  <li>Nombre e ícono de la app instalable.</li>
                </ul>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article className="card" style={{ height: "100%" }}>
                <h3>Despliegue</h3>
                <ul className="dots dots--tight" style={{ marginTop: 18 }}>
                  <li>En la infraestructura del cliente, o</li>
                  <li>gestionado por Kovex.</li>
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

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

      <section className="section section--tight">
        <div className="wrap cta-final">
          <Reveal>
            <h2>
              Ábrela y revísala<span className="dot" aria-hidden="true" />
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ marginBottom: 30 }}>
              La demo se hace sobre el sistema real: se abre el portal, se manda una orden y se ve
              el registro del otro lado.
            </p>
            <Link href="/contacto" className="btn btn--pink">Agendar demo</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
