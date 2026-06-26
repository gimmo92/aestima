# Landing page aestima — Next.js + Tailwind CSS

## Struttura
- `components/AestimaLanding.jsx` — landing page completa (client component).
- `app/page.jsx` — pagina che monta il componente.
- `app/layout.jsx` — layout root con font IBM Plex.

## Requisiti
- Next.js (App Router) + Tailwind CSS. Nessuna libreria esterna.

## Sviluppo locale
```bash
npm install
npm run dev
```
- Solo classi Tailwind di default (più qualche valore arbitrario tipo `text-[42px]`).

## Note
- **Accento**: cambia colore in un punto solo, nell'oggetto `ACCENT` in cima al file.
- **Logo**: ora è un wordmark con marchio geometrico segnaposto (componente `Logo`).
  Sostituisci con il logo reale, es. `<img src="/logo-aestima.svg" alt="aestima" />`.
- **Form**: stato React + validazione base. L'invio è marcato con
  `// TODO: collegare a backend/email` — lì va il `fetch` verso la tua API/servizio email.
- **Font**: il design usa un sans grottesco tecnico. Per replicarlo, carica
  IBM Plex Sans / IBM Plex Mono via `next/font` e mappali su `font-sans` / `font-mono`
  in `tailwind.config`. Con la config default usa il sans di sistema.
