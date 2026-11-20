import type { Lang, Localized } from '@/i18n';

export type OneOffServiceId = 'website' | 'online-shop' | 'marketplace';
export type MonthlyPackageId = 'ruzan' | 'jaam-khane' | 'ersi';
export type PricingOfferId = OneOffServiceId | MonthlyPackageId;

export type ComparisonKey =
  | 'onSiteSeo'
  | 'blogPosts'
  | 'backlinks'
  | 'landingPages'
  | 'geo'
  | 'aiChatbot'
  | 'googleMetaAds'
  | 'chatGptAds'
  | 'googleMaps'
  | 'googleMapsBacklinks'
  | 'maintenance'
  | 'supportAndChanges'
  | 'sslAndHosting'
  | 'reportAndBackups';

export interface OneOffService {
  id: OneOffServiceId;
  kind: 'one-off';
  title: Localized;
  footerLabel: Localized;
  /** GBP amount (integer) */
  price: number;
  /** True only when the price is a starting price ("From £199") */
  from: boolean;
  billingNote: Localized;
  summary: Localized;
  tagline: Localized;
  description: Localized;
  listLabel: Localized;
  features: Localized<string[]>;
  /** Short 3-bullet summary for compact homepage cards */
  highlights: Localized<string[]>;
  cta: Localized;
}

export interface MonthlyPackage {
  id: MonthlyPackageId;
  kind: 'monthly';
  title: Localized;
  secondaryName: Localized;
  fullName: Localized;
  /** GBP monthly amount (integer) */
  price: number;
  featured: boolean;
  featuredLabel?: Localized;
  tagline: Localized;
  paragraphs: Localized<string[]>;
  features: Localized<string[]>;
  /** Short 3-bullet summary for compact homepage cards */
  highlights: Localized<string[]>;
  cta: Localized;
  comparison: Record<ComparisonKey, Localized>;
}

/** Formats GBP integer prices consistently across both Persian and English pages, e.g. "£399". */
export const formatGbp = (amount: number): string => `£${amount.toLocaleString('en-GB')}`;

