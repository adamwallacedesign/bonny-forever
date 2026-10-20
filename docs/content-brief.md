# Bonny Forever website update: instructions for the web designer

## What this is

This brief asks you to update the wording and structure of the Bonny Forever Floral Design website. The live preview is at https://bonny-forever.vercel.app/ and has three pages: `index.html` (Home), `weddings.html` and `commercial.html`.

This update covers all three pages: **Home**, **Weddings** and **Business** (the file `commercial.html`).

## Part 1: Rules for this update

1. **Keep the current visual design.** Keep the fonts, colours, logo, spacing style, imagery style and overall look and feel. You're changing words and section structure, not the brand.
2. **Use the copy in this file exactly as written.** Don't reword, shorten, "improve" or add marketing language. Keep British English spelling (colour, centrepiece, personalise).
3. **Text in [square brackets] is an instruction to you, not text to publish.** For example, "[Button] Check my date" means a button labelled "Check my date".
4. **Bold lines in the copy are headings.** Use the heading level that fits the existing design. Each page needs exactly one H1, which is marked below.
5. **Remove old copy that isn't in this file.** In particular, remove these phrases wherever they appear across all three pages, including meta descriptions and footers:
   - "Sustainable", "Zero wedding floral waste", "zero single-use waste", "circular rental model"
   - "Zero maintenance"
   - "Uncompromising beauty", "Effortless elegance", "B2B"
   - "Free setup and styling within 2 hours", "within 1 hour"
   - "West Sussex team", "our team", "we" (the site is now written in the first person, as Nina)
6. **Keep the site responsive.** Every new or changed section must work on mobile.
7. **Don't invent anything.** If something you need isn't in this file (a price, a claim, a photo), leave a clear placeholder and list it in your summary at the end.

## Part 2: Changes that apply to every page

### Navigation (header)

Order: **Home · Weddings · Business · My story · Gallery**, followed by a highlighted **Get in touch** button.

- "Commercial" is renamed **"Business"** in the navigation. Keep the file name `commercial.html`.
- "Story" becomes **"My story"** and links to `index.html#about`.
- "Gallery" links to `index.html#gallery`.
- "Get in touch" links to `index.html#contact`.
- Remove "Sustainability" from the navigation.
- On `weddings.html` and `commercial.html`, all `#` links must point back to `index.html#...`. At the moment some of them don't work from those pages.

### Founding offer banner

Add a slim banner above the header on **Home** and **Weddings**, but not on Commercial:

> **Founding offer:** £100 off the Bonny Signature wedding package for my first three couples.

On Home, this links to `weddings.html#offer`. On Weddings, it links to `#offer`.

On **Business** (`commercial.html`), use this banner instead:

> **Launch offer:** half price on your first month for my first three businesses.

It links to `#offer` on that page.

### Footer (all three pages)

Replace the current footer text with:

> **Bonny Forever Floral Design**
> Real-touch faux flower hire for weddings, celebrations and businesses, styled with love in West Sussex.
>
> Email: hello@bonnyforever.co.uk
> Instagram: @bonnyforeverflorals
>
> Beautiful. Reusable. Forever.
>
> © 2026 Bonny Forever Floral Design

Footer links: Home, Weddings, Business, My story, Gallery, Get in touch. Use the same links on every page.

### Buttons

Use only the button labels given in this file. At the moment the site uses lots of different labels for the same action ("Enquire Now", "Enquire For Date", "Request Consultation", "Customise Your Order", "Send a Floral Enquiry", "Make an Enquiry", "Book a Commercial Walkthrough"). Replace them all.

### Meta and SEO

