import type { Localized } from '@/i18n';
import type { ServiceSlug } from './services';

export interface ImageAsset {
  /** Path under /public, e.g. /images/work/anar/home.webp — supply width/height to avoid layout shift */
  src: string;
  alt: Localized;
  width: number;
  height: number;
}

/** Which abstract mock-up to draw while no real screenshot exists. */
export type MockKind = 'restaurant' | 'clinic' | 'salon' | 'shop';

export interface CaseStudy {
  slug: string;
  /** true = invented placeholder. Never publish sample content as real work. */
  sample?: boolean;
  client: Localized;
  industry: Localized;
  location: Localized;
  year: string;
  services: ServiceSlug[];
  /** Card description (one or two sentences) */
  summary: Localized;
  /** One-line result for the card. Leave undefined until there is a real, measured result. */
  result?: Localized;
  url?: string;
  cover?: ImageAsset;
  /** Extra screenshots for the case study page */
  gallery?: ImageAsset[];
  mobile?: ImageAsset;
  mock: { kind: MockKind; bg: string; accent: string };
  challenge: Localized;
  approach: Localized<string[]>;
  seoWork?: Localized<string[]>;
  /** Real, measured results only. Empty until known. */
  results: Localized<{ value: string; label: string }[]>;
  testimonialId?: string;
}

// SAMPLE CONTENT — every entry below is a placeholder. Replace with real projects before launch.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'anar-kitchen',
    sample: true,
    client: { fa: 'آشپزخانه انار', en: 'Anar Kitchen' },
    industry: { fa: 'رستوران', en: 'Restaurant' },
    location: { fa: 'لندن', en: 'London' },
    year: '2026',
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'یه سایت دو زبانه برای یه رستوران خانوادگی؛ منو، رزرو و مسیر، همه روی موبایل و توی چند ثانیه.',
      en: 'A bilingual site for a family restaurant: menu, bookings and directions, all on mobile in seconds.',
    },
    mock: { kind: 'restaurant', bg: '#F3ECE6', accent: '#8C3B2E' },
    challenge: {
      fa: 'بیشتر مشتری‌ها از اینستاگرام و نقشه گوگل می‌اومدن، ولی منو فقط یه PDF بود و رزرو تلفنی. مشتری‌های انگلیسی‌زبان هم نمی‌فهمیدن هر غذا چیه.',
      en: 'Most customers arrived from Instagram and Google Maps, but the menu was a PDF and bookings were phone-only. English-speaking guests struggled to understand the dishes.',
    },
    approach: {
      fa: ['منوی قابل‌جستجو با توضیح کوتاه هر غذا به دو زبان', 'دکمه رزرو و مسیر، همیشه در دسترس روی موبایل', 'عکاسی ساده و واقعی از غذاها به‌جای عکس‌های استوک'],
      en: ['A searchable menu with short descriptions in both languages', 'Booking and directions always within reach on mobile', 'Simple, honest food photography instead of stock images'],
    },
    seoWork: {
      fa: ['بهینه‌سازی کامل Google Business Profile', 'دیتای ساختاریافته منو و رستوران'],
      en: ['Full Google Business Profile optimisation', 'Restaurant and menu structured data'],
    },
    results: { fa: [], en: [] },
    testimonialId: 'sample-1',
  },
  {
    slug: 'nava-dental',
    sample: true,
    client: { fa: 'کلینیک دندان‌پزشکی نوا', en: 'Nava Dental' },
    industry: { fa: 'کلینیک دندان‌پزشکی', en: 'Dental clinic' },
    location: { fa: 'منچستر', en: 'Manchester' },
    year: '2026',
    services: ['website-redesign', 'seo'],
    summary: {
      fa: 'بازطراحی یه سایت قدیمی، با حفظ رتبه‌های قبلی و صفحه‌های تازه برای هر خدمت.',
      en: 'Redesigning an ageing site while keeping its rankings, with a clear page for every treatment.',
    },
    mock: { kind: 'clinic', bg: '#E9EFF1', accent: '#2F5D73' },
    challenge: {
      fa: 'سایت ده ساله بود، روی موبایل به‌هم می‌ریخت و همه خدمات توی یه صفحه شلوغ جمع شده بودن.',
      en: 'The site was ten years old, broke on mobile, and every treatment was crammed onto one busy page.',
    },
    approach: {
      fa: ['نقشه کامل ریدایرکت قبل از هر تغییر', 'یه صفحه مشخص برای هر خدمت', 'لحن آرام و قابل‌اعتماد، بدون اصطلاحات پیچیده پزشکی'],
      en: ['A full redirect map before any changes', 'A dedicated page for each treatment', 'A calm, trustworthy tone without heavy medical jargon'],
    },
    seoWork: {
      fa: ['تحقیق کلمات کلیدی فارسی و انگلیسی', 'بهینه‌سازی فنی و سرعت'],
      en: ['Persian and English keyword research', 'Technical and speed optimisation'],
    },
    results: { fa: [], en: [] },
  },
  {
    slug: 'mahi-salon',
    sample: true,
    client: { fa: 'سالن ماهی', en: 'Mahi Salon' },
    industry: { fa: 'سالن زیبایی', en: 'Beauty salon' },
    location: { fa: 'بیرمنگام', en: 'Birmingham' },
    year: '2026',
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'یه سایت سبک و تمیز که نمونه‌کارها رو نشون می‌ده و نوبت گرفتن رو ساده می‌کنه.',
      en: 'A light, clean site that shows the work and makes booking simple.',
    },
    mock: { kind: 'salon', bg: '#F4EEEA', accent: '#9C7A66' },
    challenge: {
      fa: 'نمونه‌کارها فقط توی اینستاگرام بود و نوبت‌ها از طریق دایرکت گرفته می‌شد.',
      en: 'The portfolio lived only on Instagram and appointments were taken through DMs.',
    },
    approach: {
      fa: ['گالری نمونه‌کار با بارگذاری سریع', 'صفحه خدمات با قیمت روشن', 'اتصال به سیستم نوبت‌دهی'],
      en: ['A fast-loading portfolio gallery', 'A services page with clear prices', 'Connection to the booking system'],
    },
    results: { fa: [], en: [] },
    testimonialId: 'sample-2',
  },
  {
    slug: 'zarin-studio',
    sample: true,
    client: { fa: 'استودیو زرین', en: 'Zarin Studio' },
    industry: { fa: 'جواهرات دست‌ساز', en: 'Handmade jewellery' },
    location: { fa: 'فروش آنلاین در بریتانیا', en: 'Online, UK-wide' },
    year: '2026',
    services: ['ecommerce', 'seo'],
    summary: {
      fa: 'فروشگاهی که حس دست‌ساز بودن محصول‌ها رو نگه می‌داره و خرید رو ساده می‌کنه.',
      en: 'A shop that keeps the handmade feel of the products and makes buying simple.',
    },
    mock: { kind: 'shop', bg: '#F1EFEA', accent: '#1F2124' },
    challenge: {
      fa: 'فروش فقط از دایرکت اینستاگرام بود و هر سفارش کلی پیام‌بازی داشت.',
      en: 'Every sale happened in Instagram DMs, with a long back-and-forth for each order.',
    },
    approach: {
      fa: ['فروشگاه Shopify با طراحی اختصاصی', 'صفحه محصول با داستان هر قطعه', 'تنظیم ارسال و پرداخت امن'],
      en: ['A custom-designed Shopify store', 'Product pages that tell each piece’s story', 'Shipping and secure payments set up'],
    },
    results: { fa: [], en: [] },
  },
];

export const getCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
