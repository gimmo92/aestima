"use client";

import { useState } from "react";
import { BackgroundGlow, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { CALENDLY_URL } from "@/lib/site";

const ACCENT = {
  text: "text-blue-300",
  badge: "border border-blue-400/25 bg-blue-500/10 text-blue-200 backdrop-blur-sm",
};

function IndustryBand() {
  return (
    <section
      aria-label="Settori di riferimento"
      className="section-divider relative border-t border-white/[0.06] bg-navy-950/50 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1140px] px-5 text-center sm:px-8 lg:px-12">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
          Pensato per il manifatturiero
        </p>
        <p className="mx-auto mt-3 max-w-[36em] text-[15px] leading-relaxed text-slate-400">
          Costruttori di macchine e impianti, distributori ricambi, service
          after-sales — flussi con distinte, magazzino e fornitori.
        </p>
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


function PerChiESection() {
  return (
    <section id="per-chi" className="section-divider relative bg-navy-900/40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <Eyebrow>Per chi è</Eyebrow>
        <h2 className="mb-10 max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
          Pensato per chi gestisce ricambi ogni giorno
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            {
              title: "Costruttori di macchine e impianti",
              points: [
                "Parco installato ampio, richieste ricambi continue da clienti e service.",
                "Ufficio ricambi o assistenza che fatica a rispondere in tempi utili.",
                "Distinte e configurazioni macchina da consultare a ogni richiesta.",
              ],
            },
            {
              title: "Distributori di componenti industriali",
              points: [
                "Clienti che chiedono un pezzo senza codice, solo con descrizione o contesto.",
                "Listini, condizioni e margini da applicare in modo coerente.",
                "Offerte da preparare velocemente, senza perdere ordini per lentezza.",
              ],
            },
          ].map((item) => (
            <GlassCard key={item.title} className="p-6 sm:p-8">
              <h3 className="mb-4 text-[22px] font-semibold tracking-tight">{item.title}</h3>
              <div className="flex flex-col gap-3.5">
                {item.points.map((p) => (
                  <div key={p} className="flex gap-3">
                    <Bullet />
                    <p className="text-[15.5px] leading-relaxed text-slate-300">{p}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
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
            <span className="font-mono text-[11px] text-slate-500">aestima — preventivo ricambi after-sales</span>
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
            <Eyebrow>Preventivo ricambi · After-sales</Eyebrow>
            <h1 className="text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[58px]">
              <span className="gradient-text">Dalla richiesta di ricambio</span>
              <br />
              <span className="text-white">all&apos;offerta pronta, in automatico</span>
            </h1>
            <p className="mt-6 max-w-[30em] text-[17px] leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
              Il cliente chiede un ricambio anche senza codice — solo con una descrizione o il
              numero di serie. L&apos;agente identifica il pezzo dalla macchina e prepara il
              preventivo sulle tue regole. L&apos;approvazione finale resta al tecnico.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
              Riduci i tempi di risposta sulle richieste di ricambi
            </p>
          </div>
        </div>
      </section>

      <IndustryBand />

      {/* IL PROBLEMA */}
      <section id="problema" className="section-divider relative bg-navy-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Il problema</Eyebrow>
          <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Ogni richiesta ricambi ruba ore — e gli ordini si perdono
          </h2>
          <p className="mt-4 max-w-[42em] text-base leading-relaxed text-slate-400 sm:text-lg">
            Il cliente chiede un ricambio senza dare il codice: solo una descrizione vaga, una foto,
            o il numero di serie. Qualcuno deve risalire alla macchina, trovare la distinta,
            identificare il componente giusto, verificare se è disponibile a magazzino e, se manca,
            fare la richiesta al fornitore — prima ancora di controllare il prezzo e scrivere
            l&apos;offerta. Non è solo preparare il preventivo: è orchestrare identificazione,
            magazzino e eventuale riordino, saltando tra sistemi diversi. Sono ore per ogni richiesta,
            e gli ordini si perdono quando l&apos;offerta arriva troppo tardi.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Interpretare la richiesta vaga del cliente"],
              ["02", "Risalire alla macchina e alla distinta"],
              ["03", "Identificare il componente corretto"],
              ["04", "Verificare se è disponibile a magazzino"],
              ["05", "Se manca, fare la richiesta al fornitore"],
              ["06", "Controllare il prezzo e scrivere l'offerta"],
            ].map(([n, t]) => (
              <GlassCard key={n} className="p-5">
                <span className="font-mono text-xs text-blue-300/70">{n}</span>
                <p className="mt-2 text-[15.5px] font-medium leading-snug text-slate-200">{t}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* COSA FA L'AGENTE */}
      <section className="section-divider relative">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>Cosa fa l&apos;agente</Eyebrow>
          <h2 className="mb-10 max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Dal numero di serie all&apos;offerta, con le tue regole
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                tag: "IDENTIFICA",
                title: "Identifica il ricambio",
                points: [
                  "Parte dal numero di serie o dalla descrizione del cliente.",
                  "Risale alla distinta e alla configurazione della macchina.",
                  "Propone il componente corretto anche da una richiesta vaga.",
                ],
              },
              {
                tag: "GIACENZA",
                title: "Verifica magazzino e prezzo",
                points: [
                  "Controlla la giacenza a magazzino sui tuoi dati.",
                  "Se il pezzo non c'è, prepara la bozza di richiesta al fornitore — non la invia in automatico.",
                  "Recupera il prezzo dal listino e applica condizioni e margini. L'operatore decide e invia.",
                ],
              },
              {
                tag: "OFFERTA",
                title: "Genera l'offerta",
                points: [
                  "Produce il preventivo su carta intestata.",
                  "Pronto per l'approvazione del tecnico.",
                  "Con tracciabilità del calcolo interno.",
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
              Dalla richiesta di ricambio all&apos;offerta su carta intestata — con verifica
              giacenza e bozza fornitore quando serve. Pronta da approvare dal tecnico, con
              tracciabilità.
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
            Dalla mail all&apos;offerta, in cinque passaggi
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["STEP 01", "Arriva la richiesta", "Descrizione, foto o numero di serie — via mail o form."],
              ["STEP 02", "Identifica il ricambio", "L'agente risale alla macchina e propone il componente dalla distinta."],
              ["STEP 03", "Verifica la giacenza", "Controlla la disponibilità a magazzino. Se manca, prepara la bozza di richiesta al fornitore — l'operatore decide e invia."],
              ["STEP 04", "Recupera il prezzo", "Listino ricambi e regole commerciali sui tuoi dati."],
              ["STEP 05", "Genera l'offerta", "Preventivo su carta intestata + documento interno, per il controllo del tecnico."],
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

      <PerChiESection />

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

      {/* FORM DEMO */}
      <section id="demo" className="section-divider relative">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-28">
          <div>
            <Eyebrow>Richiedi una demo</Eyebrow>
            <h2 className="mb-5 max-w-[13em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              <span className="gradient-text-accent">Vediamo aestima</span>
              <br />
              <span className="text-white">sui vostri ricambi</span>
            </h2>
            <div className="flex max-w-[30em] flex-col gap-3.5">
              {[
                "30 minuti, sui vostri casi reali di after-sales.",
                "Vi mostriamo il flusso: richiesta vaga → ricambio identificato → giacenza → offerta.",
                "Nessun impegno. L'approvazione resta al vostro tecnico.",
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
