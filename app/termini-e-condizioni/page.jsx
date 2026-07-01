import {
  LegalPageShell,
  LegalSection,
} from "@/components/LegalPageShell";
import { COMPANY } from "@/lib/site";

export const metadata = {
  title: "Termini e condizioni",
  description: "Termini e condizioni d'uso del sito web aestima.",
};

export default function TerminiPage() {
  return (
    <LegalPageShell
      eyebrow="Legale"
      title="Termini e condizioni"
      description="Condizioni generali di utilizzo del sito web e dei contenuti informativi relativi al marchio aestima."
    >
      <LegalSection title="1. Oggetto">
        <p>
          Il presente sito è gestito da {COMPANY.legalName} (marchio{" "}
          {COMPANY.brand}) e ha finalità informative e di raccolta richieste di
          contatto o demo relative alla soluzione software per la preventivazione
          ricambi in ambito manifatturiero.
        </p>
      </LegalSection>

      <LegalSection title="2. Uso del sito">
        <p>
          L&apos;utente si impegna a utilizzare il sito in modo lecito, senza
          comprometterne la sicurezza o l&apos;accessibilità. È vietato inviare
          contenuti illeciti, offensivi o che violino diritti di terzi tramite i
          form presenti.
        </p>
      </LegalSection>

      <LegalSection title="3. Informazioni sul prodotto">
        <p>
          Le descrizioni del servizio aestima hanno scopo illustrativo e non
          costituiscono offerta contrattuale. Caratteristiche, tempi e condizioni
          economiche del servizio sono definiti in sede di contratto o ordine
          commerciale separato.
        </p>
      </LegalSection>

      <LegalSection title="4. Proprietà intellettuale">
        <p>
          Testi, marchi, loghi, layout e materiali presenti sul sito sono di
          titolarità di {COMPANY.legalName} o dei rispettivi licenzianti. È
          vietata la riproduzione non autorizzata, salvo uso personale e non
          commerciale.
        </p>
      </LegalSection>

      <LegalSection title="5. Limitazione di responsabilità">
        <p>
          {COMPANY.legalName} adotta misure ragionevoli per mantenere il sito
          aggiornato e disponibile, senza tuttavia garantire l&apos;assenza di
          interruzioni o errori. Nei limiti consentiti dalla legge, non risponde
          di danni indiretti derivanti dall&apos;uso del sito o da link verso siti
          di terzi.
        </p>
      </LegalSection>

      <LegalSection title="6. Link esterni">
        <p>
          Il sito può contenere collegamenti a risorse esterne (es. Calendly,
          Google Maps). {COMPANY.legalName} non controlla tali servizi e non è
          responsabile dei relativi contenuti o policy.
        </p>
      </LegalSection>

      <LegalSection title="7. Modifiche">
        <p>
          I presenti termini possono essere aggiornati in qualsiasi momento. La
          versione pubblicata sul sito sostituisce quelle precedenti dalla data
          di pubblicazione.
        </p>
      </LegalSection>

      <LegalSection title="8. Legge applicabile e foro">
        <p>
          I presenti termini sono regolati dalla legge italiana. Per ogni
          controversia relativa all&apos;uso del sito è competente il foro di
          Milano, salvo diversa disposizione inderogabile a tutela dei
          consumatori.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
