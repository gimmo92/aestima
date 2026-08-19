"use client";

import { useState } from "react";
import { BackgroundGlow, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { CALENDLY_URL, COMPANY } from "@/lib/site";

const PARTNER_LOGOS = [
  { src: "/logos/tsg.png", alt: "TSG" },
  { src: "/logos/emmegi.png", alt: "EMMEGI Heat Exchangers" },
  { src: "/logos/rossi.png", alt: "Rossi" },
  { src: "/logos/isoclima.png", alt: "Isoclima" },
  { src: "/logos/idealtec.png", alt: "Idealtec" },
  { src: "/logos/toptaglio.png", alt: "Toptaglio" },
];

const ERP_INTEGRATIONS = [
  "TeamSystem",
  "Zucchetti",
  "SAP Business One",
  "Microsoft Dynamics 365 Business Central",
  "Mago4",
  "Arca Evolution",
  "Passepartout Mexal",
  "Gamma",
  "Sistemi (e/)",
  "Danea Easyfatt",
  "Galileo",
  "Oracle NetSuite",
];

const TICKET_CHANNELS = ["Email", "WhatsApp", "Chat sul sito", "Telefono"];

const MODULES = [
  {
    href: "#ricambi",
    title: "Spare Parts Identification",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l4 4" />
        <path d="M9 11h4M11 9v4" />
      </>
    ),
  },
  {
    href: "#ticketing",
    title: "Ticketing System",
    icon: (
      <>
        <path d="M4 7.5h16v11.2c0 .7-.6 1.3-1.3 1.3H5.3c-.7 0-1.3-.6-1.3-1.3V7.5z" />
        <path d="M8 7.5V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8v1.7" />
        <path d="M8 13h8M8 16.2h5" />
      </>
    ),
  },
  {
    href: "#offerte",
    title: "Quote / RFP Generator",
    icon: (
      <>
        <path d="M7 3.8h7.2L20 9.6v10.6c0 .7-.6 1.3-1.3 1.3H7c-.7 0-1.3-.6-1.3-1.3V5.1c0-.7.6-1.3 1.3-1.3z" />
        <path d="M14.2 3.8V9h5.2" />
        <path d="M8.5 13.2h7M8.5 16.4h5" />
      </>
    ),
  },
  {
    href: "#dati",
    title: (
      <>
        Spare Parts Management,
        <br />
        Cleaning and Management
      </>
    ),
    icon: (
      <>
        <path d="M4.5 8.2 12 4.4l7.5 3.8v7.6L12 19.6 4.5 15.8V8.2z" />
        <path d="M12 12.1 4.5 8.2M12 12.1l7.5-3.9M12 12.1V19.6" />
      </>
    ),
  },
  {
    href: "#assistenza",
    title: "Catalogue Digitization",
    icon: (
      <>
        <path d="M6 5.2h9.5A2.3 2.3 0 0 1 17.8 7.5v11.2H8.2A2.2 2.2 0 0 1 6 16.5V5.2z" />
        <path d="M6 5.2A2.2 2.2 0 0 0 3.8 7.4v9.4A3.4 3.4 0 0 0 7.2 20.2h10.6" />
        <path d="M9.4 9.2h5.4M9.4 12.4h5.4M9.4 15.6h3.6" />
      </>
    ),
  },
  {
    href: "#knowledge",
    title: "Dynamic Knowledge Base",
    icon: (
      <>
        <path d="M12 4.2c2.8 1.8 6.6 2 8.2 2v7.3c0 3.4-3.4 5.6-8.2 7.3C7.2 18.1 3.8 15.9 3.8 12.5V6.2c1.6 0 5.4-.2 8.2-2z" />
        <path d="M9.2 12.1 11 14l3.8-4.2" />
      </>
    ),
  },
];

