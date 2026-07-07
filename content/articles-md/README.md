# Metti qui i file .md esportati da Outrank.

Frontmatter YAML supportato (opzionale):

```yaml
---
title: "Titolo articolo"
slug: mio-slug-url
meta_description: "Descrizione per SEO"
keyword: "parola chiave, ricambi"
date: 2026-06-26
image: "https://example.com/immagine.jpg"
keep_h1: false
---
```

Se manca il frontmatter:
- **slug** → dal nome file
- **title** → primo `# H1` nel markdown
- **meta_description** → primo paragrafo di testo
- **date** → data modifica file
