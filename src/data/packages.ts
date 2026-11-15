import type { Localized } from '@/i18n';

export type PackageId = 'first' | 'growth' | 'complete';

export type SpecKey = 'pages' | 'design' | 'seo' | 'bilingual' | 'revisions' | 'support' | 'integrations';

export interface Package {
  id: PackageId;
  name: Localized;
  /** PLACEHOLDER prices — GBP, numbers only. Update before launch. */
  price: number;
  priceNote: Localized;
  description: Localized;
  bestFor: Localized;
  /** Subtle highlight. Only one package should have this. */
  featured?: boolean;
  featuredLabel?: Localized;
  specs: Record<SpecKey, Localized>;
  /** Shown when the package is expanded on /pricing/ */
  included: Localized<string[]>;
}

export const specLabels: Record<SpecKey, Localized> = {
  pages: { fa: 'تعداد صفحه', en: 'Pages' },
  design: { fa: 'طراحی', en: 'Design' },
  seo: { fa: 'سئو', en: 'SEO set-up' },
  bilingual: { fa: 'دو زبانه', en: 'Bilingual' },
  revisions: { fa: 'دور اصلاح', en: 'Revisions' },
  support: { fa: 'پشتیبانی', en: 'Support' },
  integrations: { fa: 'اتصال‌ها', en: 'Integrations' },
};

// PLACEHOLDER — prices and inclusions are editable placeholders until final pricing is agreed.
export const packages: Package[] = [
  {
    id: 'first',
    name: { fa: 'دریچه اول', en: 'Daricheh First' },
    price: 950,
    priceNote: { fa: 'یک‌باره', en: 'one-off' },
    description: {
      fa: 'برای یه شروع درست. سایت کوچیک و تمیز، با همه چیزهای اصلی.',
      en: 'A proper start. A small, clean site with everything that matters.',
    },
    bestFor: {
      fa: 'بیزینس‌های تازه، کارهای خدماتی کوچیک، فریلنسرها',
      en: 'New businesses, small local services, freelancers',
    },
    specs: {
      pages: { fa: 'تا ۵ صفحه', en: 'Up to 5' },
      design: { fa: 'طراحی اختصاصی', en: 'Custom design' },
      seo: { fa: 'سئوی پایه', en: 'Foundations' },
      bilingual: { fa: 'به‌عنوان افزودنی', en: 'Add-on' },
      revisions: { fa: '۲ دور', en: '2 rounds' },
      support: { fa: '۱ ماه', en: '1 month' },
      integrations: { fa: 'واتساپ، فرم، نقشه', en: 'WhatsApp, form, map' },
    },
    included: {
      fa: ['طراحی اختصاصی موبایل و دسکتاپ', 'تا ۵ صفحه', 'فرم تماس و دکمه واتساپ', 'سئوی پایه و Search Console', 'سرعت بالا و هاستینگ امن', 'یک ماه پشتیبانی بعد از انتشار'],
      en: ['Custom mobile and desktop design', 'Up to 5 pages', 'Contact form and WhatsApp button', 'SEO foundations and Search Console', 'Fast, secure hosting', 'One month of support after launch'],
    },
  },
  {
    id: 'growth',
    name: { fa: 'دریچه رشد', en: 'Daricheh Growth' },
    price: 1950,
    priceNote: { fa: 'یک‌باره', en: 'one-off' },
    featured: true,
    featuredLabel: { fa: 'انتخاب بیشتر بیزینس‌ها', en: 'What most businesses choose' },
    description: {
      fa: 'برای بیزینسی که می‌خواد دیده بشه و ازش مشتری بگیره.',
      en: 'For businesses that want to be found, and win customers from it.',
    },
    bestFor: {
      fa: 'رستوران، سالن، کلینیک، دفترهای خدماتی',
      en: 'Restaurants, salons, clinics, professional services',
    },
    specs: {
      pages: { fa: 'تا ۱۲ صفحه', en: 'Up to 12' },
      design: { fa: 'طراحی اختصاصی + المان‌های برند', en: 'Custom + brand elements' },
      seo: { fa: 'سئوی کامل صفحات + سئو محلی', en: 'Full on-page + local SEO' },
      bilingual: { fa: 'فارسی و انگلیسی', en: 'Persian & English' },
      revisions: { fa: '۳ دور', en: '3 rounds' },
      support: { fa: '۳ ماه', en: '3 months' },
      integrations: { fa: 'رزرو، شبکه‌های اجتماعی، Google Business', en: 'Booking, social, Google Business' },
    },
    included: {
      fa: ['همه چیزهای دریچه اول', 'تا ۱۲ صفحه', 'سایت دو زبانه فارسی و انگلیسی', 'تحقیق کلمات کلیدی', 'راه‌اندازی Google Business Profile', 'نوشتن متن صفحات اصلی', 'سه ماه پشتیبانی'],
      en: ['Everything in Daricheh First', 'Up to 12 pages', 'Bilingual Persian and English site', 'Keyword research', 'Google Business Profile set-up', 'Copywriting for key pages', 'Three months of support'],
    },
  },
  {
    id: 'complete',
    name: { fa: 'دریچه کامل', en: 'Daricheh Complete' },
    price: 3450,
    priceNote: { fa: 'یک‌باره', en: 'one-off' },
    description: {
      fa: 'سایت کامل، دو زبانه و آماده برای رشد جدی؛ با فروشگاه یا امکانات اختصاصی.',
      en: 'A complete bilingual site, ready for serious growth — with a shop or custom features.',
    },
    bestFor: {
      fa: 'فروشگاه‌ها، بیزینس‌های چند شعبه‌ای، برندهای در حال رشد',
      en: 'Online shops, multi-location businesses, growing brands',
    },
    specs: {
      pages: { fa: 'بدون محدودیت مشخص', en: 'Flexible' },
      design: { fa: 'طراحی کامل + سیستم طراحی', en: 'Full design system' },
      seo: { fa: 'سئوی کامل + برنامه محتوا', en: 'Full SEO + content plan' },
      bilingual: { fa: 'فارسی و انگلیسی', en: 'Persian & English' },
      revisions: { fa: '۴ دور', en: '4 rounds' },
      support: { fa: '۶ ماه', en: '6 months' },
      integrations: { fa: 'فروشگاه، پرداخت، CRM، اتوماسیون', en: 'Shop, payments, CRM, automation' },
    },
    included: {
      fa: ['همه چیزهای دریچه رشد', 'فروشگاه اینترنتی یا امکانات اختصاصی', 'سیستم طراحی برای رشد بعدی', 'برنامه محتوا و دو مقاله اول', 'اتوماسیون‌های کاربردی', 'شش ماه پشتیبانی'],
      en: ['Everything in Daricheh Growth', 'Online shop or custom functionality', 'A design system to grow with', 'Content plan and first two articles', 'Useful automations', 'Six months of support'],
    },
  },
];

