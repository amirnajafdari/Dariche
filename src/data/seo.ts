import type { Localized } from '@/i18n';
import type { ServiceSlug } from './services';

/**
 * SEO metadata for fixed pages. Service pages keep theirs in services.ts, posts in blog.ts.
 *
 * FINGLISH STRATEGY
 * Finglish (Persian written in Latin letters) is a search behaviour, not a site language.
 * There is no /finglish/ version and no Finglish hreflang. Instead, phrases are recorded here
 * and in blog posts (`seo.searchPhrases`) so they can be used deliberately in:
 *   - meta keywords and planning (rendered by Seo.astro)
 *   - FAQ answers and article copy where they read naturally
 *   - future landing pages (see locations.ts)
 * Never keyword-stuff them into visible copy.
 */
export const finglishPhrases: Partial<Record<ServiceSlug | 'home', string[]>> = {
  home: ['tarahi site', 'tarahi site dar UK', 'tarahi site irani', 'web designer irani uk'],
  'web-design': ['tarahi site', 'tarahi site irani', 'tarahi website england', 'tarahi site dar UK', 'web designer irani uk'],
  seo: ['seo irani', 'seo irani london', 'seo site irani'],
  'local-seo': ['google map irani', 'seo mahali', 'seo irani london'],
  ecommerce: ['forooshgah interneti', 'tarahi forooshgah online uk'],
  'website-redesign': ['baz tarahi site', 'tarahi site jadid'],
  'website-support': ['poshtibani site', 'negahdari website'],
};

export type PageKey = 'home' | 'work' | 'pricing' | 'about' | 'blog' | 'contact';

export const pageSeo: Record<PageKey, { title: Localized; description: Localized }> = {
  home: {
    title: {
      fa: 'دریچه | طراحی سایت و سئو برای بیزینس‌های ایرانی در بریتانیا',
      en: 'Daricheh | Web Design & SEO for Iranian-Owned Businesses in the UK',
    },
    description: {
      fa: 'استودیوی طراحی سایت و سئو برای بیزینس‌های ایرانی در بریتانیا. سایت‌های دو زبانه، سریع و حرفه‌ای که هم دیده می‌شن، هم مشتری میارن.',
      en: 'A small web design and SEO studio for Iranian-owned businesses across the UK. Fast, bilingual websites that get found and bring in customers.',
    },
  },
  work: {
    title: { fa: 'نمونه‌کارها | دریچه', en: 'Work | Daricheh' },
    description: {
      fa: 'چند تا از پروژه‌های طراحی سایت و سئوی دریچه برای بیزینس‌های ایرانی در بریتانیا.',
      en: 'Selected web design and SEO projects by Daricheh for Iranian-owned businesses in the UK.',
    },
  },
  pricing: {
    title: { fa: 'تعرفه طراحی سایت و سئو | دریچه', en: 'Web Design & SEO Pricing | Daricheh' },
    description: {
      fa: 'قیمت‌های شفاف طراحی سایت، سئو و پشتیبانی. سه بسته روشن، بدون «تماس بگیرید» و هزینه پنهان.',
      en: 'Clear pricing for web design, SEO and support. Three straightforward packages, no hidden costs.',
    },
  },
  about: {
    title: { fa: 'درباره دریچه | دو دوست، دو طراح', en: 'About Daricheh | Two friends, two designers' },
    description: {
      fa: 'دریچه از همکاری دو دوست شروع شد؛ دو طراح که در بریتانیا درس خوندن و برای بیزینس‌های ایرانی سایت می‌سازن.',
      en: 'Daricheh began as a collaboration between two friends — two UK-educated designers building websites for Iranian-owned businesses.',
    },
  },
  blog: {
    title: { fa: 'مقالات طراحی سایت، سئو و بیزینس آنلاین | دریچه', en: 'Journal: Web Design, SEO & Online Business | Daricheh' },
    description: {
      fa: 'نوشته‌های کوتاه و کاربردی درباره طراحی سایت، سئو، Google Maps و بیزینس آنلاین در بریتانیا.',
      en: 'Short, practical notes on web design, SEO, Google Maps and running a business online in the UK.',
    },
  },
  contact: {
    title: { fa: 'تماس با دریچه | بیا حرف بزنیم', en: "Contact Daricheh | Let's talk" },
    description: {
      fa: 'از طریق واتساپ، تلفن یا فرم تماس با دریچه در ارتباط باش. خیلی زود جواب می‌دیم.',
      en: 'Get in touch with Daricheh by WhatsApp, phone or the contact form. We reply quickly.',
    },
  },
};