/** One-off website and online shop services (never recurring). */
export const oneOffServices: OneOffService[] = [
  {
    id: 'website',
    kind: 'one-off',
    title: {
      fa: 'طراحی یا بازطراحی سایت',
      en: 'Website Design / Redesign',
    },
    footerLabel: {
      fa: 'طراحی سایت',
      en: 'Website Design / Redesign',
    },
    price: 399,
    from: false,
    billingNote: {
      fa: 'یک‌باره',
      en: 'one-off',
    },
    summary: {
      fa: 'تا ۱۵ صفحه · هر صفحه اضافه £10',
      en: 'Up to 15 pages · £10 per additional page',
    },
    tagline: {
      fa: 'یه سایت حرفه‌ای، بدون هزینه‌های عجیب‌وغریب.',
      en: 'A professional website, priced clearly from the start.',
    },
    description: {
      fa: 'چه بخوای اولین سایت بیزینست رو راه بندازی، چه وقتش رسیده سایت قدیمیت رو تغییر بدی، می‌تونیم یه سایت مرتب، کاربردی و متناسب با کار تو بسازیم.',
      en: 'Whether you are launching your first website or replacing an outdated one, we design and build a clean, practical site tailored to your business.',
    },
    listLabel: {
      fa: 'شامل:',
      en: 'Includes:',
    },
    features: {
      fa: ['طراحی یا بازطراحی وب‌سایت', 'تا ۱۵ صفحه', 'هر صفحه اضافه: £10'],
      en: ['Website design or redesign', 'Up to 15 pages', '£10 per additional page'],
    },
    highlights: {
      fa: ['تا ۱۵ صفحه', 'هر صفحه اضافه: £10', 'طراحی جدید یا بازطراحی سایت'],
      en: ['Up to 15 pages', '£10 per additional page', 'New website or redesign'],
    },
    cta: {
      fa: 'سایت جدیدم رو می‌خوام',
      en: 'Start your website',
    },
  },
  {
    id: 'online-shop',
    kind: 'one-off',
    title: {
      fa: 'فروشگاه اینترنتی',
      en: 'Online Shop',
    },
    footerLabel: {
      fa: 'فروشگاه اینترنتی',
      en: 'Online Shop',
    },
    price: 699,
    from: false,
    billingNote: {
      fa: 'یک‌باره',
      en: 'one-off',
    },
    summary: {
      fa: 'تا ۵۰ محصول · محصولات بیشتر با قیمت اختصاصی',
      en: 'Up to 50 products · custom quote for additional products',
    },
    tagline: {
      fa: 'فروش آنلاین رو درست شروع کن.',
      en: 'Start selling online the right way.',
    },
    description: {
      fa: 'یه فروشگاه اینترنتی که مشتری بتونه راحت محصولات رو ببینه، انتخاب کنه و سفارش بده. با چیدمان مناسب محصولات و یه تجربه خرید ساده و قابل فهم.',
      en: 'An online shop where customers can browse, choose and order easily, with clear product pages and a straightforward checkout experience.',
    },
    listLabel: {
      fa: 'شامل:',
      en: 'Includes:',
    },
    features: {
      fa: [
        'طراحی و راه‌اندازی فروشگاه آنلاین',
        'ثبت تا ۵۰ محصول',
        'برای تعداد محصولات بیشتر، قیمت جداگانه اعلام می‌شه',
      ],
      en: [
        'Online shop design and build',
        'Up to 50 products',
        'Additional products require a custom quote',
      ],
    },
    highlights: {
      fa: ['ثبت تا ۵۰ محصول', 'محصولات بیشتر با قیمت اختصاصی', 'طراحی و راه‌اندازی فروشگاه آنلاین'],
      en: ['Up to 50 products', 'Custom quote for more products', 'Complete online shop build'],
    },
    cta: {
      fa: 'فروشگاهم رو راه بندازیم',
      en: 'Build your online shop',
    },
  },
  {
    id: 'marketplace',
    kind: 'one-off',
    title: {
      fa: 'راه‌اندازی فروشگاه در پلتفرم‌های فروش',
      en: 'Online Shop Setup',
    },
    footerLabel: {
      fa: 'راه‌اندازی فروشگاه',
      en: 'Online Shop Setup',
    },
    price: 199,
    from: true,
    billingNote: {
      fa: 'یک‌باره',
      en: 'one-off',
    },
    summary: {
      fa: 'Shopify، Amazon، eBay و پلتفرم‌های مشابه',
      en: 'Shopify, Amazon, eBay and similar platforms',
    },
    tagline: {
      fa: 'محصولاتت رو جایی بفروش که مشتری‌ها هستن.',
      en: 'Sell your products where customers already shop.',
    },
    description: {
      fa: 'برای راه‌اندازی فروشگاه و شروع فروش در پلتفرم‌های مختلف کنارتیم.',
      en: 'If you want to start selling through Shopify, Amazon, eBay or similar platforms, we set up your store and get it ready for customers.',
    },
    listLabel: {
      fa: 'پلتفرم‌ها:',
      en: 'Platforms:',
    },
    features: {
      fa: ['Shopify', 'Amazon', 'eBay', 'سایر پلتفرم‌های فروش آنلاین'],
      en: ['Shopify', 'Amazon', 'eBay', 'Similar platforms'],
    },
    highlights: {
      fa: ['Shopify، Amazon و eBay', 'سایر پلتفرم‌های فروش آنلاین', 'راه‌اندازی و آماده‌سازی فروشگاه'],
      en: ['Shopify, Amazon and eBay', 'Similar selling platforms', 'Ready-to-sell store setup'],
    },
    cta: {
      fa: 'درباره فروشگاهم حرف بزنیم',
      en: 'Discuss your shop setup',
    },
  },
];

