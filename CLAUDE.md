# Bonny Forever — website

Static website for Bonny Forever Floral Design (real-touch faux flower hire, West Sussex),
run by Nina. Built and maintained by Adam (web designer). Hand-coded HTML, CSS and JS:
no build step, no framework, no npm.

## Current status (15 Nov 2026)

- **Live preview:** https://bonny-forever.vercel.app, deployed from `main`. Everything below is
  merged and live there. There are no other branches.
- **Not launched yet.** The real domain isn't connected, and the pre-launch checklist below is
  still open.
- **History** (key commits on `main`):
  - `670108e` The original export from another AI tool: single files with base64 images and
    inline CSS/JS. Kept untouched for reference.
  - `a1e6e81` Restructured into `site/` with separate CSS/JS/images; `website.html` became
    `index.html`.
  - `03eb6fe` Mobile menu and fixed dead links.
  - `b67872c` Images optimised, plus favicon and share tags.
  - `66a7988` to `5b90caa` The content update from the owner's brief (`docs/content-brief.md`):
    Home, Weddings, Business rebuilt.
  - `91c4c81`, `aaa6ec2` The Bonny Signature package became 5 cards. A welcome board was
    added; aisle markers are an add-on, not part of the package.
  - `4265ed7` to `1512ebf` Welcome board photos in. The add-ons became photo cards, with the
    aisle arrangement photos in. The lightbox keeps keyboard focus inside while it's open.
  - `b319260` to `7af65f9` New floral arch photo (`floral-arch-ivory-roses.jpg` replaced
    `floral-arch-side.jpg`); its lightbox now shows just that photo. The add-ons became 3
    cards with photos, and "Moving pieces" a line beneath them.
  - `484ae8a`, `4b0d81e` New Home hero photo (`pink-heather-moorland.jpg` replaced
    `centrepiece-peach-roses.jpg`, which stays in the Home gallery). The Home share image
    now matches it.

## Pre-launch checklist (all open)

1. **Connect the enquiry form.** It shows "Thank you! I'll be in touch within 24 hours." but
   sends nothing. It needs a real form handler (ask Adam before choosing or adding a
   third-party service). The inputs already have `name` attributes: `name`, `email`,
   `planning`, `date`, `venue`, `ideas`.
2. **Replace the 4 photo placeholders,** all on Business. Weddings has none left.
   - **Business service cards (4), 16:11 landscape, at least 1200×825 px:** monthly flower
     subscription, seasonal subscription, permanent installations, event flowers.

   How to swap them in is under "Photo placeholders" in "Shared components" below.
3. **Confirm the package price.** The package gained a welcome board, but the price is
   unchanged pending Nina's confirmation: £495, or £395 with the founding offer. If it
   changes, update every place listed under "Where prices and offers appear".
4. **Confirm the launch domain.** The share tags (`og:url`, `og:image`) need absolute URLs and
   assume `https://bonnyforever.co.uk`. If the live address differs, find and replace that
   string in the three pages. Then connect the domain in Vercel.
5. **Free-visit wording (Nina to decide; used as written for now).**
   - The Business closing section says "I'll be in touch within 24 hours to arrange a free
     visit", and its buttons say "Book a free visit".
   - Pricing and the FAQ say visits are free only across Worthing, Brighton and surrounding
     areas.
6. **Repo visibility.** `adamwallacedesign/bonny-forever` is **public** (Adam's choice when it
   was created). Anyone can see:
   - the full history, including the original export;
   - the client's design-system document (with its critique of her logo);
   - full-size originals, including Holly Clark's photo;
   - the owner's brief and this file;
   - Adam's personal email address on every commit.

   Decide with Nina whether to make it private before launch (Vercel works the same with a
   private repo). Making it private later doesn't undo anything already seen or copied.
