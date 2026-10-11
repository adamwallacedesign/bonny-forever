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
  js/main.js             Enquiry form (index) + lightbox (weddings)
  images/                All site photos and the logo
design-system/         ← Brand exploration doc ("Exploration 03"). Reference only, never deploy.
  bonny-forever-design-system-03.html, design-system.css, design-system.js, images/
CLAUDE.md, .gitignore  ← Repo root, not deployed.
```

## Deploying

**Only `site/` gets deployed.** Point the host (or upload) at the contents of `site/`.
`design-system/`, `CLAUDE.md` and `.gitignore` must never go live.

## Preview locally

```
cd site
python3 -m http.server 8000
```

Then open http://localhost:8000 and press Ctrl+C in the terminal to stop.
For the design doc, run the same command from `design-system/`.

## Conventions

- **Filenames:** lowercase-kebab-case. Images are named by what is in them
  (`centrepiece-peach-roses.jpg`), not by the page they're on. Copies of the same photo
  at different sizes carry a width suffix: `floral-arch-window-1000w.jpg`.
- **No base64 / data-URI images.** Every image is a file in `site/images/`.
- **Relative paths only** (`images/…`, `css/…`, `index.html#contact`), with no leading slash,
  so pages work on a local server and on any host.
- **CSS:** shared rules go in `styles.css`. Page-only rules go in `css/<page>.css`, linked
  after `styles.css`. Brand colours are variables in `:root` of `styles.css`
  (`--grape`, `--ink`, `--rose`, `--wisteria`, `--sage`, `--paper`). Fonts are Fraunces
  (headings) and Jost (body), loaded from Google Fonts in each page's `<head>`.
- **JS:** `main.js` loads on several pages, so each feature lives in its own
  `(function(){ … })();` block that returns early if its element isn't on the page.
- **Email:** `hello@bonnyforever.co.uk`, as plain `mailto:` links. Do not put Cloudflare
  `/cdn-cgi/` email-protection markup back into the source (Cloudflare adds it at serve time).
- **Alt text:** every `<img>` needs a meaningful `alt`. Use `alt=""` only for decorative images.

## Next steps

Visible to visitors — fix first:
1. **Enquiry form doesn't send anything.** It shows "Thank you! Your enquiry has been sent"
   but the message goes nowhere. It needs a real form handler, and the inputs need `name`
   attributes.
2. **Dead links on index.html.** "Explore Wedding Packages" (hero), "View Our Floral
   Collections" and footer "Wedding Packages" go to `#weddings`. Footer "Commercial Installs"
   goes to `#commercial`. Neither section exists. They should link to `weddings.html` /
   `commercial.html`.
3. **No mobile menu.** The nav is hidden below 992px (800px on commercial) with nothing
   replacing it.
4. **Commercial page doesn't match the rest.** It doesn't load Google Fonts (falls back to
   Arial/Georgia) and has its own stylesheet. Its header is sticky instead of fixed, its buttons
   are different, and its footer has 2 columns and no email. Rebuild it on `styles.css`.

Clean-up:

5. Unused CSS in `styles.css`: `.wedding-hero`, `.services-grid`, `.brand-mark span`,
   `--grape-dark`, `--rose-tint`. Many other rules are used by only one of the two pages.
   `.duo` is declared twice in `weddings.css`.
6. About 40 inline `style=""` attributes should become classes. For example, the logo's 52px
   height is set inline and overrides the 42px in CSS.
7. Images are far bigger than displayed: most are 1500×2000 and up to 1 MB. Resize and
   compress them, add `width`/`height` attributes, and add `loading="lazy"` below the fold.
   The homepage currently loads about 5.3 MB of photos.
8. Merge duplicate photos. `floral-arch-window-1000w/1116w/1126w` are one photo, and
   `plinth-hydrangeas` / `-900w` are one photo.
9. Wrong alt text. `urn-orange-roses-garden.jpg` says "Nina styling faux florals" but has no
   person in it. `floral-arch-window-1126w.jpg` says "Commercial floral installation" but is
   the wedding arch. The 4 homepage gallery images share one generic alt.
10. The homepage contact-panel email shows in browser-default link blue because no CSS
    targets `.info-item a`. Style it.
11. Dead markup: an empty `<span class="sig-extra" hidden>` on the Head Table Runner tile,
    and the lightbox title `<h4 id="lbTitle">` is always hidden.
12. Add a favicon, meta description and Open Graph (social share) tags.
13. The Google Fonts URL requests Fraunces' SOFT axis, which the site never uses.
14. `wedding-reception-hollyclark.webp` is by Holly Clark Photography. Check permission and
    add a credit.
15. `@bonnyforeverflorals` is plain text. Link it to the Instagram profile.
