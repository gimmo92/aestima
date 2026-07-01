import Link from "next/link";
import {
  BackgroundGlow,
  SiteFooter,
  SiteHeader,
} from "@/components/SiteChrome";

export function LegalPageShell({ eyebrow, title, description, children }) {
  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />
      <SiteHeader />

      <main>
        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            {eyebrow && (
              <div className="pill-eyebrow mb-5 inline-flex">{eyebrow}</div>
            )}
            <h1 className="max-w-[20em] text-[30px] font-semibold leading-[1.08] tracking-tight sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-[42em] text-[16px] leading-relaxed text-slate-400 sm:text-[17px]">
                {description}
              </p>
            )}
          </div>
        </section>

        <section className="section-divider relative bg-navy-900/40">
          <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="glass rounded-2xl p-6 sm:p-8">{children}</div>
            <p className="mt-8 text-center text-[14px] text-slate-500">
              Per domande:{" "}
              <Link href="/contatti" className="text-blue-300 hover:text-cyan-300">
                pagina Contatti
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section className="mb-8 last:mb-0">
      <h2 className="mb-3 text-[17px] font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-slate-400">
        {children}
      </div>
    </section>
  );
}
