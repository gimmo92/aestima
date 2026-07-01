import ContactForm from "@/components/ContactForm";
import { ContactInfo, GoogleMapEmbed } from "@/components/ContactBlocks";
import {
  BackgroundGlow,
  SiteFooter,
  SiteHeader,
} from "@/components/SiteChrome";

export const metadata = {
  title: "Contatti",
  description:
    "Contatta aestima: sede a Milano, form di contatto e mappa. Orari Lun – Sab 9 – 18.",
};

export default function ContattiPage() {
  return (
    <div className="relative min-h-screen scroll-smooth font-sans text-white antialiased [scroll-padding-top:88px]">
      <BackgroundGlow />
      <SiteHeader />

      <main>
        <section className="section-divider relative">
          <div className="mx-auto max-w-[1140px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="pill-eyebrow mb-5 inline-flex">Contatti</div>
            <h1 className="max-w-[16em] text-[34px] font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Parliamo del tuo flusso ricambi
            </h1>
            <p className="mt-5 max-w-[42em] text-[17px] leading-relaxed text-slate-400 sm:text-lg">
              Scrivici per informazioni generali, partnership o supporto. Per
              una demo mirata puoi anche prenotare direttamente su Calendly dalla
              home.
            </p>
          </div>
        </section>

        <section className="section-divider relative bg-navy-900/40">
          <div className="mx-auto max-w-[1140px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="mb-6 text-[20px] font-semibold text-white">
                  Informazioni
                </h2>
                <ContactInfo showHours />
              </div>

              <GoogleMapEmbed />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="glass rounded-2xl p-6 sm:p-8 lg:col-span-2">
                <h2 className="mb-6 text-[20px] font-semibold text-white">
                  Invia un messaggio
                </h2>
                <div className="mx-auto max-w-xl">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
