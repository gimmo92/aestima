import Link from "next/link";
import {
  BackgroundGlow,
  SiteFooter,
  SiteHeader,
} from "@/components/SiteChrome";
import { CALENDLY_URL } from "@/lib/site";
import { SECTORS } from "@/lib/sectors";

export const metadata = {
  title: "Settori",
  description:
    "I settori manifatturieri e industriali in cui aestima automatizza il preventivo ricambi: dalla richiesta all'offerta, con approvazione umana.",
};

function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass glass-hover rounded-2xl ${className}`}>{children}</div>
  );
}

export default function SettoriPage() {
  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />
      <SiteHeader active="settori" />

      <main>
        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="pill-eyebrow mb-5 inline-flex">Settori</div>
            <h1 className="max-w-[16em] text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Dove aestima automatizza il preventivo ricambi
            </h1>
            <p className="mt-6 max-w-[42em] text-[17px] leading-relaxed text-slate-400 sm:text-lg">
              Ogni settore ha le sue macchine, le sue distinte e i suoi listini.
              Il flusso resta lo stesso: identificazione del pezzo, verifica
              magazzino, eventuale richiesta al fornitore e offerta pronta da
              approvare.
            </p>
          </div>
        </section>

        <section className="section-divider relative bg-navy-900/40">
          <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {SECTORS.map((sector) => (
                <li key={sector.slug}>
                  <Link href={`/settori/${sector.slug}`} className="block h-full">
                    <GlassCard className="flex h-full flex-col p-6 sm:p-7">
                      <h2 className="text-[20px] font-semibold text-white">
                        {sector.title}
                      </h2>
                      <p className="mt-2 text-[14px] font-medium text-blue-300/90">
                        {sector.tagline}
                      </p>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">
                        {sector.description}
                      </p>
                      <span className="mt-4 inline-flex text-[14px] font-medium text-blue-300 transition group-hover:text-cyan-300">
                        Vedi applicazioni →
                      </span>
                    </GlassCard>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
            <h2 className="text-[22px] font-semibold text-white sm:text-2xl">
              Non trovi il tuo settore?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">
              Se gestisci ricambi con distinte, listini e magazzino, il flusso
              enca. Vediamolo sul tuo caso.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Richiedi una demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