function Icon({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

function HexCoreMobile() {
  return (
    <div className="ac-hexmap__core" aria-hidden="true">
      <svg viewBox="0 0 240 240" role="presentation">
        <defs>
          <linearGradient id="ae-hex-stroke-m" x1="18%" y1="8%" x2="86%" y2="92%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <radialGradient id="ae-hex-fill-m" cx="50%" cy="42%" r="68%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#0b1b36" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#071222" stopOpacity="1" />
          </radialGradient>
        </defs>
        <polygon points="120,18 209.3,70 209.3,170 120,222 30.7,170 30.7,70" fill="none" stroke="url(#ae-hex-stroke-m)" strokeWidth="0.9" opacity="0.35" />
        <polygon points="120,32 197.94,75 197.94,165 120,208 42.06,165 42.06,75" fill="url(#ae-hex-fill-m)" stroke="url(#ae-hex-stroke-m)" strokeWidth="1.8" />
        <polygon points="120,46 185.78,82 185.78,158 120,194 54.22,158 54.22,82" fill="none" stroke="url(#ae-hex-stroke-m)" strokeWidth="0.8" opacity="0.45" />
        <text x="120" y="128" textAnchor="middle" fill="#fff" fontSize="36" fontWeight="700" letterSpacing="0.06em">
          AI
        </text>
      </svg>
    </div>
  );
}

function HexMapDesktop() {
  return (
    <svg className="ac-hexmap__svg" viewBox="0 0 1200 900" role="img" aria-label="Esagono AI collegato ai sei moduli della piattaforma">
      <defs>
        <linearGradient id="ae-hex-stroke" x1="18%" y1="8%" x2="86%" y2="92%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="45%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="ae-ai-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>
        <radialGradient id="ae-hex-fill" cx="50%" cy="42%" r="68%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#0c1e3c" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#071222" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="ae-hex-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="600" cy="450" r="168" fill="url(#ae-hex-glow)" />
      <polygon points="600,314 721.09,384 721.09,516 600,586 478.91,516 478.91,384" fill="none" stroke="url(#ae-hex-stroke)" strokeWidth="1" opacity="0.22" />
      <polygon points="600,338 696.99,394 696.99,506 600,562 503.01,506 503.01,394" fill="url(#ae-hex-fill)" stroke="url(#ae-hex-stroke)" strokeWidth="2" />
      <polygon points="600,354 683.13,402 683.13,498 600,546 516.87,498 516.87,402" fill="none" stroke="url(#ae-hex-stroke)" strokeWidth="0.9" opacity="0.4" />

      <g fill="none" stroke="#67e8f9" strokeWidth="1.35" strokeLinecap="round" opacity="0.85">
        <path d="M599.2 338 L600.8 180" />
        <path d="M696.99 394 L833.83 315" />
        <path d="M696.99 506 L833.83 585" />
        <path d="M599.2 562 L600.8 720" />
        <path d="M503.01 506 L366.17 585" />
        <path d="M503.01 394 L366.17 315" />
      </g>

      <g fill="#071222" stroke="#67e8f9" strokeWidth="1.4">
        <circle cx="600" cy="338" r="4.2" />
        <circle cx="696.99" cy="394" r="4.2" />
        <circle cx="696.99" cy="506" r="4.2" />
        <circle cx="600" cy="562" r="4.2" />
        <circle cx="503.01" cy="506" r="4.2" />
        <circle cx="503.01" cy="394" r="4.2" />
      </g>

      <g fill="#22d3ee">
        <circle cx="600" cy="180" r="2.6" />
        <circle cx="833.83" cy="315" r="2.6" />
        <circle cx="833.83" cy="585" r="2.6" />
        <circle cx="600" cy="720" r="2.6" />
        <circle cx="366.17" cy="585" r="2.6" />
        <circle cx="366.17" cy="315" r="2.6" />
      </g>

      <text x="600" y="462" textAnchor="middle" fill="url(#ae-ai-fill)" fontSize="42" fontWeight="700" letterSpacing="0.1em">
        AI
      </text>
    </svg>
  );
}

export default function AestimaLanding() {
  const [form, setForm] = useState({
    nome: "",
    azienda: "",
    ruolo: "",
    email: "",
    volume: "",
    senzaCodice: "",
    magazzinoFornitori: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.nome.trim()) next.nome = "Campo obbligatorio";
    if (!form.azienda.trim()) next.azienda = "Campo obbligatorio";
    if (!form.ruolo.trim()) next.ruolo = "Campo obbligatorio";
    if (!form.email.trim()) next.email = "Campo obbligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Inserisci un'email valida";
    if (!form.volume) next.volume = "Seleziona un'opzione";
    if (!form.senzaCodice) next.senzaCodice = "Seleziona un'opzione";
    if (!form.magazzinoFornitori) next.magazzinoFornitori = "Seleziona un'opzione";

    setErrors(next);
    setSubmitError("");
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Invio non riuscito");
      }
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || "Invio non riuscito. Riprova o prenota direttamente su Calendly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />
      <SiteHeader />

      <div className="ac-landing">
        <section className="ac-section ac-modules-sec" id="moduli">
          <div className="ac-wrap">
            <div className="ac-modules-head">
              <h1 className="ac-title">
                Un agente AI
                <br />
                per tutto il post vendita
              </h1>
            </div>

            <div className="ac-hexmap">
              <HexCoreMobile />
              <HexMapDesktop />
              <div className="ac-hexmap__mods">
                {MODULES.map((mod, i) => (
                  <a key={mod.href} className={`ac-hexmod ac-hexmod--${i}`} href={mod.href}>
                    <span className="ac-hexmod__icon" aria-hidden="true">
                      <Icon>{mod.icon}</Icon>
                    </span>
                    <h3>{mod.title}</h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ac-partners" aria-label="Aziende clienti">
          <div className="ac-wrap">
            <p className="ac-partners__label">Lavoriamo con</p>
            <div className="ac-partners__logos">
              {PARTNER_LOGOS.map((logo) => (
                <img key={logo.alt} className="logo-partner" src={logo.src} alt={logo.alt} loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        <section className="ac-section ac-section--soft" id="assistenza">
          <div className="ac-wrap">
            <div className="ac-grid-2">
              <div>
                <div className="ac-eyebrow">Assistenza service</div>
                <h2 className="ac-title">Una chat che identifica ricambi e trova soluzioni</h2>
                <p className="ac-lead">
                  La chat è collegata all’archivio documentale dell’azienda: consulta distinte, manuali e schede
                  tecniche per rispondere con informazioni sempre aggiornate.
                </p>
                <div className="ac-list">
                  <div className="ac-list__item">
                    <span className="ac-list__dot" aria-hidden="true" />
                    <p>Collegata all’archivio documentale: distinte, manuali e schede tecniche.</p>
                  </div>
                  <div className="ac-list__item">
                    <span className="ac-list__dot" aria-hidden="true" />
                    <p>Importa i tuoi documenti: foto, PDF, Excel e altri file — l’agente li legge e li usa per rispondere.</p>
                  </div>
                </div>
              </div>
              <div className="ac-grid-2__media">
                <div className="ac-card">
                  <div className="ac-card__head">
                    <div>
                      <strong>Assistente aestima</strong>
                      <span>Assistenza service · nuova conversazione</span>
                    </div>
                    <span className="ac-badge ac-badge--ok">Online</span>
                  </div>
                  <div className="ac-chat">
                    <div className="ac-bubble ac-bubble--bot">
                      Buongiorno, posso aiutarti a identificare ricambi nella distinta della tua macchina o a trovare
                      soluzioni a malfunzionamenti già risolti in passato.
                    </div>
                    <div className="ac-bubble ac-bubble--user">Cerco un ricambio</div>
                    <div className="ac-bubble ac-bubble--bot">
                      Perfetto! Seleziona il modello dall’elenco oppure indica tu stesso il modello o la matricola:
                    </div>
                    <div className="ac-bubble ac-bubble--user">IDC-114-084</div>
                    <div className="ac-bubble ac-bubble--bot">
                      <strong style={{ color: "#fff" }}>Macchina identificata: Impianto IDC 114 TCZ</strong>
                      <br />
                      <span className="ac-text-muted" style={{ fontSize: 12 }}>
                        Matricola IDC-114-084 · anno 2018 · variante RTP
                      </span>
                      <br />
                      <br />
                      Che ricambio stai cercando? Ecco alcuni componenti della distinta base:
                      <div className="ac-chips">
                        <span className="ac-chip">Perno curva</span>
                        <span className="ac-chip">Cuscinetto 6005 2RS</span>
                        <span className="ac-chip">Corona ruota traino</span>
                        <span className="ac-chip">Cavo ferro zincato D.6</span>
                      </div>
                    </div>
                  </div>
                  <div className="ac-chat__input">
                    <div>Descrivi il problema o allega un file…</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section ac-photo-docs" id="foto">
          <div className="ac-wrap">
            <h3>Riconosce il ricambio da foto e disegni tecnici</h3>
            <p className="ac-lead">
              Carica la foto di un pezzo o un disegno tecnico: l’agente identifica il componente e lo trova nel
              database, anche senza codice.
            </p>
            <div className="ac-photo-docs__stage">
              <div className="ac-photo-docs__cards">
                <div className="ac-card ac-photo-docs__item">
                  <span className="ac-photo-docs__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                      <circle cx="9" cy="10.2" r="1.6" />
                      <path d="M3.8 16.2 8.4 12l3.2 2.6 2.4-2.2 6.2 4.4" />
                    </svg>
                  </span>
                  <div>
                    <h4>Da foto</h4>
                    <p>Componenti fotografati in campo, targhe e matricole: riconosce il pezzo anche sporco o parziale.</p>
                  </div>
                </div>
                <div className="ac-card ac-photo-docs__item">
                  <span className="ac-photo-docs__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.2 6.2h15.6v11.6H4.2z" />
                      <path d="M8 10.2h3.2M8 13.2h8M8 16h5.5" />
                      <circle cx="16.2" cy="10.2" r="1.4" />
                    </svg>
                  </span>
                  <div>
                    <h4>Da disegni tecnici</h4>
                    <p>Distinte esplose, CAD e cataloghi: legge il disegno e identifica il componente corrispondente.</p>
                  </div>
                </div>
                <div className="ac-formats">
                  <p>Accetta foto e file</p>
                  <div className="ac-formats__types">
                    <div className="ac-filetype ac-filetype--jpg">
                      <span className="ac-filetype__badge">JPG</span>
                      <small>JPG</small>
                    </div>
                    <div className="ac-filetype ac-filetype--png">
                      <span className="ac-filetype__badge">PNG</span>
                      <small>PNG</small>
                    </div>
                    <div className="ac-filetype ac-filetype--pdf">
                      <span className="ac-filetype__badge">PDF</span>
                      <small>PDF</small>
                    </div>
                    <div className="ac-filetype ac-filetype--dwg">
                      <span className="ac-filetype__badge">DWG</span>
                      <small>DWG</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ac-photo-docs__arrow" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 6v28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M14 26l10 12 10-12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="ac-photo-docs__shot">
                <div className="ac-photo-docs__stack">
                  <div className="ac-photo-docs__tile ac-photo-docs__tile--draw">
                    <img src="/landing/disegno-coclea.jpg" alt="Disegno tecnico di una coclea" />
                  </div>
                  <div className="ac-photo-docs__tile ac-photo-docs__tile--photo">
                    <img src="/landing/parte-trasparente.png" alt="Differenziale riduttore anteriore" />
                    <span className="ac-photo-docs__cam" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 8.2h3.1l1.2-1.8h6.4l1.2 1.8h3.1v10.2H4.5V8.2z" />
                        <circle cx="12" cy="13.1" r="3.1" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="ac-photo-docs__legends">
                  <div className="ac-photo-docs__legend">
                    <div className="ac-photo-docs__tag">
                      <span />
                      Coclea · identificata
                    </div>
                    <div className="ac-photo-docs__code">cod. CCL-278</div>
                  </div>
                  <div className="ac-photo-docs__legend">
                    <div className="ac-photo-docs__tag">
                      <span />
                      Differenziale riduttore anteriore · identificato
                    </div>
                    <div className="ac-photo-docs__code">cod. DRA-4410</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section" id="knowledge">
          <div className="ac-wrap">
            <div className="ac-grid-2 ac-grid-2--flip">
              <div>
                <div className="ac-eyebrow">Knowledge base</div>
                <h2 className="ac-title">Impara dai casi risolti, scrive il manuale di troubleshooting</h2>
                <p className="ac-lead">
                  Ogni soluzione confermata efficace viene registrata: l’agente costruisce e aggiorna, impianto per
                  impianto, un manuale di troubleshooting sempre più completo.
                </p>
                <div className="ac-list">
                  <div className="ac-list__item">
                    <span className="ac-list__dot" aria-hidden="true" />
                    <p>
                      Ogni intervento chiuso con successo diventa una voce nella knowledge base, associata a impianto,
                      sintomo e causa.
                    </p>
                  </div>
                  <div className="ac-list__item">
                    <span className="ac-list__dot" aria-hidden="true" />
                    <p>Il manuale cresce impianto per impianto: più interventi si chiudono, più diventa preciso per i prossimi.</p>
                  </div>
                </div>
              </div>
              <div className="ac-grid-2__media">
                <div className="ac-card">
                  <div className="ac-card__head">
                    <div>
                      <strong>Impianto IDC 114 TCZ</strong>
                      <span>Knowledge base · troubleshooting</span>
                    </div>
                  </div>
                  <div className="ac-kb">
                    <div className="ac-kb__item ac-kb__item--ok">
                      <div className="ac-kb__meta">
                        <span className="ac-badge ac-badge--ok">KB-107</span>
                        <span className="ac-badge ac-badge--warn">Ricorrente · 6×</span>
                        <span className="ac-badge">Consolidata</span>
                      </div>
                      <p>
                        <strong>Richiesta sostituzione cavo fune D.6 — matricola IDC-114-084</strong>
                      </p>
                      <span className="ac-label">Soluzione</span>
                      <p>Ordinare cavo ferro zincato mm 6 (1023021), smontare semidisco giunzione, sostituire cavo e ritarare a 180 Nm.</p>
                    </div>
                    <div className="ac-kb__item">
                      <span className="ac-label">Caso risolto → registrato</span>
                      <p>Errore E-04 su pressa PH-200 → sensore pressione P-3, cablaggio danneggiato.</p>
                      <p className="ac-text-ok" style={{ marginTop: 8 }}>
                        ✓ Soluzione confermata dal tecnico
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section ac-section--soft" id="ticketing">
          <div className="ac-wrap">
            <div style={{ maxWidth: "42em", marginBottom: 28 }}>
              <div className="ac-eyebrow">Ticketing AI</div>
              <h2 className="ac-title" style={{ maxWidth: "18em" }}>
                Ogni richiesta diventa un ticket, da qualsiasi canale
              </h2>
              <p className="ac-lead">
                Mail, WhatsApp, chat o telefono: l’agente trasforma tutto in ticket strutturati, li classifica per
                macchina, cliente e urgenza e li assegna alla persona giusta. Niente si perde per strada.
              </p>
            </div>

            <div className="ac-channels">
              {TICKET_CHANNELS.map((label) => (
                <span key={label} className="ac-channel">
                  {label}
                </span>
              ))}
            </div>

            <div className="ac-card">
              <div className="ac-card__head">
                <div>
                  <strong>Coda ticket · oggi</strong>
                </div>
                <span className="ac-badge ac-badge--ok">14 aperti · 3 urgenti</span>
              </div>
              <div className="ac-tickets">
                <div className="ac-ticket">
                  <div className="ac-ticket__top">
                    <span className="ac-ticket__id">#2041</span>
                    <span className="ac-badge ac-badge--urgent">Urgente</span>
                  </div>
                  <h4>Fermo macchina · errore E-04 pressa PH-200</h4>
                  <p>via WhatsApp · Automotive Components · matricola PH-200-112</p>
                  <p style={{ marginTop: 6 }}>→ M. Bianchi</p>
                </div>
                <div className="ac-ticket">
                  <div className="ac-ticket__top">
                    <span className="ac-ticket__id">#2042</span>
                    <span className="ac-badge ac-badge--warn">Media</span>
                  </div>
                  <h4>Richiesta ricambio · cavo fune D.6 IDC 114 TCZ</h4>
                  <p>via email · matricola IDC-114-084 · manutenzione programmata</p>
                  <p style={{ marginTop: 6 }}>→ Ufficio ricambi</p>
                </div>
                <div className="ac-ticket">
                  <div className="ac-ticket__top">
                    <span className="ac-ticket__id">#2043</span>
                    <span className="ac-badge ac-badge--ok">Risolto AI</span>
                  </div>
                  <h4>Info revisione annuale · linea taglio</h4>
                  <p>via chat sito · risposta automatica inviata · in attesa conferma</p>
                  <p style={{ marginTop: 6 }}>✓ chiuso</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section" id="ricambi">
          <div className="ac-wrap">
            <div className="ac-grid-2">
              <div>
                <div className="ac-eyebrow">Ricerca ricambi</div>
                <h2 className="ac-title">Trova il ricambio giusto nel database, anche senza codice</h2>
                <p className="ac-lead">
                  Basta una descrizione, un numero di serie o una foto: l’agente interroga il database ricambi e
                  restituisce il pezzo corretto con disponibilità e prezzo.
                </p>
              </div>
              <div>
                <div className="ac-card">
                  <div className="ac-card__head">
                    <div>
                      <strong>Ricerca</strong>
                      <span>“cuscinetto che perde olio, pressa PH-200, macchina n. serie 12345”</span>
                    </div>
                  </div>
                  <div className="ac-matches">
                    <div className="ac-match ac-match--best">
                      <div>
                        <h4>Cuscinetto albero</h4>
                        <p>cod. RX-4471 · distinta A-12</p>
                        <p style={{ marginTop: 6 }}>3 pz a magazzino · € 480,00</p>
                      </div>
                      <span className="ac-match__pct">MATCH 96%</span>
                    </div>
                    <div className="ac-match">
                      <div>
                        <h4>Guarnizione tenuta</h4>
                        <p>cod. GT-118 · distinta A-12</p>
                        <p style={{ marginTop: 6 }}>12 pz a magazzino · € 64,00</p>
                      </div>
                      <span className="ac-match__pct">MATCH 74%</span>
                    </div>
                    <div className="ac-match">
                      <div>
                        <h4>Kit anelli tenuta</h4>
                        <p>cod. KT-902 · distinta A-14</p>
                        <p style={{ marginTop: 6 }}>0 pz a magazzino · da ordinare</p>
                      </div>
                      <span className="ac-match__pct">MATCH 61%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section ac-section--soft" id="dati">
          <div className="ac-wrap">
            <div style={{ maxWidth: "42em", marginBottom: 32 }}>
              <div className="ac-eyebrow">Qualità dei dati</div>
              <h2 className="ac-title" style={{ maxWidth: "18em" }}>
                Organizza l’archivio ricambi, anche quando i dati sono disordinati
              </h2>
              <p className="ac-lead">
                Codici duplicati, descrizioni incoerenti, distinte incomplete: l’agente pulisce e riordina l’archivio
                ricambi così le ricerche future partono da dati solidi.
              </p>
            </div>
            <div className="ac-compare">
              <div className="ac-card ac-card--bad">
                <div className="ac-compare__label">Prima · dati rotti</div>
                <ul>
                  <li>RX-4471 / rx4471 / RX 4471-A → 3 codici, 1 pezzo</li>
                  <li>“guarnizione ten.” · “GUARN.TENUTA” · “gt-tenuta”</li>
                  <li>Distinta A-12 → 2 righe senza quantità</li>
                </ul>
              </div>
              <div className="ac-compare__arrow" aria-hidden="true">
                →
              </div>
              <div className="ac-card ac-card--good">
                <div className="ac-compare__label">Dopo · archivio ordinato</div>
                <ul>
                  <li>RX-4471 → Cuscinetto albero, unico codice</li>
                  <li>GT-118 → Guarnizione di tenuta, unica voce</li>
                  <li>Distinta A-12 → completa, quantità verificate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section" id="offerte">
          <div className="ac-wrap">
            <div style={{ maxWidth: "42em", marginBottom: 32 }}>
              <div className="ac-eyebrow">Offerte e fornitori</div>
              <h2 className="ac-title" style={{ maxWidth: "18em" }}>
                Prepara l’offerta, o contatta il fornitore se il pezzo non c’è
              </h2>
              <p className="ac-lead">
                Dal ricambio identificato, l’agente decide da solo il passo successivo: offerta pronta se il pezzo è
                disponibile, richiesta al fornitore se manca.
              </p>
            </div>
            <div className="ac-offers">
              <div className="ac-card">
                <div className="ac-compare__label ac-label-ok">Pezzo disponibile</div>
                <h3>Offerta pronta in automatico</h3>
                <div className="ac-row">
                  <span>Cuscinetto albero · RX-4471</span>
                  <span>€ 480,00</span>
                </div>
                <div className="ac-row">
                  <span>Manodopera montaggio</span>
                  <span>€ 180,00</span>
                </div>
                <div className="ac-row ac-row--total">
                  <span>Totale</span>
                  <span>€ 660,00</span>
                </div>
                <p className="ac-text-muted" style={{ margin: "14px 0 0", fontSize: 13 }}>
                  Preventivo su carta intestata, pronto per l’approvazione del tecnico.
                </p>
              </div>
              <div className="ac-card">
                <div className="ac-compare__label ac-label-warn">Pezzo non a magazzino</div>
                <h3>Richiesta al fornitore in automatico</h3>
                <div className="ac-mail-box">
                  <p>A: fornitore.ricambi@metaltek.it</p>
                  <p>Ogg: Richiesta quotazione kit anelli KT-902</p>
                  <p>“Serve disponibilità e prezzo per 1 pz, urgenza alta.”</p>
                </div>
                <p className="ac-text-muted" style={{ margin: "14px 0 0", fontSize: 13 }}>
                  L’agente sceglie il fornitore giusto e invia la richiesta, senza passare dal telefono.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section ac-section--soft" id="integrazioni">
          <div className="ac-wrap">
            <div className="ac-eyebrow">Integrazioni</div>
            <h2 className="ac-title">Si collega ai principali ERP che usi già</h2>
            <p className="ac-lead">
              Gli agenti leggono distinte, listini, giacenze e anagrafiche direttamente dal tuo ERP o da un database
              alimentato dai tuoi dati — senza cambiare i tuoi processi. Tra i gestionali più diffusi nel manifatturiero
              italiano:
            </p>
            <div className="ac-tags">
              {ERP_INTEGRATIONS.map((name) => (
                <span key={name} className="ac-tag">
                  {name}
                </span>
              ))}
            </div>
            <p className="ac-text-muted" style={{ marginTop: 24, fontSize: 14.5, maxWidth: "42em" }}>
              Non vedi il tuo gestionale? Ci integriamo anche via API, export/import o database dedicato.{" "}
              <strong style={{ color: "#e2e8f0", fontWeight: 600 }}>Chiedici del tuo caso in demo.</strong>
            </p>
          </div>
        </section>

        <section className="ac-section" id="demo">
          <div className="ac-wrap">
            <div className="ac-demo-grid">
              <div>
                <div className="ac-eyebrow">Richiedi una demo</div>
                <h2 className="ac-title" style={{ maxWidth: "13em" }}>
                  <span className="ac-label-accent">Vediamo aestima</span>
                  <br />
                  sul vostro service
                </h2>
                <div className="ac-list">
                  <div className="ac-list__item">
                    <span className="ac-list__dot" aria-hidden="true" />
                    <p>30 minuti, sui vostri casi reali di service e post-vendita.</p>
                  </div>
                  <div className="ac-list__item">
                    <span className="ac-list__dot" aria-hidden="true" />
                    <p>Vi mostriamo l’agente al lavoro: dalla richiesta alla soluzione, fino all’offerta o al fornitore.</p>
                  </div>
                  <div className="ac-list__item">
                    <span className="ac-list__dot" aria-hidden="true" />
                    <p>Nessun impegno — l’approvazione resta sempre alle vostre persone.</p>
                  </div>
                </div>
                <a className="ac-phone" href={COMPANY.phoneHref}>
                  +39 346 3060372
                </a>
              </div>

              <div className="ac-card ac-form-card">
                {submitted ? (
                  <div className="ac-form-success is-visible" aria-live="polite">
                    <div className="ac-form-success__icon">
                      <span />
                    </div>
                    <h3 style={{ fontSize: 22 }}>Richiesta ricevuta</h3>
                    <p className="ac-text-muted" style={{ fontSize: 15.5, margin: 0 }}>
                      Ti ricontattiamo a breve per fissare la demo. Grazie.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="ac-field">
                      <label htmlFor="ac-nome">Nome e cognome</label>
                      <input
                        id="ac-nome"
                        name="nome"
                        type="text"
                        placeholder="Mario Rossi"
                        autoComplete="name"
                        value={form.nome}
                        onChange={handleChange}
                      />
                      <span className={`ac-error${errors.nome ? " is-visible" : ""}`}>{errors.nome}</span>
                    </div>
                    <div className="ac-field">
                      <label htmlFor="ac-azienda">Azienda</label>
                      <input
                        id="ac-azienda"
                        name="azienda"
                        type="text"
                        placeholder="Nome azienda"
                        autoComplete="organization"
                        value={form.azienda}
                        onChange={handleChange}
                      />
                      <span className={`ac-error${errors.azienda ? " is-visible" : ""}`}>{errors.azienda}</span>
                    </div>
                    <div className="ac-field-row">
                      <div className="ac-field">
                        <label htmlFor="ac-ruolo">Ruolo</label>
                        <input
                          id="ac-ruolo"
                          name="ruolo"
                          type="text"
                          placeholder="Resp. ufficio ricambi"
                          value={form.ruolo}
                          onChange={handleChange}
                        />
                        <span className={`ac-error${errors.ruolo ? " is-visible" : ""}`}>{errors.ruolo}</span>
                      </div>
                      <div className="ac-field">
                        <label htmlFor="ac-email">Email aziendale</label>
                        <input
                          id="ac-email"
                          name="email"
                          type="email"
                          placeholder="nome@azienda.it"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                        <span className={`ac-error${errors.email ? " is-visible" : ""}`}>{errors.email}</span>
                      </div>
                    </div>
                    <div className="ac-field">
                      <label htmlFor="ac-volume">Quante richieste di ricambi gestite a settimana?</label>
                      <select id="ac-volume" name="volume" value={form.volume} onChange={handleChange}>
                        <option value="">Seleziona…</option>
                        <option value="<10">Meno di 10</option>
                        <option value="10-30">10 – 30</option>
                        <option value="30-80">30 – 80</option>
                        <option value=">80">Oltre 80</option>
                      </select>
                      <span className={`ac-error${errors.volume ? " is-visible" : ""}`}>{errors.volume}</span>
                    </div>
                    <div className="ac-field">
                      <label htmlFor="ac-senzaCodice">Quanto spesso i clienti chiedono ricambi senza dare il codice?</label>
                      <select id="ac-senzaCodice" name="senzaCodice" value={form.senzaCodice} onChange={handleChange}>
                        <option value="">Seleziona…</option>
                        <option value="quasi-sempre">Quasi sempre</option>
                        <option value="spesso">Spesso</option>
                        <option value="a-volte">A volte</option>
                        <option value="raramente">Raramente</option>
                      </select>
                      <span className={`ac-error${errors.senzaCodice ? " is-visible" : ""}`}>{errors.senzaCodice}</span>
                    </div>
                    <div className="ac-field">
                      <label htmlFor="ac-magazzino">
                        Nel processo ricambi dovete anche verificare il magazzino e ordinare i pezzi mancanti dai
                        fornitori?
                      </label>
                      <select
                        id="ac-magazzino"
                        name="magazzinoFornitori"
                        value={form.magazzinoFornitori}
                        onChange={handleChange}
                      >
                        <option value="">Seleziona…</option>
                        <option value="si">Sì</option>
                        <option value="no">No</option>
                        <option value="a-volte">A volte</option>
                      </select>
                      <span className={`ac-error${errors.magazzinoFornitori ? " is-visible" : ""}`}>
                        {errors.magazzinoFornitori}
                      </span>
                    </div>
                    <button className="btn btn-primary btn-w-100" type="submit" disabled={submitting} id="ac-submit">
                      {submitting ? "Invio in corso…" : "Richiedi una demo"}
                    </button>
                    {submitError && (
                      <p className="ac-form-note" style={{ color: "#fca5a5" }}>
                        {submitError}{" "}
                        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                          Prenota su Calendly
                        </a>
                      </p>
                    )}
                    <p className="ac-form-note">Inviando accetti di essere ricontattato per fissare la demo.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
