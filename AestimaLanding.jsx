"use client";

// =============================================================================
// AestimaLanding.jsx — Landing page a singola pagina per "aestima"
// Stack: Next.js (App Router) + Tailwind CSS. Nessuna libreria esterna.
//
// Uso:
//   import AestimaLanding from "@/components/AestimaLanding";
//   export default function Page() { return <AestimaLanding />; }
//
// Palette/accento: cambia ACCENT (classi Tailwind) in un punto solo qui sotto.
// Form: stato React + validazione base. L'invio ha un // TODO dove collegare
// il backend/email — nessun endpoint inventato.
// =============================================================================

import { useState } from "react";

// --- Accento centralizzato: cambia qui per ricolorare CTA, label, ecc. --------
const ACCENT = {
  bg: "bg-blue-600",
  bgHover: "hover:bg-blue-700",
  text: "text-blue-600",
  border: "border-blue-600",
  ring: "focus:border-blue-600 focus:ring-blue-600",
};

// --- Logo aestima (wordmark + marchio geometrico segnaposto) ------------------
// TODO: sostituire con il logo reale (es. <img src="/logo-aestima.svg" />).
function Logo({ markInner = "bg-white" }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`flex h-7 w-7 items-center justify-center rounded-[7px] ${ACCENT.bg}`}>
        <span className={`h-[11px] w-[11px] rotate-45 rounded-[2px] ${markInner}`} />
      </span>
      <span className="text-xl font-semibold tracking-tight text-neutral-900">aestima</span>
    </div>
  );
}

// --- Piccoli componenti riutilizzabili ----------------------------------------
function Eyebrow({ children, className = "" }) {
  return (
    <div className={`mb-4 font-mono text-[12.5px] font-medium uppercase tracking-[0.14em] ${className}`}>
      {children}
    </div>
  );
}

