import {
  LegalPageShell,
  LegalSection,
} from "@/components/LegalPageShell";
import { COMPANY } from "@/lib/site";

export const metadata = {
  title: "GDPR e Sicurezza dei dati",
  description:
    "Informazioni su conformità GDPR, sicurezza dei dati e trattamento nel contesto del servizio aestima.",
};

export default function GdprPage() {
  return (
    <LegalPageShell
      eyebrow="Legale"
      title="GDPR e Sicurezza dei dati"
      description="Come gestiamo i dati personali e le informazioni aziendali nel sito e nel servizio aestima."
    >
      <LegalSection title="1. Conformità GDPR">
        <p>
          {COMPANY.legalName} tratta i dati personali nel rispetto del
          Regolamento UE 2016/679 (GDPR) e della normativa italiana applicabile.
          Le informazioni dettagliate sul trattamento via sito sono nella{" "}
          <a href="/privacy-policy" className="text-blue-300 hover:text-cyan-300">
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Dati trattati nel servizio aestima">
        <p>
          Il servizio aestima può elaborare dati aziendali del cliente (es.
          anagrafiche clienti, listini ricambi, distinte macchina, condizioni
          commerciali) esclusivamente per le finalità concordate contrattualmente
          — tipicamente supporto alla preventivazione ricambi e alla generazione
          di offerte con approvazione umana.
        </p>
        <p>
          I dati del cliente non vengono utilizzati per addestrare modelli di
          intelligenza artificiale di terze parti, salvo diverso accordo scritto e
          basi giuridiche adeguate.
        </p>
      </LegalSection>

      <LegalSection title="3. Ruoli: titolare e responsabile">
        <p>
          Nel rapporto contrattuale con i clienti B2B, il cliente è di norma
          Titolare del trattamento dei propri dati aziendali; {COMPANY.legalName}{" "}
          opera come Responsabile del trattamento o co-titolare secondo quanto
          definito nel Data Processing Agreement (DPA) sottoscritto.
        </p>
      </LegalSection>

      <LegalSection title="4. Misure di sicurezza">
        <ul className="list-disc space-y-2 pl-5">
          <li>Controllo degli accessi e segregazione degli ambienti.</li>
          <li>Cifratura in transito (TLS) per le comunicazioni di rete.</li>
          <li>Backup e procedure di ripristino proporzionate al servizio.</li>
          <li>Monitoraggio e gestione delle vulnerabilità sui componenti gestiti.</li>
          <li>
            Possibilità di deployment on-premise per clienti con vincoli di
            residenza dei dati.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Sub-responsabili e fornitori">
        <p>
          L&apos;utilizzo di infrastrutture cloud o servizi tecnologici di supporto
          avviene con fornitori selezionati e vincolati contrattualmente, ove
          applicabile ai sensi dell&apos;art. 28 GDPR. L&apos;elenco aggiornato dei
          sub-responsabili è disponibile su richiesta ai clienti.
        </p>
      </LegalSection>

      <LegalSection title="6. Incidenti e notifiche">
        <p>
          In caso di violazione dei dati personali che presenti un rischio per i
          diritti e le libertà degli interessati, {COMPANY.legalName} adotta le
          procedure previste dalla normativa, incluse le notifiche al Titolare e,
          ove richiesto, all&apos;Autorità di controllo.
        </p>
      </LegalSection>

      <LegalSection title="7. Richieste e contatti privacy">
        <p>
          Per richieste relative a GDPR, sicurezza o trattamento dati nel servizio:{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-blue-300 hover:text-cyan-300"
          >
            {COMPANY.email}
          </a>{" "}
          oppure tramite la{" "}
          <a href="/contatti" className="text-blue-300 hover:text-cyan-300">
            pagina Contatti
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
