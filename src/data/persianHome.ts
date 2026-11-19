import type { QA } from './services';
import {
  oneOffServices as centralOneOffServices,
  monthlyPackages as centralMonthlyPackages,
  formatGbp,
  getOneOffService,
  getMonthlyPackage,
} from './pricing.ts';

// Verified contact details for the Persian homepage; null entries are never rendered publicly.
export const persianHomeContact = {
  phone: '+447428567080' as string | null,
  whatsapp: '447428567080' as string | null,
  email: 'info@daricheh.co.uk',
  instagram: null as string | null,
  linkedin: null as string | null,
};
export const persianHomeFounders = [
  { name: null as string | null, role: 'طراحی و هویت برند' },
  { name: null as string | null, role: 'طراحی وب و سئو' },
];
export const contactForm = '#callback';
export const homeWhatsApp = persianHomeContact.whatsapp
  ? `https://wa.me/${persianHomeContact.whatsapp}?text=${encodeURIComponent('سلام، از سایت دریچه پیام می‌دم. یه سؤال درباره سایتم داشتم.')}`
  : contactForm;

export const primaryServices = [
  { title: 'طراحی سایت', tagline: 'سایتی که هم قشنگه، هم کار راه‌اندازه.', text: 'یه سایت تمیز، سریع و حرفه‌ای که شخصیت بیزینست رو درست نشون بده. طوری طراحی می‌کنیم که مشتری راحت خدماتت رو بشناسه، جواب سؤال‌هاش رو بگیره و برای تماس، رزرو یا خرید سردرگم نشه.', link: 'بیشتر درباره طراحی سایت', path: 'web-design' },
  { title: 'سئو', tagline: 'بذار مشتری خودش پیدات کنه.', text: 'مشتری‌ها هر روز توی گوگل دنبال خدمات و محصولاتی مثل مال تو می‌گردن. ما کمک می‌کنیم سایتت برای جستجوهای مرتبط بهتر آماده بشه و شانس بیشتری برای دیده شدن داشته باشه.', link: 'بیشتر درباره سئو', path: 'seo' },
  { title: 'سئو محلی', tagline: 'توی شهر و محله خودت بیشتر دیده شو.', text: 'اگه مشتری‌هات بیشتر از اطرافت میان، حضور توی گوگل مپ و جستجوهای محلی خیلی مهمه. از بهینه‌سازی پروفایل گوگل گرفته تا صفحات محلی، کمک می‌کنیم بیزینست راحت‌تر پیدا بشه.', link: 'بیشتر درباره سئو محلی', path: 'local-seo' },
];
export const supportingServices = [
  { title: 'فروشگاه اینترنتی', text: 'یه فروشگاه آنلاین مرتب و راحت که مشتری از دیدن محصولات تا خرید کردن، تجربه خوبی داشته باشه.', path: 'ecommerce' },
  { title: 'بازطراحی سایت', text: 'اگه سایتت قدیمی شده، کند کار می‌کنه یا دیگه به درد بیزینست نمی‌خوره، با یه بازطراحی حساب‌شده می‌شه اوضاع رو تغییر داد.', path: 'website-redesign' },
  { title: 'پشتیبانی سایت', text: 'آپدیت، نگهداری، امنیت، تغییرات و یه تیم که موقع نیاز بشه روش حساب کرد.', path: 'website-support' },
  { title: 'Google Maps', text: 'کمک می‌کنیم پروفایل گوگلت کامل، دقیق و به‌روز باشه و برای جستجوهای محلی بهتر آماده بشه.', path: 'local-seo' },
  { title: 'بررسی و آنالیز سئو', text: 'سایتت رو از نظر فنی، محتوا و سئو بررسی می‌کنیم تا معلوم بشه چه چیزهایی خوب پیش می‌رن و کجاها نیاز به کار دارن.', path: 'seo' },
  { title: 'هوش مصنوعی و اتوماسیون', text: 'از چت‌بات و پاسخ‌گویی خودکار گرفته تا ساده‌تر کردن کارهای تکراری؛ فقط وقتی واقعاً به کارت بیاد.', path: 'contact/#form' },
];
export const projects = [
  { slug: 'aryana-cakery', en: 'Aryana Cakery', fa: 'آریانا کیکری', context: 'کیک سفارشی و شیرینی‌پزی | لیدز', text: 'یه سایت شاد و خوش‌رنگ، درست مثل کیک‌های آریانا. طراحی شده تا مشتری راحت نمونه‌کارها رو ببینه، برای کیکش ایده بگیره و سفارش دلخواهش رو ثبت کنه.', services: 'طراحی سایت / سئو محلی' },
  { slug: 'gaswise-engineering', en: 'GasWise Engineering', fa: 'گس‌وایز', context: 'خدمات گاز و گرمایش | لیدز', text: 'وقتی مشتری با خرابی بویلر یا مشکل گرمایش روبه‌رو می‌شه، دنبال یه راه ارتباطی سریع و مطمئنه. این سایت رو با همین نگاه ساختیم؛ معرفی واضح خدمات، درخواست قیمت و تماس مستقیم با مهندس.', services: 'طراحی سایت / سئو محلی' },
  { slug: 'precision-barbers', en: 'Precision Barbers', fa: 'پریسیژن باربرز', context: 'آرایشگاه مردانه | لیدز', text: 'یه طراحی متناسب با سبک آرایشگاه؛ برای نمایش خدمات، معرفی کارها و اینکه مشتری بدون دردسر وقتش رو رزرو کنه.', services: 'طراحی سایت / سئو محلی' },
  { slug: 'afsoo-beauty', en: 'Afsoo Beauty', fa: 'افسو بیوتی', context: 'زیبایی و خدمات آرایشی | لیدز', text: 'یه سایت شیک و تصویرمحور که به خدمات و نمونه‌کارهای سالن فضای کافی می‌ده و مسیر رزرو رو برای مشتری ساده نگه می‌داره.', services: 'طراحی سایت / سئو محلی' },
  { slug: 'tara-beauty', en: 'Tara Beauty', fa: 'تارا بیوتی', context: 'خدمات زیبایی و آموزش | لندن', text: 'طراحی مینیمال برای معرفی خدمات زیبایی و دوره‌های آموزشی. همه‌چیز با چیدمانی ساده و واضح، تا بازدیدکننده راحت به اطلاعات موردنظرش برسه.', services: 'طراحی سایت / سئو' },
  { slug: 'bella-cafe', en: 'Bella Café', fa: 'کافه بلا', context: 'کافه و شیرینی‌پزی | لیدز', text: 'یه سایت گرم و صمیمی که حال‌وهوای کافه رو منتقل می‌کنه. از دیدن منو و آشنا شدن با فضا تا دسترسی سریع به سفارش آنلاین.', services: 'طراحی سایت / سئو محلی' },
];
export const beliefs = [
  { title: 'طراحی با فکر و هدف', text: 'هر چیزی که توی سایت می‌ذاریم باید دلیلی داشته باشه. از رنگ‌ها و تصاویر گرفته تا متن‌ها و دکمه‌ها؛ چیزی رو فقط برای پر کردن صفحه اضافه نمی‌کنیم.' },
  { title: 'سئو از همون اول', text: 'قرار نیست اول سایت رو بسازیم و بعد یادمون بیفته که گوگل هم وجود داره. ساختار صفحات و محتوای سایت رو از ابتدا با در نظر گرفتن اصول سئو آماده می‌کنیم.' },
  { title: 'آشنا با بازار بریتانیا', text: 'مهم نیست خودت به چه زبانی حرف می‌زنی؛ سایتت باید برای مشتری‌هایی که می‌خوای جذب کنی مناسب باشه. ما طراحی و محتوا رو با توجه به نیاز و انتظار مخاطب توی بازار بریتانیا پیش می‌بریم.' },
  { title: 'مخصوص بیزینس تو', text: 'یه رستوران با یه کلینیک یا فروشگاه آنلاین نیازهای یکسانی نداره. اول می‌فهمیم چه چیزی برای بیزینست مهمه، بعد سراغ راه‌حل می‌ریم.' },
];
export const oneOffServices = centralOneOffServices.map((service) => ({
  id: service.id,
  title: service.title.fa,
  footer: service.footerLabel.fa,
  price: formatGbp(service.price),
  from: service.from,
  billingNote: service.billingNote.fa,
  tagline: service.tagline.fa,
  text: service.description.fa,
  listLabel: service.listLabel.fa,
  features: service.features.fa,
  cta: service.cta.fa,
}));

