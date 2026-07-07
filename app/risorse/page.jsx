import Link from "next/link";
import {
  BackgroundGlow,
  SiteFooter,
  SiteHeader,
} from "@/components/SiteChrome";
import { formatArticleDate, getPublishedArticles } from "@/lib/articles";
import { CALENDLY_URL } from "@/lib/site";

export const metadata = {
  title: "Risorse",
  description:
    "Guide e approfondimenti su preventivazione ricambi, distinte, magazzino e integrazione dati per l'after-sales manifatturiero.",
};

const COMING_SOON = [
  {
    category: "Processo",
    title: "Dalla richiesta ricambi all'offerta: cosa automatizzare",
    excerpt:
      "Identificazione del pezzo, verifica giacenza, bozza richiesta fornitore e offerta: dove il sistema propone e dove resta il controllo del tecnico.",
  },
  {
    category: "Dati",
    title: "Checklist dati per ricambi e distinte macchina",
    excerpt:
      "Listini, configurazioni, condizioni cliente e anagrafica fornitori: cosa serve per generare un preventivo coerente col gestionale.",
  },
  {
    category: "Magazzino",
    title: "Giacenze e riordino: preparare senza inviare in automatico",
    excerpt:
      "Come collegare le giacenze e preparare la bozza di richiesta al fornitore — l'operatore decide e invia.",
  },
];

function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass glass-hover rounded-2xl ${className}`}>{children}</div>
  );
}

export default function RisorsePage() {
  const published = getPublishedArticles();

  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />
      <SiteHeader active="risorse" />

      <main>
        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="pill-eyebrow mb-5 inline-flex">Risorse</div>
            <h1 className="max-w-[16em] text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Guide per l&apos;after-sales manifatturiero
            </h1>
            <p className="mt-6 max-w-[42em] text-[17px] leading-relaxed text-slate-400 sm:text-lg">
              Contenuti tecnici su ricambi, distinte, magazzino e integrazione dati.
              Niente marketing: solo ciò che serve a capire se il flusso enca con il
              tuo reparto.
            </p>
          </div>
        </section>

        {published.length > 0 && (
          <section className="section-divider relative bg-navy-900/40">
            <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
              <h2 className="mb-8 text-[22px] font-semibold text-white sm:text-2xl">
                Articoli
              </h2>
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {published.map((article) => (
                  <li key={article.slug}>
                    <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                      {article.featuredImage ? (
                        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.06]">
                          <img
                            src={article.featuredImage}
                            alt={article.featuredImageAlt || article.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue-300/80">
                          {article.category}
                        </span>
                        <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                          Pubblicato
                        </span>
                      </div>
                      <h3 className="mt-4 text-[18px] font-semibold leading-snug text-white">
                        {article.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">
                        {article.excerpt}
                      </p>
                      <p className="mt-3 text-[13px] text-slate-500">
                        {formatArticleDate(article.date)}
                      </p>
                      <Link
                        href={article.url}
                        className="mt-4 inline-flex text-[14px] font-medium text-blue-300 transition hover:text-cyan-300"
                      >
                        Leggi articolo →
                      </Link>
                      </div>
                    </GlassCard>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="section-divider relative bg-navy-900/40">
          <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <h2 className="mb-8 text-[22px] font-semibold text-white sm:text-2xl">
              In arrivo
            </h2>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {COMING_SOON.map((resource) => (
                <li key={resource.title}>
                  <GlassCard className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue-300/80">
                        {resource.category}
                      </span>
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                        In arrivo
                      </span>
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold leading-snug text-white">
                      {resource.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">
                      {resource.excerpt}
                    </p>
                  </GlassCard>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
            <h2 className="text-[22px] font-semibold text-white sm:text-2xl">
              Vuoi vedere il flusso sul tuo caso?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">
              Una demo mirata su ricambi, distinte e magazzino — con i dati che usate
              già oggi.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Richiedi una demo
              </a>
              <Link href="/" className="btn-ghost">
                Torna alla home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
