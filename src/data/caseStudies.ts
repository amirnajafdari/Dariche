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
  year?: string;
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

const cover = (slug: string, name: Localized, width: number, height: number): ImageAsset => ({
  src: `/images/work/${slug}.webp`,
  alt: { fa: `نمای صفحه اصلی وب‌سایت ${name.fa}`, en: `${name.en} website homepage` },
  width,
  height,
});

// Project scope and links: https://omnigrowthstudio.com/case-studies
// Screenshots supplied by the owner. No unverified dates, metrics or testimonials.
// Tara's supplied screenshot identifies Marylebone, London; the source listing still says Leeds.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'aryana-cakery',
    client: { fa: 'کیک‌پزی آریانا', en: 'Aryana Cakery' },
    industry: { fa: 'کیک سفارشی و شیرینی‌پزی', en: 'Bespoke cakes & bakery' },
    location: { fa: 'لیدز', en: 'Leeds' },
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'سایتی با حال‌وهوای شاد برای نمایش کیک‌های دست‌ساز آریانا و ساده‌تر کردن سفارش کیک برای مناسبت‌های خاص.',
      en: 'A playful website showcasing handmade celebration cakes, with a clear journey from inspiration to a custom cake enquiry.',
    },
    url: 'https://aryanacakery.co.uk/',
    cover: cover('aryana-cakery', { fa: 'آریانا', en: 'Aryana Cakery' }, 1488, 968),
    mock: { kind: 'shop', bg: '#F5E8EF', accent: '#A43665' },
    challenge: {
      fa: 'نمایش شخصیت برند و تنوع کیک‌های دست‌ساز، در کنار مسیری روشن برای ثبت درخواست و سفارش کیک دلخواه.',
      en: 'Give the bakery’s handmade work a distinctive home online while making personalised cake enquiries easier.',
    },
    approach: {
      fa: ['طراحی اختصاصی با تمرکز بر تصاویر کیک‌ها و شخصیت برند', 'مسیر تعاملی سفارش کیک و ثبت جزئیات درخواست', 'بهینه‌سازی تجربه کاربری روی موبایل'],
      en: ['Bespoke design centred on the cakes and the bakery’s personality', 'An interactive cake-order journey for custom requests', 'Mobile optimisation throughout the site'],
    },
    seoWork: { fa: ['سئوی محلی برای معرفی کیک‌پزی در لیدز'], en: ['Local SEO for the Leeds bakery'] },
    results: { fa: [], en: [] },
  },
  {
    slug: 'gaswise-engineering',
    client: { fa: 'گس‌وایز انجینیرینگ', en: 'GasWise Engineering' },
    industry: { fa: 'خدمات گاز، بویلر و گرمایش', en: 'Gas, boilers & heating' },
    location: { fa: 'لیدز', en: 'Leeds' },
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'سایتی خدمات‌محور با دسترسی سریع به کمک اضطراری، درخواست قیمت و تماس مستقیم با مهندس محلی.',
      en: 'A service-led website connecting customers with emergency help, quote requests and direct contact with a local engineer.',
    },
    url: 'https://gaswiseengineering.uk/',
    cover: cover('gaswise-engineering', { fa: 'گس‌وایز', en: 'GasWise Engineering' }, 1490, 997),
    mock: { kind: 'shop', bg: '#F4F5F7', accent: '#E60012' },
    challenge: {
      fa: 'مشتری باید بتواند بدون سردرگمی خدمت مناسب را پیدا کند؛ چه برای مشکل فوری، چه برای دریافت قیمت و برنامه‌ریزی تعمیرات.',
      en: 'Make it easy to find the right heating or gas service and reach an engineer, especially when help is urgent.',
    },
    approach: {
      fa: ['تفکیک روشن خدمات گاز، بویلر و گرمایش', 'مسیرهای مشخص برای کمک اضطراری و درخواست قیمت', 'دسترسی به تماس و واتس‌اپ، با تجربه مناسب موبایل'],
      en: ['Clear journeys for boiler, gas and heating services', 'Prominent emergency help and quote-request routes', 'Mobile optimisation and WhatsApp contact integration'],
    },
    seoWork: { fa: ['سئوی محلی خدمات گاز و گرمایش در لیدز'], en: ['Local SEO for gas and heating services in Leeds'] },
    results: { fa: [], en: [] },
  },
  {
    slug: 'precision-barbers',
    client: { fa: 'پریسیژن باربرز', en: 'Precision Barbers' },
    industry: { fa: 'آرایشگاه مردانه', en: 'Barbershop & grooming' },
    location: { fa: 'هِرهیلز، لیدز', en: 'Harehills, Leeds' },
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'معرفی خدمات تخصصی اصلاح مو و ریش، با طراحی هماهنگ با هویت آرایشگاه و دسترسی مستقیم به رزرو آنلاین.',
      en: 'A distinctive barbershop website presenting precision cuts and beard styling, with online appointment booking close at hand.',
    },
    url: 'https://precisionbarbers.co.uk/',
    cover: cover('precision-barbers', { fa: 'پریسیژن باربرز', en: 'Precision Barbers' }, 1385, 904),
    mock: { kind: 'salon', bg: '#171714', accent: '#C6A453' },
    challenge: {
      fa: 'انتقال توجه آرایشگاه به جزئیات و کمک به مشتری‌های محلی برای شناخت خدمات و رزرو نوبت.',
      en: 'Communicate the shop’s attention to detail and give local customers a straightforward route to services and appointments.',
    },
    approach: {
      fa: ['معرفی خدمات فید، اصلاح با قیچی و فرم‌دهی ریش', 'طراحی هماهنگ با هویت بصری آرایشگاه', 'دسترسی مستقیم به سیستم رزرو آنلاین و تماس'],
      en: ['Clear presentation of skin fades, scissor work and beard styling', 'A visual identity that reflects the barbershop', 'Direct access to online booking and telephone appointments'],
    },
    seoWork: { fa: ['سئوی محلی برای راندهای رود و هِرهیلز'], en: ['Local SEO focused on Roundhay Road and Harehills'] },
    results: { fa: [], en: [] },
  },
  {
    slug: 'afsoo-beauty',
    client: { fa: 'افسون بیوتی', en: 'Afsoo Beauty' },
    industry: { fa: 'سالن زیبایی', en: 'Beauty & aesthetics' },
    location: { fa: 'مرکز شهر لیدز', en: 'Leeds City Centre' },
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'سایت زیبایی با تصاویر بزرگ، متن‌های کوتاه و دسترسی آسان به رزرو خدمات؛ متناسب با هویت یک سالن شناخته‌شده در لیدز.',
      en: 'An image-led beauty website pairing concise treatment information with a direct route to online bookings.',
    },
    url: 'https://afsoo.com/',
    cover: cover('afsoo-beauty', { fa: 'افسون بیوتی', en: 'Afsoo Beauty' }, 1391, 996),
    mock: { kind: 'salon', bg: '#EED2C5', accent: '#986018' },
    challenge: {
      fa: 'سالنی که در مرکز لیدز شناخته‌شده بود، به سایتی نیاز داشت که کیفیت برند را نشان بدهد و بازدیدکننده را راحت‌تر به رزرو برساند.',
      en: 'Give an established Leeds salon a website that reflects its quality and keeps the path to booking clear.',
    },
    approach: {
      fa: ['پیاده‌سازی با وردپرس و تصاویر بزرگ و باکیفیت', 'متن‌های کوتاه با تمرکز بر انتخاب خدمات', 'اتصال به رزرو آنلاین خدمات زیبایی'],
      en: ['A WordPress website with large, high-quality imagery', 'Concise content focused on choosing treatments', 'Online treatment booking access'],
    },
    seoWork: { fa: ['سئوی محلی برای خدمات زیبایی در مرکز لیدز'], en: ['Local SEO for beauty services in Leeds City Centre'] },
    results: { fa: [], en: [] },
  },
  {
    slug: 'tara-beauty',
    client: { fa: 'تارا بیوتی', en: 'Tara Beauty' },
    industry: { fa: 'زیبایی و دوره‌های آموزشی', en: 'Aesthetics & training' },
    location: { fa: 'مریلبون، لندن', en: 'Marylebone, London' },
    services: ['web-design', 'seo'],
    summary: {
      fa: 'سایتی ساده و شیک برای معرفی خدمات زیبایی و دوره‌های آموزشی تارا، با دسترسی روشن به مشاوره و ثبت درخواست.',
      en: 'A clean, minimal website introducing aesthetic treatments and training courses, with clear consultation and course enquiries.',
    },
    url: 'https://tarabeautyschool.co.uk/',
    cover: cover('tara-beauty', { fa: 'تارا بیوتی', en: 'Tara Beauty' }, 1347, 974),
    mock: { kind: 'clinic', bg: '#E3C4B6', accent: '#473C3A' },
    challenge: {
      fa: 'تبدیل بیش از بیست سال تجربه در حوزه زیبایی به حضوری آنلاین که هم خدمات درمانی و هم دوره‌های آموزشی را روشن معرفی کند.',
      en: 'Bring more than twenty years of aesthetics experience online with a clear presentation of both treatments and training.',
    },
    approach: {
      fa: ['طراحی مینیمال و هماهنگ با برند روی وردپرس', 'تفکیک روشن خدمات زیبایی و دوره‌های آموزشی', 'مسیر درخواست مشاوره و ثبت‌نام دوره‌ها'],
      en: ['A minimal, brand-led WordPress design', 'Clear treatment and course menus', 'Consultation and student-enrolment enquiry routes'],
    },
    results: { fa: [], en: [] },
  },
  {
    slug: 'bella-cafe',
    client: { fa: 'کافه بلا', en: 'Bella Café' },
    industry: { fa: 'کافه و نانوایی', en: 'Café & bakery' },
    location: { fa: 'مرکز شهر لیدز', en: 'Leeds City Centre' },
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'سایتی گرم و صمیمی برای کافه بلا؛ با معرفی منو، فضای کافه و دسترسی مستقیم به سفارش آنلاین از اوبر ایتس.',
      en: 'A warm, welcoming café website showcasing the menu and atmosphere, with direct access to Uber Eats ordering.',
    },
    url: 'https://bellacafeleeds.com/',
    cover: cover('bella-cafe', { fa: 'کافه بلا', en: 'Bella Café' }, 1489, 998),
    mock: { kind: 'restaurant', bg: '#211D16', accent: '#C7A454' },
    challenge: {
      fa: 'انتقال حس صمیمی کافه و نان‌های تازه آن به وب‌سایت، همراه با دسترسی آسان به منو و سفارش غذا.',
      en: 'Translate the café’s welcoming atmosphere and fresh food into a website that also makes ordering easy.',
    },
    approach: {
      fa: ['طراحی وردپرسی با حال‌وهوای گرم کافه', 'معرفی منوی نان تازه و برانچ', 'لینک مستقیم به سفارش آنلاین اوبر ایتس'],
      en: ['A WordPress design reflecting the café’s atmosphere', 'Fresh bread and brunch menu presentation', 'Direct links to Uber Eats online ordering'],
    },
    seoWork: { fa: ['بهینه‌سازی دیده‌شدن کافه در جست‌وجوهای محلی مرکز لیدز'], en: ['Local search visibility for the café in Leeds City Centre'] },
    results: { fa: [], en: [] },
  },
];

export const getCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
