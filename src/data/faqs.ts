import type { Localized } from '@/i18n';
import type { QA } from './services';

/** General FAQs — homepage. Service-specific FAQs live on each service in services.ts. */
export const homeFaqs: Localized<QA[]> = {
  fa: [
    {
      q: 'هزینه طراحی سایت چقدره؟',
      a: 'بستگی به اندازه و امکانات سایت داره. بسته‌هامون از £۹۵۰ شروع می‌شن و قیمت‌ها رو شفاف توی صفحه تعرفه‌ها گذاشتیم.',
    },
    {
      q: 'سایت می‌تونه هم فارسی باشه هم انگلیسی؟',
      a: 'آره، و این یکی از کارهای اصلی ماست. هر زبان طراحی و سئوی خودش رو داره، ولی هر دو یه برند هستن.',
    },
    {
      q: 'چقدر طول می‌کشه سایت آماده بشه؟',
      a: 'یه سایت کوچیک معمولاً سه تا چهار هفته. سایت‌های بزرگ‌تر یا فروشگاه‌ها بین شش تا ده هفته.',
    },
    {
      q: 'سئو چقدر زمان می‌بره؟',
      a: 'سئو کار بلندمدته. معمولاً بین سه تا شش ماه طول می‌کشه تا تغییرهای واقعی دیده بشه. هر کی قول یه‌هفته‌ای داد، بهش شک کن.',
    },
    {
      q: 'بعد از ساخت سایت هم پشتیبانی دارید؟',
      a: 'آره. هر بسته یه دوره پشتیبانی داره و بعدش هم اگر بخوای، پشتیبانی ماهانه هست.',
    },
    {
      q: 'Google Maps رو هم می‌تونید مدیریت کنید؟',
      a: 'آره. راه‌اندازی، بهینه‌سازی و مدیریت پروفایل گوگل بخشی از سئو محلیه.',
    },
    {
      q: 'اگر الان سایت داشته باشم ولی قدیمی باشه چی؟',
      a: 'اول یه نگاه بهش می‌ندازیم. گاهی چند تا تغییر کافیه، گاهی بازطراحی منطقی‌تره. هر چی که باشه، رک بهت می‌گیم.',
    },
  ],
  en: [
    {
      q: 'How much does a website cost?',
      a: 'It depends on size and features. Our packages start at £950, and all prices are on the pricing page.',
    },
    {
      q: 'Can my site be in both Persian and English?',
      a: "Yes, and it's one of the things we do best. Each language gets its own layout tuning and SEO, while staying one brand.",
    },
    {
      q: 'How long does a website take?',
      a: 'A small site usually takes three to four weeks. Larger sites and shops take six to ten.',
    },
    {
      q: 'How long does SEO take?',
      a: 'SEO is a long game. Real movement usually shows in three to six months. Be wary of anyone promising a week.',
    },
    {
      q: 'Do you offer support after launch?',
      a: 'Yes. Every package includes a support period, and monthly support is available afterwards.',
    },
    {
      q: 'Can you manage our Google Maps listing?',
      a: 'Yes. Setting up, optimising and managing your Google profile is part of local SEO.',
    },
    {
      q: 'What if I already have a site, but it’s dated?',
      a: "We'll take a look first. Sometimes a few changes are enough; sometimes a redesign makes more sense. Either way, we'll tell you straight.",
    },
  ],
};

export const pricingFaqs: Localized<QA[]> = {
  fa: [
    { q: 'قیمت‌ها شامل VAT هستن؟', a: 'اگر VAT به قیمت اضافه بشه، قبل از شروع کار شفاف توی پیشنهاد قیمت نوشته می‌شه. هیچ هزینه غافلگیرکننده‌ای در کار نیست.' },
    { q: 'می‌شه قسطی پرداخت کرد؟', a: 'آره. معمولاً نصف اول کار و نصف موقع تحویل. برای پروژه‌های بزرگ‌تر، سه قسط.' },
    { q: 'هاستینگ و دامنه چطور؟', a: 'کمکت می‌کنیم بهترین گزینه رو انتخاب کنی. دامنه و هاست به اسم خودت ثبت می‌شه و مال خودته.' },
    { q: 'اگه بسته‌ها دقیقاً به کارم نخوره؟', a: 'اشکالی نداره. بسته‌ها نقطه شروعن. بگو چی لازم داری، یه پیشنهاد دقیق می‌دیم.' },
  ],
  en: [
    { q: 'Do prices include VAT?', a: 'If VAT applies, it is shown clearly on your quote before any work starts. No surprises.' },
    { q: 'Can I pay in instalments?', a: 'Yes. Usually half to start and half on delivery. Larger projects can be split into three.' },
    { q: 'What about hosting and domains?', a: 'We help you choose. Your domain and hosting are registered in your name and belong to you.' },
    { q: "What if no package fits exactly?", a: "That's fine. Packages are a starting point. Tell us what you need and we'll give you a precise quote." },
  ],
};