- Home `<title>`: **Bonny Forever Floral Design | Faux Flower Hire in West Sussex**
- Home meta description: **Real-touch faux flower hire for weddings, celebrations and businesses in West Sussex. Delivered, styled and collected by Nina.**
- Weddings `<title>`: **Wedding Flower Hire | Bonny Forever Floral Design**
- Weddings meta description: **The Bonny Signature wedding flower package: arch, centrepieces, top table runner and plinths, delivered, styled and collected. £495 for the day.**
- Business `<title>`: **Faux Flowers for Businesses | Bonny Forever Floral Design**
- Business meta description: **Real-touch faux flower subscriptions and installations for restaurants, bars, shops, salons and offices across Sussex, Surrey and Kent. From £50 a month.**
- Every image needs meaningful alt text. Some images currently have empty alt text.

## Part 3: Page-by-page changes

### HOME PAGE (`index.html`)

New section order. Sections are listed top to bottom; keep the current section `id`s where shown.

1. Founding offer banner (see Part 2)
2. Hero
3. Four highlights (replaces the current value badges)
4. "What are you planning?" (two cards)
5. My story (`id="about"`)
6. Why faux flowers? (`id="why-faux"`, replacing the old `#sustainability` section)
7. Gallery (`id="gallery"`)
8. How hiring works
9. Get in touch (`id="contact"`), including the enquiry form
10. Footer

#### 1. Hero

[Small heading above the H1] Faux flower hire in West Sussex

[H1] **Beautiful flowers for your wedding, your event or your business**

Real-touch faux flowers, hired, styled and collected by me, Nina. No wilting, no watering, and nothing thrown away after one day. Just lovely flowers, enjoyed again and again.

[Button 1, primary, links to weddings.html] Wedding flowers

[Button 2, secondary, links to commercial.html] Flowers for your business

#### 2. Four highlights

[Keep the current badge/icon style; replace the four items with these]

- Real-touch flowers that look and feel like the real thing
- Delivered, styled and collected for you
- Travel within an hour of West Sussex included
- No watering, no wilting, no fuss

#### 3. What are you planning?

**What are you planning?**

[Card 1]
**Weddings and celebrations**
From your ceremony arch to your top table, everything you need in one simple package, from £495.
[Button, links to weddings.html] See wedding flowers

[Card 2]
**Flowers for your business**
Whether you run a restaurant, bar, shop, salon or office, I have something perfect for you. Flower subscriptions from £50 a month, with half price on your first month for my first three businesses.
[Button, links to commercial.html] See business flowers

#### 4. My story (`id="about"`)

**Hello, I'm Nina**

Bonny Forever began with a simple thought: wedding flowers are so beautiful, and so often thrown away the very next day. I wanted to offer something just as lovely that could be enjoyed again and again.

The name comes from a place close to my heart. There's something about Scotland that keeps drawing me back, especially the Ardnamurchan peninsula. Just thinking about its white sandy beaches, rugged hills and wild sea views makes my heart feel giddy. "Bonny" is the Scots word for beautiful, and I wanted every arrangement to carry that same feeling: natural, timeless and a little bit magical.

I choose every stem by hand for how real it looks and how it moves, then style each piece myself. When you book with me, you're working with me from your first message to the moment I collect the last arrangement.

[Button, links to weddings.html] See my wedding package

#### 5. Why faux flowers? (`id="why-faux"`)

**Why faux flowers?**

Faux flowers have come a long way. Today's real-touch stems are soft, natural-looking and beautiful up close, and they bring some lovely benefits.

[Three points, keep the existing three-column layout]

**Enjoyed again and again**
My flowers go from one celebration to the next, rather than being thrown away after a single day.

**Lovely from morning to midnight**
They won't wilt in a warm marquee, droop under bright lights or fade before the first dance.

**No water, no mess**
There's nothing to water, no drips on tablecloths and no pollen to stain a dress.

#### 6. Gallery (`id="gallery"`)

**A few of my favourite pieces**

[Keep the four existing photos. Use these captions, which also work as alt text]

- Peach roses and soft greenery on a guest table
- A garden urn of warm orange and blush blooms
- A tall column of ivory roses
- Hydrangeas on a statement plinth

