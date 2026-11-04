# Celnu — celnu.com

The one-page website for Celnu, a one-person studio that builds websites for private investment firms. This file is the brief. Read it fully at the start of every session and follow it over any general design habits.

## Ground rules

- Hosted on GitHub Pages at celnu.com, from the repo `sqoax/celnu`. Pushing to `main` deploys through `.github/workflows/deploy.yml`, so `main` is the live site. No analytics, no backend.
- No form backend. The call to action is a `mailto:` link (see "The URL field" below). Don't add Cloudflare Workers, Resend, Formspree or any other service.
- Earlier celnu.com builds are scrapped. If any exist in this folder, move them into `archive/` before starting. Never delete them, and never reuse their design.
- The new site lives in `site/` (Astro, static output).
- Use only the copy in this file. You may tighten wording, but never invent claims, clients, numbers, testimonials, awards or reviews.
- Commit after each finished step with a clear message. Never commit half-finished work.
- Stop and wait for Hiatt's review at the checkpoints marked **STOP** below.
- **Maintenance mode:** `MAINTENANCE` in `site/src/config.ts`. While it is `true`, the build (what deploys) serves only a short notice from `site/src/pages/_maintenance.astro`, and nothing from the full page ships. `npm run dev` always shows the full page (`site/src/pages/_home.astro`), so work can go on locally. Set it to `false` and push to bring the page back. The notice's copy:
  - This site is under maintenance.
  - I'm making updates to celnu.com, and it will be back soon. In the meantime, you can reach me at hiatt@celnu.com.
  - Already received a concept from me? Reply to my email as usual.

## Positioning

- **Who it's for:** private investment firms: lower-middle-market private equity, private credit and mezzanine funds, SBIC lenders, independent sponsors, search funds and family offices.
- **The problem:** their websites haven't kept up with their track record, and the website is the first diligence anyone does on them.
- **The hook:** a free homepage concept, built from the firm's own team, investment criteria and selected deals, seen within a week, before they decide whether to hire me. No competitor offers this; it leads the hero.
- **Two kinds of visitor:** partners who arrive with a concept I've already emailed them, and visitors who arrive wanting one. The page works for both: the form for a new request, and a quiet line telling partners to reply in the existing email thread.
- **The voice:** first person singular ("I", never "we"). Plain, specific and calm. Celnu is one person, and that is a selling point: you work directly with the person who builds your site.

## Page structure and copy

One page, in this order. Section labels are bold numbered eyebrows (01, 02 …). Six numbered sections share four bands, so the page stays short.

1. **Header:** "Celnu" wordmark at left; one link at right, "Request a free concept", which jumps to the URL field.

2. **Hero** (split: text and URL field at left, the browser illustration at right)
   - Headline: **Websites for private investment firms.**
   - Promise: I rebuild your website around the content you already have (your team, criteria and deals) so owners and bankers can find what they need on any device. You don't write anything new, and you approve every word. (No "in seconds" or other unmeasured speed claims.)
   - Offer, right under it and set apart by weight (semibold), not size: I'll design a free homepage concept from what's already public on your site. You'll see it within a week, before you decide whether to hire me.
   - The URL field (below).
   - Below the field, a quieter plain-text line (not a link): Already received a concept from me? Reply to my email with anything you'd like me to change.
   - The browser illustration (below).
   - On phones the headline is sized to take two lines (three at 320px), so the offer shows early. It stays the largest type on the page.

3. **Accent band:** one full-width `--accent` band with `--paper` text, holding 01 at left and 02 at right.
   - **01 The problem**
     - When a banker sends an owner your name, can they see what you invest in, what kind of capital you provide, who they'd work with, and which businesses you've backed?
     - Follow with two short sentences: Too often they find a dated site, missing bios, a portfolio no one can search, a mobile view that falls apart. It's the same site a sponsor or an investor finds when they look you up. Keep it factual, not alarmist.
   - **02 Who it's for**
     - I design and build sites for private equity and private credit funds, SBIC lenders, independent sponsors, search funds and family offices.
     - Then one line: It's the right fit when your strategy and story are settled and your site hasn't kept up. If you're rethinking your positioning or want your story rewritten, a branding firm is the better choice.
     - Don't repeat the hero offer at length further down the page.