const YES: Localized = { fa: 'شامل می‌شه', en: 'Included' };
const NO: Localized = { fa: '—', en: '—' };

/** Optional monthly subscription packages (per month). */
export const monthlyPackages: MonthlyPackage[] = [
  {
    id: 'ruzan',
    kind: 'monthly',
    title: { fa: 'دریچه روزن', en: 'Ruzan' },
    secondaryName: { fa: 'Ruzan', en: 'دریچه روزن' },
    fullName: { fa: 'دریچه روزن | Ruzan', en: 'Ruzan | دریچه روزن' },
    price: 49,
    featured: false,
    tagline: {
      fa: 'یه شروع آروم و مرتب.',
      en: 'A steady, well-kept start.',
    },
    paragraphs: {
      fa: [
        'برای بیزینس‌هایی که می‌خوان سایتشون همیشه مرتب و به‌روز باشه و در کنارش، هر ماه یه مقدار هم روی محتوا و سئو کار بشه.',
      ],
      en: [
        'For businesses that want their website kept secure, up to date and steadily supported with monthly on-site SEO, blog posts and backlinks.',
      ],
    },
    features: {
      fa: [
        'سئوی داخلی سایت (On-site SEO)',
        '۲ مقاله وبلاگ در ماه',
        '۳ بک‌لینک در ماه',
        'نگهداری و به‌روزرسانی سایت',
        'تغییرات جزئی سایت',
        'گواهی امنیتی SSL',
        'هاستینگ سایت',
      ],
      en: [
        'On-site SEO',
        '2 blog posts per month',
        '3 backlinks per month',
        'Website maintenance and small changes',
        'SSL certificate and hosting',
      ],
    },
    highlights: {
      fa: ['سئوی داخلی، ۲ مقاله و ۳ بک‌لینک در ماه', 'نگهداری و تغییرات جزئی سایت', 'گواهی SSL و هاستینگ'],
      en: ['On-site SEO, 2 blog posts & 3 backlinks/month', 'Website maintenance & small changes', 'SSL certificate & hosting'],
    },
    cta: {
      fa: 'روزن رو انتخاب می‌کنم',
      en: 'Choose Ruzan',
    },
    comparison: {
      onSiteSeo: YES,
      blogPosts: { fa: '۲ مقاله در ماه', en: '2 per month' },
      backlinks: { fa: '۳ بک‌لینک در ماه', en: '3 per month' },
      landingPages: NO,
      geo: NO,
      aiChatbot: NO,
      googleMetaAds: NO,
      chatGptAds: NO,
      googleMaps: NO,
      googleMapsBacklinks: NO,
      maintenance: YES,
      supportAndChanges: { fa: 'تغییرات جزئی', en: 'Small changes' },
      sslAndHosting: YES,
      reportAndBackups: NO,
    },
  },
  {
    id: 'jaam-khane',
    kind: 'monthly',
    title: { fa: 'دریچه جامخانه', en: 'Jaam Khane' },
    secondaryName: { fa: 'Jaam Khane', en: 'دریچه جامخانه' },
    fullName: { fa: 'دریچه جامخانه | Jaam Khane', en: 'Jaam Khane | دریچه جامخانه' },
    price: 129,
    featured: true,
    featuredLabel: { fa: 'برای رشد بیشتر', en: 'For steady growth' },
    tagline: {
      fa: 'برای وقتی که می‌خوای یه قدم جدی‌تر برداری.',
      en: 'When you are ready to take a more serious step.',
    },
    paragraphs: {
      fa: [
        'اگه می‌خوای هر ماه روی سایتت کار بشه، محتوای تازه منتشر کنی، صفحات جدید داشته باشی و از ابزارهای هوشمند هم کمک بگیری، جامخانه انتخاب کامل‌تریه.',
      ],
      en: [
        'For businesses looking for ongoing SEO, regular blog posts, new landing pages, AI optimisation, a trained AI chatbot and unlimited website support each month.',
      ],
    },
    features: {
      fa: [
        'سئوی داخلی سایت (On-site SEO)',
        '۶ مقاله وبلاگ در ماه',
        '۹ بک‌لینک در ماه',
        '۲ صفحه فرود جدید در ماه',
        'بهینه‌سازی محتوا برای جستجوهای مبتنی بر هوش مصنوعی (GEO)',
        'چت‌بات هوشمند، آموزش‌دیده با اطلاعات بیزینس تو',
        'نگهداری و به‌روزرسانی سایت',
        'پشتیبانی و تغییرات نامحدود سایت',
        'گواهی امنیتی SSL',
        'هاستینگ سایت',
        'گزارش عملکرد ماهانه',
        'بکاپ روزانه',
      ],
      en: [
        'On-site SEO',
        '6 blog posts per month',
        '9 backlinks per month',
        '2 new landing pages per month',
        'AI content optimisation (GEO)',
        'Knowledge-base-trained AI chatbot',
        'Website maintenance',
        'Unlimited website support and changes',
        'SSL certificate and hosting',
        'Monthly report and daily backups',
      ],
    },
    highlights: {
      fa: ['سئوی داخلی، ۶ مقاله، ۹ بک‌لینک و ۲ صفحه فرود در ماه', 'بهینه‌سازی هوش مصنوعی (GEO) و چت‌بات هوشمند', 'پشتیبانی و تغییرات نامحدود، بکاپ روزانه و گزارش ماهانه'],
      en: ['On-site SEO, 6 posts, 9 backlinks & 2 landing pages/month', 'AI optimisation (GEO) & trained AI chatbot', 'Unlimited support & changes, SSL, hosting & daily backups'],
    },
    cta: {
      fa: 'جامخانه رو انتخاب می‌کنم',
      en: 'Choose Jaam Khane',
    },
    comparison: {
      onSiteSeo: YES,
      blogPosts: { fa: '۶ مقاله در ماه', en: '6 per month' },
      backlinks: { fa: '۹ بک‌لینک در ماه', en: '9 per month' },
      landingPages: { fa: '۲ صفحه در ماه', en: '2 per month' },
      geo: YES,
      aiChatbot: YES,
      googleMetaAds: NO,
      chatGptAds: NO,
      googleMaps: NO,
      googleMapsBacklinks: NO,
      maintenance: YES,
      supportAndChanges: { fa: 'پشتیبانی و تغییرات نامحدود', en: 'Unlimited support and changes' },
      sslAndHosting: YES,
      reportAndBackups: YES,
    },
  },
  {
    id: 'ersi',
    kind: 'monthly',
    title: { fa: 'دریچه ارسی', en: 'Ersi' },
    secondaryName: { fa: 'Ersi', en: 'دریچه ارسی' },
    fullName: { fa: 'دریچه ارسی | Ersi', en: 'Ersi | دریچه ارسی' },
    price: 329,
    featured: false,
    tagline: {
      fa: 'یه تیم دیجیتال کنار بیزینست.',
      en: 'A dedicated digital team alongside your business.',
    },
    paragraphs: {
      fa: [
        'وقتی می‌خوای بخش بیشتری از کارهای آنلاین بیزینست رو به یه تیم بسپاری، ارسی وارد می‌شه.',
        'از سئو و تولید محتوا تا تبلیغات، گوگل مپ و ابزارهای هوشمند، خدمات این پکیج برای بیزینس‌هایی چیده شده که برنامه‌های بزرگ‌تری دارن.',
      ],
      en: [
        'When you want a team looking after more of your online presence every month, Ersi brings everything together.',
        'From SEO, content and landing pages to Google Ads, Meta Ads, ChatGPT ads, Google Maps management and AI optimisation, it is built for businesses with bigger plans.',
      ],
    },
    features: {
      fa: [
        'سئوی داخلی سایت (On-site SEO)',
        '۱۲ مقاله وبلاگ در ماه',
        '۱۸ بک‌لینک در ماه',
        '۶ صفحه فرود جدید در ماه',
        'مدیریت تبلیغات گوگل (Google Ads)',
        'مدیریت تبلیغات فیسبوک و اینستاگرام (Meta Ads)',
        'مدیریت تبلیغات و حضور بیزینس در چت‌جی‌پی‌تی، متناسب با قابلیت‌های در دسترس',
        'بهینه‌سازی محتوا برای جستجوهای مبتنی بر هوش مصنوعی (GEO)',
        'چت‌بات هوشمند، آموزش‌دیده با اطلاعات بیزینس تو',
        'مدیریت پروفایل بیزینس در Google Maps',
        'انتشار پست‌های کوتاه در پروفایل گوگل',
        'پاسخ‌گویی به نظرات مشتری‌ها در گوگل',
        'بک‌لینک‌سازی مرتبط با پروفایل گوگل مپ',
        'پشتیبانی و تغییرات نامحدود سایت',
        'نگهداری و به‌روزرسانی سایت',
        'گواهی امنیتی SSL',
        'هاستینگ سایت',
        'گزارش عملکرد ماهانه',
        'بکاپ روزانه',
      ],
      en: [
        'On-site SEO',
        '12 blog posts per month',
        '18 backlinks per month',
        '6 new landing pages per month',
        'Google Ads and Meta Ads management',
        'ChatGPT ads and business management',
        'AI content optimisation (GEO)',
        'Knowledge-base-trained AI chatbot',
        'Google Maps business management, including posts and review replies',
        'Backlinks related to Google Maps business profile',
        'Unlimited website support and changes',
        'Website maintenance',
        'SSL certificate and hosting',
        'Monthly report and daily backups',
      ],
    },
    highlights: {
      fa: ['۱۲ مقاله، ۱۸ بک‌لینک و ۶ صفحه فرود در ماه', 'مدیریت Google Ads، Meta Ads و تبلیغات ChatGPT', 'مدیریت Google Maps، چت‌بات هوشمند و پشتیبانی نامحدود'],
      en: ['12 posts, 18 backlinks & 6 landing pages/month', 'Google Ads, Meta Ads & ChatGPT ads management', 'Google Maps management, reviews, GEO, AI chatbot & unlimited support'],
    },
    cta: {
      fa: 'درباره ارسی حرف بزنیم',
      en: 'Talk about Ersi',
    },
    comparison: {
      onSiteSeo: YES,
      blogPosts: { fa: '۱۲ مقاله در ماه', en: '12 per month' },
      backlinks: { fa: '۱۸ بک‌لینک در ماه', en: '18 per month' },
      landingPages: { fa: '۶ صفحه در ماه', en: '6 per month' },
      geo: YES,
      aiChatbot: YES,
      googleMetaAds: YES,
      chatGptAds: YES,
      googleMaps: YES,
      googleMapsBacklinks: YES,
      maintenance: YES,
      supportAndChanges: { fa: 'پشتیبانی و تغییرات نامحدود', en: 'Unlimited support and changes' },
      sslAndHosting: YES,
      reportAndBackups: YES,
    },
  },
];