export const monthlyPackages = centralMonthlyPackages.map((pkg) => ({
  id: pkg.id,
  title: pkg.title.fa,
  en: pkg.secondaryName.fa,
  price: formatGbp(pkg.price),
  tagline: pkg.tagline.fa,
  paragraphs: pkg.paragraphs.fa,
  features: pkg.features.fa,
  cta: pkg.cta.fa,
  featured: pkg.featured,
  featuredLabel: pkg.featuredLabel?.fa,
}));
export const searchExamples = [
  { query: 'Emergency plumber Leeds', text: 'وقتی کسی فوری دنبال یه لوله‌کش توی لیدزه.' },
  { query: 'Persian restaurant London', text: 'وقتی مشتری دنبال یه رستوران ایرانی توی لندنه.' },
  { query: 'Beauty salon near me', text: 'وقتی کسی می‌خواد یه سالن زیبایی نزدیک خودش پیدا کنه.' },
];
export const seoServices = [
  { title: 'جستجوی گوگل', text: 'ساختار و محتوای صفحات رو برای جستجوهای مرتبط بهینه می‌کنیم.' },
  { title: 'سئو محلی', text: 'کمک می‌کنیم بیزینست برای مشتری‌های شهر و محله خودت بهتر پیدا بشه.' },
  { title: 'Google Maps', text: 'روی اطلاعات، محتوا و وضعیت پروفایل گوگلت کار می‌کنیم تا حضور محلی بهتری داشته باشی.' },
  { title: 'تولید محتوا', text: 'مقاله‌ها و صفحاتی می‌سازیم که به سؤال‌های واقعی مشتری‌ها جواب بدن.' },
  { title: 'سئو فنی', text: 'از سرعت و ساختار سایت گرفته تا مشکلاتی که شاید مشتری نبینه، ولی روی عملکرد سایت تأثیر دارن.' },
];
const websitePrice = formatGbp(getOneOffService('website').price);
const shopPrice = formatGbp(getOneOffService('online-shop').price);
const setupPrice = formatGbp(getOneOffService('marketplace').price);
const ruzanPrice = formatGbp(getMonthlyPackage('ruzan').price);
const jaamPrice = formatGbp(getMonthlyPackage('jaam-khane').price);
const ersiPrice = formatGbp(getMonthlyPackage('ersi').price);

