import type { Localized } from '@/i18n';
import type { PackageId } from './packages';

export type ServiceSlug = 'web-design' | 'seo' | 'local-seo' | 'ecommerce' | 'website-redesign' | 'website-support';

/** Visual variation of the service template. Same system, different composition. */
export type ServiceVariant = 'frame' | 'split' | 'type';

export interface QA {
  q: string;
  a: string;
}

export interface Service {
  slug: ServiceSlug;
  /** primary = visually dominant on the homepage */
  tier: 'primary' | 'supporting';
  variant: ServiceVariant;
  name: Localized;
  /** One line under the item in the services menu */
  menuBlurb: Localized;
  /** Homepage description */
  homeBlurb: Localized;
  seo: { title: Localized; description: Localized };
  /** Headline lines. Wrap words in *asterisks* to set them in bold. */
  hero: { title: Localized<string[]>; lead: Localized };
  problem: { title: Localized; text: Localized };
  includes: Localized<string[]>;
  audience: Localized<string[]>;
  benefits: Localized<{ title: string; text: string }[]>;
  relatedCaseStudy?: string;
  startingPackage?: PackageId;
  faqs: Localized<QA[]>;
}

export const services: Service[] = [
  {
    slug: 'web-design',
    tier: 'primary',
    variant: 'frame',
    name: { fa: 'طراحی سایت', en: 'Web Design' },
    menuBlurb: { fa: 'سایت تازه، از صفر و درست.', en: 'A new site, built properly from scratch.' },
    homeBlurb: {
      fa: 'یه سایت حرفه‌ای که فقط خوب به نظر نمی‌رسه؛ درست کار می‌کنه، سریع باز می‌شه و مشتری رو راحت‌تر به تماس یا خرید می‌رسونه.',
      en: "A professional website that doesn't just look good. It works properly, loads fast and makes it easy for customers to get in touch or buy.",
    },
    seo: {
      title: {
        fa: 'طراحی سایت برای بیزینس‌های ایرانی در بریتانیا | دریچه',
        en: 'Web Design for Iranian-Owned Businesses in the UK | Daricheh',
      },
      description: {
        fa: 'طراحی سایت حرفه‌ای، سریع و دو زبانه برای بیزینس‌های ایرانی در بریتانیا. ساختار، متن و سئوی پایه، همه از روز اول.',
        en: 'Fast, professional, bilingual websites for Iranian-owned businesses in the UK. Structure, copy and SEO foundations from day one.',
      },
    },
    hero: {
      title: { fa: ['سایتی که فقط', '*قشنگ* نیست.'], en: ["A website that's", 'more than *pretty*.'] },
      lead: {
        fa: 'طراحی‌ای که با بیزینست جور باشه، سریع باز بشه و آدم‌ها رو به تماس، رزرو یا خرید برسونه.',
        en: 'Design that fits your business, loads fast and moves people towards a call, a booking or a sale.',
      },
    },
    problem: {
      title: { fa: 'خیلی از سایت‌ها فقط «هستن».', en: 'A lot of websites just… exist.' },
      text: {
        fa: 'یه قالب آماده، چند تا عکس، یه شماره تلفن گوشه صفحه. سایت هست، ولی کاری برای بیزینس نمی‌کنه. مشتری نمی‌فهمه چرا باید تو رو انتخاب کنه، گوگل هم نمی‌فهمه کِی باید نشونت بده.',
        en: "A template, a few photos, a phone number tucked in a corner. The site is there, but it isn't doing anything for the business. Customers can't tell why they should pick you, and Google can't tell when to show you.",
      },
    },
    includes: {
      fa: [
        'طراحی اختصاصی، نه قالب آماده',
        'ساختار صفحات و مسیر مشتری',
        'طراحی جدی برای موبایل، نه نسخه کوچیک‌شده دسکتاپ',
        'نوشتن یا ویرایش متن‌ها به فارسی و انگلیسی',
        'سئوی پایه از روز اول',
        'سرعت بالا و Core Web Vitals خوب',
        'فرم تماس، واتساپ و دکمه تماس',
        'اتصال به Google Analytics و Search Console',
      ],
      en: [
        'Custom design, not a template',
        'Page structure and customer journey',
        'Proper mobile design, not a shrunk desktop',
        'Copywriting or editing in Persian and English',
        'SEO foundations from day one',
        'Fast loading and healthy Core Web Vitals',
        'Contact form, WhatsApp and click-to-call',
        'Google Analytics and Search Console set-up',
      ],
    },
    audience: {
      fa: [
        'بیزینسی که هنوز سایت نداره',
        'کسی که تازه داره یه بیزینس راه می‌ندازه',
        'بیزینسی که مشتری‌هاش از اینستاگرام و واتساپ میان و حالا یه خونه آنلاین درست‌وحسابی می‌خواد',
      ],
      en: [
        "Businesses that don't have a website yet",
        'Anyone launching something new',
        'Businesses that live on Instagram and WhatsApp and now want a proper home online',
      ],
    },
    benefits: {
      fa: [
        { title: 'اعتماد از نگاه اول', text: 'آدم‌ها توی چند ثانیه تصمیم می‌گیرن بمونن یا برن. سایت باید همون اول بگه که حرفه‌ای هستی.' },
        { title: 'تماس راحت‌تر', text: 'هر صفحه یه کار مشخص داره: مشتری رو یه قدم نزدیک‌تر کنه.' },
        { title: 'آماده برای گوگل', text: 'ساختار، سرعت و محتوا طوری ساخته می‌شه که سئو از همون اول جواب بده.' },
      ],
      en: [
        { title: 'Trust at first glance', text: 'People decide in seconds whether to stay. Your site should say "professional" straight away.' },
        { title: 'Easier to get in touch', text: 'Every page has one job: move the customer one step closer.' },
        { title: 'Ready for Google', text: 'Structure, speed and content built so SEO works from the start.' },
      ],
    },
    relatedCaseStudy: 'anar-kitchen',
    startingPackage: 'first',
    faqs: {
      fa: [
        { q: 'از قالب آماده استفاده می‌کنید؟', a: 'نه. هر سایت از اول برای همون بیزینس طراحی می‌شه. البته جایی که منطقیه از ابزارهای آماده استفاده می‌کنیم که هزینه بی‌دلیل بالا نره.' },
        { q: 'متن‌های سایت رو کی می‌نویسه؟', a: 'اگر بخوای، ما. متن‌ها رو با خودت جلو می‌بریم که لحنش لحن بیزینس خودت باشه، نه یه متن کلی.' },
        { q: 'بعداً خودم می‌تونم سایت رو تغییر بدم؟', a: 'آره. یه پنل ساده تحویل می‌گیری و یادت می‌دیم چطور متن و عکس‌ها رو عوض کنی.' },
      ],
      en: [
        { q: 'Do you use templates?', a: "No. Each site is designed for that business. Where it makes sense we use proven tools so costs don't climb for no reason." },
        { q: 'Who writes the content?', a: "We can. We'll work through it with you so it sounds like your business, not a generic brochure." },
        { q: 'Can I edit the site myself later?', a: "Yes. You'll get a simple editor and we'll show you how to update text and images." },
      ],
    },
  },
  {
    slug: 'seo',
    tier: 'primary',
    variant: 'type',
    name: { fa: 'سئو', en: 'SEO' },
    menuBlurb: { fa: 'که وقتی دنبالت می‌گردن، پیدات کنن.', en: 'So people find you when they look.' },
    homeBlurb: {
      fa: 'کمک می‌کنیم وقتی مشتری دنبالت می‌گرده، راحت‌تر پیدات کنه.',
      en: "We help customers find you when they're already looking.",
    },
    seo: {
      title: { fa: 'سئو برای بیزینس‌های ایرانی در بریتانیا | دریچه', en: 'SEO for Iranian-Owned Businesses in the UK | Daricheh' },
      description: {
        fa: 'سئوی فنی، محتوا و کلمات کلیدی فارسی و انگلیسی برای بیزینس‌های ایرانی در بریتانیا. بدون قول‌های عجیب، با گزارش قابل‌فهم.',
        en: 'Technical SEO, content and Persian/English keyword research for Iranian-owned UK businesses. No silly promises, clear reporting.',
      },
    },
    hero: {
      title: { fa: ['مشتری دنبالت می‌گرده.', 'بذار *پیدات کنه*.'], en: ['Customers are looking.', 'Let them *find you*.'] },
      lead: {
        fa: 'سئوی واقعی، بدون جادو و بدون قول «صفحه اول توی یه هفته». کار درست، روی سایت درست، برای جستجوهای درست.',
        en: "Real SEO. No magic and no 'page one in a week'. The right work, on the right site, for the right searches.",
      },
    },
    problem: {
      title: { fa: 'سایت داری، ولی کسی نمی‌بینه.', en: 'You have a website. Nobody sees it.' },
      text: {
        fa: 'اگر توی گوگل نباشی، برای خیلی از مشتری‌ها اصلاً وجود نداری. مشکل هم معمولاً یه چیز نیست: ساختار، سرعت، محتوا، و اینکه دقیقاً برای چه جستجوهایی می‌خوای دیده بشی.',
        en: "If you're not on Google, for most customers you don't exist. It's rarely one thing: structure, speed, content, and knowing exactly which searches you want to appear for.",
      },
    },
    includes: {
      fa: [
        'بررسی فنی کامل سایت (SEO Audit)',
        'تحقیق کلمات کلیدی فارسی، انگلیسی و فینگلیش',
        'بهینه‌سازی عنوان‌ها، توضیحات و ساختار صفحات',
        'سرعت و Core Web Vitals',
        'دیتای ساختاریافته (Schema)',
        'برنامه محتوا و نوشتن مقاله',
        'لینک‌سازی داخلی',
        'گزارش ماهانه ساده و قابل‌فهم',
      ],
      en: [
        'Full technical SEO audit',
        'Keyword research in English, Persian and Finglish',
        'Titles, descriptions and page structure',
        'Speed and Core Web Vitals',
        'Structured data (Schema)',
        'Content plan and article writing',
        'Internal linking',
        'Plain-English monthly reports',
      ],
    },
    audience: {
      fa: [
        'بیزینسی که سایت داره ولی ازش مشتری نمی‌گیره',
        'کسی که توی یه بازار شلوغ و رقابتی کار می‌کنه',
        'بیزینسی که می‌خواد به‌جای اینکه فقط پول تبلیغ بده، ترافیک ماندگار داشته باشه',
      ],
      en: [
        "Businesses with a website that isn't bringing in customers",
        'Anyone in a crowded, competitive market',
        'Businesses that want lasting traffic, not just paid ads',
      ],
    },
    benefits: {
      fa: [
        { title: 'مشتری‌ای که خودش دنبالته', text: 'کسی که سرچ می‌کنه همین الان یه نیاز داره. این بهترین نوع مشتریه.' },
        { title: 'ترافیکی که با قطع تبلیغ قطع نمی‌شه', text: 'سئو کند شروع می‌شه، ولی وقتی جا بیفته، هر ماه برات کار می‌کنه.' },
        { title: 'گزارش به زبون آدمیزاد', text: 'هر ماه می‌گیم چی‌کار کردیم، چی تغییر کرده و قدم بعدی چیه. بدون اصطلاحات عجیب.' },
      ],
      en: [
        { title: 'Customers who are already looking', text: 'Someone searching has a need right now. That is the best kind of customer.' },
        { title: "Traffic that doesn't stop when ads do", text: 'SEO starts slowly, but once it settles it works for you every month.' },
        { title: 'Reports in plain English', text: "Each month: what we did, what changed and what's next. No jargon." },
      ],
    },
    relatedCaseStudy: 'nava-dental',
    startingPackage: 'growth',
    faqs: {
      fa: [
        { q: 'تضمین می‌کنید صفحه اول گوگل بیام؟', a: 'نه، و اگر کسی تضمین کرد، بهش شک کن. چیزی که تضمین می‌کنیم کار درست و گزارش شفافه.' },
        { q: 'از کِی نتیجه می‌بینم؟', a: 'معمولاً اولین تغییرهای واقعی بین سه تا شش ماه دیده می‌شه. بستگی به رقابت و وضعیت فعلی سایت داره.' },
        { q: 'فینگلیش هم مهمه؟', a: 'خیلی‌ها مثلاً «tarahi site» سرچ می‌کنن. این جستجوها رو جدی می‌گیریم، بدون اینکه متن سایت رو خراب کنیم.' },
      ],
      en: [
        { q: 'Do you guarantee page one?', a: "No — and be wary of anyone who does. What we guarantee is sound work and honest reporting." },
        { q: 'When will I see results?', a: 'Real movement usually shows in three to six months, depending on competition and where your site starts.' },
        { q: 'Does Finglish matter?', a: "Plenty of people search in Finglish, like 'tarahi site'. We plan for those searches without cluttering your copy." },
      ],
    },
  },
  {
    slug: 'local-seo',
    tier: 'primary',
    variant: 'split',
    name: { fa: 'سئو محلی', en: 'Local SEO' },
    menuBlurb: { fa: 'Google Maps و جستجوهای «نزدیک من».', en: "Google Maps and 'near me' searches." },
    homeBlurb: {
      fa: 'برای بیزینس‌هایی که مشتری محلی می‌خوان؛ از Google Maps تا صفحات محلی و جستجوهای نزدیک به شما.',
      en: "For businesses that want local customers: Google Maps, local pages and 'near me' searches.",
    },
    seo: {
      title: { fa: 'سئو محلی و Google Maps برای بیزینس‌های ایرانی | دریچه', en: 'Local SEO & Google Maps for Iranian-Owned Businesses | Daricheh' },
      description: {
        fa: 'بهینه‌سازی Google Business Profile، نقشه گوگل و جستجوهای محلی برای رستوران، سالن، کلینیک و بیزینس‌های ایرانی در بریتانیا.',
        en: 'Google Business Profile, Maps and local search for Iranian-owned restaurants, salons, clinics and local services across the UK.',
      },
    },
    hero: {
      title: { fa: ['وقتی سرچ می‌کنن «نزدیک من»،', 'باید *تو* رو ببینن.'], en: ["When they search 'near me',", 'they should see *you*.'] },
      lead: {
        fa: 'برای رستوران، سالن، کلینیک و هر بیزینسی که مشتری محلی می‌خواد. از Google Business Profile تا نقشه و نظرات مشتری‌ها.',
        en: 'For restaurants, salons, clinics and any business that wants local customers. From your Google Business Profile to Maps and reviews.',
      },
    },
    problem: {
      title: { fa: 'مشتری از دو تا خیابون اون‌ورتر رد می‌شه.', en: 'Customers walk past, two streets away.' },
      text: {
        fa: 'پروفایل گوگلت ناقصه، ساعت کاری اشتباهه، عکس‌ها مال سه سال پیشه و نظرها بی‌جواب موندن. نتیجه؟ کسی که سرچ کرده، رفته سراغ بغل‌دستیت.',
        en: "Your Google profile is half-finished, the opening hours are wrong, the photos are three years old and reviews have no replies. The result? The person who searched went next door.",
      },
    },
    includes: {
      fa: [
        'راه‌اندازی یا بهینه‌سازی Google Business Profile',
        'دسته‌بندی، خدمات، عکس‌ها و پست‌ها',
        'برنامه گرفتن نظر و جواب دادن بهشون',
        'یکسان کردن نام، آدرس و تلفن توی دایرکتوری‌ها',
        'صفحه‌های محلی روی سایت، فقط جایی که واقعاً لازمه',
        'بررسی رقبای محلی',
      ],
      en: [
        'Google Business Profile set-up or clean-up',
        'Categories, services, photos and posts',
        'A plan for getting and replying to reviews',
        'Consistent name, address and phone across directories',
        'Local pages on your site, only where they make sense',
        'Local competitor review',
      ],
    },
    audience: {
      fa: ['رستوران‌ها و کافه‌ها', 'سالن‌ها و بیزینس‌های زیبایی', 'کلینیک‌ها و دندون‌پزشکی‌ها', 'خدمات محلی و پیمانکارها'],
      en: ['Restaurants and cafés', 'Salons and beauty businesses', 'Clinics and dentists', 'Local services and trades'],
    },
    benefits: {
      fa: [
        { title: 'روی نقشه دیده می‌شی', text: 'جایی که مشتری محلی تصمیم می‌گیره کجا بره.' },
        { title: 'نظرهایی که کار می‌کنن', text: 'نظر خوب جذب می‌کنه؛ جواب خوب به نظر بد، اعتماد می‌سازه.' },
        { title: 'اطلاعات درست، همه‌جا', text: 'ساعت، آدرس و تلفن درست؛ هم برای مشتری، هم برای گوگل.' },
      ],
      en: [
        { title: 'Visible on the map', text: 'Right where local customers decide where to go.' },
        { title: 'Reviews that work for you', text: 'Good reviews attract. A good reply to a bad one builds trust.' },
        { title: 'Correct details, everywhere', text: 'Hours, address and phone right — for customers and for Google.' },
      ],
    },
    relatedCaseStudy: 'mahi-salon',
    startingPackage: 'growth',
    faqs: {
      fa: [
        { q: 'برای سئو محلی حتماً سایت لازمه؟', a: 'نه حتماً، ولی خیلی کمک می‌کنه. پروفایل گوگل و سایت با هم بهتر از هر کدوم به‌تنهایی کار می‌کنن.' },
        { q: 'بیزینس من آدرس عمومی نداره، باز هم می‌شه؟', a: 'آره. برای خدماتی که پیش مشتری می‌رن، پروفایل رو به‌صورت «منطقه خدمات» تنظیم می‌کنیم.' },
        { q: 'نظر جعلی هم می‌ذارید؟', a: 'نه. هیچ‌وقت. هم خلاف قوانین گوگله، هم به اعتبار بیزینست ضربه می‌زنه.' },
      ],
      en: [
        { q: 'Do I need a website for local SEO?', a: 'Not strictly, but it helps a lot. Your Google profile and website work better together.' },
        { q: "I don't have a public address. Can you still help?", a: 'Yes. For businesses that travel to customers, we set the profile up with a service area instead.' },
        { q: 'Will you post fake reviews?', a: "No. Never. It's against Google's rules and it damages your reputation." },
      ],
    },
  },
  {
    slug: 'ecommerce',
    tier: 'supporting',
    variant: 'frame',
    name: { fa: 'فروشگاه اینترنتی', en: 'Ecommerce' },
    menuBlurb: { fa: 'فروش آنلاین، ساده و مرتب.', en: 'Selling online, simply.' },
    homeBlurb: { fa: 'فروشگاهی که خرید ازش راحته.', en: "A shop that's easy to buy from." },
    seo: {
      title: { fa: 'طراحی فروشگاه اینترنتی در بریتانیا | دریچه', en: 'Ecommerce Website Design in the UK | Daricheh' },
      description: {
        fa: 'طراحی فروشگاه اینترنتی برای برندها و بیزینس‌های ایرانی در بریتانیا؛ با پرداخت امن، تنظیم ارسال و سئوی محصول.',
        en: 'Ecommerce websites for Iranian-owned brands in the UK, with secure payments, shipping set-up and product SEO.',
      },
    },
    hero: {
      title: { fa: ['یه فروشگاه که', 'خرید ازش *راحته*.'], en: ["A shop that's", '*easy* to buy from.'] },
      lead: {
        fa: 'از چند تا محصول تا یه کاتالوگ کامل. با پرداخت امن، ارسال توی بریتانیا و صفحه محصول‌هایی که واقعاً می‌فروشن.',
        en: 'From a handful of products to a full catalogue. Secure payments, UK shipping and product pages that actually sell.',
      },
    },
    problem: {
      title: { fa: 'سبد خرید نصفه موند، مشتری رفت.', en: 'Half-full basket. Customer gone.' },
      text: {
        fa: 'خیلی از فروشگاه‌ها محصول دارن، ولی مسیر خرید رو جدی نمی‌گیرن. یه مرحله اضافه، یه هزینه ارسال غافلگیرکننده، یه صفحه کند روی موبایل؛ همین‌ها کافیه که مشتری بی‌خیال بشه.',
        en: "Plenty of shops have products but don't take the checkout seriously. One extra step, a surprise delivery charge, a slow mobile page — that's all it takes.",
      },
    },
    includes: {
      fa: [
        'طراحی فروشگاه روی Shopify یا WooCommerce',
        'صفحه محصول و دسته‌بندی',
        'پرداخت امن (Stripe، PayPal، Apple Pay)',
        'تنظیم ارسال، مالیات و VAT بریتانیا',
        'سئوی محصول و دسته‌بندی',
        'آموزش مدیریت فروشگاه',
      ],
      en: [
        'Shop design on Shopify or WooCommerce',
        'Product and category pages',
        'Secure payments (Stripe, PayPal, Apple Pay)',
        'UK shipping, tax and VAT set-up',
        'Product and category SEO',
        'Training to run the shop yourself',
      ],
    },
    audience: {
      fa: ['برندهایی که محصول ایرانی یا دست‌ساز می‌فروشن', 'مغازه‌هایی که می‌خوان آنلاین هم بفروشن', 'کسایی که الان فقط از دایرکت اینستاگرام می‌فروشن'],
      en: ['Brands selling Persian or handmade products', 'Shops that want to sell online too', 'Anyone currently selling through Instagram DMs'],
    },
    benefits: {
      fa: [
        { title: 'خرید بدون دردسر', text: 'مسیر کوتاه و روشن، از دیدن محصول تا پرداخت.' },
        { title: 'کمتر کار دستی', text: 'سفارش، موجودی و ایمیل‌ها خودکار؛ تو به فروش برس.' },
        { title: 'پیدا شدن محصول‌ها', text: 'هر محصول یه صفحه که گوگل هم می‌فهمه.' },
      ],
      en: [
        { title: 'Frictionless checkout', text: 'A short, clear path from product to payment.' },
        { title: 'Less admin', text: 'Orders, stock and emails automated, so you can focus on selling.' },
        { title: 'Products people can find', text: 'Every product gets a page Google understands.' },
      ],
    },
    relatedCaseStudy: 'zarin-studio',
    startingPackage: 'complete',
    faqs: {
      fa: [
        { q: 'Shopify بهتره یا WooCommerce؟', a: 'بستگی داره. Shopify ساده‌تر و کم‌دردسرتره، WooCommerce انعطاف بیشتری داره. با هم می‌بینیم کدوم برای بیزینست بهتره.' },
        { q: 'می‌تونم به خارج از بریتانیا هم بفروشم؟', a: 'آره، ارسال بین‌المللی و ارزهای مختلف رو هم می‌شه تنظیم کرد.' },
      ],
      en: [
        { q: 'Shopify or WooCommerce?', a: "It depends. Shopify is simpler to run; WooCommerce is more flexible. We'll work out which suits you." },
        { q: 'Can I sell outside the UK?', a: 'Yes. International shipping and multiple currencies can be set up.' },
      ],
    },
  },
  {
    slug: 'website-redesign',
    tier: 'supporting',
    variant: 'split',
    name: { fa: 'بازطراحی سایت', en: 'Website Redesign' },
    menuBlurb: { fa: 'سایت قدیمی، شروع تازه.', en: 'Old site, fresh start.' },
    homeBlurb: { fa: 'سایت قدیمی، شروع تازه؛ بدون از دست دادن رتبه گوگل.', en: 'A fresh start without losing your Google rankings.' },
    seo: {
      title: { fa: 'بازطراحی سایت بدون از دست دادن سئو | دریچه', en: 'Website Redesign Without Losing Your SEO | Daricheh' },
      description: {
        fa: 'بازطراحی سایت‌های قدیمی برای بیزینس‌های ایرانی در بریتانیا؛ طراحی تازه، سرعت بهتر و حفظ رتبه گوگل با ریدایرکت درست.',
        en: 'Redesigns for Iranian-owned UK businesses: a fresh design, better speed, and your Google rankings protected with proper redirects.',
      },
    },
    hero: {
      title: { fa: ['بیزینست رشد کرده.', 'سایتت *جا مونده*.'], en: ['Your business has grown.', 'Your website *hasn’t*.'] },
      lead: {
        fa: 'بازطراحی یعنی شروع تازه، بدون اینکه چیزهای خوب قبلی رو از دست بدی؛ مخصوصاً رتبه گوگل.',
        en: 'A redesign is a fresh start without losing what already works — especially your Google rankings.',
      },
    },
    problem: {
      title: { fa: 'سایت قدیمی هر روز یه کم مشتری می‌پرونه.', en: 'An old site quietly turns customers away.' },
      text: {
        fa: 'کند باز می‌شه، روی موبایل به‌هم‌ریخته‌ست، یا دیگه شبیه کیفیت کارت نیست. ولی بازطراحی بی‌حساب‌وکتاب هم می‌تونه رتبه‌ای که سال‌ها براش زحمت کشیدی رو یه‌شبه از بین ببره.',
        en: "It's slow, it's messy on mobile, or it no longer reflects the quality of your work. But a careless redesign can wipe out years of rankings overnight.",
      },
    },
    includes: {
      fa: [
        'بررسی سایت فعلی و چیزهایی که باید بمونن',
        'طراحی و ساختار جدید',
        'نقشه ریدایرکت (301) برای حفظ سئو',
        'انتقال محتوا و بازنویسی هر جا که لازمه',
        'سرعت و تجربه بهتر روی موبایل',
        'زیر نظر گرفتن سایت بعد از انتشار',
      ],
      en: [
        'Review of the current site and what should stay',
        'New design and structure',
        'A 301 redirect map to protect SEO',
        'Content migration, rewritten where needed',
        'Better speed and mobile experience',
        'Post-launch monitoring',
      ],
    },
    audience: {
      fa: ['سایتی که چند ساله دست نخورده', 'بیزینسی که برندش عوض شده', 'سایتی که روی موبایل اذیت می‌کنه'],
      en: ["Sites that haven't been touched in years", 'Businesses that have rebranded', 'Sites that are painful on mobile'],
    },
    benefits: {
      fa: [
        { title: 'ظاهری در حد کیفیت کارت', text: 'سایت باید همون‌قدر حرفه‌ای باشه که خود بیزینس.' },
        { title: 'رتبه‌ای که حفظ می‌شه', text: 'قبل از هر تغییری، می‌دونیم چی داره ترافیک میاره.' },
        { title: 'پایه‌ای برای آینده', text: 'ساختاری که بعداً راحت می‌شه بهش اضافه کرد.' },
      ],
      en: [
        { title: 'A site that matches your work', text: 'Your website should be as professional as your business.' },
        { title: 'Rankings protected', text: 'Before changing anything, we know what brings in traffic.' },
        { title: 'Built to grow', text: 'A structure that is easy to add to later.' },
      ],
    },
    relatedCaseStudy: 'nava-dental',
    startingPackage: 'growth',
    faqs: {
      fa: [
        { q: 'با بازطراحی رتبه گوگلم از بین نمی‌ره؟', a: 'اگر درست انجام بشه، نه. قبل از انتشار، همه آدرس‌های مهم رو نقشه‌برداری می‌کنیم و ریدایرکت‌ها رو تنظیم می‌کنیم.' },
        { q: 'می‌شه بعضی قسمت‌های سایت فعلی بمونه؟', a: 'آره. اگه چیزی خوب کار می‌کنه، دلیلی نداره دورش بندازیم.' },
      ],
      en: [
        { q: 'Will a redesign hurt my Google rankings?', a: 'Not if it is done properly. We map every important URL and set redirects before launch.' },
        { q: 'Can we keep parts of the current site?', a: "Yes. If something works, there's no reason to throw it away." },
      ],
    },
  },
  {
    slug: 'website-support',
    tier: 'supporting',
    variant: 'type',
    name: { fa: 'پشتیبانی سایت', en: 'Website Support' },
    menuBlurb: { fa: 'آپدیت، امنیت و یه نفر که جواب بده.', en: 'Updates, security and someone who replies.' },
    homeBlurb: { fa: 'آپدیت، امنیت و یه نفر که وقتی پیام می‌دی، جواب بده.', en: 'Updates, security and someone who actually replies.' },
    seo: {
      title: { fa: 'پشتیبانی و نگهداری سایت | دریچه', en: 'Website Maintenance & Support | Daricheh' },
      description: {
        fa: 'پشتیبانی ماهانه سایت برای بیزینس‌های ایرانی در بریتانیا؛ آپدیت، بکاپ، امنیت، تغییرات کوچیک و جواب سریع.',
        en: 'Monthly website maintenance for Iranian-owned UK businesses: updates, backups, security, small changes and quick replies.',
      },
    },
    hero: {
      title: { fa: ['سایت با ما،', 'تو به *بیزینست* برس.'], en: ['Leave the website to us.', 'You run the *business*.'] },
      lead: {
        fa: 'آپدیت، بکاپ، امنیت، تغییرات کوچیک، و یه نفر که وقتی پیام می‌دی واقعاً جواب بده.',
        en: 'Updates, backups, security, small changes — and someone who actually replies when you message.',
      },
    },
    problem: {
      title: { fa: 'طراح قبلی دیگه جواب نمی‌ده؟', en: 'Old developer stopped replying?' },
      text: {
        fa: 'خیلی از بیزینس‌ها سایت دارن ولی هیچ‌کس مسئولش نیست. افزونه‌ها آپدیت نمی‌شن، بکاپ وجود نداره، و عوض کردن ساعت کاری سه هفته طول می‌کشه.',
        en: 'Lots of businesses have a website that nobody looks after. Plugins go out of date, there are no backups, and changing the opening hours takes three weeks.',
      },
    },
    includes: {
      fa: [
        'آپدیت‌های امنیتی و فنی',
        'بکاپ منظم',
        'زیر نظر داشتن سرعت و در دسترس بودن سایت',
        'تغییرات کوچیک محتوایی هر ماه',
        'اتوماسیون‌های کوچیک، فقط جایی که واقعاً وقت آزاد می‌کنه',
        'گزارش کوتاه ماهانه',
        'پشتیبانی از طریق واتساپ و ایمیل',
      ],
      en: [
        'Security and software updates',
        'Regular backups',
        'Speed and uptime monitoring',
        'Small content changes each month',
        'Small automations, only where they genuinely save time',
        'A short monthly report',
        'Support over WhatsApp and email',
      ],
    },
    audience: {
      fa: ['هر بیزینسی که سایت داره و وقت نگهداریش رو نداره', 'سایت‌هایی که با ما ساخته شدن', 'سایت‌هایی که جای دیگه ساخته شدن (بعد از یه بررسی اولیه)'],
      en: ["Any business with a site and no time to look after it", 'Sites we have built', 'Sites built elsewhere (after an initial check)'],
    },
    benefits: {
      fa: [
        { title: 'خیال راحت', text: 'می‌دونی یکی حواسش به سایته.' },
        { title: 'جواب سریع', text: 'یه پیام توی واتساپ، و کار انجام می‌شه.' },
        { title: 'سایت همیشه به‌روز', text: 'امن‌تر، سریع‌تر، و با اطلاعات درست.' },
      ],
      en: [
        { title: 'Peace of mind', text: "Someone is keeping an eye on your site." },
        { title: 'Quick replies', text: 'One WhatsApp message and it gets done.' },
        { title: 'Always up to date', text: 'Safer, faster and with the right information.' },
      ],
    },
    startingPackage: undefined,
    faqs: {
      fa: [
        { q: 'سایتم رو کس دیگه‌ای ساخته، باز هم پشتیبانی می‌کنید؟', a: 'معمولاً آره. اول یه بررسی کوتاه می‌کنیم که ببینیم سایت در چه وضعیتیه.' },
        { q: 'قرارداد بلندمدت لازمه؟', a: 'نه. ماهانه‌ست و هر وقت خواستی می‌تونی تمومش کنی.' },
      ],
      en: [
        { q: 'Someone else built my site. Can you still support it?', a: "Usually, yes. We'll do a short review first to see what state it's in." },
        { q: 'Is there a long contract?', a: 'No. It is monthly and you can stop whenever you like.' },
      ],
    },
  },
];

/** Smaller offerings shown in the homepage's lighter services list. They point to the closest service page. */
export const supportingOfferings: { name: Localized; blurb: Localized; link: string }[] = [
  {
    name: { fa: 'Google Maps', en: 'Google Maps' },
    blurb: { fa: 'پروفایل گوگلت، کامل و فعال.', en: 'Your Google profile, complete and active.' },
    link: 'local-seo',
  },
  {
    name: { fa: 'SEO Audit', en: 'SEO Audit' },
    blurb: { fa: 'یه چکاپ کامل: چی درسته، چی خرابه، از کجا شروع کنیم.', en: "A full check-up: what's working, what's broken, where to start." },
    link: 'seo',
  },
  {
    name: { fa: 'AI و اتوماسیون', en: 'AI & Automation' },
    blurb: {
      fa: 'فقط جایی که واقعاً به کار بیاد: جواب سریع‌تر به مشتری، کار تکراری کمتر.',
      en: 'Only where it genuinely helps: faster replies, fewer repetitive tasks.',
    },
    link: 'contact',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const primaryServices = services.filter((s) => s.tier === 'primary');
export const supportingServices = services.filter((s) => s.tier === 'supporting');
