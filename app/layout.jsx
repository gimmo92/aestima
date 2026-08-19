import { IBM_Plex_Mono, IBM_Plex_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import "./landing.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-landing-heading",
  weight: ["600", "700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-landing-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "aestima — Agente AI per il preventivo ricambi",
  description:
    "Dalla richiesta di ricambio all'offerta pronta, in automatico. Agente AI per l'after-sales di costruttori di macchine e impianti.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="dark">
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${poppins.variable} ${roboto.variable} page-bg font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
