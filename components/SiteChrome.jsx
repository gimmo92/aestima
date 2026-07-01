import Link from "next/link";
import { CALENDLY_URL, LEGAL_LINKS } from "@/lib/site";
import { ContactInfo } from "@/components/ContactBlocks";

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
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
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
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-sm shrink-0"
          >
            Richiedi una demo
          </a>
        </div>
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
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[15.5px] text-blue-300 transition hover:text-cyan-300 hover:underline"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contatti"
              className="text-[15.5px] text-blue-300 transition hover:text-cyan-300 hover:underline"
            >
              Contatti
            </Link>
          </div>
          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] bg-gradient-to-br from-blue-600 to-cyan-600 text-[11px] font-bold text-white shadow-glow-sm"
          >
            in
          </a>
        </div>

        <ContactInfo linkAddress />
      </div>
    </footer>
  );
}
