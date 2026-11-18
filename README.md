# Daricheh — daricheh.co.uk

Bilingual (Persian-first, English UK) studio site. Astro, static output, almost no JavaScript.

```bash
npm install
npm run dev        # http://localhost:4321/fa/
npm run build      # → dist/
npm run preview
node scripts/generate-assets.mjs   # regenerate favicons, logo.png, OG image
```

Deploys to Vercel as a static site (`vercel.json` redirects `/` → `/fa/`).

## Before launch

Everything marked `PLACEHOLDER` or `SAMPLE` in `src/data/` needs real content:

| What | Where |
| --- | --- |
| Phone, WhatsApp number, socials, legal name | `src/data/site.ts` |
| Contact form endpoint (Formspree, a Vercel function…) — until set, the form opens the visitor's email app | `site.formEndpoint` |
| Prices and package inclusions | `src/data/packages.ts` |
| Founder names, photos | `src/data/founders.ts` |
| Testimonials (placeholders — never invent quotes) | `src/data/testimonials.ts` |
| Blog posts (useful drafts, flagged sample) | `src/data/blog.ts` |
| Legal copy — have it reviewed | `legal` in `src/data/pages.ts` |
| Dana font files | `public/fonts/dana/README.txt` |

`site.showSampleContent = false` hides every sample item at once; sections with nothing real left disappear.

The portfolio contains 6 selected real projects from the OmniGrowth Studio case-studies page, with English and Persian copy and supplied screenshots in `public/images/work/`. All projects appear on both homepages and work indexes, with individual case-study pages included in the sitemap. Project dates and measured results are omitted where not supplied.

## Structure

```
src/
  data/        all content, bilingual ({ fa, en }) — one file per future CMS collection
  i18n/        language config, helpers, short UI strings
  components/  Header, MegaMenu, LanguageSwitcher, Hero, PageHero, SectionHeading,
               PrimaryButton, SecondaryButton, WhatsAppButton, ServiceFeature,
               CaseStudyCard, PricingCard, FounderCard, Testimonial, FAQAccordion,
               ContactForm, BlogCard, FinalCTA, Footer, ScreenMock …
    home/      homepage sections
    service/   ServicePage — the one template behind every service page
  layouts/     BaseLayout — head/SEO, header, footer, the small client script
  pages/[lang]/…  every route exists in /fa/ and /en/
```

Swapping to a CMS later means replacing the exports in `src/data/*` with fetches that return the same shapes.

## Notes

- **Headline emphasis:** wrap words in `*asterisks*` in data files to set them bold.
- **Service page variants:** `variant: 'frame' | 'split' | 'type'` per service changes the composition.
- **Images:** placeholders are CSS mock-ups (`ScreenMock`). Add `cover`/`gallery`/`mobile` (with width and height) to a case study and real images replace them automatically. Pre-size and compress to WebP/AVIF.
- **Finglish** is metadata only: `src/data/seo.ts` and `seo.searchPhrases` on posts. No Finglish pages, no Finglish hreflang.
- **City pages:** add entries to `src/data/locations.ts` (empty on purpose) only where there is real search demand → `/fa/web-design/london/`.
- **Booking:** set `site.booking = { enabled: true, url }` and "Book a call" buttons appear in the final CTA and on /contact/.
- **hreflang:** `fa`, `en-GB`, `x-default` → English (`site.xDefaultLang`). Untranslated posts get no alternates.
- **Analytics:** none installed. If you add any, update the cookie policy and add consent first.