export const comparisonRows: { key: ComparisonKey; label: Localized }[] = [
  { key: 'onSiteSeo', label: { fa: 'سئوی داخلی سایت (On-site SEO)', en: 'On-site SEO' } },
  { key: 'blogPosts', label: { fa: 'مقاله وبلاگ در ماه', en: 'Blog posts per month' } },
  { key: 'backlinks', label: { fa: 'بک‌لینک در ماه', en: 'Backlinks per month' } },
  { key: 'landingPages', label: { fa: 'صفحه فرود جدید در ماه', en: 'New landing pages per month' } },
  { key: 'geo', label: { fa: 'بهینه‌سازی محتوا برای هوش مصنوعی (GEO)', en: 'AI content optimisation (GEO)' } },
  { key: 'aiChatbot', label: { fa: 'چت‌بات هوشمند آموزش‌دیده با اطلاعات بیزینس', en: 'Knowledge-base-trained AI chatbot' } },
  { key: 'googleMetaAds', label: { fa: 'مدیریت Google Ads و Meta Ads', en: 'Google Ads and Meta Ads management' } },
  { key: 'chatGptAds', label: { fa: 'مدیریت تبلیغات و حضور در ChatGPT', en: 'ChatGPT ads and business management' } },
  { key: 'googleMaps', label: { fa: 'مدیریت Google Maps (پست‌ها و پاسخ به نظرات)', en: 'Google Maps management (posts and review replies)' } },
  { key: 'googleMapsBacklinks', label: { fa: 'بک‌لینک مرتبط با پروفایل Google Maps', en: 'Google Maps profile backlinks' } },
  { key: 'maintenance', label: { fa: 'نگهداری و به‌روزرسانی سایت', en: 'Website maintenance' } },
  { key: 'supportAndChanges', label: { fa: 'پشتیبانی و تغییرات سایت', en: 'Website support and changes' } },
  { key: 'sslAndHosting', label: { fa: 'گواهی امنیتی SSL و هاستینگ', en: 'SSL certificate and hosting' } },
  { key: 'reportAndBackups', label: { fa: 'گزارش ماهانه و بکاپ روزانه', en: 'Monthly report and daily backups' } },
];