7. **Replace the wedding reception placeholder photo (`wedding-reception-hollyclark.webp`)
   before launch.** It's one file (2048×1463) used in three places. Supply one landscape
   photo (3:2 or 4:3), at least 2880px wide, and make all three from it:
   - **Weddings hero** (`weddings.html`, behind the H1). This needs the most pixels.
     - It fills the screen width and is about 800px tall, so its shape changes a lot: 1440×796
       on a 1440px laptop, 2560×796 on a large monitor, roughly 4:3 on tablets, and tall and
       narrow on phones (390×781).
     - Keep the subject in the centre. Phones show only the middle third of the photo's
       width, and wide screens only the middle half of its height.
     - The heading and button sit on the left over a dark overlay, so a calm area there
       reads best.
     - Make the web copy about 2400–2880px wide (the current one is 2048).
   - **Home card "Weddings and celebrations"** (`index.html`, "What are you planning?").
     - It uses the same file as the hero, cropped to 16:10 from the centre.
     - It's shown at up to 550×344 (1100×688 on retina screens), so the hero's file covers
       it.
   - **Weddings share image** (`images/social/share-weddings.jpg`). This is what appears
     when the Weddings page is shared in messages or on social media.
     - It's a separate file, exactly 1200×630 (1.91:1), cropped from the new photo, at JPEG
       quality 85.
   - **When it's in:**
     - Name the file after what's in it, and update the `src` in both pages.
     - Write new alt text for both pages (they currently share the same alt) and for
       `og:image:alt` in `weddings.html`.
     - Remove the old web copy from `site/images/`. Its original stays in `originals/`.

## Folder structure

```
site/                  ← THE WEBSITE. Only this folder gets deployed.
  index.html             Home
  weddings.html          Weddings (Bonny Signature package, add-ons, FAQ, photo lightbox)
  commercial.html        Business. The nav says "Business"; the file name stays commercial.html.
  css/styles.css         Shared by every page: layout, header, footer and all shared components
  css/weddings.css       weddings.html only: package cards, "The look" layout, add-on cards, lightbox
  js/main.js             Every page: mobile menu, enquiry form, ?enquiry= pre-select, lightbox
  images/                All site photos and the logo, optimised for the web
  images/social/         1200×630 share images used by og:image (share-home/-weddings/-commercial)
  favicon.ico            16/32/48px, cut from the logo's flower emblem
  apple-touch-icon.png   180px home-screen icon (emblem on paper background)
docs/content-brief.md  ← The owner's content brief: the source of truth for all wording. Not deployed.
originals/             ← Full-quality originals of every site image. Not deployed.
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

### Where prices and offers appear (update all of them together)

- **Package £495:**
  - Weddings: the package price line, the offer panel ("£395 instead of £495"), and the meta
    description and `og:description` ("£495 for the day").
  - Home: the "Weddings and celebrations" card ("from £495").
  - The brief.
- **Founding offer (£100 off for the first three couples):**
  - The offer banner on Home and Weddings.
  - The Weddings `#offer` panel.
- **Launch offer (half price on the first month for the first three businesses):**
  - The Business banner and the Business `#offer` panel.
  - The Home "Flowers for your business" card.
- **Business subscriptions "from £50 a month":**
  - The Home business card.
  - Business Pricing.
  - The Business meta description and `og:description`.
- **Other prices:** bespoke "from £695" (Weddings heading and text), the add-on prices
  (Weddings add-on cards), and the £50 for moving pieces (the line beneath the add-on cards,
  and the FAQ).
