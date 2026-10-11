# Bonny Forever — website

Static website for Bonny Forever Floral Design (luxury faux floral hire, West Sussex).
Hand-coded HTML, CSS and JS. No build step, no framework, no npm.

Originally exported from another AI tool as single files with base64-embedded images and
inline CSS/JS. Restructured Oct 2026. The first git commit (`670108e`) is the untouched
original export, kept for reference. `website.html` was renamed to `index.html` at that point.

## Folder structure

```
site/                  ← THE WEBSITE. Only this folder gets deployed.
  index.html             Homepage
  weddings.html          Wedding packages, with photo lightbox
  commercial.html        Commercial installs
  css/styles.css         Shared by index.html + weddings.html
  css/weddings.css       weddings.html only (package tiles, lightbox). Loaded after styles.css.
  css/commercial.css     commercial.html only. This page does NOT use styles.css (see next steps).
  js/main.js             Loaded by all pages: mobile menu (all), enquiry form (index), lightbox (weddings)
  images/                All site photos and the logo, optimised for the web
  images/social/         1200×630 share images used by the og:image tags (one per page)
  favicon.ico            16/32/48px, cut from the logo's flower emblem
  apple-touch-icon.png   180px home-screen icon (emblem on paper background)
originals/             ← Full-quality originals of every site image, before optimisation. Not deployed.
design-system/         ← Brand exploration doc ("Exploration 03"). Reference only, never deploy.
  bonny-forever-design-system-03.html, design-system.css, design-system.js, images/
CLAUDE.md, .gitignore  ← Repo root, not deployed.
```

## Deploying

**Only `site/` gets deployed.** Point the host (or upload) at the contents of `site/`.
`originals/`, `design-system/`, `CLAUDE.md` and `.gitignore` must never go live.

**Before launch, confirm the domain.** The social-share tags (`og:url`, `og:image`) need
absolute URLs and assume `https://bonnyforever.co.uk`. If the live address differs, search
for that string in the three pages and replace it.

## Preview locally

```
cd site
python3 -m http.server 8000
```

Then open http://localhost:8000 and press Ctrl+C in the terminal to stop.
For the design doc, run the same command from `design-system/`.

## Conventions

- **Filenames:** lowercase-kebab-case. Images are named by what is in them
  (`centrepiece-peach-roses.jpg`), not by the page they're on. The exception is the share
  images in `images/social/`, which are per page (`share-home.jpg`). One file per photo:
  don't add second copies at other sizes.
- **No base64 / data-URI images.** Every image is a file in `site/images/`.
- **Adding or replacing a photo:**
  1. Put the full-quality original in `originals/`.
  2. Make the web copy no wider than 2× its largest displayed width (tablets at 768–820px
     show single-column photos about 750px wide, so 1500px is usually right). Save it as
     JPEG quality 85.
  3. Keep the colour profile. Many photos are Display P3 (iPhone). Re-encoding through a tool
     that drops the profile makes oranges and pinks look duller on Apple screens.
  4. Lightbox photos (weddings `.sig-tile`) display at their natural pixel size on big
     screens, so don't shrink those below their current dimensions.
- **Every `<img>` gets `width` and `height`** set to its real pixel size, which prevents
  layout shift. `img { height: auto; }` in `styles.css` stops the height attribute fighting
  CSS that only sets a width. Add `loading="lazy"` to every image except the logo and the
  hero (anything visible in the first screen on any device).
- **Relative paths only** (`images/…`, `css/…`, `index.html#contact`), with no leading slash,
  so pages work on a local server and on any host.
- **CSS:** shared rules go in `styles.css`. Page-only rules go in `css/<page>.css`, linked
  after `styles.css`. Brand colours are variables in `:root` of `styles.css`
  (`--grape`, `--ink`, `--rose`, `--wisteria`, `--sage`, `--paper`). Fonts are Fraunces
  (headings) and Jost (body), loaded from Google Fonts in each page's `<head>`.
- **JS:** `main.js` loads on every page, so each feature lives in its own
  `(function(){ … })();` block that returns early if its element isn't on the page.
- **Mobile menu:** a `<button class="nav-toggle">` before the `<nav id="main-nav">` in each
  header. `main.js` toggles `.nav-open` on the `<header>` and keeps `aria-expanded` in sync.
  Styles are under "MOBILE MENU" in `styles.css` (992px breakpoint). `commercial.css`
  (800px) has a temporary copy. A new page needs the same button + `id="main-nav"`.
- **Email:** `hello@bonnyforever.co.uk`, as plain `mailto:` links. Do not put Cloudflare
  `/cdn-cgi/` email-protection markup back into the source (Cloudflare adds it at serve time).
- **Alt text:** every `<img>` needs a meaningful `alt`. Use `alt=""` only for decorative images.

## Next steps

Visible to visitors — fix first:
1. **Enquiry form doesn't send anything.** It shows "Thank you! Your enquiry has been sent"
   but the message goes nowhere. It needs a real form handler, and the inputs need `name`
   attributes.
2. **Commercial page doesn't match the rest.** It doesn't load Google Fonts (falls back to
   Arial/Georgia) and has its own stylesheet. Its header is sticky instead of fixed, its buttons
   are different, and its footer has 2 columns and no email. Rebuild it on `styles.css`, using
   the same header markup as index/weddings, then delete the "MOBILE MENU" stopgap block at
   the end of `commercial.css`.

Clean-up:

3. Unused CSS in `styles.css`: `.wedding-hero`, `.services-grid`, `.brand-mark span`,
   `--grape-dark`, `--rose-tint`. Many other rules are used by only one of the two pages.
   `.duo` is declared twice in `weddings.css`.
4. About 40 inline `style=""` attributes should become classes. For example, the logo's 52px
   height is set inline and overrides the 42px in CSS.
5. Optional: switch photos to WebP for about 25–30% less weight. Use `brew install webp`,
   then `cwebp -q 82 -metadata icc` to keep the colour profile. Serve WebP directly with no
   `<picture>` fallback: the site already serves a WebP with no fallback and every current
   browser supports it.
6. Two alt texts are vague. The homepage hero says "Luxury Faux Florals by Bonny Forever",
   and the sustainability photo (`dried-bouquet-in-hand.jpg`) says "Botanical details".
7. The share images (`images/social/`) are plain photo crops. Consider designing branded
   versions with the logo.
8. Dead markup: an empty `<span class="sig-extra" hidden>` on the Head Table Runner tile,
   and the lightbox title `<h4 id="lbTitle">` is always hidden.
9. The Google Fonts URL requests Fraunces' SOFT axis, which the site never uses.
10. `wedding-reception-hollyclark.webp` is by Holly Clark Photography. Check permission and
    add a credit.
11. `@bonnyforeverflorals` is plain text. Link it to the Instagram profile.
12. Nav links have no visible `:focus-visible` style beyond the browser default. Add one
    in the brand colours, like the menu button's grape outline.