export const pricingNote: Localized = {
  fa: 'هزینه تبلیغات پرداختی به گوگل، متا و سایر پلتفرم‌ها جدا از هزینه مدیریت تبلیغاته. جزئیات خدمات و هزینه‌های احتمالی سرویس‌های جانبی قبل از شروع همکاری مشخص می‌شه.',
  en: 'Ad spend paid to Google, Meta and other platforms is billed separately from ads management. Any third-party platform costs or custom requirements are agreed clearly before work starts.',
};

export interface ServicePricingItem {
  id: PricingOfferId;
  kind: 'one-off' | 'monthly';
  name: Localized;
  price: number;
  from: boolean;
  note: Localized;
  anchor: string;
}

export interface ServicePricingInfo {
  eyebrow: Localized;
  items: ServicePricingItem[];
  ctaAnchor: string;
}

export const getOneOffService = (id: OneOffServiceId) => oneOffServices.find((s) => s.id === id)!;
export const getMonthlyPackage = (id: MonthlyPackageId) => monthlyPackages.find((p) => p.id === id)!;

const website = getOneOffService('website');
const onlineShop = getOneOffService('online-shop');
const marketplace = getOneOffService('marketplace');
const ruzan = getMonthlyPackage('ruzan');
const jaamKhane = getMonthlyPackage('jaam-khane');
const ersi = getMonthlyPackage('ersi');

