import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BackgroundGlow,
  SiteFooter,
  SiteHeader,
} from "@/components/SiteChrome";
import { CALENDLY_URL } from "@/lib/site";
import { SECTORS, getSectorBySlug } from "@/lib/sectors";

export function generateStaticParams() {
  return SECTORS.map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({ params }) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) {
    return { title: "Settore non trovato" };
  }
  return {
    title: `${sector.title} — Settori`,
    description: sector.description.slice(0, 155),
  };
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass glass-hover rounded-2xl ${className}`}>{children}</div>
  );
}

export default function SectorPage({ params }) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) {
    notFound();
  }

  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />
      <SiteHeader active="settori" />

      <main>
        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-slate-500">
              <Link href="/settori" className="hover:text-cyan-300">
                Settori
              </Link>
              <span aria-hidden>/</span>
              <span className="text-slate-400">{sector.title}</span>
            </div>
            <div className="pill-eyebrow mb-5 inline-flex">Settore</div>
            <h1 className="max-w-[16em] text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {sector.title}
            </h1>
            <p className="mt-4 max-w-[40em] text-[17px] font-medium text-blue-300/90 sm:text-lg">
              {sector.tagline}
            </p>
            <p className="mt-5 max-w-[42em] text-[16px] leading-relaxed text-slate-400 sm:text-[17px]">
              {sector.description}
            </p>
          </div>
        </section>

        <section className="section-divider relative bg-navy-900/40">
          <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <h2 className="mb-8 text-[22px] font-semibold text-white sm:text-2xl">
              Applicazioni
            </h2>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {sector.applications.map((application) => (
                <li key={application.name}>
                  <GlassCard className="flex h-full flex-col p-6">
                    <h3 className="text-[18px] font-semibold leading-snug text-white">
                      {application.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                      {application.description}
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
              Vediamo aestima sul tuo caso
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400">
              Una demo mirata sul flusso ricambi del tuo settore — con i dati e i
              listini che usate già oggi.
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
              <Link href="/settori" className="btn-ghost">
                Tutti i settori
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
