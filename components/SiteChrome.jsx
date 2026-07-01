import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";

export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute top-[55%] -left-20 h-64 w-64 rounded-full bg-blue-700/15 blur-[90px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />
    </div>
  );
}

export function Logo({ markInner = "bg-navy-900" }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-gradient-to-br from-blue-500 to-cyan-500 shadow-glow-sm">
        <span className={`h-[11px] w-[11px] rotate-45 rounded-[2px] ${markInner}`} />
      </span>
      <span className="text-xl font-semibold tracking-tight text-white">aestima</span>
    </div>
  );
}

export function SiteHeader({ active = null }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-navy-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>
          <nav aria-label="Navigazione principale">
            <Link
              href="/risorse"
              className={`text-[14.5px] font-medium transition ${
                active === "risorse"
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-white"
              }`}
              aria-current={active === "risorse" ? "page" : undefined}
            >
              Risorse
            </Link>
          </nav>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-sm shrink-0"
        >
          Richiedi una demo
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:px-12 lg:py-18">
        <div>
          <div className="mb-6">
            <Logo markInner="bg-navy-950" />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            {["Privacy Policy", "Termini e condizioni", "GDPR e Sicurezza dei dati"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[15.5px] text-blue-300 transition hover:text-cyan-300 hover:underline"
                >
                  {link}
                </a>
              )
            )}
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="flex-none text-cyan-400"
            >
              <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>Via Nino Bixio 11, 20159, Milano</span>
          </div>
          <div className="mb-5 flex items-center gap-2.5 text-[15.5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="flex-none text-cyan-400"
            >
              <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
            </svg>
            <span>+ 39 346 3060372</span>
          </div>
          <p className="mb-5 max-w-[26em] text-[15.5px] leading-relaxed text-slate-500">
            aestima è un marchio di PEOPLEFIRST SRL P.IVA 03981510120 , Cap. Soc.
            10.000€.
          </p>
          <p className="mb-1.5 text-[15.5px] font-semibold text-white">Orari</p>
          <p className="text-[15.5px]">Lun – Sab: 9 – 18</p>
        </div>
      </div>
    </footer>
  );
}
