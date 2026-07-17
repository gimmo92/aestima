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

const TICKET_CHANNELS = [
  { label: "Email", icon: "✉" },
  { label: "WhatsApp", icon: "💬" },
  { label: "Chat sul sito", icon: "🌐" },
  { label: "Telefono", icon: "📞" },
];

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

function PartnerLogoBand() {
  return (
    <section
      aria-label="Aziende clienti"
      className="section-divider relative border-t border-white/[0.06] bg-navy-950/50 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8 lg:px-12">
        <p className="mb-2 text-center font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
          Lavoriamo con
        </p>
        <p className="mb-8 text-center text-[15px] text-slate-400">
          Chi si affida ad aestima — costruttori e distributori che gestiscono richieste ricambi ogni giorno.
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

function ServiceChatMockup() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-blue-600/15 to-cyan-500/10 blur-2xl" />
      <GlassCard className="relative overflow-hidden border-blue-400/15 p-0">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-blue-500/[0.08] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600">
              <span className="h-2 w-2 rotate-45 rounded-[1px] bg-white" />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-white">Assistente aestima</p>
              <p className="font-mono text-[10px] text-slate-500">Assistenza service · nuova conversazione</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-300">
            Online
          </span>
        </div>

        <div className="space-y-3 p-4">
          <div className="max-w-[92%] rounded-2xl rounded-tl-sm border border-white/[0.06] bg-white/[0.04] px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-300">
            Buongiorno, posso aiutarti a identificare ricambi nella distinta della tua macchina o a
            trovare soluzioni a malfunzionamenti già risolti in passato.
          </div>
          <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm border border-blue-400/20 bg-blue-600/20 px-3 py-2.5 text-[12.5px] text-slate-200">
            Cerco un ricambio
          </div>
          <div className="max-w-[92%] rounded-2xl rounded-tl-sm border border-white/[0.06] bg-white/[0.04] px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-300">
            Perfetto! Seleziona il modello dall&apos;elenco oppure indica tu stesso il modello o la matricola:
          </div>
          <div className="ml-auto max-w-[55%] rounded-2xl rounded-tr-sm border border-blue-400/20 bg-blue-600/20 px-3 py-2.5 font-mono text-[12.5px] text-slate-200">
            IDC-114-084
          </div>
          <div className="max-w-[95%] rounded-2xl rounded-tl-sm border border-cyan-400/15 bg-blue-500/10 px-3 py-2.5 text-[12.5px] leading-relaxed text-slate-200">
            <p className="mb-1.5 font-medium text-cyan-200">
              Macchina identificata: Impianto IDC 114 TCZ
            </p>
            <p className="font-mono text-[11px] text-slate-400">
              Matricola IDC-114-084 · anno 2018 · variante RTP
            </p>
            <p className="mt-2 text-slate-300">
              Che ricambio stai cercando? Ecco alcuni componenti della distinta base:
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Perno curva", "Cuscinetto 6005 2RS", "Corona ruota traino", "Cavo ferro zincato D.6"].map(
                (part) => (
                  <span
                    key={part}
                    className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-1 text-[10.5px] text-slate-300"
                  >
                    {part}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2">
            <span className="text-[12px] text-slate-500">Descrivi il problema o allega un file…</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function KnowledgeBaseMockup() {
  return (
    <GlassCard className="overflow-hidden border-blue-400/15 p-0">
      <div className="border-b border-white/[0.06] bg-blue-500/[0.08] px-4 py-3">
        <p className="text-[13px] font-semibold text-white">Impianto IDC 114 TCZ</p>
        <p className="font-mono text-[10px] text-slate-500">Knowledge base · troubleshooting</p>
      </div>
      <div className="space-y-3 p-4">
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/[0.08] p-3">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-300">
              KB-107
            </span>
            <span className="rounded-md border border-amber-400/25 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-200">
              RICORRENTE · 6×
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-slate-400">
              Consolidata
            </span>
          </div>
          <p className="text-[12px] font-medium text-slate-200">
            Richiesta sostituzione cavo fune D.6 — matricola IDC-114-084
          </p>
          <p className="mt-2 text-[11.5px] leading-relaxed text-slate-400">
            <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-300/80">
              Soluzione
            </span>
            <br />
            Ordinare cavo ferro zincato mm 6 (1023021), smontare semidisco giunzione, sostituire
            cavo e ritarare a 180 Nm.
          </p>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
            Caso risolto → registrato
          </p>
          <p className="text-[12.5px] leading-relaxed text-slate-300">
            Errore E-04 su pressa PH-200 → sensore pressione P-3, cablaggio danneggiato.
          </p>
          <p className="mt-2 text-[11.5px] text-emerald-300">✓ Soluzione confermata dal tecnico</p>
        </div>
      </div>
    </GlassCard>
  );
}

function TicketingMockup() {
  const tickets = [
    {
      id: "#2041",
      title: "Fermo macchina · errore E-04 pressa PH-200",
      meta: "via WhatsApp · Automotive Components · matricola PH-200-112",
      badge: "URGENTE",
      badgeClass: "border-red-400/30 bg-red-500/15 text-red-300",
      assignee: "→ M. Bianchi",
    },
    {
      id: "#2042",
      title: "Richiesta ricambio · cavo fune D.6 IDC 114 TCZ",
      meta: "via email · matricola IDC-114-084 · manutenzione programmata",
      badge: "MEDIA",
      badgeClass: "border-amber-400/30 bg-amber-500/15 text-amber-200",
      assignee: "→ Ufficio ricambi",
    },
    {
      id: "#2043",
      title: "Info revisione annuale · linea taglio",
      meta: "via chat sito · risposta automatica inviata · in attesa conferma",
      badge: "RISOLTO AI",
      badgeClass: "border-emerald-400/30 bg-emerald-500/15 text-emerald-300",
      assignee: "✓ chiuso",
    },
  ];

  return (
    <GlassCard className="overflow-hidden border-blue-400/15 p-0">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-blue-500/[0.08] px-4 py-3">
        <p className="text-[13px] font-semibold text-white">Coda ticket · oggi</p>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          14 aperti · 3 urgenti
        </span>
      </div>
      <div className="divide-y divide-white/[0.06]">
        {tickets.map((t) => (
          <div key={t.id} className="px-4 py-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-cyan-300/90">{t.id}</span>
              <span className={`rounded-md border px-2 py-0.5 font-mono text-[9.5px] ${t.badgeClass}`}>
                {t.badge}
              </span>
            </div>
            <p className="mt-1.5 text-[13.5px] font-medium text-white">{t.title}</p>
            <p className="mt-1 text-[11.5px] text-slate-500">{t.meta}</p>
            <p className="mt-1.5 text-[12px] text-slate-400">{t.assignee}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function PartsSearchMockup() {
  const matches = [
    {
      pct: "96%",
      name: "Cuscinetto albero",
      code: "cod. RX-4471 · distinta A-12",
      stock: "3 pz a magazzino · € 480,00",
      accent: "border-emerald-400/25 bg-emerald-500/[0.08]",
      pctClass: "text-emerald-300",
    },
    {
      pct: "74%",
      name: "Guarnizione tenuta",
      code: "cod. GT-118 · distinta A-12",
      stock: "12 pz a magazzino · € 64,00",
      accent: "border-white/[0.08] bg-white/[0.03]",
      pctClass: "text-cyan-300",
    },
    {
      pct: "61%",
      name: "Kit anelli tenuta",
      code: "cod. KT-902 · distinta A-14",
      stock: "0 pz a magazzino · da ordinare",
      accent: "border-white/[0.08] bg-white/[0.03]",
      pctClass: "text-amber-200",
    },
  ];

  return (
    <GlassCard className="overflow-hidden border-blue-400/15 p-0">
      <div className="border-b border-white/[0.06] bg-blue-500/[0.08] px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-blue-300/80">Ricerca</p>
        <p className="mt-1 text-[13px] text-slate-200">
          &ldquo;cuscinetto che perde olio, pressa PH-200, macchina n. serie 12345&rdquo;
        </p>
      </div>
      <div className="space-y-2.5 p-4">
        {matches.map((m) => (
          <div key={m.name} className={`rounded-xl border p-3 ${m.accent}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[13.5px] font-semibold text-white">{m.name}</p>
                <p className="mt-0.5 font-mono text-[11px] text-slate-500">{m.code}</p>
                <p className="mt-1.5 text-[12px] text-slate-400">{m.stock}</p>
              </div>
              <span className={`font-mono text-[12px] font-semibold ${m.pctClass}`}>
                MATCH {m.pct}
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function DataQualityMockup() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <GlassCard className="border-red-400/15 p-5">
        <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-red-300/80">
          Prima · dati rotti
        </p>
        <ul className="space-y-2.5 text-[13px] leading-relaxed text-slate-400">
          <li>RX-4471 / rx4471 / RX 4471-A → 3 codici, 1 pezzo</li>
          <li>&ldquo;guarnizione ten.&rdquo; · &ldquo;GUARN.TENUTA&rdquo; · &ldquo;gt-tenuta&rdquo;</li>
          <li>Distinta A-12 → 2 righe senza quantità</li>
        </ul>
      </GlassCard>
      <div className="flex justify-center font-mono text-[12px] text-cyan-300">→</div>
      <GlassCard className="border-emerald-400/20 p-5">
        <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300/80">
          Dopo · archivio ordinato
        </p>
        <ul className="space-y-2.5 text-[13px] leading-relaxed text-slate-300">
          <li>RX-4471 → Cuscinetto albero, unico codice</li>
          <li>GT-118 → Guarnizione di tenuta, unica voce</li>
          <li>Distinta A-12 → completa, quantità verificate</li>
        </ul>
      </GlassCard>
    </div>
  );
}

function OffersMockup() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <GlassCard className="border-emerald-400/20 p-5">
        <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300/80">
          Pezzo disponibile
        </p>
        <h3 className="text-[16px] font-semibold text-white">Offerta pronta in automatico</h3>
        <div className="mt-4 space-y-2 text-[13px]">
          <div className="flex justify-between gap-2 text-slate-300">
            <span>Cuscinetto albero · RX-4471</span>
            <span className="font-mono">€ 480,00</span>
          </div>
          <div className="flex justify-between gap-2 text-slate-300">
            <span>Manodopera montaggio</span>
            <span className="font-mono">€ 180,00</span>
          </div>
          <div className="my-2 h-px bg-white/[0.08]" />
          <div className="flex justify-between gap-2 font-semibold text-white">
            <span>Totale</span>
            <span className="font-mono text-cyan-300">€ 660,00</span>
          </div>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-slate-500">
          Preventivo su carta intestata, pronto per l&apos;approvazione del tecnico.
        </p>
      </GlassCard>

      <GlassCard className="border-amber-400/20 p-5">
        <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-amber-200/80">
          Pezzo non a magazzino
        </p>
        <h3 className="text-[16px] font-semibold text-white">Richiesta al fornitore in automatico</h3>
        <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-[12.5px]">
          <p className="text-slate-500">A: fornitore.ricambi@metaltek.it</p>
          <p className="mt-1 text-slate-300">Ogg: Richiesta quotazione kit anelli KT-902</p>
          <p className="mt-2 leading-relaxed text-slate-400">
            &ldquo;Serve disponibilità e prezzo per 1 pz, urgenza alta.&rdquo;
          </p>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-slate-500">
          L&apos;agente sceglie il fornitore giusto e invia la richiesta, senza passare dal telefono.
        </p>
      </GlassCard>
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
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[40em] text-center">
            <Eyebrow>Agente AI per il service</Eyebrow>
            <h1 className="text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[58px]">
              <span className="gradient-text">Un agente AI</span>
              <br />
              <span className="text-white">per tutto il service</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[34em] text-[17px] leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
              Risponde ai clienti, aiuta i tecnici a trovare soluzioni, impara da ogni caso
              risolto, trova i ricambi giusti e prepara offerte o richieste ai fornitori — in
              automatico.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Richiedi una demo
              </a>
              <a href="#assistenza" className="btn-ghost">
                Scopri le funzioni
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ASSISTENZA SERVICE */}
      <section id="assistenza" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/15 via-transparent to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Assistenza service</Eyebrow>
              <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Una chat che identifica ricambi e trova soluzioni
              </h2>
              <p className="mt-4 max-w-[38em] text-base leading-relaxed text-slate-400 sm:text-lg">
                La chat è collegata all&apos;archivio documentale dell&apos;azienda: consulta
                distinte, manuali e schede tecniche per rispondere con informazioni sempre
                aggiornate.
              </p>
              <div className="mt-8 flex flex-col gap-3.5">
                {[
                  "Collegata all'archivio documentale: distinte, manuali e schede tecniche.",
                  "Importa i tuoi documenti: foto, PDF, Excel e altri file — l'agente li legge e li usa per rispondere.",
                ].map((t) => (
                  <div key={t} className="flex gap-3">
                    <Bullet />
                    <p className="text-[15px] leading-relaxed text-slate-300">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <ServiceChatMockup />
          </div>
        </div>
      </section>

      {/* KNOWLEDGE BASE */}
      <section id="knowledge" className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <KnowledgeBaseMockup />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Knowledge base</Eyebrow>
              <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Impara dai casi risolti, scrive il manuale di troubleshooting
              </h2>
              <p className="mt-4 max-w-[38em] text-base leading-relaxed text-slate-400 sm:text-lg">
                Ogni soluzione confermata efficace viene registrata: l&apos;agente costruisce e
                aggiorna, impianto per impianto, un manuale di troubleshooting sempre più completo.
              </p>
              <div className="mt-8 flex flex-col gap-3.5">
                {[
                  "Ogni intervento chiuso con successo diventa una voce nella knowledge base, associata a impianto, sintomo e causa.",
                  "Il manuale cresce impianto per impianto: più interventi si chiudono, più diventa preciso per i prossimi.",
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

      {/* TICKETING AI */}
      <section id="ticketing" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/15 via-transparent to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 max-w-[42em]">
            <Eyebrow>Ticketing AI</Eyebrow>
            <h2 className="max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Ogni richiesta diventa un ticket, da qualsiasi canale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Mail, WhatsApp, chat o telefono: l&apos;agente trasforma tutto in ticket strutturati,
              li classifica per macchina, cliente e urgenza e li assegna alla persona giusta.
              Niente si perde per strada.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {TICKET_CHANNELS.map((ch) => (
              <span
                key={ch.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[14px] font-medium text-slate-200"
              >
                <span aria-hidden>{ch.icon}</span>
                {ch.label}
              </span>
            ))}
          </div>

          <TicketingMockup />
        </div>
      </section>

      {/* RICERCA RICAMBI */}
      <section id="ricambi" className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Ricerca ricambi</Eyebrow>
              <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Trova il ricambio giusto nel database, anche senza codice
              </h2>
              <p className="mt-4 max-w-[38em] text-base leading-relaxed text-slate-400 sm:text-lg">
                Basta una descrizione, un numero di serie o una foto: l&apos;agente interroga il
                database ricambi e restituisce il pezzo corretto con disponibilità e prezzo.
              </p>
            </div>
            <PartsSearchMockup />
          </div>
        </div>
      </section>

      {/* QUALITÀ DEI DATI */}
      <section id="dati" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/15 via-transparent to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 max-w-[42em]">
            <Eyebrow>Qualità dei dati</Eyebrow>
            <h2 className="max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Organizza l&apos;archivio ricambi, anche quando i dati sono disordinati
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Codici duplicati, descrizioni incoerenti, distinte incomplete: l&apos;agente pulisce e
              riordina l&apos;archivio ricambi così le ricerche future partono da dati solidi.
            </p>
          </div>
          <DataQualityMockup />
        </div>
      </section>

      {/* OFFERTE E FORNITORI */}
      <section id="offerte" className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 max-w-[42em]">
            <Eyebrow>Offerte e fornitori</Eyebrow>
            <h2 className="max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Prepara l&apos;offerta, o contatta il fornitore se il pezzo non c&apos;è
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Dal ricambio identificato, l&apos;agente decide da solo il passo successivo: offerta
              pronta se il pezzo è disponibile, richiesta al fornitore se manca.
            </p>
          </div>
          <OffersMockup />
        </div>
      </section>

      {/* INTEGRAZIONI */}
      <section id="integrazioni" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Eyebrow>Integrazioni</Eyebrow>
          <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Si collega ai principali ERP che usi già
          </h2>
          <p className="mt-4 max-w-[42em] text-base leading-relaxed text-slate-400 sm:text-lg">
            Gli agenti leggono distinte, listini, giacenze e anagrafiche direttamente dal tuo ERP
            o da un database alimentato dai tuoi dati — senza cambiare i tuoi processi. Tra i
            gestionali più diffusi nel manifatturiero italiano:
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

      <PartnerLogoBand />

      {/* FORM DEMO */}
      <section id="demo" className="section-divider relative">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-28">
          <div>
            <Eyebrow>Richiedi una demo</Eyebrow>
            <h2 className="mb-5 max-w-[13em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              <span className="gradient-text-accent">Vediamo aestima</span>
              <br />
              <span className="text-white">sul vostro service</span>
            </h2>
            <div className="flex max-w-[30em] flex-col gap-3.5">
              {[
                "30 minuti, sui vostri casi reali di service e post-vendita.",
                "Vi mostriamo l'agente al lavoro: dalla richiesta alla soluzione, fino all'offerta o al fornitore.",
                "Nessun impegno — l'approvazione resta sempre alle vostre persone.",
              ].map((t) => (
                <div key={t} className="flex gap-3">
                  <Bullet />
                  <p className="text-base leading-relaxed text-slate-300">{t}</p>
                </div>
              ))}
            </div>
            <a
              href={COMPANY.phoneHref}
              className="mt-8 inline-flex items-center gap-2 text-[16px] font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              {COMPANY.phone}
            </a>
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
