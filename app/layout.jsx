import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "aestima — Agente AI per la preventivazione",
  description:
    "Dal disegno tecnico all'offerta pronta, in automatico. Agente AI per la preventivazione da CAD e PDF nel manifatturiero.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="dark">
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} page-bg font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