- **Package contents** appear in:
  - the Weddings package cards;
  - the Weddings meta description and `og:description` ("arch, centrepieces, top table runner,
    plinths and welcome board");
  - the brief.

## Deploying and workflow

- **GitHub:** `adamwallacedesign/bonny-forever`. `main` is production and goes live on
  bonny-forever.vercel.app on every push.
- **Adam's review flow:**
  1. Do the work on a new branch, committing per page or per change.
  2. Push the branch. Vercel builds a preview, and Adam reviews it in the Vercel dashboard
     under the project's Deployments.
  3. When Adam approves, merge into `main` (fast-forward), push, and delete the branch
     locally and on GitHub.
  4. Ask before merging to `main` or pushing anything else.
- **Vercel settings:**
  - Root Directory is `site`, so only `site/` is deployed. `docs/`, `originals/`,
    `design-system/` and `CLAUDE.md` return 404 on the live site, and must stay that way.
  - There's no build command; Vercel serves the files as they are.
  - "Skip deployments when there are no changes to the root directory" is switched on, but a
    push that only changed CLAUDE.md (15 Nov 2026) still produced a deployment. That's
    harmless, because the site content is unchanged, but don't rely on docs-only pushes being
    skipped.
- **Confirming a deploy without Vercel access:** Vercel reports each build to GitHub.
  - `gh api repos/adamwallacedesign/bonny-forever/commits/<sha>/status` shows the Vercel
    state ("success" means built) and a link.
  - `gh api "repos/adamwallacedesign/bonny-forever/deployments?sha=<sha>"` shows whether it was
    Production or Preview.
  - Then `curl` the live pages to check the new content is served, and that the private paths
    above still 404.

## Preview locally

```
cd site
python3 -m http.server 8000
```

Then open http://localhost:8000 and press Ctrl+C in the terminal to stop.
For the design doc, run the same command from `design-system/`.

## Writing and copy

- **Use the owner's copy exactly** (`docs/content-brief.md`). Don't reword, shorten or add
  marketing language. British English (colour, centrepiece, personalise). If Nina's wording
  changes, update the brief too.
- **First person, as Nina** ("I", "me", "my"). "We" only ever means Nina and the customer
  ("we'll plan timings together"), never a team.
- **Never bring back:** "Sustainable", "zero waste", "single-use", "circular rental",
  "Zero maintenance", "Uncompromising beauty", "Effortless elegance", "B2B",
  "within 1 hour" / "within 2 hours", "our team", "West Sussex team".
- **Button labels come from the brief.** For example "Get in touch", "Check my date",
  "Book a free visit", "Send my message". Don't invent new ones for the same action.
- **Placeholders the owner hasn't supplied** (a price, a quantity, a photo) get a clear visible
  placeholder and are listed for Adam. Never invent them.
- **One H1 per page** (the hero). Section headings are H2; card, step and FAQ titles are H3.
- **Headings have one italic phrase** in rose (wisteria on dark bands, grape on the pink offer
  panel), marked with `<em>`. That's the brand's styling rule. The words never change.
- Typographic apostrophes and quotes (`&rsquo;`, `&ldquo;`) as used throughout the site.
- **Contact details:** email `hello@bonnyforever.co.uk` (plain `mailto:` links; never Cloudflare
  `/cdn-cgi/` email protection). Instagram `@bonnyforeverflorals`, linked to
  https://instagram.com/bonnyforeverflorals.

## Conventions

- **Filenames:** lowercase-kebab-case. Images are named by what is in them
  (`centrepiece-peach-roses.jpg`), not by the page they're on. The exception is the share
  images in `images/social/`, which are per page. One file per photo: don't add second copies
  at other sizes.
- **No base64 / data-URI images.** Every image is a file in `site/images/`.
- **Adding or replacing a photo:**
  1. Put the full-quality original in `originals/`.
  2. Make the web copy no wider than 2× its largest displayed width (tablets at 768–820px
     show single-column photos about 750px wide, so 1500px is usually right), at JPEG
     quality 85.
  3. Keep the colour profile. Many photos are Display P3 (iPhone). A tool that drops the
     profile makes oranges and pinks look duller on Apple screens. See "Working notes" for
     how the current images were encoded.
  4. Lightbox photos (weddings `button.sig-tile` and `button.addon-photo`) display at their
     natural pixel size on big screens (up to 92% of the window's width and 88% of its
     height), so don't shrink those below their current dimensions (about 1000px).
- **Every `<img>`:**
  - `width` and `height` set to its real pixel size, which prevents layout shift.
    `img { height: auto; }` in `styles.css` stops the height attribute fighting CSS that only
    sets a width.
  - `loading="lazy"` on everything except the logo and the hero, or anything else visible in
    the first screen on any device.
- **Alt text:** every `<img>` needs meaningful alt text. Never use `alt=""`: the owner checks
  for empty alts. On the Home gallery, the visible caption doubles as the alt text.
- **Relative paths only** (`images/…`, `css/…`, `index.html#contact`), with no leading slash.
- **CSS:**
  - Everything shared lives in `styles.css`. Only weddings-specific pieces live in
    `weddings.css`. No inline `style=""` attributes; there are none now.
  - Brand colours are variables in `:root` of `styles.css` (`--grape`, `--grape-dark`, `--ink`,
    `--rose`, `--rose-tint`, `--wisteria`, `--sage`, `--paper`).
  - Fonts are Fraunces (headings) and Jost (body), loaded from Google Fonts in each page's
    `<head>`.
- **Breakpoints:**
  - **992px:** nav becomes the menu button, and most grids stack.
  - **768px:** the Home explore cards stack.
  - **720px:** the weddings package grid and add-on cards become 2 columns, with an odd last
    card full width.
  - **560px:** small-phone tweaks (highlights, banner text, footer, Business grids, compact
    package and add-on cards).
- **JS:** `main.js` loads on every page, so each feature lives in its own
  `(function(){ … })();` block that returns early if its element isn't on the page.

### Page frame (identical on every page)

- **Offer banner** `<a class="offer-banner">` sits first in `<body>`, above the header. It
  scrolls away; it isn't fixed.
  - Home and Weddings: "Founding offer", linking to `weddings.html#offer` / `#offer`.
  - Business: "Launch offer", linking to `#offer`.
- **Header** `header.site-header` is `position: sticky`, so it pins to the top once the banner
  has scrolled off.
  - The hero is pulled up 79px underneath it with `.site-header + main > .hero:first-child`,
    so the photo shows through the translucent header.
  - `html { scroll-padding-top: 79px }` makes in-page links land just below it.
  - If the header height changes, update all three 79px values.
- **Nav** order: Home · Weddings · Business · My story · Gallery · Get in touch (`.btn-nav`).
  The current page's link has `aria-current="page"`.
  - On Home, links are `#top`, `#about`, `#gallery`, `#contact`.
  - On other pages, they're `index.html#…`.
- **Mobile menu:** `<button class="nav-toggle">` before `<nav id="main-nav">`. At 992px and
  below, `main.js` toggles `.nav-open` on the header and keeps `aria-expanded` in sync. It
  closes on Escape, on a link tap, on a tap outside, and on resize.
- **`<main>`** wraps everything between the header and footer.
- **Footer:** the same copy and links on every page.
- **Contact links pre-select the form.** `index.html?enquiry=wedding#contact` or
  `?enquiry=business#contact` picks that option in "What are you planning?".
  - Every contact link on Weddings (nav, buttons, footer) uses `wedding`, and every one on
    Business uses `business`.
  - Without it, the dropdown starts on "Choose one", which is required, so it must be changed
    before sending.
  - Option values are `wedding`, `celebration`, `business` and `other`.

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
| FAQ accordion | `.faq-list > details.faq-item > summary > h3` + `.faq-a` | Weddings, Business |
| Closing band | `section.cta-band` | Weddings, Business |
| Photo placeholder | `span.photo-placeholder` ("Photo to come" + size) | Business |

- **FAQ accordion:** uses the browser's own `<details>`/`<summary>`. Keyboard (Tab, Enter/Space)
  and screen-reader support are built in, and it needs no JavaScript.
- **Photo placeholders:** when the photo arrives, replace the `<span class="photo-placeholder">`
  with an `<img>` that has width, height, alt and `loading="lazy"`.
- **Hero photos** (`.hero-bg img`): `object-fit: cover` under a dark gradient overlay, and
  never `loading="lazy"` (they're on the first screen).
  - **Home:** `pink-heather-moorland.jpg` (1774×887), behind the full-screen hero (94% of the
    window height).
    - Laptops and big screens show 85–95% of its width. Tablets (820px) show only the middle
      37%, and phones (390px) only the middle quarter.
    - The default centred crop is deliberate. Shifting it right puts the sharp heather
      sprigs behind the hero text on phones and makes the paragraph harder to read.
  - **Weddings:** `wedding-reception-hollyclark.webp`, the short hero, to be replaced before
    launch (pre-launch checklist item 7).
  - **The Home share image matches the Home hero.** `images/social/share-home.jpg` is a
    1200×630 crop of `pink-heather-moorland.jpg`, trimmed 84px from the left so the sharp
    heather on the right stays whole.
    - If the Home hero photo changes, ask Adam whether the share image should change too.
    - If it does, make a new 1200×630 crop at the same file name and update `og:image:alt`
      in `index.html`.
- **Lightbox** (weddings only): each package card (`button.sig-tile`) and add-on photo
  (`button.addon-photo`) opens its own photo.
  - **One photo is the default.** The lightbox shows the card's own `<img>` and hides the
    arrows and thumbnails. Most cards work this way, including the arch.
  - **To add a second photo to any card's lightbox** (the welcome board and aisle arrangement
    have one, so copy either):
    1. Put the original in `originals/`, and make a web copy in `site/images/` about 1000px
       wide (portrait photos can be taller), like the other lightbox photos. See "Adding or
       replacing a photo". It only appears in the lightbox, not on the page.
    2. On the card's `<button>` (`button.sig-tile` or `button.addon-photo`), add
       `data-extra-src="images/<file>.jpg"` and `data-extra-alt="<what the photo shows>"`.
    3. That's all: `main.js` then shows the arrows and two thumbnails. Test it with Enter,
       the arrow keys, Tab and Escape.
    - Only one extra photo is supported. Three or more would need a change to `open()` in
      `main.js` (ask Adam first).
  - The large image is created by `main.js` when it opens, so there is never an empty `<img>`
    in the page.
  - Focus moves to Close on open and back to the photo on close. Arrow keys and Escape work.
    Tab and Shift+Tab cycle through the lightbox's buttons and never reach the page behind.
- **The package grid** holds 5 cards, all with photos: arch, centrepieces, runner, plinths,
  welcome board. The arch photo is square; its 4:5 card crop trims only the outermost leaves.
  "Delivery, setup and collection" is the line beneath (`.sig-included`).
  - **Above 720px** it's a 6-column grid. The first three cards span 2 columns each, making a
    row of 3. Cards with `.sig-wide` (plinths, welcome board) span 3 each, making a row of 2 at
    half width, with 5:4 photos so both rows are about the same height. The plinth photo uses
    `.crop-high` (`object-position: 50% 30%`) to keep its spires in frame. The welcome board
    photo is portrait; `.crop-welcome` (`50% 35%`) keeps the "Welcome" lettering and the roses
    in frame.
  - **At 720px and below** it's 2 columns. An odd last card (the welcome board) spans the full
    width with a 5:4 photo, so there's no lone card beside an empty space.
- **Add-on cards** (`#add-ons`; weddings only, so the CSS is in `weddings.css`): 3 cards
  (extra table centrepiece, statement plinth arrangement, aisle arrangement) in
  `ul.addon-grid > li.addon-card`. Each holds `h3.addon-name`, `p.addon-price`, then the photo.
  - The photo comes last in the HTML, so screen readers hear the name and price first. CSS
    (`order: -1`) shows it first.
  - **Above 720px** they're 3 across, filling the width (photos about 357px square at 1440,
    231px at 820). **At 720px and below** it's 2 columns, and an odd last card (the aisle
    arrangement) spans the full width with a 5:4 photo, like the package grid.
  - Each photo is a `<button class="addon-photo">` holding the `<img>` and "View larger",
    with `aria-label="View larger: <name>"`. The aisle arrangement has a second photo.
  - **The centrepiece and plinth cards reuse the package photos** (`centrepiece-white-roses.jpg`,
    `statement-plinth-white.jpg`): the same files, not copies, with the same alt text. To
    give one its own photo, swap the `src`, `alt`, `width` and `height`. CSS crops the card
    photo, so supply one file about 1000–1200px, any shape; the lightbox shows all of it.
  - No add-on has a placeholder now. If one ever needs one again, use a
    `<span class="addon-photo">` (not a button, so `main.js` skips it) holding the
    placeholder, and add back `.addon-photo .photo-placeholder{width:100%;height:100%;border-radius:inherit}`.
  - **"Moving pieces from your ceremony to your reception"** has no photo. It's a line
    beneath the cards (`p.addon-line`), sharing the style of "Delivery, setup and collection"
    (`.sig-included`), with its price in `.addon-line-price` on the right.

