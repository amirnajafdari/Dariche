import type { Localized } from '@/i18n';
import type { QA } from './services';
import { formatGbp, getMonthlyPackage, getOneOffService } from './pricing';

const websitePrice = formatGbp(getOneOffService('website').price);
const shopPrice = formatGbp(getOneOffService('online-shop').price);
const setupPrice = formatGbp(getOneOffService('marketplace').price);
const ruzanPrice = formatGbp(getMonthlyPackage('ruzan').price);
const jaamPrice = formatGbp(getMonthlyPackage('jaam-khane').price);
const ersiPrice = formatGbp(getMonthlyPackage('ersi').price);

/** General FAQs — homepage. Service-specific FAQs live on each service in services.ts. */
export const homeFaqs: Localized<QA[]> = {
  fa: [
    {
      q: 'هزینه طراحی سایت چقدره؟',
      a: `طراحی یا بازطراحی سایت به صورت یک‌باره ${websitePrice} هست و تا ۱۵ صفحه رو شامل می‌شه (هر صفحه اضافه £10). فروشگاه اینترنتی به صورت یک‌باره ${shopPrice} برای تا ۵۰ محصوله (برای محصولات بیشتر قیمت اختصاصی اعلام می‌شه) و راه‌اندازی فروشگاه در پلتفرم‌هایی مثل Shopify، Amazon و eBay از ${setupPrice} شروع می‌شه.`,
    },
    {
      q: 'حتماً باید پکیج ماهانه بگیرم؟',
      a: `نه، اصلاً. خدمات یک‌باره کاملاً جدا از پکیج‌های ماهانه هستن. می‌تونی فقط طراحی سایت یا فروشگاه اینترنتی رو سفارش بدی و در صورت نیاز یکی از پکیج‌های ماهانه (دریچه روزن ${ruzanPrice} در ماه، دریچه جامخانه ${jaamPrice} در ماه یا دریچه ارسی ${ersiPrice} در ماه) رو انتخاب کنی.`,
    },
    {
      q: 'سایت می‌تونه هم فارسی باشه هم انگلیسی؟',
      a: 'آره، و این یکی از کارهای اصلی ماست. هر زبان طراحی و سئوی خودش رو داره، ولی هر دو یه برند هستن.',
    },
    {
      q: 'چقدر طول می‌کشه سایت آماده بشه؟',
      a: 'بستگی به تعداد صفحات، امکانات و آماده بودن محتوا داره. بعد از اینکه درباره پروژه صحبت کردیم، زمان‌بندی مشخصی بهت می‌دیم.',
    },
    {
      q: 'سئو چقدر زمان می‌بره؟',
      a: 'سئو کار بلندمدته. معمولاً بین سه تا شش ماه طول می‌کشه تا تغییرهای واقعی دیده بشه. هر کی قول یه‌هفته‌ای داد، بهش شک کن.',
    },
    {
      q: 'بعد از ساخت سایت هم پشتیبانی دارید؟',
      a: `آره. نگهداری، SSL، هاستینگ و پشتیبانی سایت توی پکیج‌های ماهانه ما قرار داره؛ از دریچه روزن (${ruzanPrice} در ماه) برای نگهداری و تغییرات جزئی تا دریچه جامخانه (${jaamPrice} در ماه) و دریچه ارسی (${ersiPrice} در ماه) برای پشتیبانی و تغییرات نامحدود.`,
    },
    {
      q: 'Google Maps رو هم می‌تونید مدیریت کنید؟',
      a: `آره. مدیریت کامل پروفایل Google Maps شامل انتشار پست، پاسخ به نظرات مشتری‌ها و بک‌لینک‌های مرتبط با پروفایل گوگل مپ توی پکیج دریچه ارسی (${ersiPrice} در ماه) قرار داره.`,
    },
    {
      q: 'اگر الان سایت داشته باشم ولی قدیمی باشه چی؟',
      a: `اول یه نگاه بهش می‌ندازیم. گاهی چند تا تغییر کافیه، گاهی بازطراحی (${websitePrice} برای تا ۱۵ صفحه) منطقی‌تره. هر چی که باشه، رک بهت می‌گیم.`,
    },
  ],
  en: [
    {
      q: 'How much does a website cost?',
      a: `Website design or redesign is a one-off fee of ${websitePrice} for up to 15 pages (£10 per additional page). An online shop is ${shopPrice} one-off for up to 50 products (additional products require a custom quote), and online shop setup on Shopify, Amazon, eBay or similar platforms starts from ${setupPrice}.`,
    },
    {
      q: 'Do I have to sign up for a monthly package?',
      a: `Not at all. One-off services are completely separate from our monthly subscriptions. You can book a website or online shop on its own, or add a monthly package — Ruzan (${ruzanPrice}/month), Jaam Khane (${jaamPrice}/month) or Ersi (${ersiPrice}/month) — whenever you want ongoing SEO, content, support or ads management.`,
    },
    {
      q: 'Can my site be in both Persian and English?',
      a: "Yes, and it's one of the things we do best. Each language gets its own layout tuning and SEO, while staying one brand.",
    },
    {
      q: 'How long does a website take?',
      a: 'It depends on the number of pages, features and how ready your content is. Once we have chatted through your project, we will give you a clear timeline.',
    },
    {
      q: 'How long does SEO take?',
      a: 'SEO is a long game. Real movement usually shows in three to six months. Be wary of anyone promising page one in a week.',
    },
    {
      q: 'Do you offer support after launch?',
      a: `Yes. Ongoing website maintenance, SSL certificate, hosting and support are covered in our monthly packages — starting with Ruzan (${ruzanPrice} per month) for maintenance and small changes, and Jaam Khane (${jaamPrice} per month) or Ersi (${ersiPrice} per month) for unlimited website support and changes.`,
    },
    {
      q: 'Can you manage our Google Maps listing?',
      a: `Yes. Full Google Maps business management — including posts, review replies and backlinks related to your Google Maps business profile — is included in our Ersi package (${ersiPrice} per month).`,
    },
    {
      q: 'What if I already have a site, but it’s dated?',
      a: `We will take a look first. Sometimes small changes are enough; sometimes a full redesign (${websitePrice} for up to 15 pages) makes more sense. Either way, we will tell you straight.`,
    },
  ],
};

