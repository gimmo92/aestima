# Landing page aestima — Next.js + Tailwind CSS

## File
- `AestimaLanding.jsx` — il componente completo (client component, `"use client"`). Mettilo in `components/`.
- `page.jsx` — esempio di pagina che lo monta. Mettilo in `app/`.

## Requisiti
- Next.js (App Router) + Tailwind CSS già configurato. Nessuna libreria esterna.
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
