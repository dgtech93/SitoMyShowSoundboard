# MY Show Soundbar - Sito Promozionale

Sito web per la distribuzione e promozione dell'applicazione **MY Show Soundbar**, player di jingle professionale per studi radio e TV.

## Struttura

- `index.html` — Pagina principale con hero, funzionalità, confronto con Jingle Palette, download e info
- `styles.css` — Stili (tema scuro, accenti dorati)
- `script.js` — Smooth scroll e interazioni
- `downloads/` — Cartella per l'installer

## Come pubblicare l'installer

1. Copia il file installer (es. `MYShowSoundbar-Setup.exe`) nella cartella `downloads/`
2. Se il nome del file è diverso, aggiorna il link in `index.html` nella sezione download:

```html
<a href="downloads/TUO-FILE-INSTALLER.exe" class="btn btn-download" download>
```

## Anteprima locale

Apri `index.html` nel browser oppure usa un server locale:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve .
```

Poi visita `http://localhost:8000`

## Personalizzazione

- **Colori**: modifica le variabili CSS in `:root` in `styles.css`
- **Testi**: modifica direttamente `index.html`
- **Requisiti di sistema**: aggiorna la sezione "Requisiti di sistema" con i dati reali dell'app
