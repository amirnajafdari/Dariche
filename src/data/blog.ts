import type { Lang, Localized } from '@/i18n';
import type { ImageAsset } from './caseStudies';
import type { ServiceSlug } from './services';

export type CategoryId = 'web-design' | 'seo' | 'google-maps' | 'uk-business' | 'marketing' | 'ux' | 'ai';

export const categories: { id: CategoryId; name: Localized }[] = [
  { id: 'web-design', name: { fa: 'طراحی سایت', en: 'Web design' } },
  { id: 'seo', name: { fa: 'سئو', en: 'SEO' } },
  { id: 'google-maps', name: { fa: 'Google Maps', en: 'Google Maps' } },
  { id: 'uk-business', name: { fa: 'بیزینس در بریتانیا', en: 'Business in the UK' } },
  { id: 'marketing', name: { fa: 'بازاریابی آنلاین', en: 'Online marketing' } },
  { id: 'ux', name: { fa: 'تجربه کاربری', en: 'User experience' } },
  { id: 'ai', name: { fa: 'AI و اتوماسیون', en: 'AI & automation' } },
];

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string };

export interface Post {
  /** Shared between translations of the same article — used for hreflang */
  key: string;
  lang: Lang;
  slug: string;
  sample?: boolean;
  title: string;
  excerpt: string;
  category: CategoryId;
  /** ISO dates */
  date: string;
  updated?: string;
  readingMinutes: number;
  cover?: ImageAsset;
  relatedService?: ServiceSlug;
  seo?: {
    title?: string;
    description?: string;
    /**
     * Finglish / alternative search phrases this article is written to answer.
     * Used for internal planning and in meta keywords only — never stuffed into visible copy.
     */
    searchPhrases?: string[];
  };
  body: Block[];
}