export const pricingFaqs: Localized<QA[]> = {
  fa: [
    {
      q: 'تفاوت خدمات یک‌باره و پکیج‌های ماهانه چیه؟',
      a: `خدمات یک‌باره (طراحی یا بازطراحی سایت ${websitePrice}، فروشگاه اینترنتی ${shopPrice} و راه‌اندازی فروشگاه از ${setupPrice}) فقط یک بار پرداخت می‌شن و اشتراک دوره‌ای نیستن. پکیج‌های ماهانه (روزن ${ruzanPrice} در ماه، جامخانه ${jaamPrice} در ماه و ارسی ${ersiPrice} در ماه) برای کارهای مداوم مثل سئو، تولید محتوا، نگهداری، پشتیبانی، بهینه‌سازی هوش مصنوعی و تبلیغات هستن و کاملاً اختیارین.`,
    },
    {
      q: 'اگه سایتم بیشتر از ۱۵ صفحه یا فروشگاهم بیشتر از ۵۰ محصول داشته باشه چی؟',
      a: `برای طراحی یا بازطراحی سایت (${websitePrice}) تا ۱۵ صفحه توی قیمت پایه هست و هر صفحه اضافه £10 محاسبه می‌شه. برای فروشگاه اینترنتی (${shopPrice}) تا ۵۰ محصول در نظر گرفته شده و برای تعداد محصولات بیشتر، بر اساس جزئیات کار قیمت اختصاصی اعلام می‌شه.`,
    },
    {
      q: 'هاستینگ و گواهی SSL چطور حساب می‌شه؟',
      a: `گواهی امنیتی SSL و هاستینگ توی هر سه پکیج ماهانه (روزن ${ruzanPrice} در ماه، جامخانه ${jaamPrice} در ماه و ارسی ${ersiPrice} در ماه) شامل می‌شه. اگه فقط خدمت یک‌باره بخوای، قبل از شروع درباره گزینه‌های هاست و دامنه راهنماییت می‌کنیم و دامنه به اسم خودت ثبت می‌شه.`,
    },
    {
      q: 'هزینه تبلیغات گوگل و اینستاگرام توی پکیج ارسی حساب شده؟',
      a: `مدیریت Google Ads، Meta Ads و تبلیغات ChatGPT توی پکیج دریچه ارسی (${ersiPrice} در ماه) شامل می‌شه، اما بودجه‌ای که برای نمایش تبلیغات مستقیماً به پلتفرم‌ها پرداخت می‌شه جداست و با توجه به بودجه خودت تنظیم می‌شه.`,
    },
    {
      q: 'قیمت‌ها شامل VAT هستن؟',
      a: 'اگر VAT به قیمت اضافه بشه، قبل از شروع کار شفاف توی پیشنهاد قیمت نوشته می‌شه. هیچ هزینه غافلگیرکننده‌ای در کار نیست.',
    },
    {
      q: 'می‌شه قسطی پرداخت کرد؟',
      a: 'برای پروژه‌های یک‌باره معمولاً بخشی ابتدای کار و بقیه موقع تحویل پرداخت می‌شه. جزئیات پرداخت قبل از شروع پروژه به‌صورت شفاف توافق می‌شه.',
    },
  ],
  en: [
    {
      q: 'What is the difference between one-off services and monthly packages?',
      a: `One-off services (Website Design / Redesign at ${websitePrice}, Online Shop at ${shopPrice}, and Online Shop Setup from ${setupPrice}) are single project fees — not recurring subscriptions. Monthly packages (Ruzan at ${ruzanPrice}/month, Jaam Khane at ${jaamPrice}/month, and Ersi at ${ersiPrice}/month) are optional subscriptions for ongoing SEO, content, maintenance, support, AI optimisation and ads management.`,
    },
    {
      q: 'What if I need more than 15 pages or more than 50 products?',
      a: `Website Design / Redesign (${websitePrice}) includes up to 15 pages, and each additional page is £10. Online Shop (${shopPrice}) includes up to 50 products; if you have a larger catalogue, we provide a custom quote before work begins.`,
    },
    {
      q: 'Are hosting and SSL included?',
      a: `SSL certificate and hosting are included in all three monthly packages (Ruzan at ${ruzanPrice}/month, Jaam Khane at ${jaamPrice}/month and Ersi at ${ersiPrice}/month). If you only need a one-off website or shop, we will walk you through hosting and domain options clearly — and your domain always remains in your name.`,
    },
    {
      q: 'Is ad spend included in the Ersi package?',
      a: `Google Ads, Meta Ads and ChatGPT ads management are included in Ersi (${ersiPrice} per month). The advertising budget paid directly to Google, Meta or other platforms is separate and set according to your own budget.`,
    },
    {
      q: 'Do prices include VAT?',
      a: 'If VAT applies, it is shown clearly on your quote before any work starts. There are no hidden fees.',
    },
    {
      q: 'Do I need to commit to a monthly package straight away?',
      a: 'No. You can start with a one-off service and decide later if you want to add Ruzan, Jaam Khane or Ersi.',
    },
  ],
};
