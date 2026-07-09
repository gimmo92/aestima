"use client";

import { useState } from "react";
import { BackgroundGlow, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { CALENDLY_URL } from "@/lib/site";

const ACCENT = {
  text: "text-blue-300",
  badge: "border border-blue-400/25 bg-blue-500/10 text-blue-200 backdrop-blur-sm",
};

/* Statistiche della sezione problema — icona + numero + didascalia */
const svgProps = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const PROBLEM_STATS = [
  {
    stat: "1+ ora",
    caption:
      "per identificare il pezzo e ricostruire il prezzo, a ogni richiesta",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="3" width="12" height="13" rx="1.5" />
        <path d="M6 7h6M6 10h4" />
        <circle cx="15.5" cy="15" r="4" />
        <path d="M18.5 18l2.5 2.5" />
      </svg>
    ),
  },
  {
    stat: "50% del tempo",
    caption: "a saltare tra gestionale, magazzino e fornitori",
    icon: (
      <svg {...svgProps}>
        <path d="M4 7h11M4 7l3-3M4 7l3 3" />
        <path d="M20 17H9M20 17l-3-3M20 17l-3 3" />
      </svg>
    ),
  },
  {
    stat: "Ordini persi",
    caption: "quando l'offerta arriva troppo tardi",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

/* Agenti AI della suite post-vendita */
const AGENTS = [
  {
    tag: "TICKETING",
    title: "Ticketing AI",
    lead: "Riceve e smista ogni richiesta in arrivo.",
    points: [
      "Trasforma mail, form e telefonate in ticket strutturati.",
      "Classifica per macchina, cliente, urgenza e tipo di intervento.",
      "Instrada la richiesta alla persona giusta — niente si perde per strada.",
    ],
    icon: (
      <svg {...svgProps}>
        <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
        <path d="M12 8v8" strokeDasharray="1.5 2.5" />
      </svg>
    ),
  },
  {
    tag: "OFFERTE",
    title: "Agente offerte",
    lead: "Dalla richiesta di ricambio all'offerta pronta.",
    points: [
      "Identifica il pezzo anche senza codice, da descrizione o numero di serie.",
      "Verifica la giacenza e, se manca, prepara la bozza di richiesta al fornitore.",
      "Genera il preventivo su carta intestata — l'approvazione resta al tecnico.",
    ],
    icon: (
      <svg {...svgProps}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    tag: "PROATTIVO",
    title: "Agente sul parco installato",
    lead: "Suggerisce le azioni giuste sul parco macchine del cliente.",
    points: [
      "Analizza lo storico del cliente e delle macchine installate.",
      "Segnala ricambi da proporre: usura, manutenzione programmata, revisioni.",
      "Trasforma il post-vendita da reattivo a proattivo.",
    ],
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <path d="M7 7l1.8 1.8M15.2 15.2L17 17M17 7l-1.8 1.8M8.8 15.2L7 17" />
      </svg>
    ),
  },
  {
    tag: "PRICING",
    title: "Ottimizzazione del pricing",
    lead: "Il prezzo giusto, su ogni offerta.",
    points: [
      "Suggerisce il prezzo in base a storico, marginalità e condizioni cliente.",
      "Tiene conto di disponibilità, urgenza e valore del ricambio.",
      "Protegge il margine senza far perdere l'ordine.",
    ],
    icon: (
      <svg {...svgProps}>
        <path d="M4 12l8-8 8 8-8 8z" />
        <path d="M10 10l4 4M14 10l-4 4" />
      </svg>
    ),
  },
];

/* Statistiche risultati — numero grande + titolo + didascalia */
const RESULTS_STATS = [
  {
    stat: "+30%",
    title: "Ordini ricambi",
    caption:
      "più ordini chiusi: rispondi in tempo e proponi in modo proattivo sul parco cliente",
  },
  {
    stat: "−80%",
    title: "Ordini persi",
    caption:
      "meno occasioni perse per offerte arrivate troppo tardi o dimenticate",
  },
  {
    stat: "fino al 90%",
    title: "Tempi di risposta",
    caption: "dalla richiesta all'offerta pronta, grazie all'automazione",
  },
];

const PARTNER_LOGOS = [
  { src: "/logos/tsg.png", alt: "TSG" },
  { src: "/logos/emmegi.png", alt: "EMMEGI Heat Exchangers" },
  { src: "/logos/rossi.png", alt: "Rossi" },
  { src: "/logos/isoclima.png", alt: "Isoclima" },
  { src: "/logos/idealtec.png", alt: "Idealtec" },
  { src: "/logos/toptaglio.png", alt: "Toptaglio" },
];

/* Gestionali / ERP più diffusi nelle PMI manifatturiere italiane */
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

function PartnerLogoBand() {
  return (
    <section
      aria-label="Aziende clienti"
      className="section-divider relative border-t border-white/[0.06] bg-navy-950/50 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8 lg:px-12">
        <p className="mb-8 text-center font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
          Lavoriamo con
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:gap-x-16">
          {PARTNER_LOGOS.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="logo-partner"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }) {
  return <div className="pill-eyebrow">{children}</div>;
}

function Bullet() {
  return (
    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-glow-sm" />
  );
}


function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass glass-hover rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function FileChip({ type, name, meta, accent }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
      <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${accent}`}>
        {type === "mail" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
            <path d="M4 6h16v12H4z" />
            <path d="M4 7l8 6 8-6" />
          </svg>
        ) : type === "photo" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="2" />
            <path d="M21 15l-5-4-4 3-3-2-6 5" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M10 13h4M10 17h4M10 9h1" />
          </svg>
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate text-[13px] font-medium text-white">{name}</p>
        <p className="font-mono text-[10.5px] text-slate-500">{meta}</p>
      </div>
    </div>
  );
}

function HeroSoftwareMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div aria-hidden className="absolute -inset-8 rounded-[32px] bg-gradient-to-br from-blue-600/25 to-cyan-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/90 shadow-glass-lg backdrop-blur-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-mono text-[11px] text-slate-500">aestima — agente offerte · post-vendita</span>
          </div>
          <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${ACCENT.badge}`}>
            Elaborazione completata
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_auto_1.15fr]">
          {/* Input panel */}
          <div className="border-b border-white/[0.06] p-4 lg:border-b-0 lg:border-r">
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-blue-300/80">
              Input
            </p>
            <div className="space-y-2.5">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/[0.06] p-3">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-blue-300/80">Richiesta cliente</p>
                <p className="text-[12px] leading-relaxed text-slate-300">
                  &ldquo;Si è rotto il componente X della macchina, n. serie 12345&rdquo;
                </p>
              </div>
              <FileChip
                type="photo"
                name="foto_componente.jpg"
                meta="Allegato · foto del pezzo danneggiato"
                accent="bg-gradient-to-br from-blue-600 to-cyan-600 ring-1 ring-cyan-400/30"
              />
              <FileChip
                type="mail"
                name="richiesta@cliente.it"
                meta="Email · via assistenza post-vendita"
                accent="bg-gradient-to-br from-slate-600/90 to-slate-700/80"
              />
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-cyan-400/20 bg-cyan-500/[0.04] px-3 py-3 text-center">
              <p className="text-[11.5px] text-slate-400">Descrizione, numero di serie o foto</p>
              <p className="mt-0.5 font-mono text-[10px] text-slate-500">mail · form · allegati</p>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-[11.5px] text-emerald-300">
                Ricambio identificato · giacenza verificata · prezzo calcolato
              </span>
            </div>
          </div>

          {/* Flow arrow */}
          <div className="hidden items-center justify-center px-2 lg:flex">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/10 shadow-glow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-300">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">AI</span>
            </div>
          </div>

          {/* Flow arrow — mobile */}
          <div className="flex items-center justify-center border-b border-white/[0.06] py-3 lg:hidden">
            <div className="flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-300">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-wider text-blue-300">Elaborazione AI</span>
            </div>
          </div>

          {/* Output — carta intestata */}
          <div className="relative bg-white/[0.02] p-4">
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-blue-300/80">
              Output · carta intestata
            </p>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
              {/* Intestazione aziendale */}
              <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-cyan-600">
                        <span className="h-2 w-2 rotate-45 rounded-[1px] bg-white" />
                      </span>
                      <span className="text-[13px] font-bold tracking-tight text-slate-900">Macchine Industriali SpA</span>
                    </div>
                    <p className="mt-1 text-[9px] leading-relaxed text-slate-500">
                      Via Industria 12 · 20100 Milano · P.IVA 01234567890
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Preventivo</p>
                    <p className="font-mono text-[11px] font-semibold text-slate-800">PRV-2026-0412</p>
                    <p className="text-[9px] text-slate-500">26/06/2026</p>
                  </div>
                </div>
              </div>

              {/* Corpo documento */}
              <div className="px-4 py-3 text-slate-800">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Ricambio identificato</p>
                <p className="text-[11px] font-medium text-slate-900">Assy. valvola VP-204 · cod. RIC-88412</p>
                <p className="mt-1 font-mono text-[9px] text-slate-500">Macchina MX-450 · n. serie 12345 · distinta rev. C</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-semibold text-emerald-800">
                    Disponibile a magazzino · 2 pz
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[8px] font-semibold text-amber-800">
                    Da ordinare · GS-18
                  </span>
                </div>

                <div className="my-3 h-px bg-slate-200" />

                <div className="space-y-1.5">
                  {[
                    ["Valvola VP-204 (assiemato)", "€ 1.240,00"],
                    ["Guarnizione kit GS-18", "€ 86,00"],
                    ["Condizioni cliente · sconto 8%", "− € 106,00"],
                  ].map(([label, price]) => (
                    <div key={label} className="flex items-center justify-between gap-2 text-[10px]">
                      <span className="truncate text-slate-600">{label}</span>
                      <span className="font-mono font-medium text-slate-800">{price}</span>
                    </div>
                  ))}
                </div>

                <div className="my-3 h-px bg-slate-200" />

                <p className="mb-2 text-[9px] leading-relaxed text-amber-700">
                  Bozza richiesta fornitore pronta per GS-18 — l&apos;operatore decide e invia.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-900">Totale offerta</span>
                  <span className="font-mono text-[13px] font-bold text-blue-700">€ 1.220,00</span>
                </div>

                <div className="mt-3 flex gap-2">
                  <span className="flex-1 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 py-1.5 text-center text-[10px] font-semibold text-white">
                    Approva
                  </span>
                  <span className="flex-1 rounded-md border border-slate-200 py-1.5 text-center text-[10px] font-semibold text-slate-700">
                    Esporta PDF
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-100 bg-slate-50 px-4 py-2">
                <p className="font-mono text-[8.5px] text-slate-400">
                  Documento generato da aestima · calcolo interno allegato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Inserisci un'email valida";
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
      setSubmitError(
        error.message || "Invio non riuscito. Riprova o prenota direttamente su Calendly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />

      <SiteHeader />

      {/* HERO */}
      <section className="section-divider relative">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-28">
          <div className="relative z-10">
            <Eyebrow>Piattaforma AI · Post-vendita</Eyebrow>
            <h1 className="text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[58px]">
              <span className="gradient-text">Agenti AI</span>
              <br />
              <span className="text-white">per il tuo post-vendita</span>
            </h1>
            <p className="mt-6 max-w-[30em] text-[17px] leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
              Dai ticket in arrivo alle offerte pronte, dalle azioni proattive sul parco
              installato all&apos;ottimizzazione del pricing — con chatbot di assistenza sui
              ricambi. Una squadra di agenti che lavora sui tuoi dati; l&apos;approvazione resta
              sempre alle tue persone.
            </p>

            <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/[0.07] px-4 py-3.5">
              <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-[14.5px] font-semibold text-emerald-200">
                  Integrazione WhatsApp
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-slate-300">
                  I tecnici inviano note vocali, foto e testo da WhatsApp: il sistema genera
                  rapportini di intervento e offerte ricambi in automatico, pronti da revisionare.
                </p>
                <a
                  href="#rapportini-whatsapp"
                  className="mt-2 inline-flex text-[13.5px] font-medium text-emerald-300 transition hover:text-emerald-200"
                >
                  Rapportini e offerte →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-blue-400/20 bg-blue-500/[0.07] px-4 py-3.5">
              <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-blue-500/15 text-cyan-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 10h.01M12 10h.01M16 10h.01" />
                </svg>
              </div>
              <div>
                <p className="text-[14.5px] font-semibold text-blue-200">
                  Chatbot assistenza ricambi
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-slate-300">
                  Il team e i clienti chiedono un pezzo in linguaggio naturale: il chatbot
                  interroga distinte, listini e giacenze e risponde con codice, disponibilità e prezzo.
                </p>
                <a
                  href="#chatbot-ricambi"
                  className="mt-2 inline-flex text-[13.5px] font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  Chatbot sui tuoi dati →
                </a>
              </div>
            </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Richiedi una demo
              </a>
              <a href="#agenti" className="btn-ghost">
                Gli agenti
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <HeroSoftwareMockup />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1140px] px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
          <div className="glass-strong flex flex-col items-center justify-center gap-1 rounded-2xl border-cyan-400/15 bg-gradient-to-r from-blue-950/40 via-navy-900/60 to-cyan-950/30 px-6 py-5 text-center sm:flex-row sm:gap-3 sm:py-6">
            <p className="text-[16px] font-medium leading-snug text-slate-300 sm:text-lg">
              Più ordini chiusi e meno occasioni perse, con il post-vendita automatizzato
            </p>
          </div>
        </div>
      </section>

      <PartnerLogoBand />

      {/* RAPPORTINI WHATSAPP — terza sezione */}
      <section id="rapportini-whatsapp" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/15 via-transparent to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>WhatsApp · Rapportini e offerte</Eyebrow>
              <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Rapportini e offerte ricambi, generati in automatico
              </h2>
              <p className="mt-4 max-w-[38em] text-base leading-relaxed text-slate-400 sm:text-lg">
                Il tecnico non compila moduli a fine giornata e non torna in ufficio per
                preparare l&apos;offerta. Manda messaggi, foto o note vocali su WhatsApp durante
                l&apos;intervento: il sistema struttura il rapportino e, quando serve, propone
                anche l&apos;offerta ricambi con prezzo e disponibilità. Tu controlli e approvi
                prima dell&apos;archiviazione o dell&apos;invio al cliente.
              </p>
              <div className="mt-8 flex flex-col gap-3.5">
                {[
                  "Integrazione WhatsApp Business: niente app nuova per il team in campo.",
                  "Trascrizione e sintesi di vocali, foto e messaggi in un rapportino coerente.",
                  "Richiesta ricambio da WhatsApp → identificazione pezzo, giacenza e offerta pronta da approvare.",
                  "Collegamento a cliente, commessa e parco macchine già presenti nei tuoi dati.",
                ].map((t) => (
                  <div key={t} className="flex gap-3">
                    <Bullet />
                    <p className="text-[15px] leading-relaxed text-slate-300">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div aria-hidden className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-emerald-600/15 to-cyan-500/10 blur-2xl" />
              <GlassCard className="relative overflow-hidden border-emerald-400/15 p-0">
                <div className="border-b border-white/[0.06] bg-emerald-500/[0.08] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white">Tecnico · WhatsApp</p>
                      <p className="font-mono text-[10px] text-slate-500">Intervento MX-450 · Cliente Rossi SpA</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-600/25 px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-200">
                    Sostituito kit guarnizioni VP-204, test ok. Foto allegata.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-600/25 px-3 py-2.5 text-[12.5px] text-slate-400">
                    🎤 Nota vocale · 0:42
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-600/25 px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-200">
                    Cliente chiede anche preventivo per valvola VP-204 — stessa macchina.
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-500/[0.06] px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-glow-sm" />
                    <span className="text-[11.5px] text-cyan-200">
                      Rapportino + offerta generate · in attesa di approvazione
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Output</p>
                  <p className="mt-1 text-[13px] font-medium text-white">Rapportino INT-2026-0847</p>
                  <p className="text-[11.5px] text-slate-400">
                    Attività, materiali, tempi — pronto per il gestionale
                  </p>
                  <p className="mt-2 text-[13px] font-medium text-white">Offerta PRV-2026-0413</p>
                  <p className="text-[11.5px] text-slate-400">
                    Ricambio identificato, giacenza verificata, prezzo su carta intestata
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CHATBOT ASSISTENZA RICAMBI */}
      <section id="chatbot-ricambi" className="section-divider relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/15 via-transparent to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div aria-hidden className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-blue-600/15 to-cyan-500/10 blur-2xl" />
              <GlassCard className="relative overflow-hidden border-blue-400/15 p-0">
                <div className="flex items-center justify-between border-b border-white/[0.06] bg-blue-500/[0.08] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600">
                      <span className="h-2 w-2 rotate-45 rounded-[1px] bg-white" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white">aestima · assistenza ricambi</p>
                      <p className="font-mono text-[10px] text-slate-500">Connesso a distinte · listini · magazzino</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-300">
                    Online
                  </span>
                </div>

                <div className="space-y-3 p-4">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-white/[0.06] bg-white/[0.04] px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-300">
                    Ciao, mi serve la valvola per la macchina MX-450 serie 12345 — quella montata sulla linea 2.
                  </div>
                  <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm border border-cyan-400/15 bg-blue-500/10 px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-200">
                    <p className="mb-1.5 font-medium text-cyan-200">Trovato nella distinta MX-450 rev. C</p>
                    <p>Assy. valvola VP-204 · cod. <span className="font-mono text-white">RIC-88412</span></p>
                    <p className="mt-1.5 text-emerald-300">Disponibile a magazzino · 2 pz</p>
                    <p className="mt-1 text-slate-400">Listino € 1.240,00 · condizioni cliente applicate</p>
                  </div>
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-white/[0.06] bg-white/[0.04] px-3 py-2.5 text-[12.5px] text-slate-300">
                    Ok, prepara l&apos;offerta per il cliente Rossi.
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-500/[0.06] px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-glow-sm" />
                    <span className="text-[11.5px] text-cyan-200">Offerta PRV-2026-0418 pronta · in attesa di approvazione</span>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] px-4 py-3">
                  <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                    <span className="text-[12px] text-slate-500">Chiedi un ricambio, un codice, una giacenza…</span>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="order-1 lg:order-2">
              <Eyebrow>Chatbot · Assistenza ricambi</Eyebrow>
              <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Risposte immediate interrogando i tuoi dati
              </h2>
              <p className="mt-4 max-w-[38em] text-base leading-relaxed text-slate-400 sm:text-lg">
                Ufficio ricambi, assistenza e clienti fanno le stesse domande ogni giorno: quale
                pezzo, se c&apos;è a magazzino, a che prezzo. Il chatbot interroga il database
                con distinte, configurazioni macchina, listini e giacenze — e risponde in
                linguaggio naturale, senza aprire il gestionale.
              </p>
              <div className="mt-8 flex flex-col gap-3.5">
                {[
                  "Domande in italiano, anche senza codice articolo: descrizione, serie, contesto macchina.",
                  "Interroga distinte, anagrafica clienti, listini ricambi e stock in tempo reale.",
                  "Propone il componente corretto, la disponibilità e il prezzo — può preparare anche l'offerta.",
                  "Disponibile per il team interno e, se serve, per i clienti sul portale o via widget.",
                ].map((t) => (
                  <div key={t} className="flex gap-3">
                    <Bullet />
                    <p className="text-[15px] leading-relaxed text-slate-300">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IL PROBLEMA */}
      <section id="problema" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[46em] text-center">
            <div className="flex justify-center">
              <Eyebrow>Il problema</Eyebrow>
            </div>
            <h2 className="mx-auto max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Il post-vendita ruba ore — e le occasioni si perdono
            </h2>
            <p className="mx-auto mt-4 max-w-[40em] text-base leading-relaxed text-slate-400 sm:text-lg">
              Tra richieste da smistare, ricambi da identificare e prezzi da decidere, il team
              perde gran parte del tempo così:
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {PROBLEM_STATS.map((stat) => (
              <div
                key={stat.stat}
                className="flex flex-col items-center px-2 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-cyan-300 shadow-glow-sm">
                  {stat.icon}
                </div>
                <p className="text-[26px] font-semibold leading-tight tracking-tight text-white sm:text-[28px]">
                  {stat.stat}
                </p>
                <p className="mt-2 max-w-[16em] text-[15px] leading-relaxed text-slate-400">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLI AGENTI AI */}
      <section id="agenti" className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Gli agenti AI</Eyebrow>
          <h2 className="mb-4 max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Una squadra di agenti per l&apos;after-sales
          </h2>
          <p className="mb-10 max-w-[44em] text-base leading-relaxed text-slate-400 sm:text-lg">
            Ogni agente presidia un pezzo del processo post-vendita e lavora insieme agli altri
            sui tuoi dati. Le tue persone restano al centro: decidono e approvano.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {AGENTS.map((a) => (
              <GlassCard key={a.tag} className="border-cyan-400/15 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-cyan-300 shadow-glow-sm">
                    {a.icon}
                  </div>
                  <div>
                    <span className="inline-block rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-2.5 py-1 font-mono text-[11px] tracking-wide text-white shadow-glow-sm">
                      {a.tag}
                    </span>
                    <h3 className="mt-1.5 text-[21px] font-semibold tracking-tight">{a.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-[15.5px] font-medium leading-relaxed text-slate-200">
                  {a.lead}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {a.points.map((p) => (
                    <div key={p} className="flex gap-3">
                      <Bullet />
                      <p className="text-[15px] leading-relaxed text-slate-400">{p}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="glass-strong mt-5 flex flex-wrap items-center gap-3.5 rounded-2xl border-blue-400/20 bg-gradient-to-r from-blue-950/50 to-cyan-950/30 p-6 sm:p-7">
            <span className="h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-glow-sm" />
            <p className="text-base font-medium leading-snug sm:text-lg">
              Dai ticket in arrivo all&apos;offerta approvata, fino alle azioni proattive sul
              parco cliente — un&apos;unica piattaforma, sempre con il controllo delle tue persone.
            </p>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section id="funziona" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Come funziona</Eyebrow>
          <h2 className="mb-10 max-w-[14em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Gli agenti lavorano insieme, in cinque passaggi
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["STEP 01", "Arriva la richiesta", "Il Ticketing AI trasforma mail, form e telefonate in ticket strutturati e li smista."],
              ["STEP 02", "Identifica il ricambio", "L'agente offerte risale alla macchina, propone il componente dalla distinta e verifica la giacenza."],
              ["STEP 03", "Ottimizza il prezzo", "L'ottimizzazione pricing propone il prezzo migliore su storico, margini e condizioni cliente."],
              ["STEP 04", "Offerta pronta", "Preventivo su carta intestata + calcolo interno. Il tecnico approva e invia."],
              ["STEP 05", "Azioni proattive", "L'agente sul parco installato suggerisce i prossimi ricambi e interventi da proporre al cliente."],
            ].map(([step, title, desc]) => (
              <GlassCard key={step} className="p-6">
                <div className={`mb-4 font-mono text-[13px] font-medium ${ACCENT.text}`}>{step}</div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-400">{desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* I RISULTATI */}
      <section className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[42em] text-center">
            <div className="flex justify-center">
              <Eyebrow>I risultati</Eyebrow>
            </div>
            <h2 className="mx-auto max-w-[15em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Più ordini, meno occasioni perse
            </h2>
            <p className="mx-auto mt-4 max-w-[38em] text-base leading-relaxed text-slate-400 sm:text-lg">
              Con il post-vendita automatizzato rispondi più in fretta, non lasci scappare
              richieste e proponi al momento giusto.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-0">
            {RESULTS_STATS.map((r, i) => (
              <div
                key={r.stat}
                className={`flex flex-col items-center px-4 text-center sm:px-8 ${
                  i > 0 ? "sm:border-l sm:border-white/[0.08]" : ""
                }`}
              >
                <p className="gradient-text-accent text-[38px] font-semibold leading-none tracking-tight sm:text-[46px] lg:text-[52px]">
                  {r.stat}
                </p>
                <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-200">
                  {r.title}
                </p>
                <p className="mt-2.5 max-w-[18em] text-[15px] leading-relaxed text-slate-400">
                  {r.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COSTRUITO SUI TUOI DATI */}
      <section className="section-divider relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-blue-950" />
        <div aria-hidden className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[100px]" />
        <div aria-hidden className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Costruito sui tuoi dati</Eyebrow>
          <h2 className="mb-11 max-w-[17em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Lavora sui tuoi numeri, dentro la tua infrastruttura
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              ["Integrazione", "Si collega al gestionale o a un DB con distinte e configurazioni macchina, anagrafica clienti, listini ricambi, giacenze di magazzino e anagrafica fornitori."],
              ["On-premise", "Possibilità di installazione sui tuoi server, dentro il perimetro aziendale."],
              ["Riservatezza", "Nessun dato viene usato per addestrare modelli esterni."],
            ].map(([title, desc]) => (
              <div key={title} className="glass glass-hover rounded-2xl p-6">
                <div className="mb-4 h-px bg-gradient-to-r from-blue-400/40 to-transparent" />
                <h3 className="mb-2.5 text-lg font-semibold">{title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRAZIONI GESTIONALI */}
      <section id="integrazioni" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Eyebrow>Integrazioni</Eyebrow>
          <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Si collega ai gestionali che usi già
          </h2>
          <p className="mt-4 max-w-[42em] text-base leading-relaxed text-slate-400 sm:text-lg">
            L&apos;agente legge distinte, listini, giacenze e anagrafiche direttamente dal tuo
            ERP o da un database alimentato dai tuoi dati — senza cambiare i tuoi processi.
            Tra i gestionali più diffusi nel manifatturiero italiano:
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {ERP_INTEGRATIONS.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[14.5px] font-medium text-slate-200 backdrop-blur-sm transition hover:border-blue-400/30 hover:text-white"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[14.5px] leading-relaxed text-slate-500">
            Non vedi il tuo gestionale? Ci integriamo anche via API, export/import o database
            dedicato. <span className="text-slate-300">Chiedici del tuo caso in demo.</span>
          </p>
        </div>
      </section>

      {/* FORM DEMO */}
      <section id="demo" className="section-divider relative">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-28">
          <div>
            <Eyebrow>Richiedi una demo</Eyebrow>
            <h2 className="mb-5 max-w-[13em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              <span className="gradient-text-accent">Vediamo aestima</span>
              <br />
              <span className="text-white">sul vostro post-vendita</span>
            </h2>
            <div className="flex max-w-[30em] flex-col gap-3.5">
              {[
                "30 minuti, sui vostri casi reali di after-sales.",
                "Vi mostriamo gli agenti al lavoro: dal ticket all'offerta, fino alle azioni sul parco cliente.",
                "Nessun impegno. L'approvazione resta sempre alle vostre persone.",
              ].map((t) => (
                <div key={t} className="flex gap-3">
                  <Bullet />
                  <p className="text-base leading-relaxed text-slate-300">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-blue-600/20 to-cyan-500/10 blur-2xl" />
            <GlassCard className="relative p-6 sm:p-9">
              {submitted ? (
                <div className="px-1.5 py-6 text-center">
                  <div className="mx-auto mb-5 flex h-13 w-13 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 shadow-glow-sm">
                    <span className="h-2.5 w-[18px] -translate-y-px rotate-[-45deg] border-b-[3px] border-l-[3px] border-cyan-400" />
                  </div>
                  <h3 className="mb-2.5 text-[22px] font-semibold tracking-tight">Richiesta ricevuta</h3>
                  <p className="text-[15.5px] leading-relaxed text-slate-400">
                    Ti ricontattiamo a breve per fissare la demo. Grazie.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  {[
                    ["nome", "Nome e cognome", "text", "Mario Rossi"],
                    ["azienda", "Azienda", "text", "Nome azienda"],
                  ].map(([name, label, type, placeholder]) => (
                    <label key={name} className="flex flex-col gap-1.5">
                      <span className="text-[13.5px] font-medium text-slate-300">{label}</span>
                      <input
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        type={type}
                        placeholder={placeholder}
                        className="field-dark"
                      />
                      {errors[name] && <span className="text-[12.5px] text-red-400">{errors[name]}</span>}
                    </label>
                  ))}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      ["ruolo", "Ruolo", "Resp. ufficio ricambi"],
                      ["email", "Email aziendale", "nome@azienda.it"],
                    ].map(([name, label, placeholder]) => (
                      <label key={name} className="flex flex-col gap-1.5">
                        <span className="text-[13.5px] font-medium text-slate-300">{label}</span>
                        <input
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          type={name === "email" ? "email" : "text"}
                          placeholder={placeholder}
                          className="field-dark"
                        />
                        {errors[name] && <span className="text-[12.5px] text-red-400">{errors[name]}</span>}
                      </label>
                    ))}
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13.5px] font-medium text-slate-300">
                      Quante richieste di ricambi gestite a settimana?
                    </span>
                    <select name="volume" value={form.volume} onChange={handleChange} className="field-dark appearance-none">
                      <option value="">Seleziona…</option>
                      <option value="<10">Meno di 10</option>
                      <option value="10-30">10 – 30</option>
                      <option value="30-80">30 – 80</option>
                      <option value=">80">Oltre 80</option>
                    </select>
                    {errors.volume && <span className="text-[12.5px] text-red-400">{errors.volume}</span>}
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13.5px] font-medium text-slate-300">
                      Quanto spesso i clienti chiedono ricambi senza dare il codice?
                    </span>
                    <select name="senzaCodice" value={form.senzaCodice} onChange={handleChange} className="field-dark appearance-none">
                      <option value="">Seleziona…</option>
                      <option value="quasi-sempre">Quasi sempre</option>
                      <option value="spesso">Spesso</option>
                      <option value="a-volte">A volte</option>
                      <option value="raramente">Raramente</option>
                    </select>
                    {errors.senzaCodice && <span className="text-[12.5px] text-red-400">{errors.senzaCodice}</span>}
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13.5px] font-medium text-slate-300">
                      Nel processo ricambi dovete anche verificare il magazzino e ordinare i pezzi mancanti dai fornitori?
                    </span>
                    <select
                      name="magazzinoFornitori"
                      value={form.magazzinoFornitori}
                      onChange={handleChange}
                      className="field-dark appearance-none"
                    >
                      <option value="">Seleziona…</option>
                      <option value="si">Sì</option>
                      <option value="no">No</option>
                      <option value="a-volte">A volte</option>
                    </select>
                    {errors.magazzinoFornitori && (
                      <span className="text-[12.5px] text-red-400">{errors.magazzinoFornitori}</span>
                    )}
                  </label>

                  <button type="submit" disabled={submitting} className="btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60">
                    {submitting ? "Invio in corso…" : "Richiedi una demo"}
                  </button>
                  {submitError && (
                    <p className="text-center text-[12.5px] leading-relaxed text-red-400">
                      {submitError}{" "}
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                        Prenota su Calendly
                      </a>
                    </p>
                  )}
                  <p className="text-center text-xs leading-relaxed text-slate-500">
                    Inviando accetti di essere ricontattato per fissare la demo.{" "}
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-blue-300/80 underline hover:text-blue-300">
                      Oppure scegli data e ora su Calendly
                    </a>
                  </p>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      <SiteFooter />

      <button
        onClick={scrollTop}
        aria-label="Torna su"
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 shadow-glow transition hover:from-blue-500 hover:to-cyan-500"
      >
        <span className="h-2.5 w-2.5 translate-y-0.5 rotate-45 border-l-2 border-t-2 border-white" />
      </button>
    </div>
  );
}
