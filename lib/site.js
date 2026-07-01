export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aestima.it";

export const CALENDLY_URL = "https://calendly.com/gbasso-syyz/demo-aestima";

export const COMPANY = {
  legalName: "PEOPLEFIRST SRL",
  brand: "aestima",
  vat: "03981510120",
  capital: "10.000€",
  address: "Via Nino Bixio 11, 20159, Milano",
  phone: "+ 39 346 3060372",
  phoneHref: "tel:+393463060372",
  email: "gbasso@aestima.it",
  hours: "Lun – Sab: 9 – 18",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Via+Nino+Bixio+11,+20159+Milano,+Italy&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Via+Nino+Bixio+11,+20159+Milano",
};

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/termini-e-condizioni", label: "Termini e condizioni" },
  { href: "/gdpr-sicurezza-dati", label: "GDPR e Sicurezza dei dati" },
];

export const NAV_LINKS = [{ href: "/risorse", label: "Risorse" }];
