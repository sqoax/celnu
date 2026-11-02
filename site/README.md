# Celnu

The one-page site for Celnu, a one-person studio that builds websites for private investment firms. It's built with Astro and outputs static files. The full brief is in [`../CLAUDE.md`](../CLAUDE.md).

## Run it locally

You need Node 22.23.4 or newer. From this folder:

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321.

To check the production build:

```bash
npm run build
```

```bash
npm run preview
```

The build goes to `dist/`, and the preview serves it at http://localhost:4321.

## Where things live

| Path | What it holds |
|---|---|
| `src/pages/index.astro` | The page: all copy, the bands and their layout |
| `src/components/UrlField.astro` | The address-bar call to action, used in the hero and the closing band |
| `src/components/BrowserMock.astro` | The "Your Firm Capital" illustration and its Before / After flip |
| `src/styles/global.css` | Design tokens, with their contrast ratios in comments |
| `src/config.ts` | `CONTACT_EMAIL`, the address the URL field sends to |
| `src/mailto.ts` | Cleans the typed URL and builds the email |
| `public/favicon.svg` | The favicon, drawn from the wordmark's C |

## How the URL field works

There is no form backend. Send opens the visitor's own email app with a prefilled message to `CONTACT_EMAIL`, and nothing goes out until they send it. Without JavaScript, the field is replaced by a plain `mailto:` link.

The site isn't deployed yet and has no analytics.
