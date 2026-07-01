import Link from "next/link";
import { COMPANY } from "@/lib/site";

export function ContactInfo({ showHours = true, linkAddress = false }) {
  const addressContent = linkAddress ? (
    <Link href="/contatti" className="transition hover:text-cyan-300">
      {COMPANY.address}
    </Link>
  ) : (
    <a
      href={COMPANY.mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-cyan-300"
    >
      {COMPANY.address}
    </a>
  );

  return (
    <div className="space-y-4 text-[15.5px] text-slate-300">
      <div className="flex items-start gap-2.5">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mt-1 flex-none text-cyan-400"
        >
          <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        <span>{addressContent}</span>
      </div>

      <div className="flex items-center gap-2.5">
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
        <a href={COMPANY.phoneHref} className="transition hover:text-cyan-300">
          {COMPANY.phone}
        </a>
      </div>

      <div className="flex items-center gap-2.5">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="flex-none text-cyan-400"
        >
          <path d="M4 4h16v16H4z" />
          <path d="m4 4 8 8 8-8" />
        </svg>
        <a
          href={`mailto:${COMPANY.email}`}
          className="transition hover:text-cyan-300"
        >
          {COMPANY.email}
        </a>
      </div>

      {showHours && (
        <div>
          <p className="mb-1 font-semibold text-white">Orari</p>
          <p>{COMPANY.hours}</p>
        </div>
      )}

      <p className="max-w-[26em] text-[15px] leading-relaxed text-slate-500">
        {COMPANY.brand} è un marchio di {COMPANY.legalName} P.IVA {COMPANY.vat},
        Cap. Soc. {COMPANY.capital}.
      </p>
    </div>
  );
}

export function GoogleMapEmbed({ className = "" }) {
  return (
    <div
      className={`glass overflow-hidden rounded-2xl border border-white/10 ${className}`}
    >
      <iframe
        title="Mappa sede aestima — Via Nino Bixio 11, Milano"
        src={COMPANY.mapsEmbedUrl}
        className="h-[320px] w-full border-0 sm:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
