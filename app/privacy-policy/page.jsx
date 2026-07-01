import {
  LegalPageShell,
  LegalSection,
} from "@/components/LegalPageShell";
import { COMPANY } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Informativa privacy del sito aestima e trattamento dei dati personali.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Legale"
      title="Privacy Policy"
      description={`Ultimo aggiornamento: ${new Date().getFullYear()}. Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).`}
    >
      <LegalSection title="1. Titolare del trattamento">
        <p>
          Il Titolare del trattamento è {COMPANY.legalName}, con sede in{" "}
          {COMPANY.address}, P.IVA {COMPANY.vat} (marchio commerciale{" "}
          {COMPANY.brand}).
        </p>
        <p>
          Per esercitare i diritti previsti dalla normativa o per richieste
          relative alla privacy:{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-blue-300 hover:text-cyan-300"
          >
            {COMPANY.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Tipologie di dati trattati">
        <p>Attraverso il sito possiamo trattare, a seconda delle interazioni:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Dati identificativi e di contatto (nome, email, azienda, ruolo)
            inviati tramite form demo o contatti.
          </li>
          <li>
            Dati tecnici di navigazione (indirizzo IP, log, cookie tecnici) per
            sicurezza e funzionamento del sito.
          </li>
          <li>
            Eventuali contenuti inseriti volontariamente nei messaggi inviati
            tramite i form.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalità e base giuridica">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-300">Gestione richieste</strong> —
            rispondere a richieste di demo, informazioni o contatto (base:
            esecuzione di misure precontrattuali / consenso).
          </li>
          <li>
            <strong className="text-slate-300">Sicurezza e manutenzione</strong>{" "}
            — prevenzione abusi e garantire il corretto funzionamento del sito
            (base: legittimo interesse).
          </li>
          <li>
            <strong className="text-slate-300">Adempimenti legali</strong> —
            obblighi di legge applicabili (base: obbligo legale).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Conservazione">
        <p>
          I dati inviati tramite form sono conservati per il tempo necessario a
          evadere la richiesta e, ove applicabile, per i termini previsti dalla
          legge. I log tecnici sono conservati per periodi limitati e proporzionati
          alle finalità di sicurezza.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatari e trasferimenti">
        <p>
          I dati possono essere trattati da fornitori tecnologici (es. hosting,
          email transazionale) nominati responsabili del trattamento, entro l&apos;UE
          o in paesi con adeguate garanzie. L&apos;elenco aggiornato è disponibile
          su richiesta.
        </p>
      </LegalSection>

      <LegalSection title="6. Diritti dell'interessato">
        <p>
          In qualità di interessato puoi chiedere accesso, rettifica,
          cancellazione, limitazione, opposizione e portabilità dei dati, ove
          applicabile, scrivendo al Titolare. Hai inoltre diritto di proporre
          reclamo all&apos;Autorità Garante per la protezione dei dati personali.
        </p>
      </LegalSection>

      <LegalSection title="7. Cookie">
        <p>
          Il sito può utilizzare cookie tecnici necessari al funzionamento. Eventuali
          cookie analytics o di profilazione, se introdotti, saranno gestiti con
          le modalità indicate in un banner dedicato e, ove richiesto, previo
          consenso.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
