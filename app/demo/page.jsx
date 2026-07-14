import Script from "next/script";
import {
  BackgroundGlow,
  SiteFooter,
  SiteHeader,
} from "@/components/SiteChrome";

export const metadata = {
  title: "Demo chat",
  description:
    "Prova la chat aestima in modalità wide: dall'identificazione del ricambio all'offerta pronta.",
};

export default function DemoPage() {
  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />
      <SiteHeader />

      <main>
        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <div className="pill-eyebrow mb-5 inline-flex">Demo live</div>
              <h1 className="text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Prova l&apos;agente AI
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-400 sm:text-lg">
                Interagisci con la chat per vedere come aestima gestisce richieste
                di ricambi e genera offerte in automatico.
              </p>
            </div>
          </div>
        </section>

        <section className="section-divider relative bg-navy-900/40 pb-16 lg:pb-24">
          <div className="mx-auto flex max-w-[960px] justify-center px-5 sm:px-8 lg:px-12">
            <div className="glass w-full overflow-hidden rounded-2xl p-3 sm:p-4">
              <div id="aestima-chat-wide" className="w-full" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <Script
        src="https://webapp.aestima.it/embed.js"
        strategy="afterInteractive"
        data-mode="wide"
        data-base-url="https://webapp.aestima.it"
        data-container="aestima-chat-wide"
        data-height="640"
      />
    </div>
  );
}