// SAMPLE CONTENT — real, useful drafts, but review before publishing.
export const posts: Post[] = [
  {
    key: 'search-languages',
    lang: 'fa',
    slug: 'farsi-english-finglish-search',
    sample: true,
    title: 'مشتری‌های ایرانی چطور سرچ می‌کنن؟ فارسی، انگلیسی، فینگلیش',
    excerpt: 'یه نفر می‌نویسه «طراحی سایت»، یکی «web designer» و یکی «tarahi site». اگه سایتت فقط برای یکی‌شون آماده باشه، بقیه رو از دست دادی.',
    category: 'seo',
    date: '2026-10-01',
    readingMinutes: 4,
    relatedService: 'seo',
    seo: { searchPhrases: ['tarahi site', 'seo irani', 'tarahi site dar UK'] },
    body: [
      { type: 'p', text: 'وقتی بیزینست مشتری ایرانی داره، یه سؤال ساده خیلی مهم می‌شه: مشتری‌هات دقیقاً با چه کلمه‌هایی دنبالت می‌گردن؟ جوابش معمولاً یه زبان نیست.' },
      { type: 'h2', text: 'سه جور جستجو، یه مشتری' },
      { type: 'p', text: 'یه نفر که سال‌هاست بریتانیا زندگی می‌کنه احتمالاً انگلیسی سرچ می‌کنه. کسی که تازه اومده، فارسی. و خیلی‌ها هم روی گوشی‌ای که کیبورد فارسی نداره، فینگلیش می‌نویسن.' },
      { type: 'ul', items: ['فارسی: «رستوران ایرانی لندن»', 'انگلیسی: «persian restaurant near me»', 'فینگلیش: «resturan irani london»'] },
      { type: 'h2', text: 'یعنی باید سه تا سایت داشته باشیم؟' },
      { type: 'p', text: 'نه. یه سایت دو زبانه‌ی درست، با ساختار خوب، کافیه. فینگلیش رو نباید توی متن اصلی سایت چپوند؛ جاش توی عنوان‌ها، توضیحات، سؤال‌های متداول و مقاله‌هاست.' },
      { type: 'quote', text: 'هدف اینه که سایت برای آدم‌ها طبیعی باشه و برای گوگل واضح.' },
      { type: 'h2', text: 'از کجا شروع کنیم؟' },
      { type: 'p', text: 'یه لیست از ده تا جستجویی که فکر می‌کنی مشتری‌هات می‌کنن بنویس؛ به هر سه شکل. بعد ببین سایتت برای کدومشون واقعاً جواب داره. معمولاً همین تمرین ساده کلی چیز نشون می‌ده.' },
    ],
  },
  {
    key: 'google-business-profile',
    lang: 'fa',
    slug: 'google-business-profile',
    sample: true,
    title: 'Google Business Profile؛ مهم‌ترین صفحه‌ای که شاید هنوز درستش نکردی',
    excerpt: 'برای خیلی از بیزینس‌های محلی، اولین چیزی که مشتری می‌بینه سایت نیست؛ پروفایل گوگله.',
    category: 'google-maps',
    date: '2026-09-18',
    readingMinutes: 5,
    relatedService: 'local-seo',
    body: [
      { type: 'p', text: 'یکی سرچ می‌کنه «کافه نزدیک من». قبل از هر سایتی، یه نقشه و سه تا بیزینس می‌بینه. اگه تو جزوشون نباشی، عملاً توی اون جستجو وجود نداری.' },
      { type: 'h2', text: 'پنج چیزی که همین امروز می‌شه چک کرد' },
      { type: 'ul', items: ['دسته‌بندی اصلی درسته؟', 'ساعت کاری، مخصوصاً روزهای تعطیل، به‌روزه؟', 'عکس‌ها جدید و واقعی‌ان؟', 'به نظرها جواب دادی؟', 'لینک سایت و شماره تماس درسته؟'] },
      { type: 'h2', text: 'نظرها رو جدی بگیر' },
      { type: 'p', text: 'نظر خوب کمک می‌کنه، ولی جواب دادن به نظرها، مخصوصاً نظرهای بد، از اون هم مهم‌تره. یه جواب آروم و محترمانه به مشتری بعدی نشون می‌ده که پشت این بیزینس یه آدم واقعیه.' },
      { type: 'p', text: 'و یه نکته‌ی مهم: نظر جعلی نه. هم خلاف قوانین گوگله، هم دیر یا زود اعتبارت رو می‌بره.' },
    ],
  },
  {
    key: 'persian-copy',
    lang: 'fa',
    slug: 'persian-website-copy',
    sample: true,
    title: 'چرا متن فارسی سایتت نباید شبیه Google Translate باشه',
    excerpt: 'مشتری ایرانی از جمله‌ی اول می‌فهمه متن ترجمه شده یا یه نفر واقعاً براش نوشته.',
    category: 'ux',
    date: '2026-09-02',
    readingMinutes: 3,
    relatedService: 'web-design',
    body: [
      { type: 'p', text: '«درخواست شما با موفقیت ثبت گردید.» این جمله رو همه‌مون هزار بار دیدیم. درسته، ولی هیچ حسی نداره. انگار با یه اداره حرف می‌زنی، نه با یه بیزینس.' },
      { type: 'h2', text: 'رسمی بودن با حرفه‌ای بودن فرق داره' },
      { type: 'p', text: 'می‌شه محترم و حرفه‌ای بود، بدون اینکه شبیه نامه اداری حرف زد. «مرسی، پیامت رسید. خیلی زود باهات تماس می‌گیریم.» همون پیامه، ولی آدم‌وار.' },
      { type: 'h2', text: 'ترجمه کافی نیست' },
      { type: 'p', text: 'متن انگلیسی سایت رو نمی‌شه کلمه به کلمه برگردوند. هر زبان ریتم و شوخی و حساسیت خودش رو داره. بهترین متن فارسی معمولاً از اول فارسی فکر شده.' },
    ],
  },
  {
    key: 'search-languages',
    lang: 'en',
    slug: 'how-iranian-customers-search',
    sample: true,
    title: 'How Iranian customers search: Persian, English and Finglish',
    excerpt: "One person types 'web designer', another 'طراحی سایت', another 'tarahi site'. If your site only answers one, you miss the rest.",
    category: 'seo',
    date: '2026-10-01',
    readingMinutes: 4,
    relatedService: 'seo',
    body: [
      { type: 'p', text: 'If your customers are Iranian, one simple question matters a lot: what exactly do they type when they look for you? The answer is rarely one language.' },
      { type: 'h2', text: 'Three ways to search, one customer' },
      { type: 'p', text: 'Someone who has lived in the UK for years probably searches in English. Someone newer may search in Persian. And many people type Finglish — Persian in Latin letters — on phones without a Persian keyboard.' },
      { type: 'h2', text: 'So do you need three websites?' },
      { type: 'p', text: 'No. A well-built bilingual site is enough. Finglish should not be stuffed into your main copy; it belongs in titles, descriptions, FAQs and articles.' },
      { type: 'quote', text: 'The aim is a site that reads naturally to people and clearly to Google.' },
    ],
  },
  {
    key: 'google-business-profile',
    lang: 'en',
    slug: 'google-business-profile',
    sample: true,
    title: "Google Business Profile: the page you probably haven't finished",
    excerpt: "For most local businesses, the first thing a customer sees isn't the website. It's the Google profile.",
    category: 'google-maps',
    date: '2026-09-18',
    readingMinutes: 4,
    relatedService: 'local-seo',
    body: [
      { type: 'p', text: "Someone searches 'café near me'. Before any website, they see a map and three businesses. If you're not one of them, you don't exist for that search." },
      { type: 'h2', text: 'Five things to check today' },
      { type: 'ul', items: ['Is the primary category right?', 'Are opening hours current, including holidays?', 'Are the photos recent and real?', 'Have you replied to reviews?', 'Are your website link and phone number correct?'] },
      { type: 'h2', text: 'Take reviews seriously' },
      { type: 'p', text: 'Good reviews help, but replying — especially to bad ones — matters even more. A calm, polite reply shows the next customer there is a real person behind the business.' },
    ],
  },
];

export const postsFor = (lang: Lang) =>
  posts.filter((p) => p.lang === lang).sort((a, b) => b.date.localeCompare(a.date));

export const translationOf = (post: Post) => posts.find((p) => p.key === post.key && p.lang !== post.lang);

export const categoryName = (id: CategoryId, lang: Lang) => categories.find((c) => c.id === id)?.name[lang] ?? id;