## Working notes (for Claude)

- **Adam's preferences:**
  - Ask before major changes, installs, third-party services or anything outward-facing.
  - Explain in plain, step-by-step terms.
  - Show evidence (screenshots and checks) rather than assume.
- **Installed on Adam's Mac:**
  - Homebrew.
  - `gh`, logged in as `adamwallacedesign` over HTTPS, so `git push` works without prompts.
  - Google Chrome, used headless for screenshots and tests.
  - Node, and Python 3, but no PIL.
  - **Not** installed: the Vercel CLI, ImageMagick, cwebp.
  - The Vercel connector in Claude needs authorising via `/mcp` before Vercel can be used
    directly.
- **Testing approach used so far:**
  - Serve `site/` with `python3 -m http.server`.
  - Drive headless Chrome over the DevTools protocol from small Node scripts (Node 24 has
    WebSocket built in) for screenshots at 390, 820 and 1440px, link-clicking, keyboard tests
    and pixel comparisons.
  - Those scripts lived in the session scratchpad and are **not** in the repo. Rebuild them as
    needed, or ask Adam before adding a `tools/` folder.
- **Gotchas found while testing:**
  - Lazy images never load until they're scrolled into view, so scroll the page before
    checking images.
  - Navigating to the same page with only a different `#hash` fires no load event.
  - Chrome renders photos with small run-to-run differences (up to about 20 levels out of 255),
    so compare non-photo areas strictly and photo areas with tolerance.
  - The page scrolls smoothly, so after `focus()` or `scrollIntoView()` wait about a second
    before a screenshot. Or set `document.documentElement.style.scrollBehavior = 'auto'` in
    the test.
  - Navigating headless Chrome to the exact same URL again can hang waiting for the load
    event. Add a dummy query string (`weddings.html?w=390`).
  - A test script that crashes can leave headless Chrome holding its debugging port. Stop it
    with `pkill -f "remote-debugging-port=<port>"`.
  - macOS has no `timeout` command.
  - zsh treats `=====` specially in echo.
