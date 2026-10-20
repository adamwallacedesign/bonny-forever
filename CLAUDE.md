# Bonny Forever — website

Static website for Bonny Forever Floral Design (real-touch faux flower hire, West Sussex),
run by Nina. Hand-coded HTML, CSS and JS. No build step, no framework, no npm.

History:
- **Originally** exported from another AI tool as single files with base64-embedded images
  and inline CSS/JS. The first git commit (`670108e`) is that untouched export.
- **Restructured** Oct 2026, when `website.html` was renamed `index.html`.
- **Content update** Oct 2026, following the owner's brief in `docs/content-brief.md`. The
  brief is the source of truth for the wording on all three pages.

## Folder structure

```
site/                  ← THE WEBSITE. Only this folder gets deployed.
  index.html             Home
  weddings.html          Weddings (Bonny Signature package, add-ons, FAQ, photo lightbox)
  commercial.html        Business. The nav says "Business"; the file name stays commercial.html.
  css/styles.css         Shared by every page: layout, header, footer and all shared components
  css/weddings.css       weddings.html only: package photo cards, "The look" layout, lightbox
  js/main.js             Loaded by every page: mobile menu, enquiry form, ?enquiry= pre-select, lightbox
  images/                All site photos and the logo, optimised for the web
  images/social/         1200×630 share images used by the og:image tags (one per page)
  favicon.ico            16/32/48px, cut from the logo's flower emblem
  apple-touch-icon.png   180px home-screen icon (emblem on paper background)
docs/content-brief.md  ← The owner's content brief. Not deployed.
originals/             ← Full-quality originals of every site image, before optimisation. Not deployed.
design-system/         ← Brand exploration doc ("Exploration 03"). Reference only, never deploy.
CLAUDE.md, .gitignore  ← Repo root, not deployed.
```

### Page sections (top to bottom; `#ids` are linked from elsewhere, so keep them)

- **Home:** offer banner → hero → four highlights → What are you planning? (`#explore`) →
  My story (`#about`) → Why faux flowers? (`#why-faux`) → Gallery (`#gallery`) →
  How hiring works (`#process`) → Let's chat + enquiry form (`#contact`) → footer
- **Weddings:** offer banner → hero → Founding offer (`#offer`) → The Bonny Signature package
  (`#package`) → The look + Planning your day together → Need a little more? (`#add-ons`) →
  Bespoke floral styling (`#bespoke`) → FAQ (`#faq`) → closing band → footer
- **Business:** offer banner → hero → Launch offer (`#offer`) → Ways to work with me
  (`#services`) → Pricing (`#pricing`) → Why faux flowers for your business? (`#why-faux`) →
  How it works (`#how-it-works`) → FAQ (`#faq`) → closing band → footer

## Deploying

**Only `site/` gets deployed.** Vercel's Root Directory is set to `site`.
`docs/`, `originals/`, `design-system/`, `CLAUDE.md` and `.gitignore` must never go live.

**Workflow:** GitHub repo `adamwallacedesign/bonny-forever`.
- `main` is production (bonny-forever.vercel.app).
- Do changes on a branch and push it; Vercel builds a preview link for every push.
- Merge into `main` when they're approved.

**Pre-launch checklist:**
1. **Confirm the launch domain.** The social-share tags (`og:url`, `og:image`) need absolute
   URLs and assume `https://bonnyforever.co.uk`. If the live address differs, search for that
   string in the three pages and replace it.
2. **Connect the enquiry form** (next steps, item 1). It currently promises a reply but sends nothing.
3. **Replace the 8 photo placeholders** (next steps, item 2).

## Preview locally

```
cd site
python3 -m http.server 8000
```

Then open http://localhost:8000 and press Ctrl+C in the terminal to stop.
For the design doc, run the same command from `design-system/`.

## Writing and copy

- **Use the owner's copy exactly** (`docs/content-brief.md`). Don't reword, shorten or add
  marketing language. British English (colour, centrepiece, personalise).
- **First person, as Nina** ("I", "me", "my"). "We" only ever means Nina and the customer
  ("we'll plan timings together"), never a team.
- **Never bring back:** "Sustainable", "zero waste", "single-use", "circular rental",
  "Zero maintenance", "Uncompromising beauty", "Effortless elegance", "B2B",
  "within 1 hour" / "within 2 hours", "our team", "West Sussex team".
- **Button labels come from the brief.** For example "Get in touch", "Check my date",
  "Book a free visit", "Send my message". Don't invent new ones for the same action.
- **One H1 per page** (the hero). Section headings are H2; card, step and FAQ titles are H3.
- **Headings have one italic phrase** in rose (wisteria on dark bands, grape on the pink offer
  panel), marked with `<em>`. That's the brand's styling rule. The words never change.
- Typographic apostrophes and quotes (`&rsquo;`, `&ldquo;`) as used throughout the site.

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
- **Every `<img>`** gets `width` and `height` set to its real pixel size, which prevents
  layout shift. `img { height: auto; }` in `styles.css` stops the height attribute fighting
  CSS that only sets a width. Add `loading="lazy"` to every image except the logo and the
  hero (anything visible in the first screen on any device).
- **Alt text:** every `<img>` needs meaningful alt text. Never use `alt=""`: the owner checks
  for empty alts. On the Home gallery, the visible caption doubles as the alt text.
- **Relative paths only** (`images/…`, `css/…`, `index.html#contact`), with no leading slash.
- **CSS:** everything shared lives in `styles.css`. Only weddings-specific pieces live in
  `weddings.css`. No inline `style=""` attributes. Brand colours are variables in `:root` of
  `styles.css` (`--grape`, `--grape-dark`, `--ink`, `--rose`, `--rose-tint`, `--wisteria`,
  `--sage`, `--paper`). Fonts are Fraunces (headings) and Jost (body), loaded from Google Fonts
  in each page's `<head>`.