/** Pricing summary for each service page, derived directly from the central pricing tables above. */
export const servicePricingMap: Record<string, ServicePricingInfo> = {
  'web-design': {
    eyebrow: { fa: 'تعرفه یک‌باره', en: 'One-off pricing' },
    items: [
      {
        id: website.id,
        kind: 'one-off',
        name: website.title,
        price: website.price,
        from: website.from,
        note: website.summary,
        anchor: `#${website.id}`,
      },
    ],
    ctaAnchor: `#${website.id}`,
  },
  'website-redesign': {
    eyebrow: { fa: 'تعرفه یک‌باره', en: 'One-off pricing' },
    items: [
      {
        id: website.id,
        kind: 'one-off',
        name: website.title,
        price: website.price,
        from: website.from,
        note: website.summary,
        anchor: `#${website.id}`,
      },
    ],
    ctaAnchor: `#${website.id}`,
  },
  ecommerce: {
    eyebrow: { fa: 'تعرفه یک‌باره', en: 'One-off pricing' },
    items: [
      {
        id: onlineShop.id,
        kind: 'one-off',
        name: onlineShop.title,
        price: onlineShop.price,
        from: onlineShop.from,
        note: onlineShop.summary,
        anchor: `#${onlineShop.id}`,
      },
      {
        id: marketplace.id,
        kind: 'one-off',
        name: marketplace.title,
        price: marketplace.price,
        from: marketplace.from,
        note: marketplace.summary,
        anchor: `#${marketplace.id}`,
      },
    ],
    ctaAnchor: `#${onlineShop.id}`,
  },
  seo: {
    eyebrow: { fa: 'پکیج‌های ماهانه', en: 'Monthly packages' },
    items: [
      {
        id: ruzan.id,
        kind: 'monthly',
        name: ruzan.title,
        price: ruzan.price,
        from: true,
        note: {
          fa: `در پکیج‌های ${ruzan.title.fa} (${formatGbp(ruzan.price)} در ماه)، ${jaamKhane.title.fa} (${formatGbp(jaamKhane.price)} در ماه) و ${ersi.title.fa} (${formatGbp(ersi.price)} در ماه)`,
          en: `Available across ${ruzan.title.en} (${formatGbp(ruzan.price)}/month), ${jaamKhane.title.en} (${formatGbp(jaamKhane.price)}/month) and ${ersi.title.en} (${formatGbp(ersi.price)}/month)`,
        },
        anchor: '#monthly',
      },
    ],
    ctaAnchor: '#monthly',
  },
  'local-seo': {
    eyebrow: { fa: 'پکیج ماهانه', en: 'Monthly package' },
    items: [
      {
        id: ersi.id,
        kind: 'monthly',
        name: ersi.fullName,
        price: ersi.price,
        from: false,
        note: {
          fa: 'شامل مدیریت Google Maps، انتشار پست، پاسخ به نظرات و بک‌لینک‌های مرتبط با پروفایل گوگل مپ',
          en: 'Includes Google Maps business management, posts, review replies and Google Maps profile backlinks',
        },
        anchor: `#${ersi.id}`,
      },
    ],
    ctaAnchor: `#${ersi.id}`,
  },
  'website-support': {
    eyebrow: { fa: 'پکیج‌های ماهانه', en: 'Monthly packages' },
    items: [
      {
        id: ruzan.id,
        kind: 'monthly',
        name: ruzan.title,
        price: ruzan.price,
        from: true,
        note: {
          fa: `نگهداری و تغییرات جزئی از ${formatGbp(ruzan.price)} در ماه (${ruzan.title.fa})؛ پشتیبانی و تغییرات نامحدود در ${jaamKhane.title.fa} (${formatGbp(jaamKhane.price)} در ماه) و ${ersi.title.fa} (${formatGbp(ersi.price)} در ماه)`,
          en: `Maintenance and small changes from ${formatGbp(ruzan.price)}/month (${ruzan.title.en}); unlimited website support and changes in ${jaamKhane.title.en} (${formatGbp(jaamKhane.price)}/month) and ${ersi.title.en} (${formatGbp(ersi.price)}/month)`,
        },
        anchor: `#${ruzan.id}`,
      },
    ],
    ctaAnchor: '#monthly',
  },
};

export const getServicePricing = (slug: string): ServicePricingInfo | undefined => servicePricingMap[slug];

export const formatPriceLabel = (item: { price: number; from?: boolean; kind: 'one-off' | 'monthly' }, lang: Lang): string => {
  const amount = formatGbp(item.price);
  if (item.kind === 'monthly') {
    const prefix = item.from ? (lang === 'fa' ? 'از ' : 'From ') : '';
    const suffix = lang === 'fa' ? ' در ماه' : ' per month';
    return `${prefix}${amount}${suffix}`;
  }
  const prefix = item.from ? (lang === 'fa' ? 'از ' : 'From ') : '';
  return `${prefix}${amount}`;
};