export const persianHomeFaqs: QA[] = [
  { q: 'هزینه طراحی سایت چقدره؟', a: `طراحی یا بازطراحی سایت به صورت یک‌باره ${websitePrice} هست و تا ۱۵ صفحه رو شامل می‌شه. هر صفحه اضافه هم £10 هزینه داره.\n\nبرای فروشگاه اینترنتی، هزینه یک‌باره ${shopPrice} برای حداکثر ۵۰ محصوله (برای محصولات بیشتر قیمت اختصاصی اعلام می‌شه). راه‌اندازی فروشگاه روی پلتفرم‌هایی مثل Shopify، Amazon و eBay هم از ${setupPrice} شروع می‌شه.` },
  { q: 'حتماً باید پکیج ماهانه بگیرم؟', a: `نه، اصلاً. خدمات یک‌باره کاملاً جدا از پکیج‌های ماهانه هستن و می‌تونی فقط طراحی سایت یا فروشگاه اینترنتی رو سفارش بدی. پکیج‌های ماهانه (روزن ${ruzanPrice} در ماه، جامخانه ${jaamPrice} در ماه و ارسی ${ersiPrice} در ماه) برای بیزینس‌هایی هستن که می‌خوان سئو، تولید محتوا، نگهداری یا بخش‌های دیگه بازاریابی آنلاینشون رو هم به ما بسپارن.` },
  { q: 'سایت من باید فارسی و انگلیسی باشه؟', a: 'نه لزوماً. همه‌چیز بستگی به مشتری‌هات داره. اگه بیشتر مشتری‌هات انگلیسی‌زبان هستن، ممکنه یه سایت انگلیسی کاملاً برات کافی باشه. اگه هر دو گروه رو هدف گرفتی، طراحی دو زبانه هم انجام می‌دیم.' },
  { q: 'طراحی سایت چقدر طول می‌کشه؟', a: 'بستگی به تعداد صفحات، امکانات و آماده بودن محتوا داره. بعد از اینکه درباره پروژه صحبت کردیم، زمان‌بندی مشخصی بهت می‌دیم تا بدونی هر مرحله چه زمانی انجام می‌شه.' },
  { q: 'چقدر طول می‌کشه نتیجه سئو رو ببینم؟', a: 'سئو معمولاً یه کار زمان‌بره. رقابت، وضعیت فعلی سایت و کلمات کلیدی روی نتیجه تأثیر دارن. نمی‌شه رتبه مشخصی رو تضمین کرد، ولی می‌شه با یه برنامه درست و مداوم، روی بهتر شدن عملکرد سایت کار کرد.' },
  { q: 'بعد از طراحی سایت هم پشتیبانی دارید؟', a: `بله. می‌تونی یکی از پکیج‌های ماهانه رو انتخاب کنی؛ از دریچه روزن (${ruzanPrice} در ماه) برای نگهداری و تغییرات جزئی تا دریچه جامخانه (${jaamPrice} در ماه) و دریچه ارسی (${ersiPrice} در ماه) برای پشتیبانی و تغییرات نامحدود.` },
  { q: 'تبلیغات گوگل و اینستاگرام هم انجام می‌دید؟', a: `بله. مدیریت Google Ads، Meta Ads و تبلیغات ChatGPT توی پکیج دریچه ارسی (${ersiPrice} در ماه) قرار داره. بودجه‌ای که برای نمایش تبلیغات به پلتفرم‌ها پرداخت می‌شه جداست.` },
  { q: 'روی Google Maps هم کار می‌کنید؟', a: `بله. مدیریت کامل پروفایل Google Maps شامل انتشار پست، پاسخ به نظرات مشتری‌ها و بک‌لینک‌های مرتبط با پروفایل گوگل مپ توی پکیج دریچه ارسی (${ersiPrice} در ماه) انجام می‌شه.` },
  { q: 'اگه از قبل سایت داشته باشم چی؟', a: 'لازم نیست حتماً یه سایت جدید بسازی. اول سایت فعلیت رو بررسی می‌کنیم تا ببینیم با چند تا تغییر می‌شه بهترش کرد یا واقعاً به بازطراحی نیاز داره.' },
  { q: 'اگه ندونم کدوم خدمات به دردم می‌خوره چی؟', a: 'مشکلی نیست. یه کم درباره بیزینست، مشتری‌هات و چیزی که دنبالش هستی بگو. با هم بررسی می‌کنیم از کجا شروع کردن منطقی‌تره.' },
];