- **JS:** `main.js` loads on every page, so each feature lives in its own
  `(function(){ … })();` block that returns early if its element isn't on the page.

### Page frame (identical on every page)

- **Offer banner** `<a class="offer-banner">` sits first in `<body>`, above the header. It
  scrolls away; it isn't fixed.
  - Home and Weddings: "Founding offer", linking to `weddings.html#offer` / `#offer`.
  - Business: "Launch offer", linking to `#offer`.
- **Header** `header.site-header` is `position: sticky`, so it pins to the top once the banner
  has scrolled off. The hero is pulled up 79px underneath it with
  `.site-header + main > .hero:first-child` so the photo shows through the translucent header.
  `html { scroll-padding-top: 79px }` makes in-page links land just below it. If the header
  height changes, update all three 79px values.
- **Nav** order: Home · Weddings · Business · My story · Gallery · Get in touch (`.btn-nav`).
  The current page's link has `aria-current="page"`.
  - On Home, links are `#top`, `#about`, `#gallery`, `#contact`.
  - On other pages, they're `index.html#…`.
- **Mobile menu:** `<button class="nav-toggle">` before `<nav id="main-nav">`. At 992px and
  below, `main.js` toggles `.nav-open` on the header and keeps `aria-expanded` in sync.
- **`<main>`** wraps everything between the header and footer.
- **Footer:** the same copy and links on every page.
- **Contact links pre-select the form.** `index.html?enquiry=wedding#contact` or
  `?enquiry=business#contact` picks that option in "What are you planning?". Every contact
  link on Weddings uses `wedding`, and every contact link on Business uses `business`. Without
  it, the dropdown starts on "Choose one", which must be changed before sending. Option values
  are `wedding`, `celebration`, `business` and `other`.

### Shared components (all in `styles.css`)

| Component | Markup | Used on |
|---|---|---|
| Short hero | `section.hero.hero-short` | Weddings, Business |
| Offer panel (soft pink) | `section.offer-section > .offer-panel` | Weddings, Business `#offer` |
| Highlights strip | `.trust-strip > ul.trust-inner > li` | Home |
| Story / photo split | `.story-grid` (add `.photo-left` to flip) | Home, Weddings |
| Dark "why" band | `section.why-faux` with `.why-points` (add `.two-col` for a 2×2 grid without a photo) | Home, Business |
| Numbered steps | `ol.process-grid > li.process-step` (add `.four` for four steps) | Home, Business |
| Service cards | `.service-grid > article.service-card` | Business |
| Price list | `ul.price-list > li.price-row` (thumb, item, price) | Weddings add-ons |
| FAQ accordion | `.faq-list > details.faq-item > summary > h3` + `.faq-a` | Weddings, Business |
| Closing band | `section.cta-band` | Weddings, Business |
| Photo placeholder | `span.photo-placeholder` ("Photo to come" + size) | Weddings, Business |

- **FAQ accordion:** uses the browser's own `<details>`/`<summary>`. Keyboard (Tab, Enter/Space)
  and screen-reader support are built in, and it needs no JavaScript.
- **Photo placeholders:** swap each `<span class="photo-placeholder">` for an `<img>`, with
  width, height, alt and `loading="lazy"`, when the photo arrives.
- **Lightbox** (weddings only): each `.sig-tile` button opens its own photo. Add a second
  photo with `data-extra-src` and `data-extra-alt` (the floral arch has one). The large image
  is created by `main.js` when it opens, so there is never an empty `<img>` in the page.

## Next steps

Visible to visitors — fix before launch:
1. **The enquiry form doesn't send anything.** It shows "Thank you! I'll be in touch within 24
   hours." but the message goes nowhere. It needs a real form handler. The inputs already have
   `name` attributes: `name`, `email`, `planning`, `date`, `venue`, `ideas`.
2. **Eight photo placeholders** need photos:
   - **Weddings add-ons,** shown at 80×80, supply at least 160×160 px square: extra table
     centrepiece, statement plinth arrangement, aisle arrangement, moving pieces from ceremony
     to reception.
   - **Business service cards,** 16:11 landscape, supply at least 1200×825 px: monthly flower
     subscription, seasonal subscription, permanent installations, event flowers.
3. **A wording point for the owner** (currently used as written). The Business closing section
   says "I'll be in touch within 24 hours to arrange a free visit" and its buttons say "Book a
   free visit". The Pricing and FAQ copy say visits are free only across Worthing, Brighton and
   surrounding areas.

Clean-up:

4. **Colour contrast.** Rose italic headings on the paper background are about 2.8:1, below
   the 3:1 accessibility minimum for large text (on white they just pass). This is a
   pre-existing brand choice; consider a slightly deeper rose for heading text.
5. `white-roses-closeup.jpg` ("The look") is only 900px wide, so it's a little soft on retina
   tablets. Use a larger original if one exists.
6. Optional: switch photos to WebP for about 25–30% less weight. Use `brew install webp`,
   then `cwebp -q 82 -metadata icc` to keep the colour profile. Serve WebP directly with no
   `<picture>` fallback: the site already serves a WebP with no fallback and every current
   browser supports it.
7. The share images (`images/social/`) are plain photo crops. Consider designing branded
   versions with the logo.
8. The Google Fonts URL requests Fraunces' SOFT axis, which the site never uses.
9. `wedding-reception-hollyclark.webp` (Weddings hero, Home card) is by Holly Clark
   Photography. Check permission and add a credit.
10. Nav and footer links have no visible `:focus-visible` style beyond the browser default.
    Add one in the brand colours, like the menu button's grape outline.