4. **Side by side:** 03 at left, 04 at right.
   - **03 Typical scope** (a plain list, no icons; it reads as typical scope, not as everything included in every project)
     - Team and bio pages
     - A searchable portfolio and deal history
     - Your investment criteria, laid out clearly
     - On a phone, a banker can check your criteria, find a deal and email the right person
     - Launch coordinated with your IT provider, so your email keeps working
     - You own everything, and updates are a quick email to me
     - A static site: no plugins or database to patch, and every change can be rolled back
     - Then one line: A website project, not a rebrand: no workshops, and nothing new for your partners to write or approve. Your existing content is the starting point. New copy, logos and brand strategy aren't included; if you have new material, I'll place it.
   - **04 How it works** (six steps, with large Instrument Serif numerals)
     1. Send your URL. I capture your whole current site (every page, bio, deal and criterion) so nothing is lost in the move.
     2. See your homepage concept within a week.
     3. Fixed quote after a short call.
     4. Content and compliance review: your team approves everything, and I never write performance figures or investor claims.
     5. Build and launch in about four weeks, coordinated with your IT provider. Your review time sets the final date.
     6. Optional ongoing care.
     - Then one line: Your approved copy carries over word for word, anything I add is flagged for your review, and your compliance reviewer gets a private staging link before launch.
     - Then one line: 50% to start, 40% on approval, 10% at launch.

5. **Final band:** 05, 06 and the closing URL field in one band.
   - **05 Pricing**
     - Every project is a fixed price, quoted after a short call, once you've seen your homepage concept.
     - Right under it: No hourly billing and no surprises. The price depends mainly on how many pages, people and deals your site carries.
     - Ongoing care after launch keeps your site current: new deals, exits, hires and title changes. (One line only; no monthly price on the site.)
     - No price anywhere on the site, in its copy or its metadata. The browser illustration's fictional EBITDA range isn't a price and stays.
   - **06 About**
     - I'm Hiatt Gafnea. I started Celnu in Greensboro to build websites for private investment firms. I studied business at UNCG's Bryan School, and I care as much about what your site tells an owner or a banker as how it looks. When you work with Celnu, you work with me: I do the research, the design and the build, and I answer my own email. I'm in Greensboro and glad to meet in person anywhere in North Carolina.
     - A 4:5 portrait beside the bio, alt text "Portrait of Hiatt Gafnea". The source is `site/src/assets/hiatt.jpg`, processed by Astro's image pipeline so only resized versions ship.
     - Under the bio, a "LinkedIn" text link to https://www.linkedin.com/in/hiattg/, led by LinkedIn's "in" mark drawn as an inline SVG in `--accent`. It's the only icon on the page.
   - **Closing:** repeat the URL field with one short line above it, e.g. "Send your URL. I'll show you what it could be."

6. **Footer:** hiatt@celnu.com, Greensboro, NC, and a copyright line.

## The URL field (the signature element)

The main call to action looks like a browser address bar: a single input with a faint `https://` prefix, placeholder `yourfirm.com`, and a squared "Open email draft" button. On a narrow phone the button drops below the address, full width.

- On submit, open a `mailto:` link to the address in one config constant (`CONTACT_EMAIL = "hiatt@celnu.com"`), with the subject `Homepage concept: <their domain>` and a short prefilled body that includes the URL they typed.
- Light validation only: trim spaces, strip `http(s)://` and trailing slashes before building the email; if the field is empty, show an inline message instead of opening mail.
- It must work by keyboard, have a visible label (it can be visually subtle), and degrade to a plain `mailto:hiatt@celnu.com` link without JavaScript.
- Below it, one small line: "Opens a draft in your own email app. Nothing is sent until you send it."
- Then the address itself, always visible and selectable as a `mailto:` link: "Email me directly: hiatt@celnu.com". Without JavaScript this is the call to action.
- Button labels: "Open email draft" wherever a button opens the mail app; "Request a free concept" for links that only take the visitor to the field. No backend, CRM or scheduler.

This element appears twice, identical: in the hero and in the closing section.

## The browser illustration

A browser window built in HTML/CSS, showing the homepage of a fictional firm labeled "Your Firm Capital", with a visible caption: "Illustrative redesign for a fictional firm." Both versions carry one fictional mandate: founder-owned industrial services companies with $3–8M EBITDA, a sample investment (Calder & Pine Mechanical, commercial HVAC services) and a named investment contact (Jordan Avery, Principal).

- **Before:** a dated homepage: Times-style text and a generic stock-photo block drawn in flat CSS shapes, with those facts buried in one plausible paragraph.
- **After:** a calm, typographic redesign in the Celnu style, facts first, with no artwork: the headline "Backing founder-owned industrial services companies." in the dark serif on paper, two drawn (non-interactive) actions, "Send us a deal" and "See our criteria →", then the same facts in a row separated by hairlines, so a banker can answer three questions at a glance: Does my deal fit? (Criteria) Has this firm done a similar deal? (Recent investment) Who handles opportunities? (New opportunities). Under it, one text-only line: "Team: Jordan Avery, Principal · Sam Ortiz, Partner". No illustrations, placeholder portraits, avatars, "Name, Title" captions or empty stats.

Behavior:

