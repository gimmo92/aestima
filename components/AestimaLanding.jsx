"use client";

import { useState } from "react";

const ACCENT = {
  text: "text-blue-300",
  badge: "border border-blue-400/25 bg-blue-500/10 text-blue-200 backdrop-blur-sm",
};

const PARTNER_LOGOS = [
  { src: "/logos/tsg.png", alt: "TSG" },
  { src: "/logos/emmegi.png", alt: "EMMEGI Heat Exchangers" },
  { src: "/logos/rossi.png", alt: "Rossi" },
  { src: "/logos/isoclima.png", alt: "Isoclima" },
  { src: "/logos/idealtec.png", alt: "Idealtec" },
];

function PartnerLogoBand() {
  return (
    <section aria-label="Aziende clienti" className="section-divider relative border-t border-white/[0.06] bg-navy-950/50 py-10 sm:py-12">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8 lg:px-12">
        <p className="mb-8 text-center font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
          Lavoriamo con
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:gap-x-16">
          {PARTNER_LOGOS.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} className="logo-partner" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute top-[55%] -left-20 h-64 w-64 rounded-full bg-blue-700/15 blur-[90px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />
    </div>
  );
}

function Logo({ markInner = "bg-navy-900" }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-gradient-to-br from-blue-500 to-cyan-500 shadow-glow-sm">
        <span className={`h-[11px] w-[11px] rotate-45 rounded-[2px] ${markInner}`} />
      </span>
      <span className="text-xl font-semibold tracking-tight text-white">aestima</span>
    </div>
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
        {type === "pdf" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M10 13h4M10 17h4M10 9h1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
            <path d="M4 19h16M6 16l3-9 3 6 2-4 4 7" />
            <rect x="3" y="3" width="18" height="18" rx="2" />
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
            <span className="font-mono text-[11px] text-slate-500">aestima — preventivo da disegno tecnico</span>
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
              <FileChip
                type="cad"
                name="disegno_pezzo_v3.step"
                meta="CAD · 8.1 MB · STEP · disegno tecnico"
                accent="bg-gradient-to-br from-blue-600 to-cyan-600 ring-1 ring-cyan-400/30"
              />
              <FileChip
                type="pdf"
                name="scheda_richiesta.pdf"
                meta="PDF · 2.4 MB · specifiche cliente (opzionale)"
                accent="bg-gradient-to-br from-slate-600/90 to-slate-700/80"
              />
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-cyan-400/20 bg-cyan-500/[0.04] px-3 py-3 text-center">
              <p className="text-[11.5px] text-slate-400">Carica il disegno tecnico del pezzo</p>
              <p className="mt-0.5 font-mono text-[10px] text-slate-500">.step · .dwg · .dxf · .iges · + PDF</p>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-[11.5px] text-emerald-300">Disegno interpretato · massa, lavorazioni e costi calcolati</span>
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
                      <span className="text-[13px] font-bold tracking-tight text-slate-900">Officina Meccanica Rossi Srl</span>
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
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Cliente</p>
                <p className="text-[11px] font-medium text-slate-900">Automotive Components SpA</p>

                <div className="my-3 h-px bg-slate-200" />

                <div className="space-y-1.5">
                  {[
                    ["Flangia CNC · disegno v3", "€ 4.820,00"],
                    ["Materiali · acciaio 316", "€ 1.240,00"],
                    ["Lavorazioni interne", "€ 5.890,00"],
                    ["Lavorazioni esterne", "€ 500,00"],
                  ].map(([label, price]) => (
                    <div key={label} className="flex items-center justify-between gap-2 text-[10px]">
                      <span className="truncate text-slate-600">{label}</span>
                      <span className="font-mono font-medium text-slate-800">{price}</span>
                    </div>
                  ))}
                </div>

                <div className="my-3 h-px bg-slate-200" />

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-900">Totale offerta</span>
                  <span className="font-mono text-[13px] font-bold text-blue-700">€ 12.450,00</span>
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
    formato: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.nome.trim()) next.nome = "Campo obbligatorio";
    if (!form.azienda.trim()) next.azienda = "Campo obbligatorio";
    if (!form.ruolo.trim()) next.ruolo = "Campo obbligatorio";
    if (!form.email.trim()) next.email = "Campo obbligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Inserisci un'email valida";
    if (!form.volume) next.volume = "Seleziona un'opzione";
    if (!form.formato) next.formato = "Seleziona un'opzione";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-navy-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
          <Logo />
          <a href="#demo" className="btn-primary-sm">
            Richiedi una demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="section-divider relative">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-28">
          <div className="relative z-10">
            <Eyebrow>Preventivo da disegno tecnico · Manifatturiero</Eyebrow>
            <h1 className="text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[58px]">
              <span className="gradient-text">Dal disegno tecnico</span>
              <br />
              <span className="text-white">all&apos;offerta pronta, in automatico</span>
            </h1>
            <p className="mt-6 max-w-[30em] text-[17px] leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
              Carichi il file CAD o il PDF del pezzo: l&apos;agente legge il disegno, calcola
              materiali e lavorazioni e genera il preventivo su carta intestata.
              L&apos;approvazione finale resta sempre a te.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#demo" className="btn-primary">
                Richiedi una demo
              </a>
              <a href="#funziona" className="btn-ghost">
                Come funziona
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
              Risparmia fino al{" "}
              <span className="gradient-text-accent text-[22px] font-bold sm:text-2xl">95%</span>
              {" "}del tempo dedicato alla generazione delle offerte
            </p>
          </div>
        </div>
      </section>

      <PartnerLogoBand />

      {/* IL PROBLEMA */}
      <section id="problema" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Il problema</Eyebrow>
          <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Il preventivo manuale ruba ore — e la coda continua a crescere
          </h2>
          <p className="mt-4 max-w-[42em] text-base leading-relaxed text-slate-400 sm:text-lg">
            Ogni commessa parte da un disegno da interpretare: quote, materiali, lavorazioni
            interne ed esterne, tempi e sfridi. Poi l&apos;offerta va scritta e formattata.
            Intanto le richieste si accumulano più velocemente di quanto riusciate a evaderle.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Leggere e interpretare il disegno tecnico"],
              ["02", "Calcolare materiali, sfridi e tempi di lavorazione"],
              ["03", "Stimare lavorazioni interne ed esterne"],
              ["04", "Scrivere e formattare l'offerta"],
            ].map(([n, t]) => (
              <GlassCard key={n} className="p-5">
                <span className="font-mono text-xs text-blue-300/70">{n}</span>
                <p className="mt-2 text-[15.5px] font-medium leading-snug text-slate-200">{t}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* COSA FA SUL DISEGNO */}
      <section className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Preventivo da disegno tecnico</Eyebrow>
          <h2 className="mb-10 max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Tutto ciò che serve per quotare un pezzo su commessa
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                tag: "LETTURA",
                title: "Interpreta il disegno",
                points: [
                  "Legge file CAD e PDF del pezzo da produrre.",
                  "Estrae quote, materiali, tolleranze e vincoli.",
                  "Capisce lavorazioni richieste dal disegno.",
                ],
              },
              {
                tag: "CALCOLO",
                title: "Stima costi e tempi",
                points: [
                  "Calcola massa, sfridi e fabbisogno materiale.",
                  "Stima tempi di lavorazione interna ed esterna.",
                  "Applica i tuoi listini e le condizioni cliente.",
                ],
              },
              {
                tag: "OUTPUT",
                title: "Genera l'offerta",
                points: [
                  "Produce il preventivo su carta intestata.",
                  "Allega il documento interno di calcolo.",
                  "Consegna tutto pronto per l'approvazione umana.",
                ],
              },
            ].map((m) => (
              <GlassCard key={m.tag} className="border-cyan-400/15 p-6 sm:p-8">
                <span className="inline-block rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-2.5 py-1 font-mono text-xs tracking-wide text-white shadow-glow-sm">
                  {m.tag}
                </span>
                <h3 className="mt-4 mb-4 text-[22px] font-semibold tracking-tight">{m.title}</h3>
                <div className="flex flex-col gap-3.5">
                  {m.points.map((p) => (
                    <div key={p} className="flex gap-3">
                      <Bullet />
                      <p className="text-[15.5px] leading-relaxed text-slate-300">{p}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="glass-strong mt-5 flex flex-wrap items-center gap-3.5 rounded-2xl border-blue-400/20 bg-gradient-to-r from-blue-950/50 to-cyan-950/30 p-6 sm:p-7">
            <span className="h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-glow-sm" />
            <p className="text-base font-medium leading-snug sm:text-lg">
              Dal disegno tecnico all&apos;offerta su carta intestata — pronta da approvare, con tracciabilità del calcolo.
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
            Dal disegno all&apos;offerta, in quattro passaggi
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["STEP 01", "Upload del disegno", "Carichi il file CAD o PDF del pezzo da quotare, con eventuali note cliente."],
              ["STEP 02", "Legge il disegno", "L'agente interpreta quote, materiali, lavorazioni e vincoli del disegno tecnico."],
              ["STEP 03", "Calcola costi e tempi", "Massa, sfridi, lavorazioni interne ed esterne — sui tuoi listini e condizioni."],
              ["STEP 04", "Genera l'offerta", "Preventivo su carta intestata + documento interno di calcolo, per il controllo umano."],
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

      {/* COSA CAMBIA */}
      <section id="vantaggi" className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Cosa cambia</Eyebrow>
          <h2 className="mb-10 max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Lo stesso team, molte più offerte
          </h2>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {[
                ["Da ore a minuti", "Il tempo per preparare un preventivo si misura in minuti, non più in ore."],
                ["Meno errori", "Calcoli coerenti e tracciabili, sempre con gli stessi criteri."],
                ["Più richieste evase", "La coda si smaltisce con le stesse persone, senza nuovi inserimenti."],
                ["Migliora nel tempo", "Ogni offerta approvata affina i criteri di calcolo del sistema."],
              ].map(([title, desc], i) => (
                <div
                  key={title}
                  className={`p-6 sm:p-8 ${i % 2 === 0 ? "sm:border-r sm:border-white/[0.06]" : ""} ${i < 2 ? "border-b border-white/[0.06]" : ""}`}
                >
                  <h3 className="mb-2.5 text-[19px] font-semibold tracking-tight">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
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
              ["Integrazione", "Si collega al gestionale o a un DB alimentato dai tuoi dati: clienti, condizioni commerciali, costi di materiali e lavorazioni."],
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

      {/* FORM DEMO */}
      <section id="demo" className="section-divider relative">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-28">
          <div>
            <Eyebrow>Richiedi una demo</Eyebrow>
            <h2 className="mb-5 max-w-[13em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              <span className="gradient-text-accent">Vediamo aestima</span>
              <br />
              <span className="text-white">sui vostri preventivi</span>
            </h2>
            <div className="flex max-w-[30em] flex-col gap-3.5">
              {[
                "30 minuti, sui vostri disegni tecnici reali.",
                "Vi mostriamo il flusso completo: CAD → preventivo su carta intestata.",
                "Nessun impegno.",
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
                      ["ruolo", "Ruolo", "Resp. ufficio tecnico"],
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
                      Quante richieste / preventivi gestite a settimana?
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
                      In che formato ricevete i disegni più spesso?
                    </span>
                    <select name="formato" value={form.formato} onChange={handleChange} className="field-dark appearance-none">
                      <option value="">Seleziona…</option>
                      <option value="step">STEP / IGES</option>
                      <option value="dwg">DWG / DXF</option>
                      <option value="pdf">PDF del disegno</option>
                      <option value="mix">Mix di formati</option>
                    </select>
                    {errors.formato && <span className="text-[12.5px] text-red-400">{errors.formato}</span>}
                  </label>

                  <button type="submit" className="btn-primary mt-1 w-full">
                    Richiedi una demo
                  </button>
                  <p className="text-center text-xs leading-relaxed text-slate-500">
                    Inviando accetti di essere ricontattato per fissare la demo.
                  </p>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/[0.06] bg-navy-950/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:px-12 lg:py-18">
          <div>
            <div className="mb-6">
              <Logo markInner="bg-navy-950" />
            </div>
            <div className="mb-6 flex flex-col gap-3">
              {["Privacy Policy", "Termini e condizioni", "GDPR e Sicurezza dei dati"].map((link) => (
                <a key={link} href="#" className="text-[15.5px] text-blue-300 transition hover:text-cyan-300 hover:underline">
                  {link}
                </a>
              ))}
            </div>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] bg-gradient-to-br from-blue-600 to-cyan-600 text-[11px] font-bold text-white shadow-glow-sm"
            >
              in
            </a>
          </div>

          <div className="text-slate-300">
            <div className="mb-4.5 flex items-center gap-2.5 text-[15.5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-none text-cyan-400">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>Via Nino Bixio 11, 20159, Milano</span>
            </div>
            <div className="mb-5 flex items-center gap-2.5 text-[15.5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-none text-cyan-400">
                <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
              </svg>
              <span>+ 39 346 3060372</span>
            </div>
            <p className="mb-5 max-w-[26em] text-[15px] leading-relaxed text-slate-500">
              aestima è un marchio di PEOPLEFIRST SRL P.IVA 03981510120 , Cap. Soc. 10.000€.
            </p>
            <p className="mb-1.5 text-[15.5px] font-semibold text-white">Orari</p>
            <p className="text-[15.5px]">Lun – Sab: 9 – 18</p>
          </div>
        </div>
      </footer>

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
