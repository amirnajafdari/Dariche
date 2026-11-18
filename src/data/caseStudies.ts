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
    slug: 'caf-farsley',
    client: { fa: 'کاف فارسلی', en: 'CAF Farsley' },
    industry: { fa: 'کافه و قهوه تخصصی', en: 'Speciality coffee & café' },
    location: { fa: 'فارسلی، لیدز', en: 'Farsley, Leeds' },
    services: ['web-design', 'ecommerce', 'local-seo'],
    summary: {
      fa: 'خانه آنلاین یک کافه محلی؛ از دیدن منوی غذا و نوشیدنی تا خرید دانه قهوه برای تهیه در خانه.',
      en: 'A local café website bringing together its food and drink menu with an online shop for coffee beans.',
    },
    url: 'https://www.caffarsley.co.uk/',
    cover: cover('caf-farsley', { fa: 'کاف فارسلی', en: 'CAF Farsley' }, 1408, 995),
    mock: { kind: 'restaurant', bg: '#EEE9DF', accent: '#52614A' },
    challenge: {
      fa: 'معرفی تجربه کافه و فراهم کردن امکان خرید قهوه، هم برای بازدیدکننده‌های محلی و هم برای مشتری‌های آنلاین.',
      en: 'Extend the café experience online so visitors can explore the menu and buy coffee beans beyond their visit.',
    },
    approach: {
      fa: ['فروشگاه آنلاین دانه قهوه', 'منوی تعاملی کافه', 'طراحی مسیر سفارش با اولویت موبایل'],
      en: ['An online coffee-bean store', 'An interactive café menu', 'An ordering experience designed around mobile visitors'],
    },
    seoWork: { fa: ['سئوی محلی برای فارسلی و لیدز'], en: ['Local SEO for Farsley and Leeds'] },
    results: { fa: [], en: [] },
  },
  {
    slug: 'the-tailoring-atelier',
    client: { fa: 'آتلیه خیاطی', en: 'The Tailoring Atelier' },
    industry: { fa: 'دوخت سفارشی و تعمیر لباس', en: 'Tailoring & alterations' },
    location: { fa: 'هورسفورث، لیدز', en: 'Horsforth, Leeds' },
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'سایتی برای یک خیاطی مستقل، با جزئیات بصری الهام‌گرفته از دوخت و مسیری روشن برای درخواست مشاوره و پرو.',
      en: 'A website shaped around the craft of tailoring, with sewing-inspired details and clear consultation and fitting enquiries.',
    },
    url: 'https://tailoringatelier.co.uk/',
    cover: cover('the-tailoring-atelier', { fa: 'آتلیه خیاطی', en: 'The Tailoring Atelier' }, 1360, 995),
    mock: { kind: 'shop', bg: '#EEEAE2', accent: '#675E50' },
    challenge: {
      fa: 'ساختن حضوری آنلاین که ظرافت کار یک خیاطی مستقل را نشان بدهد و درخواست مشاوره و پرو را ساده کند.',
      en: 'Reflect an independent tailor’s craftsmanship while helping nearby customers arrange a consultation or fitting.',
    },
    approach: {
      fa: ['جزئیات طراحی متناسب با دوخت سفارشی', 'استفاده از نشانه‌ها و عناصر آشنای خیاطی', 'مسیر درخواست مشاوره و وقت پرو'],
      en: ['Design details inspired by bespoke tailoring', 'Familiar sewing and craft motifs', 'Enquiry routes for consultations and fittings'],
    },
    seoWork: { fa: ['سئوی محلی برای هورسفورث و لیدز'], en: ['Local SEO for Horsforth and Leeds'] },
    results: { fa: [], en: [] },
  },
  {
    slug: 'struqta-group',
    client: { fa: 'گروه استراکتا', en: 'Struqta Group' },
    industry: { fa: 'لوله‌کشی، گرمایش و ساختمان', en: 'Plumbing, heating & building' },
    location: { fa: 'لیدز و وست یورکشر', en: 'Leeds & West Yorkshire' },
    services: ['web-design', 'local-seo'],
    summary: {
      fa: 'شروعی تازه در فضای آنلاین برای معرفی خدمات لوله‌کشی، گرمایش و ساختمان و دریافت درخواست از مشتری‌های محلی.',
      en: 'A fresh online presence for a returning trade business, showcasing plumbing, heating and building work with simple enquiry routes.',
    },
    url: 'http://struqtagroup.co.uk/',
    cover: cover('struqta-group', { fa: 'گروه استراکتا', en: 'Struqta Group' }, 1395, 983),
    mock: { kind: 'shop', bg: '#E9EDEE', accent: '#365768' },
    challenge: {
      fa: 'پس از چهار سال دوری از بازار، استراکتا به سایتی تازه نیاز داشت تا خدماتش را معرفی کند و با مشتری‌های جدید ارتباط بگیرد.',
      en: 'After four years away from the trade, Struqta needed a new website to introduce its services and attract fresh enquiries.',
    },
    approach: {
      fa: ['معرفی روشن خدمات لوله‌کشی و گرمایش', 'نمایش پروژه‌های ساختمانی', 'مسیر کوتاه و مشخص برای ثبت درخواست'],
      en: ['Clear plumbing and heating service information', 'A showcase for building projects', 'Straightforward enquiry capture'],
    },
    seoWork: { fa: ['سئوی محلی خدمات فنی در لیدز'], en: ['Local SEO for trade services in Leeds'] },
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
    slug: 'ultimate-repairs',
    client: { fa: 'آلتیمیت ریپیرز', en: 'Ultimate Repairs' },
    industry: { fa: 'تعمیر موبایل، لپ‌تاپ و دستگاه‌های دیجیتال', en: 'Phone, laptop & device repairs' },
    location: { fa: 'کرکستال، لیدز', en: 'Kirkstall, Leeds' },
    services: ['website-redesign', 'seo', 'local-seo'],
    summary: {
      fa: 'بازطراحی کامل سایت تعمیرات با قیمت‌های شفاف، پیدا کردن راحت‌تر دستگاه و نوع تعمیر و دسترسی ساده به رزرو.',
      en: 'A complete website redesign making devices, repair services, prices and online booking easier to find.',
    },
    url: 'https://ultimaterepairs.co.uk/',
    cover: cover('ultimate-repairs', { fa: 'آلتیمیت ریپیرز', en: 'Ultimate Repairs' }, 1531, 995),
    mock: { kind: 'shop', bg: '#E9EDF4', accent: '#355BB0' },
    challenge: {
      fa: 'ساده‌تر کردن پیدا کردن خدمات تعمیر و قیمت‌ها، همراه با تقویت حضور آنلاین یک کسب‌وکار تعمیرات شناخته‌شده در لیدز.',
      en: 'Simplify a busy repair catalogue and make pricing and booking clear while strengthening the business’s local search presence.',
    },
    approach: {
      fa: ['بازطراحی کامل سایت وردپرسی', 'دسته‌بندی روشن تعمیرات موبایل، لپ‌تاپ و کنسول', 'نمایش قیمت‌های شفاف و مسیر رزرو آنلاین'],
      en: ['A complete WordPress website redesign', 'Clear navigation for phone, laptop and console repairs', 'Transparent pricing and a simple online booking journey'],
    },
    seoWork: { fa: ['سئو و بهینه‌سازی دیده‌شدن در جست‌وجوی هوش مصنوعی (GEO)', 'تمرکز بر جست‌وجوهای محلی تعمیرات در لیدز'], en: ['SEO and generative engine optimisation (GEO)', 'Local search visibility for repair services in Leeds'] },
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