- It shows After by default. A "Before / After" toggle lets visitors switch views themselves; it works by keyboard and without JavaScript. There is no timer.
- Switching crossfades, except under `prefers-reduced-motion`, where it switches instantly.
- When someone types in the URL field, the illustration's address bar shows their domain live.
- Both versions stay legible on a phone, down to 320px.
- Its text meets WCAG AA like the rest of the page, including the dated version's own colors. Screen readers get it as one labeled image.
- No real company names, logos or screenshots, and no performance claims in it. The only numbers are the fictional mandate's EBITDA range.

## Design direction: quiet confidence with a studio edge

It should look like the work Celnu sells (restrained, credible to a finance partner) but with enough personality to read as a design studio, not another investment firm. Calm and specific is the differentiator: competitors in this space use award badges, stats and "free proposal" buttons.

### Tokens

Plain CSS custom properties in one global stylesheet, with Astro scoped styles. No Tailwind, no UI kit.

```css
:root {
  --paper: #F4F1EA;    /* warm bone background */
  --paper-2: #EAE6DC;  /* alternate section tone */
  --ink: #16181D;      /* text */
  --ink-2: #5A5F66;    /* secondary text: verify AA on both papers */
  --rule: #D6D0C4;     /* hairlines */
  --accent: #1F4D3A;   /* deep green: links, the Send button, focus rings and the one full-width band */
}
```

Verify every text/background pair meets WCAG AA and record the ratios in comments. Adjust values if one fails, and say what changed.

### Type

- Chosen in Step 1 from three pairings, each with Public Sans for body and UI:
  - **A:** Instrument Serif headlines
  - **B:** Fraunces headlines (low "soft" and "wonk" settings, so it stays sober)
  - **C:** Newsreader headlines, with italic used for one emphasized word in the hero
- Self-host fonts with `@fontsource` packages. No Google Fonts requests.
- The hero headline is large: it is the main visual on the page. Body 17–18px, line-height about 1.6, measure about 60–70 characters.
- Small uppercase tracked labels only for the numbered eyebrows, at 14–15px, bold and high contrast (`--ink`, or `--paper` on the accent band).

### Layout

- Use the full width: two-column bands, left-aligned, with a max content width of about 1440px. Below about 1024px everything stacks into one column.
- Keep the page short: about half the height of a single-column layout.
- Bands separated by background tone and space.
- No screenshots, and no images apart from the browser illustration, the About portrait and the LinkedIn mark beside the About link. Typography, the URL field and the illustration carry the page.
- Motion: only the illustration's crossfade when a visitor switches views, disabled under `prefers-reduced-motion`.

## Hard rules

- No gradients, glows, blobs, glassmorphism or dark-mode-first styling.
- No icon grids, emoji or exclamation points.
- No pill buttons. Buttons are squared.
- No rounded cards with drop shadows.
- No testimonials, client logos, award badges, review ratings or performance statistics.
- No invented clients, results or experience, and no healthcare project, not even anonymized.
- No example projects or placeholder screenshots. The fictional "Your Firm Capital" browser illustration is the only exception.
- No "free proposal", "free consultation", "book a call", "get started", "agency", "solutions", "unlock", "supercharge", "seamless" or "cutting-edge".
- No SEO or marketing jargon.

## Accessibility and quality bar

- Exactly one `<h1>` (the hero headline), with a logical heading order.
- Semantic HTML, landmarks and a skip link.
- Every interactive element has an accessible name and a visible focus state.
- Text contrast meets WCAG AA everywhere.
- No horizontal scroll at any width down to 360px.
- Page title: "Celnu — Websites for private investment firms". Add a meta description from the hero's promise and a simple favicon from the wordmark's first letter.
- An `@astrojs/sitemap` sitemap, and a `robots.txt` pointing to it.

## Workflow

**Step 0.** Move any earlier builds into `archive/`. Initialize git if needed, with a `.gitignore` that includes `.DS_Store` and `node_modules`. Scaffold Astro in `site/` and set up the tokens. Commit.

**Step 1: Type specimen.** Build `/specimen` (unlinked) showing pairings A, B and C side by side. Each shows the hero headline at full size, the subline, one numbered section with its eyebrow, the pricing line, and the URL field. Check that `--ink-2` and `--accent` pass AA. Commit. **STOP** for Hiatt to pick one.

**Step 2: The page.** Build the full one-page site with the chosen pairing. Screenshot it at 1440px and 390px, self-check against this file, and test the URL field (empty input, input with `https://` and a trailing slash, keyboard only, JavaScript disabled) and the browser illustration (toggle, `prefers-reduced-motion`, live address bar). Commit. **STOP** for review.

**Step 3: Polish.** Run an accessibility scan (axe) at both widths, run Lighthouse for Accessibility and Best Practices, and write `site/README.md` with how to run it locally. Commit.
