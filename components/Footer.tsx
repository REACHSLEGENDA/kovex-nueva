import Link from "next/link";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link href="/" className="logo logo--lg" aria-label="Kovex, ir al inicio">
              <Wordmark title="Kovex" />
            </Link>
            <p style={{ marginTop: 20, fontSize: ".9rem" }}>
              Infraestructura tecnológica para brokers y mesas de inversión.
            </p>
          </div>

          <div>
            <h4>Producto</h4>
            <ul>
              <li><Link href="/plataforma">Plataforma white label</Link></li>
              <li><Link href="/telefonia">Telefonía en renta</Link></li>
              <li><Link href="/crm">CRM operativo</Link></li>
              <li><Link href="/implementacion">Implementación</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li><Link href="/contacto">Agendar demo</Link></li>
              <li><a href="mailto:contact@kovex.net">contact@kovex.net</a></li>
            </ul>

            <h4 style={{ marginTop: 30 }}>Redes</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Kovexnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kovex en Facebook, se abre en una pestaña nueva"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kovex_net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kovex en Instagram, se abre en una pestaña nueva"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacidad">Aviso de privacidad</Link></li>
              <li><Link href="/terminos">Términos y condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <p>
            Kovex provee tecnología. La operación, las licencias y el cumplimiento regulatorio
            corresponden a cada cliente. Kovex no opera cuentas, no custodia fondos y no presta
            servicios de intermediación financiera.
          </p>
          <span className="mono">© {new Date().getFullYear()} Kovex</span>
        </div>
      </div>
    </footer>
  );
}