Follow along on Instagram for more: @bonnyforeverflorals [link to https://instagram.com/bonnyforeverflorals]

#### 7. How hiring works

**How hiring works**

[Three numbered steps, keep the existing step layout]

1. **Tell me what you need.** Send me your date and venue, or a little about your business, and I'll get back to you within 24 hours.
2. **Plan it together.** Choose your package and any extras, or the subscription that suits you. For weddings, a 25% deposit secures your date.
3. **Sit back and enjoy.** I deliver and style everything, then collect it after your celebration or come back to refresh it for your business.

#### 8. Get in touch (`id="contact"`)

**Let's chat**

Whether you're planning a wedding or looking for flowers for your business, I'd love to hear from you.

- Based in West Sussex. Travel within an hour is included, and I'm happy to go further
- Email: hello@bonnyforever.co.uk
- Instagram: @bonnyforeverflorals

[Enquiry form: keep the current form behaviour and submission method. Update the labels and options to these]

- Your name
- Your email
- What are you planning? [Dropdown options: Wedding / Another celebration / Flowers for my business / Something else]
- Your date, if you have one [date field, optional]
- Venue or location
- Tell me about your ideas [multi-line text]

[Submit button] Send my message

[Message shown after a successful send] Thank you! I'll be in touch within 24 hours.

[If someone arrives from a Weddings button, pre-select "Wedding" in the dropdown if this is simple to do. If someone arrives from a Business button, pre-select "Flowers for my business".]

---

### WEDDINGS PAGE (`weddings.html`)

New section order:

1. Founding offer banner (see Part 2)
2. Hero
3. Founding offer (`id="offer"`)
4. The Bonny Signature package (`id="package"`)
5. The look
6. Planning your day together
7. Need a little more? (add-ons, `id="add-ons"`)
8. Bespoke floral styling (`id="bespoke"`)
9. Questions couples often ask (`id="faq"`)
10. Closing call to action
11. Footer

Also on this page:

- **Remove the image carousel/lightbox that has an empty image.** If the lightbox is kept for other photos, make sure no empty slide can appear.
- Make the "View larger" / "View 2 photos" labels consistent: use **"View larger"** everywhere.
- Remove the heading "Our Wedding Collections" and the phrase "Choose the package that suits your day". There is only one package.

#### 1. Hero

[Small heading above the H1] Wedding flower hire

[H1] **Your wedding flowers, beautifully done, without the worry**

Real-touch faux flowers, styled by me, Nina, and collected once the celebrations are over. No wilting, no watering, no last-minute panics. Just lovely flowers, exactly where you want them.

[Button, links to index.html#contact] Check my date

#### 2. Founding offer (`id="offer"`)

[Make this stand out, for example as a soft coloured panel]

**Founding offer: £100 off for my first three couples**

I'm just starting out, and to celebrate, my first three bookings get £100 off the Bonny Signature package. That's £395 instead of £495. (Add-ons are charged at their usual price.)

#### 3. The Bonny Signature package (`id="package"`)

**The Bonny Signature package**

Everything you need to dress your ceremony and reception, all in one simple package.

**£495 for the day** [small text next to it: (introductory price)]

[Keep the existing photo cards for each item. Use these captions]

- 1 floral arch for your ceremony
- 5 table centrepieces
- 1 top table runner
- 2 statement plinth arrangements
- Delivery, setup and collection

Perfect for weddings, and just as lovely for christenings, anniversaries, birthdays and parties.

[Button, links to index.html#contact] Check my date

#### 4. The look

**The look**

Soft whites, warm creams and gentle ivories, woven through with lush green foliage. Timeless, romantic and calm, the collection sits beautifully in a country barn, a garden marquee or an elegant hotel, and looks just as lovely in your photos years from now.

#### 5. Planning your day together

**Planning your day together**

Every venue is different, so once you get in touch we'll have a chat about timings. I'll set everything up on the morning of your day and come back to collect it once the celebrations are over. If your venue is a little further away, there may be a small travel charge. I'll always tell you upfront, so there are no surprises.

#### 6. Need a little more? (`id="add-ons"`)

**Need a little more?**

Got a bigger guest list or a larger venue? You can add extra pieces to your package, all in the same soft whites, creams and greenery:

[Show as a simple price list: item on the left, price on the right]

| Add-on | Price |
|---|---|
| Extra table centrepiece (low arrangement, vase included) | £25 each |
| Statement plinth arrangement (stand included) | £50 each, or £80 for a pair |
| Aisle arrangement | £35 each |
| Moving pieces from your ceremony to your reception | £50 |

Just mention what you'd like when you get in touch, and I'll include it in your quote.

*Only need a few pieces? Everything above can be hired on its own too. Just send me a message and I'll put together a quote.*

[Button, links to index.html#contact] Add to my enquiry

[Photo placeholders: leave space for a small photo beside each add-on. Photos will be supplied later.]

#### 7. Bespoke floral styling (`id="bespoke"`)

**Bespoke floral styling, from £695**

Have a colour scheme of your own in mind? I'd love to create something just for you. With a bespoke design, I'll source flowers in your chosen colours and style them around your venue. Because each piece is chosen especially for your day, bespoke designs start from £695. Tell me what you're picturing, and we'll take it from there.

[Button, links to index.html#contact] Let's talk about your ideas

#### 8. Questions couples often ask (`id="faq"`)

**Questions couples often ask**

[Show as an accordion: the question is visible, and clicking it reveals the answer. It must work with a keyboard and on mobile.]

**How long is the hire?**
For the day of your event. I set up beforehand and collect everything afterwards, so you don't have to lift a finger.

**How far do you travel?**
I'm based in West Sussex, and travel within an hour is included. If your venue is further away, I'm very happy to come to you, and I'll let you know the travel cost before you book.

**Do you set up the night before?**
Usually I'll set everything up on the morning of your wedding and collect it at the end of the day. We'll plan timings together once I know your venue.

**Can you move the flowers from our ceremony to our reception?**
Yes, of course. I can move your arch, aisle arrangements or plinths to your reception space so you get the most from your flowers. This costs £50, and we'll plan the timing together so it all happens smoothly between the two.

**How do I secure my date?**
A 25% deposit secures your date, and the balance is due four weeks before your wedding. I'll send your full booking terms with your confirmation.

**Can I use the package for other events?**
Of course. It works beautifully for any celebration.

#### 9. Closing call to action

**Let's check your date**

Tell me your date and venue, and I'll be in touch within 24 hours.

[Button, links to index.html#contact] Send me a message

## Part 4: Business page (`commercial.html`)

Replace all of the page's current content with the sections below. The navigation label is "Business", but keep the file name `commercial.html`.

New section order:

1. Launch offer banner (see Part 2)
2. Hero
3. Launch offer (`id="offer"`)
4. Ways to work with me (`id="services"`)
5. Pricing
6. Why faux flowers for your business?
7. How it works (`id="how-it-works"`)
8. Questions businesses often ask (`id="faq"`)
9. Closing call to action
10. Footer

Also on this page:

- **Remove the wedding reception photo.** It's a wedding image on a business page. Keep the anthurium-and-roses crate photo in the hero.
- Remove all the old copy, including "B2B & Commercial Spaces", "Effortless elegance for boutique venues", "Zero maintenance. Maximum impact.", "Sussex & Surrey Coverage", "within 1 hour", "Book a Commercial Walkthrough" and "A circular approach".

#### 1. Hero

[Small heading above the H1] Flowers for your business

[H1] **Lovely flowers for your business, without the upkeep**

Whether you run a restaurant, bar, shop, salon or office, I have something perfect for you. Beautiful real-touch arrangements, designed for your space and kept looking lovely, with no watering, no wilting and no weekly flower bill.

[Button 1, primary, links to index.html#contact] Book a free visit

[Button 2, secondary, links to #how-it-works] See how it works

#### 2. Launch offer (`id="offer"`)

[Make this stand out, in the same style as the founding offer panel on the Weddings page]

**Half price on your first month for my first three businesses**

I'm just starting out, and to celebrate, my first three business customers get half price on the first month of any flower subscription.

#### 3. Ways to work with me (`id="services"`)

**Ways to work with me**

[Four cards, in a grid on desktop and stacked on mobile. Leave a photo space on each card; photos will be supplied later]

**Monthly flower subscription**
Your displays are swapped for a fresh new look every month. Perfect if you love a regular change, or want your space to follow the seasons, holidays and special occasions.

**Seasonal subscription**
Your displays are changed four times a year, for spring, summer, autumn and winter. A lovely, low-fuss way to keep things looking new all year round.

**Permanent installations**
A statement piece designed especially for your space, in faux or dried flowers. Think a window display, a floral ceiling or a show-stopping arch by your door. Ideal for shops and salons that want a signature look. It's yours to keep, and priced individually once I've seen your space.

**Event flowers**
Having a launch, an open day or a Christmas party? Hire flowers for a single event, delivered, styled and collected.

#### 4. Pricing

**Pricing**

Flower subscriptions start from £50 a month. Every space is different, so I'll pop in, chat about what you'd like and give you a clear price, with no obligation. Visits are free across Worthing, Brighton and surrounding areas.

#### 5. Why faux flowers for your business?

**Why faux flowers for your business?**

[Four points in the same style as the "Why faux flowers?" section on the Home page]

**Lovely every day**
No wilting by Wednesday, no dropped petals and no tired-looking vases.

**Nothing to look after**
No watering, no cloudy water and no pollen. I'll give everything a freshen-up whenever I visit.

**One simple cost**
No weekly flower bill and no last-minute dashes to the florist.

**Enjoyed again and again**
When your displays are swapped, they go on to brighten another space.

#### 6. How it works (`id="how-it-works"`)

**How it works**

[Four numbered steps, in the same style as "How hiring works" on the Home page]

1. **Get in touch.** Tell me a little about your business and your space.
2. **Free visit.** If you're in Worthing, Brighton or the surrounding areas, I'll pop in for free, look at your space and talk through ideas and budget. Further afield? Just ask.
3. **Your design and price.** I'll send you a design idea and a clear quote.
4. **I install and refresh.** I bring everything, set it up, and come back to refresh it on your schedule.

#### 7. Questions businesses often ask (`id="faq"`)

**Questions businesses often ask**

[Accordion, same style and behaviour as the Weddings FAQ]

**Do I need to look after the flowers?**
Hardly at all. There's no watering, and if they're somewhere busy, a light dust now and then keeps them looking their best. I'll freshen them up whenever I visit.

**Is there a minimum term?**
Both subscriptions start with a minimum of three months. With a monthly subscription, your flowers change every month, so that's three different looks. With a seasonal subscription, your flowers change once a season, so you'll enjoy one look for the whole three months before we move on to the next.

**Where do you cover?**
I'm based in West Sussex, and I work with businesses across Sussex, Surrey and Kent. Visits to see your space are free across Worthing, Brighton and surrounding areas.

**Can we change the look?**
Of course. Each refresh is a chance to try new colours or styles, and we can plan around your seasons, menus or brand.

**Do you work with dried flowers?**
Yes. For permanent installations, I work with both faux and dried flowers, depending on the look you'd like.

#### 8. Closing call to action

**Let's make your space bloom**

Tell me a little about your business, and I'll be in touch within 24 hours to arrange a free visit.

[Button, links to index.html#contact] Book a free visit

[When someone arrives at the contact form from any button on this page, pre-select "Flowers for my business" in the dropdown if this is simple to do.]

## Part 5: When you've finished

Reply with a short summary that lists:

- each page you changed
- anything you couldn't do, and why
- any placeholders you left (for example, missing photos)
- anything in this brief that conflicted with the existing site and how you handled it

Then check every page on a phone-sized screen and confirm that all buttons and navigation links work from every page.
