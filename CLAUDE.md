# Celnu — celnu.com

The one-page website for Celnu, a one-person studio that builds websites for private investment firms. This file is the brief. Read it fully at the start of every session and follow it over any general design habits.

## Ground rules

- Local only for now. No deployment, no hosting, no DNS, no analytics, no backend.
- No form backend. The call to action is a `mailto:` link (see "The URL field" below). Don't add Cloudflare Workers, Resend, Formspree or any other service.
- Earlier celnu.com builds are scrapped. If any exist in this folder, move them into `archive/` before starting. Never delete them, and never reuse their design.
- The new site lives in `site/` (Astro, static output).
- Use only the copy in this file. You may tighten wording, but never invent claims, clients, numbers, testimonials, awards or reviews.
- Commit after each finished step with a clear message. Never commit half-finished work.
- Stop and wait for Hiatt's review at the checkpoints marked **STOP** below.

## Positioning

- **Who it's for:** private investment firms: lower-middle-market private equity, private credit and mezzanine funds, SBIC lenders, independent sponsors, search funds and family offices.
- **The problem:** their websites haven't kept up with their track record, and the website is the first diligence anyone does on them.
- **The hook:** see your redesigned homepage before you commit to anything. No competitor offers this; it is the center of the page.
- **The voice:** first person singular ("I", never "we"). Plain, specific and calm. Celnu is one person, and that is a selling point: you work directly with the person who builds your site.

## Page structure and copy

One page, in this order. Section labels are small numbered eyebrows (01, 02 …).

1. **Header:** "Celnu" wordmark at left; one link at right, "Send your URL", which jumps to the URL field.

2. **Hero**
   - Headline: **Websites for private investment firms.**
   - Subline: Most firms' websites haven't kept up with their track record. I design and build sites for private equity and private credit funds, SBIC lenders, independent sponsors, search funds and family offices.
   - The URL field (below).

3. **01 The problem**
   - Your website is the first piece of diligence a founder, banker or LP does on you.
   - Follow with one or two short sentences: a dated site, missing bios, a portfolio no one can search, a mobile view that falls apart. Keep it factual, not alarmist.

4. **02 See it before you commit**
   - Send me your URL and I'll redesign your homepage using your real content: your team, your criteria, your deals.
   - I take on two a month.

5. **03 What's included** (a plain list, no icons)
   - Team and bio pages
   - A searchable portfolio and deal history
   - Your investment criteria, laid out clearly
   - Mobile done right
   - Launch handled, including your domain and email
   - You own everything: domain, hosting and code

6. **04 How it works** (three numbered steps)
   1. Send your URL.
   2. See your redesigned homepage within a week.
   3. Approve it, and I build the rest and launch.

7. **05 Pricing**
   - Projects from $5,000.
   - Ongoing care is available after launch. (One line only; no monthly price on the site.)

8. **06 About**
   - Celnu is Hiatt, a one-person studio in Greensboro, North Carolina. You work directly with the person who builds your site.
   - No photo for now.

9. **Closing:** repeat the URL field with one short line above it, e.g. "Send your URL. I'll show you what it could be."

10. **Footer:** hiatt@celnu.com, Greensboro, NC, and a copyright line.

## The URL field (the signature element)

The main call to action looks like a browser address bar: a single input with a faint `https://` prefix, placeholder `yourfirm.com`, and a squared "Send" button.

- On submit, open a `mailto:` link to the address in one config constant (`CONTACT_EMAIL = "hiatt@celnu.com"`), with the subject `Homepage concept: <their domain>` and a short prefilled body that includes the URL they typed.
- Light validation only: trim spaces, strip `http(s)://` and trailing slashes before building the email; if the field is empty, show an inline message instead of opening mail.
- It must work by keyboard, have a visible label (it can be visually subtle), and degrade to a plain `mailto:hiatt@celnu.com` link without JavaScript.
- Below it, one small line: "Opens your email. Nothing is sent until you hit send."

This element appears twice: in the hero and in the closing section.

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
  --accent: #1F4D3A;   /* deep green: links, the Send button, focus rings; used sparingly */
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
- Small uppercase tracked labels only for the numbered eyebrows, at 12–13px.

### Layout

- Single column, left-aligned, generous margins and vertical space. Max content width about 1100px.
- Sections separated by space, background tone and hairlines.
- No images, no illustrations, no screenshots, no example projects. Typography and the URL field carry the page.
- Motion: at most a gentle fade-in on scroll, disabled under `prefers-reduced-motion`.

## Hard rules

- No gradients, glows, blobs, glassmorphism or dark-mode-first styling.
- No icon grids, emoji or exclamation points.
- No pill buttons. Buttons are squared.
- No rounded cards with drop shadows.
- No testimonials, client logos, award badges, review ratings or performance statistics.
- No example projects or placeholder screenshots.
- No "free proposal", "free consultation", "book a call", "get started", "agency", "solutions", "unlock", "supercharge", "seamless" or "cutting-edge".
- No SEO or marketing jargon.

## Accessibility and quality bar

- Exactly one `<h1>` (the hero headline), with a logical heading order.
- Semantic HTML, landmarks and a skip link.
- Every interactive element has an accessible name and a visible focus state.
- Text contrast meets WCAG AA everywhere.
- No horizontal scroll at any width down to 360px.
- Page title: "Celnu — Websites for private investment firms". Add a meta description from the subline and a simple favicon from the wordmark's first letter.

## Workflow

**Step 0.** Move any earlier builds into `archive/`. Initialize git if needed, with a `.gitignore` that includes `.DS_Store` and `node_modules`. Scaffold Astro in `site/` and set up the tokens. Commit.

**Step 1: Type specimen.** Build `/specimen` (unlinked) showing pairings A, B and C side by side. Each shows the hero headline at full size, the subline, one numbered section with its eyebrow, the pricing line, and the URL field. Check that `--ink-2` and `--accent` pass AA. Commit. **STOP** for Hiatt to pick one.

**Step 2: The page.** Build the full one-page site with the chosen pairing. Screenshot it at 1440px and 390px, self-check against this file, and test the URL field (empty input, input with `https://` and a trailing slash, keyboard only, JavaScript disabled). Commit. **STOP** for review.

**Step 3: Polish.** Run an accessibility scan (axe) at both widths, run Lighthouse for Accessibility and Best Practices, and write `site/README.md` with how to run it locally. Commit.