function Bullet() {
  return <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-[2px] ${ACCENT.bg}`} />;
}

export default function AestimaLanding() {
  // --- Stato del form ---------------------------------------------------------
  const [form, setForm] = useState({
    nome: "",
    azienda: "",
    ruolo: "",
    email: "",
    volume: "",
    partenza: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Un solo handler per input e select (usa l'attributo name)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Validazione base lato client
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
    if (!form.partenza) next.partenza = "Seleziona un'opzione";

    setErrors(next);

    if (Object.keys(next).length === 0) {
      // TODO: collegare a backend/email — qui va l'invio dei dati del form
      // es. await fetch("/api/demo", { method: "POST", body: JSON.stringify(form) });
      setSubmitted(true);
    }
  };

  // Stile condiviso dei campi
  const fieldClass =
    `w-full rounded-[9px] border border-neutral-300 bg-white px-3.5 py-3 text-[15px] ` +
    `text-neutral-900 outline-none transition focus:ring-1 ${ACCENT.ring}`;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans text-neutral-900 antialiased [scroll-padding-top:88px]">
      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/85 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
          <Logo />
          <a
            href="#demo"
            className={`inline-flex items-center rounded-[9px] ${ACCENT.bg} ${ACCENT.bgHover} px-5 py-2.5 text-[14.5px] font-semibold text-white transition`}
          >
            Richiedi una demo
          </a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-24">
          <div>
            <Eyebrow className={ACCENT.text}>
              Agente AI per la preventivazione · Manifatturiero
            </Eyebrow>
            <h1 className="text-[33px] font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-[58px]">
              Dalla richiesta del cliente all'offerta pronta, in automatico
            </h1>
            <p className="mt-5 max-w-[30em] text-[17px] leading-relaxed text-neutral-500 sm:text-lg lg:text-xl">
              L'agente prepara il preventivo — da un ricambio a catalogo o da un
              disegno tecnico. L'approvazione finale resta sempre a una persona: la tua.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demo"
                className={`inline-flex items-center rounded-[9px] ${ACCENT.bg} ${ACCENT.bgHover} px-6 py-3.5 text-[15.5px] font-semibold text-white transition`}
              >
                Richiedi una demo
              </a>
              <a
                href="#funziona"
                className={`inline-flex items-center rounded-[9px] border border-neutral-300 bg-white px-6 py-3.5 text-[15.5px] font-semibold text-neutral-900 transition hover:${ACCENT.border} hover:${ACCENT.text}`}
              >
                Come funziona
              </a>
            </div>
          </div>

          {/* Mock dell'offerta */}
          <div className="mx-auto w-full max-w-[440px] rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_24px_50px_-22px_rgba(16,25,40,0.22)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-2.5">
              <span className="font-mono text-[12.5px] tracking-wide text-neutral-400">
                OFFERTA 2026-0412
              </span>
              <span className={`rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold ${ACCENT.text}`}>
                Pronta da approvare
              </span>
            </div>
            <div className="flex flex-col gap-3.5">
              {[
                ["Materiali", "34%"],
                ["Lavorazioni interne", "46%"],
                ["Lavorazioni esterne", "28%"],
                ["Componenti", "40%"],
              ].map(([label, w]) => (
                <div key={label} className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[12.5px] text-neutral-500">{label}</span>
                  <span className="h-[9px] rounded bg-neutral-200" style={{ width: w }} />
                </div>
              ))}
            </div>
            <div className="my-5 h-px bg-neutral-100" />
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold">Totale offerta</span>
              <span className="h-3 w-[42%] rounded bg-neutral-300" />
            </div>
            <div className="flex gap-2.5">
              <span className={`flex-1 rounded-lg ${ACCENT.bg} py-2.5 text-center text-sm font-semibold text-white`}>
                Approva
              </span>
              <span className="flex-1 rounded-lg border border-neutral-300 bg-white py-2.5 text-center text-sm font-semibold text-neutral-900">
                Modifica
              </span>
            </div>
            <p className="mt-4 font-mono text-[11.5px] text-neutral-400">
              + documento interno di calcolo allegato
            </p>
          </div>
        </div>
      </section>

      {/* ============ IL PROBLEMA ============ */}
      <section id="problema" className="border-b border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow className={ACCENT.text}>Il problema</Eyebrow>
          <h2 className="max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Il preventivo manuale ruba ore — e la coda continua a crescere
          </h2>
          <p className="mt-4 max-w-[42em] text-base leading-relaxed text-neutral-500 sm:text-lg">
            Ogni richiesta va interpretata, il pezzo identificato o il disegno
            letto, costi e tempi calcolati, l'offerta scritta. Intanto le richieste
            si accumulano più velocemente di quanto riusciate a evaderle.
          </p>
          <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Interpretare la richiesta del cliente"],
              ["02", "Identificare il pezzo o leggere il disegno"],
              ["03", "Calcolare costi e tempi di lavorazione"],
              ["04", "Scrivere e formattare l'offerta"],
            ].map(([n, t]) => (
              <div key={n} className="rounded-xl border border-neutral-200 bg-white p-5">
                <span className="font-mono text-xs text-neutral-400">{n}</span>
                <p className="mt-2 text-[15.5px] font-medium leading-snug">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DUE MODALITÀ, UN AGENTE ============ */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow className={ACCENT.text}>Due modalità, un agente</Eyebrow>
          <h2 className="mb-10 max-w-[18em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Lo stesso agente, qualunque sia il punto di partenza
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                tag: "MODALITÀ 01",
                title: "Da ricambio esistente",
                points: [
                  "Identifica il pezzo anche da una descrizione vaga o da un numero di serie.",
                  "Recupera componenti e costi da catalogo e distinta base.",
                  "Calcola il prezzo applicando le condizioni del cliente.",
                ],
              },
              {
                tag: "MODALITÀ 02",
                title: "Da disegno tecnico",
                points: [
                  "Legge il disegno del pezzo da produrre.",
                  "Calcola massa e sfridi, stima i tempi di lavorazione.",
                  "Ricava il costo da materiali, lavorazioni interne ed esterne.",
                ],
              },
            ].map((m) => (
              <div key={m.tag} className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <span className={`inline-block rounded-md ${ACCENT.bg} px-2.5 py-1 font-mono text-xs tracking-wide text-white`}>
                  {m.tag}
                </span>
                <h3 className="mt-4 mb-4 text-[22px] font-semibold tracking-tight">{m.title}</h3>
                <div className="flex flex-col gap-3.5">
                  {m.points.map((p) => (
                    <div key={p} className="flex gap-3">
                      <Bullet />
                      <p className="text-[15.5px] leading-relaxed text-neutral-700">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Riga che unifica le due modalità */}
          <div className="mt-4 flex flex-wrap items-center gap-3.5 rounded-2xl bg-neutral-900 p-6 sm:p-7">
            <span className={`h-2.5 w-2.5 flex-none rounded-[3px] ${ACCENT.bg}`} />
            <p className="text-base font-medium leading-snug text-white sm:text-lg">
              Qualunque sia il punto di partenza, ottieni un'offerta pronta da approvare.
            </p>
          </div>
        </div>
      </section>

      {/* ============ COME FUNZIONA ============ */}
      <section id="funziona" className="border-b border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow className={ACCENT.text}>Come funziona</Eyebrow>
          <h2 className="mb-10 max-w-[14em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Dalla mail all'offerta, in quattro passaggi
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["STEP 01", "Richiesta in arrivo", "Via mail o form, con l'eventuale upload del disegno tecnico."],
              ["STEP 02", "Identifica o legge", "L'agente riconosce il ricambio o interpreta il disegno del pezzo."],
              ["STEP 03", "Calcola costi e tempi", "Sui tuoi dati: materiali, lavorazioni e condizioni cliente."],
              ["STEP 04", "Genera l'offerta", "Offerta pronta + documento interno con gli elementi di calcolo, per il controllo umano."],
            ].map(([step, title, desc]) => (
              <div key={step} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className={`mb-4 font-mono text-[13px] font-medium ${ACCENT.text}`}>{step}</div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="text-[15px] leading-relaxed text-neutral-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COSA CAMBIA ============ */}
      <section id="vantaggi" className="border-b border-neutral-100">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow className={ACCENT.text}>Cosa cambia</Eyebrow>
          <h2 className="mb-10 max-w-[16em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Lo stesso team, molte più offerte
          </h2>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-200 sm:grid-cols-2">
            {[
              ["Da ore a minuti", "Il tempo per preparare un preventivo si misura in minuti, non più in ore."],
              ["Meno errori", "Calcoli coerenti e tracciabili, sempre con gli stessi criteri."],
              ["Più richieste evase", "La coda si smaltisce con le stesse persone, senza nuovi inserimenti."],
              ["Migliora nel tempo", "Ogni offerta approvata affina i criteri di calcolo del sistema."],
            ].map(([title, desc], i) => (
              <div
                key={title}
                className={`p-6 sm:p-8 ${i % 2 === 0 ? "sm:border-r" : ""} ${i < 2 ? "border-b" : ""} border-neutral-100`}
              >
                <h3 className="mb-2.5 text-[19px] font-semibold tracking-tight">{title}</h3>
                <p className="text-[15px] leading-relaxed text-neutral-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COSTRUITO SUI TUOI DATI ============ */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow className="text-blue-300">Costruito sui tuoi dati</Eyebrow>
          <h2 className="mb-11 max-w-[17em] text-[27px] font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Lavora sui tuoi numeri, dentro la tua infrastruttura
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              ["Integrazione", "Si collega al gestionale o a un DB alimentato dai tuoi dati: clienti, condizioni commerciali, costi di materiali e lavorazioni."],
              ["On-premise", "Possibilità di installazione sui tuoi server, dentro il perimetro aziendale."],
              ["Riservatezza", "Nessun dato viene usato per addestrare modelli esterni."],
            ].map(([title, desc]) => (
              <div key={title}>
                <div className="mb-4 h-px bg-white/15" />
                <h3 className="mb-2.5 text-lg font-semibold">{title}</h3>
                <p className="text-[15px] leading-relaxed text-neutral-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FORM DEMO ============ */}
      <section id="demo" className="border-t border-neutral-100 bg-neutral-50">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12 lg:py-28">
          <div>
            <Eyebrow className={ACCENT.text}>Richiedi una demo</Eyebrow>
            <h2 className="mb-5 max-w-[13em] text-[27px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Vediamo aestima sui vostri preventivi
            </h2>
            <div className="flex max-w-[30em] flex-col gap-3.5">
              {[
                "30 minuti, sui vostri casi reali.",
                "Vi mostriamo entrambe le modalità: ricambio e disegno.",
                "Nessun impegno.",
              ].map((t) => (
                <div key={t} className="flex gap-3">
                  <Bullet />
                  <p className="text-base leading-relaxed text-neutral-700">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card form */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_24px_50px_-26px_rgba(16,25,40,0.2)] sm:p-9">
            {submitted ? (
              <div className="px-1.5 py-6 text-center">
                <div className="mx-auto mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-blue-50">
                  <span className={`h-2.5 w-[18px] -translate-y-px rotate-[-45deg] border-b-[3px] border-l-[3px] ${ACCENT.border}`} />
                </div>
                <h3 className="mb-2.5 text-[22px] font-semibold tracking-tight">Richiesta ricevuta</h3>
                <p className="text-[15.5px] leading-relaxed text-neutral-500">
                  Ti ricontattiamo a breve per fissare la demo. Grazie.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {/* Nome */}
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13.5px] font-medium text-neutral-700">Nome e cognome</span>
                  <input name="nome" value={form.nome} onChange={handleChange} type="text" placeholder="Mario Rossi" className={fieldClass} />
                  {errors.nome && <span className="text-[12.5px] text-red-600">{errors.nome}</span>}
                </label>

                {/* Azienda */}
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13.5px] font-medium text-neutral-700">Azienda</span>
                  <input name="azienda" value={form.azienda} onChange={handleChange} type="text" placeholder="Nome azienda" className={fieldClass} />
                  {errors.azienda && <span className="text-[12.5px] text-red-600">{errors.azienda}</span>}
                </label>

                {/* Ruolo + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13.5px] font-medium text-neutral-700">Ruolo</span>
                    <input name="ruolo" value={form.ruolo} onChange={handleChange} type="text" placeholder="Resp. ufficio tecnico" className={fieldClass} />
                    {errors.ruolo && <span className="text-[12.5px] text-red-600">{errors.ruolo}</span>}
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13.5px] font-medium text-neutral-700">Email aziendale</span>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="nome@azienda.it" className={fieldClass} />
                    {errors.email && <span className="text-[12.5px] text-red-600">{errors.email}</span>}
                  </label>
                </div>

                {/* Domanda di qualifica 1 */}
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13.5px] font-medium text-neutral-700">
                    Quante richieste / preventivi gestite a settimana?
                  </span>
                  <select name="volume" value={form.volume} onChange={handleChange} className={`${fieldClass} appearance-none`}>
                    <option value="">Seleziona…</option>
                    <option value="<10">Meno di 10</option>
                    <option value="10-30">10 – 30</option>
                    <option value="30-80">30 – 80</option>
                    <option value=">80">Oltre 80</option>
                  </select>
                  {errors.volume && <span className="text-[12.5px] text-red-600">{errors.volume}</span>}
                </label>

                {/* Domanda di qualifica 2 */}
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13.5px] font-medium text-neutral-700">
                    Partite più da ricambi a catalogo o da disegni su commessa?
                  </span>
                  <select name="partenza" value={form.partenza} onChange={handleChange} className={`${fieldClass} appearance-none`}>
                    <option value="">Seleziona…</option>
                    <option value="ricambi">Soprattutto ricambi a catalogo</option>
                    <option value="disegni">Soprattutto disegni su commessa</option>
                    <option value="entrambi">Più o meno in egual misura</option>
                  </select>
                  {errors.partenza && <span className="text-[12.5px] text-red-600">{errors.partenza}</span>}
                </label>

                <button
                  type="submit"
                  className={`mt-1 rounded-[9px] ${ACCENT.bg} ${ACCENT.bgHover} py-3.5 text-[15.5px] font-semibold text-white transition`}
                >
                  Richiedi una demo
                </button>
                <p className="text-center text-xs leading-relaxed text-neutral-400">
                  Inviando accetti di essere ricontattato per fissare la demo.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#eef2f6]">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:px-12 lg:py-18">
          <div>
            <div className="mb-6">
              <Logo markInner="bg-[#eef2f6]" />
            </div>
            <div className="mb-6 flex flex-col gap-3">
              <a href="#" className={`text-[15.5px] ${ACCENT.text} hover:underline`}>Privacy Policy</a>
              <a href="#" className={`text-[15.5px] ${ACCENT.text} hover:underline`}>Termini e condizioni</a>
              <a href="#" className={`text-[15.5px] ${ACCENT.text} hover:underline`}>GDPR e Sicurezza dei dati</a>
            </div>
            <a
              href="#"
              aria-label="LinkedIn"
              className={`inline-flex h-6 w-6 items-center justify-center rounded-[5px] ${ACCENT.bg} text-[11px] font-bold text-white`}
            >
              in
            </a>
          </div>

          <div className="text-neutral-700">
            <div className="mb-4.5 flex items-center gap-2.5 text-[15.5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`flex-none ${ACCENT.text}`}>
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>Via Nino Bixio 11, 20159, Milano</span>
            </div>
            <div className="mb-5 flex items-center gap-2.5 text-[15.5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`flex-none ${ACCENT.text}`}>
                <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
              </svg>
              <span>+ 39 346 3060372</span>
            </div>
            <p className="mb-5 max-w-[26em] text-[15px] leading-relaxed">
              aestima è un marchio di PEOPLEFIRST SRL P.IVA 03981510120 , Cap. Soc. 10.000€.
            </p>
            <p className="mb-1.5 text-[15.5px] font-semibold text-neutral-900">Orari</p>
            <p className="text-[15.5px]">Lun – Sab: 9 – 18</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        aria-label="Torna su"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full ${ACCENT.bg} ${ACCENT.bgHover} shadow-lg transition`}
      >
        <span className="h-2.5 w-2.5 translate-y-0.5 rotate-45 border-l-2 border-t-2 border-white" />
      </button>
    </div>
  );
}
