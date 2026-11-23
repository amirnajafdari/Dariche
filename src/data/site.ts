import type { Lang, Localized } from '@/i18n';

/**
 * Global site settings. Everything a CMS "settings" document would hold.
 * Values marked PLACEHOLDER must be replaced before launch.
 */
export const site = {
  name: { fa: 'دریچه', en: 'Daricheh' } satisfies Localized,
  legalName: 'Daricheh', // PLACEHOLDER — registered company name, e.g. "Daricheh Studio Ltd"
  url: 'https://daricheh.co.uk',
  description: {
    fa: 'طراحی سایت، سئو و رشد آنلاین برای بیزینس‌های ایرانی در بریتانیا.',
    en: 'Web design, SEO and online growth for Iranian-owned businesses across the UK.',
  } satisfies Localized,
  areaServed: 'GB',

  contact: {
    phoneDisplay: '(+44) 07428567080',
    phoneHref: '+447428567080',
    whatsappNumber: '447428567080',
    whatsappUrl: 'https://wa.me/447428567080',
    email: 'hello@daricheh.co.uk',
  },

  /** Pre-filled WhatsApp text. Keep it short; people edit it anyway. */
  whatsappGreeting: {
    fa: 'سلام، از سایت دریچه پیام می‌دم. یه سؤال درباره سایتم داشتم.',
    en: "Hi, I'm messaging from the Daricheh website. I have a question about my site.",
  } satisfies Localized,

  social: [
    // PLACEHOLDER handles — remove any you don't use.
    { name: 'Instagram', url: 'https://www.instagram.com/daricheh.co.uk' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/daricheh' },
  ],

  /**
   * Contact form delivery. Leave empty to fall back to a pre-filled email.
   * Works with Formspree, Basin, a Vercel/Netlify function, etc. — anything that accepts a JSON POST.
   */
  formEndpoint: '',

  /**
   * Booking is intentionally off. When a booking tool (Cal.com, Calendly, TidyCal…) is chosen,
   * set enabled: true and url — "Book a call" buttons then appear in the final CTA and on /contact/.
   */
  booking: { enabled: false, url: '' },

  /**
   * Sample case studies, testimonials and blog posts are flagged `sample: true` in their data files.
   * While this is true they render with a small "Sample" label. Set to false to hide all sample content;
   * sections with no real content left will disappear on their own.
   */
  showSampleContent: true,

  /**
   * Dana is a commercial font and is not bundled. Drop licensed .woff2 files into /public/fonts/dana/
   * (see the README there), then set this to true. Until then Persian falls back to Vazirmatn.
   */
  danaInstalled: false,

  /** hreflang x-default target. English serves visitors whose language matches neither version. */
  xDefaultLang: 'en' as Lang,

  ogImage: '/og/daricheh-default.png',

  /** Google Tag Manager container. Loaded on production builds only; empty string turns it off. */
  gtmId: 'GTM-WD9C5CNG',
};

/** Single central WhatsApp URL used across the entire website. */
export const WHATSAPP_URL = site.contact.whatsappUrl;

export const whatsappUrl = (_lang?: Lang, _text?: string) => WHATSAPP_URL;

export const phoneUrl = () => `tel:${site.contact.phoneHref}`;
export const emailUrl = () => `mailto:${site.contact.email}`;

/** Filter helper used by every list that may contain sample entries. */
export const visible = <T extends { sample?: boolean }>(items: T[]) =>
  site.showSampleContent ? items : items.filter((i) => !i.sample);
