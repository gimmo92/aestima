/**
 * Settori serviti da aestima. Ogni settore ha una landing dedicata
 * in /settori/{slug} che elenca le applicazioni concrete.
 */

export const SECTORS = [
  {
    slug: "manifatturiero",
    label: "Manifatturiero",
    title: "Manifatturiero",
    tagline: "Ricambi post-vendita per chi costruisce macchine e impianti",
    description:
      "Chi progetta e costruisce macchine ha un parco installato che genera richieste di ricambio continue. L'agente parte dal numero di serie o dalla distinta, identifica il componente giusto anche da una richiesta vaga, verifica la giacenza e prepara l'offerta sulle tue regole — con l'approvazione finale che resta al tecnico.",
    applications: [
      {
        name: "Costruttori di macchine e impianti",
        description:
          "Ricambi post-vendita a partire dal numero di serie o dalla distinta macchina, anche quando il cliente descrive il pezzo a parole.",
      },
      {
        name: "Packaging e linee di confezionamento",
        description:
          "Componenti meccanici ed elettrici e wear parts soggetti a usura, con richieste ricorrenti da gestire in tempi rapidi.",
      },
      {
        name: "Stampi, utensileria, attrezzature",
        description:
          "Ricambi per macchine e attrezzature installate presso i clienti, con identificazione dal contesto d'uso.",
      },
      {
        name: "Automazione industriale",
        description:
          "PLC, sensori, attuatori e moduli su commesse e retrofit, con configurazioni che cambiano da impianto a impianto.",
      },
      {
        name: "Oleodinamica e pneumatica",
        description:
          "Cilindri, valvole e kit guarnizioni a catalogo, con cross-reference tra codici equivalenti.",
      },
      {
        name: "Trasmissioni e organi di movimento",
        description:
          "Riduttori, cinghie, mozzi e componenti standard, con listini e condizioni commerciali applicati in automatico.",
      },
    ],
  },
  {
    slug: "componentistica-distribuzione",
    label: "Componentistica e distribuzione",
    title: "Componentistica e distribuzione",
    tagline: "Preventivi rapidi anche quando la richiesta arriva senza codice",
    description:
      "Chi distribuisce componenti riceve richieste incomplete: descrizioni vaghe, riferimenti parziali, urgenze. L'agente interpreta la richiesta, propone il componente corretto con cross-reference, applica condizioni e listini cliente e prepara l'offerta, lasciando la decisione finale all'operatore.",
    applications: [
      {
        name: "Distributori di componenti industriali",
        description:
          "Richieste senza codice, cross-reference tra marche e applicazione delle condizioni commerciali del cliente.",
      },
      {
        name: "Ricambi per macchine agricole e movimento terra",
        description:
          "Identificazione del pezzo dal numero di serie o da una descrizione vaga, con parco macchine eterogeneo.",
      },
      {
        name: "Ricambi elevatori, carrelli e sollevamento",
        description:
          "After-sales con forte componente di urgenza e necessità di tracciabilità su ogni richiesta.",
      },
      {
        name: "Ricambi per macchine CNC e periferiche",
        description:
          "Tool, mandrini e accessori a listino, con offerte da preparare velocemente senza perdere ordini.",
      },
    ],
  },
  {
    slug: "processo-impianti",
    label: "Processo e impianti",
    title: "Processo e impianti",
    tagline: "Ricambi e kit manutenzione per impianti in campo",
    description:
      "Gli impianti di processo richiedono ricambi programmati e componenti critici, spesso con manutenzioni pianificate. L'agente identifica il pezzo, verifica la disponibilità a magazzino, prepara la bozza di richiesta al fornitore quando manca e genera l'offerta — con l'operatore che decide e invia.",
    applications: [
      {
        name: "Scambiatori di calore, trattamento termico, HVAC industriale",
        description:
          "Ricambi su impianti installati in campo, con distinte specifiche per configurazione.",
      },
      {
        name: "Pompe, compressori, gruppi di pompaggio",
        description:
          "Kit manutenzione e componenti critici da avere pronti per ridurre i fermi impianto.",
      },
      {
        name: "Filtrazione industriale e depurazione",
        description:
          "Cartucce, kit e ricambi programmati con logiche di riordino ricorrente.",
      },
      {
        name: "Food & beverage industriale",
        description:
          "Ricambi sulle linee di produzione — service macchine, non prodotto alimentare — con esigenze di continuità.",
      },
    ],
  },
  {
    slug: "energia-infrastrutture-mezzi",
    label: "Energia, infrastrutture, mezzi",
    title: "Energia, infrastrutture e mezzi",
    tagline: "Ricambi su sistemi complessi con distinte lunghe e lead time",
    description:
      "Impianti energetici, mezzi e infrastrutture hanno sistemi articolati, distinte lunghe e fornitori con tempi di consegna variabili. L'agente ricostruisce il componente dal contesto, verifica magazzino e fornitori e prepara l'offerta, mantenendo traccia di ogni passaggio per il controllo.",
    applications: [
      {
        name: "Energy & utilities",
        description:
          "Ricambi su skid, quadri e sottosistemi, con componenti distribuiti su più impianti.",
      },
      {
        name: "Rail e trasporti",
        description:
          "Pezzi per il parco mezzi o per i macchinari di manutenzione delle officine e del service.",
      },
      {
        name: "Marine e offshore",
        description:
          "Componenti con distinte lunghe e lead time fornitori importanti, dove la preparazione anticipata conta.",
      },
    ],
  },
  {
    slug: "service-integratori",
    label: "Service e integratori",
    title: "Service e integratori",
    tagline: "Identificazione, magazzino e offerta per chi fa manutenzione",
    description:
      "Chi gestisce contratti di manutenzione e parchi installati multimarca deve identificare pezzi eterogenei, controllare le scorte e preparare offerte in fretta. L'agente unisce identificazione, verifica magazzino ed emissione offerta in un unico flusso, con approvazione umana.",
    applications: [
      {
        name: "System integrator con parco installato",
        description:
          "Contratti di manutenzione e ricambi su sistemi integrati, con configurazioni tracciate.",
      },
      {
        name: "Service multimarca e terzisti after-sales",
        description:
          "Identificazione del pezzo, verifica magazzino ed emissione offerta su marche e macchine diverse.",
      },
      {
        name: "Rental e leasing industriale",
        description:
          "Ricambi sulla flotta di macchine a noleggio, con esigenza di rapidità e controllo dei costi.",
      },
    ],
  },
];

export function getSectorBySlug(slug) {
  return SECTORS.find((sector) => sector.slug === slug) || null;
}