- **How the current images were encoded:**
  - `sips` can't write WebP, and its JPEGs barely shrink.
  - So photos were re-encoded in headless Chrome: draw onto a canvas created with
    `{colorSpace: 'display-p3'}` (or `'srgb'` for sRGB photos), then `toBlob('image/jpeg', 0.85)`.
    The colour profile is kept.
  - A re-encode was kept only if it saved at least 15%; otherwise the original file was used.
  - To resize as well (the aisle photos were about 3000px), use
    `createImageBitmap(img, sx, sy, sw, sh, {resizeWidth, resizeHeight, resizeQuality: 'high'})`
    and draw that onto the canvas.

## Later (clean-up, not blocking launch)

1. **Colour contrast.** Rose italic headings on the paper background are about 2.8:1, below
   the 3:1 accessibility minimum for large text (on white they just pass). This is a
   pre-existing brand choice; consider a slightly deeper rose for heading text.
2. `white-roses-closeup.jpg` ("The look") is only 900px wide, so it's a little soft on retina
   tablets. Use a larger original if one exists.
3. **The weddings meta description is 159 characters,** right at Google's limit, so "for the
   day." may occasionally be cut off in search results.
4. Optional: switch photos to WebP for about 25–30% less weight. Use `brew install webp`
   (ask first), then `cwebp -q 82 -metadata icc` to keep the colour profile. Serve WebP
   directly with no `<picture>` fallback: the site already serves a WebP with no fallback and
   every current browser supports it.
5. The share images (`images/social/`) are plain photo crops. Consider designing branded
   versions with the logo.
6. The Google Fonts URL requests Fraunces' SOFT axis, which the site never uses.
7. Nav and footer links have no visible `:focus-visible` style beyond the browser default.
   Add one in the brand colours, like the menu button's grape outline.
8. **The welcome board photos were supplied only 900px wide** (they look WhatsApp-compressed).
   The 5:4 card crop is 900×720, against the 1250×1000 asked for, so it's a little soft on
   retina desktops and tablets. Ask Nina for the originals straight from her phone, and swap
   them in at the same file names.
9. **The centrepiece and plinth add-ons reuse the package photos,** so the same two photos
   appear twice on the Weddings page. Their own shots would serve them better: for example,
   a single extra centrepiece on a guest table, and one plinth arrangement on its stand.
   See "Add-on cards" for how to swap them in.
10. **The Home hero photo is only 1774×887.** The hero fills the screen, so the photo is
    stretched about 1.5× on 2560px monitors, and it's a little soft on retina laptops and
    phones. A larger original (at least 2880px wide) would be sharper. Swap it in at the same
    file name, and update `width` and `height`.