// PLACEHOLDER add-on prices.
export const addOns: { name: Localized; price: Localized; text: Localized }[] = [
  {
    name: { fa: 'نسخه دو زبانه', en: 'Bilingual version' },
    price: { fa: 'از £۴۰۰', en: 'from £400' },
    text: { fa: 'فارسی و انگلیسی با طراحی و سئوی جدا برای هر زبان.', en: 'Persian and English, each with its own layout tuning and SEO.' },
  },
  {
    name: { fa: 'سئوی ماهانه', en: 'Monthly SEO' },
    price: { fa: 'از £۳۵۰ در ماه', en: 'from £350/month' },
    text: { fa: 'محتوا، بهینه‌سازی و گزارش ماهانه.', en: 'Content, optimisation and a monthly report.' },
  },
  {
    name: { fa: 'پشتیبانی و نگهداری', en: 'Maintenance' },
    price: { fa: 'از £۶۰ در ماه', en: 'from £60/month' },
    text: { fa: 'آپدیت، بکاپ، امنیت و تغییرات کوچیک.', en: 'Updates, backups, security and small changes.' },
  },
  {
    name: { fa: 'فروشگاه اینترنتی', en: 'Ecommerce' },
    price: { fa: 'از £۱٬۲۰۰', en: 'from £1,200' },
    text: { fa: 'فروشگاه کامل با پرداخت و تنظیم ارسال.', en: 'A full shop with payments and shipping set-up.' },
  },
  {
    name: { fa: 'امکانات اختصاصی', en: 'Custom functionality' },
    price: { fa: 'بعد از گپ اول', en: 'quoted after a chat' },
    text: { fa: 'رزرو، پنل مشتری، فرم‌های خاص، اتوماسیون.', en: 'Bookings, client portals, custom forms, automation.' },
  },
];

export const getPackage = (id?: PackageId) => packages.find((p) => p.id === id);
