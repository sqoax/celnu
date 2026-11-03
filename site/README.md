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
| `src/pages/_home.astro` | The page: all copy, the bands and their layout |
| `src/pages/_maintenance.astro` | The short notice shown instead while maintenance mode is on |
| `astro.config.mjs` | Serves `/` from one of the two pages above (see "Maintenance mode") |
| `src/components/UrlField.astro` | The address-bar call to action, used in the hero and the closing band |
| `src/components/BrowserMock.astro` | The "Your Firm Capital" illustration and its Before / After toggle |
| `src/styles/global.css` | Design tokens, with their contrast ratios in comments |
| `src/config.ts` | `CONTACT_EMAIL`, the address the URL field sends to, and the `MAINTENANCE` switch |
| `src/mailto.ts` | Cleans the typed URL and builds the email |
| `src/assets/hiatt.jpg` | The About portrait's source. Astro crops it to 4:5 and resizes it, so this file itself doesn't ship |
| `public/favicon.svg` | The favicon, drawn from the wordmark's C |
| `public/robots.txt` | Points crawlers to the sitemap, which `@astrojs/sitemap` generates at build time |

## How the URL field works

There is no form backend. "Open email draft" opens the visitor's own email app with a prefilled message to `CONTACT_EMAIL`, and nothing goes out until they send it. The address is always shown under the field as a plain `mailto:` link; without JavaScript, that link is all that shows.

## Maintenance mode

Set `MAINTENANCE` in `src/config.ts` to `true` and push, and celnu.com shows only a short notice with the email address. Only the notice is built, so nothing from the full page ships. `npm run dev` still shows the full page, so you can keep working on it locally; `npm run build` then `npm run preview` shows the notice as it will look live. Set it back to `false` and push to bring the page back.

## Deployment

Pushing to `main` builds and deploys the site to GitHub Pages at https://celnu.com through `.github/workflows/deploy.yml`. `public/CNAME` ships the custom domain with every build. The site has no analytics.
