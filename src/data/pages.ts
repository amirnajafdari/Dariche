import type { Localized } from '@/i18n';

/**
 * Page-level copy. Headline arrays are lines; wrap words in *asterisks* for bold.
 * Each block maps to one future CMS document/section.
 */

export const home = {
  hero: {
    title: { fa: ['یه دریچه برای', '*دیده شدن* بیزینست.'], en: ['A window for', 'your business', 'to be *seen*.'] } as Localized<string[]>,
    lead: {
      fa: 'طراحی سایت، سئو و رشد آنلاین برای بیزینس‌های ایرانی در بریتانیا.',
      en: 'Web design, SEO and online growth for Iranian-owned businesses across the UK.',
    } as Localized,
    sub: {
      fa: 'دو تا طراح، یه استودیوی کوچیک، و کلی وسواس روی جزئیات.',
      en: 'Two designers, one small studio, and a lot of care for the details.',
    } as Localized,
  },
  intro: {
    title: { fa: ['فارسی فکر می‌کنیم.', 'بازار *بریتانیا* رو هم می‌شناسیم.'], en: ['We think in Persian.', 'We know the *UK* market.'] } as Localized<string[]>,
    text: {
      fa: 'دریچه یه استودیوی کوچیک طراحی و سئوئه. طراحی، وب و سئو رو با شناخت بازار بریتانیا کنار هم می‌ذاریم، و می‌دونیم یه بیزینس ایرانی اینجا با چی سروکار داره. نتیجه سایتیه که برای مشتری ایرانی آشناست و برای بقیه، حرفه‌ای.',
      en: "Daricheh is a small design and SEO studio. We bring design, web and search together with a real feel for the UK market — and for what it's like to run an Iranian business here. The result is a site that feels familiar to Iranian customers and professional to everyone else.",
    } as Localized,
  },
  services: {
    eyebrow: { fa: 'خدمات', en: 'Services' } as Localized,
    title: { fa: ['کارهایی که', '*انجام می‌دیم*.'], en: ['What we', '*actually do*.'] } as Localized<string[]>,
    supportingLabel: { fa: 'و کنارش:', en: 'Alongside that:' } as Localized,
  },
  work: {
    eyebrow: { fa: 'نمونه‌کارها', en: 'Work' } as Localized,
    title: { fa: ['چند تا کاری که', '*دوستشون* داریم.'], en: ['A few things', 'we *love*.'] } as Localized<string[]>,
  },
  beliefs: {
    eyebrow: { fa: 'چرا دریچه؟', en: 'Why Daricheh?' } as Localized,
    title: {
      fa: ['یه سایت خوب،', 'فقط یه طراحی *قشنگ* نیست.'],
      en: ['A great website is more', 'than just *good looks*.'],
    } as Localized<string[]>,
    lead: {
      fa: 'ما طراحی، تجربه کاربری و سئو رو کنار هم می‌ذاریم تا سایتت فقط یه ویترین آنلاین نباشه؛ بخشی از رشد بیزینست باشه.',
      en: 'We bring design, user experience and SEO together to make your website more than an online shop window. It should play a real part in growing your business.',
    } as Localized,
    items: {
      fa: [
        { title: 'طراحی با هدف', text: 'هر بخش سایت باید دلیلی داشته باشه؛ از اولین چیزی که مشتری می‌بینه تا دکمه‌ای که روش کلیک می‌کنه.' },
        { title: 'سئو از همون اول', text: 'ساختار سایت رو از روز اول با در نظر گرفتن گوگل و جستجوهای مشتری‌های بریتانیایی طراحی می‌کنیم.' },
        { title: 'متناسب با بازار بریتانیا', text: 'محتوا، طراحی و تجربه کاربری رو برای مخاطب انگلیسی‌زبان و انتظارات مشتری‌های این بازار آماده می‌کنیم.' },
        { title: 'متناسب با بیزینس تو', text: 'نه قالب تکراری، نه راه‌حل یکسان برای همه. سایت باید با خدمات، مشتری‌ها و هدف بیزینست هماهنگ باشه.' },
      ],
      en: [
        { title: 'Design with Purpose', text: 'Every element should have a reason to be there, from the first thing visitors see to the button they decide to click.' },
        { title: 'SEO from Day One', text: 'We build your website with search engines and how people in the UK actually search in mind, right from the start.' },
        { title: 'Made for the UK Market', text: 'From content and design to user experience, we create websites that connect with English-speaking audiences and meet the expectations of UK customers.' },
        { title: 'Built Around Your Business', text: 'No recycled templates or one-size-fits-all solutions. Your website should reflect your services, your customers and your business goals.' },
      ],
    } as Localized<{ title: string; text: string }[]>,
  },
  pricing: {
    eyebrow: { fa: 'تعرفه‌ها', en: 'Pricing' } as Localized,
    title: { fa: ['قیمت‌ها،', '*روشن* و بی‌دردسر.'], en: ['Prices,', 'out in the *open*.'] } as Localized<string[]>,
    lead: {
      fa: 'سه تا بسته برای شروع. اگه هیچ‌کدوم دقیقاً به کارت نخورد، بگو؛ با هم یه چیز درست می‌چینیم.',
      en: "Three packages to start with. If none fits exactly, tell us and we'll put together the right thing.",
    } as Localized,
  },
  founders: {
    eyebrow: { fa: 'ما', en: 'Us' } as Localized,
    title: {
      fa: 'دریچه از یه همکاری ساده بین دو دوست شروع شد.',
      en: 'Daricheh started as a simple collaboration between two friends.',
    } as Localized,
    text: {
      fa: 'هر دومون طراحی رو در بریتانیا خوندیم و تجربه طراحی، وب و سئو رو کنار هم گذاشتیم تا برای بیزینس‌های ایرانی اینجا سایت‌هایی بسازیم که هم خوب دیده بشن، هم درست کار کنن.',
      en: 'We both studied design in the UK, and put our experience in design, web and SEO together to build sites for Iranian businesses here — sites that look good and work properly.',
    } as Localized,
  },
  bilingual: {
    title: { fa: ['هر دو زبان،', '*یه* برند.'], en: ['Two languages,', '*one* brand.'] } as Localized<string[]>,
    text: {
      fa: 'سایت دو زبانه نباید شبیه دو تا سایت جدا از هم باشه. طراحی، لحن و تجربه کاربری رو طوری می‌سازیم که برندت در فارسی و انگلیسی همون حس رو داشته باشه.',
      en: "A bilingual site shouldn't feel like two separate websites. We shape the design, tone and experience so your brand feels the same in Persian and English.",
    } as Localized,
    points: {
      fa: ['راست‌به‌چپ (RTL)', 'چپ‌به‌راست (LTR)', 'تجربه کاربری فارسی', 'تجربه کاربری انگلیسی', 'سئوی جدا برای هر زبان'],
      en: ['Right-to-left (RTL)', 'Left-to-right (LTR)', 'Persian UX', 'English UX', 'Separate SEO for each language'],
    } as Localized<string[]>,
    sampleFa: 'برندت، به فارسی.',
    sampleEn: 'Your brand, in English.',
  },
  seo: {
    title: { fa: ['قشنگه.', 'حالا باید *پیداش* کنن.'], en: ['It looks great.', 'Now people need to *find it*.'] } as Localized<string[]>,
    text: {
      fa: 'سایت خوبی که کسی نبینه، مثل یه مغازه‌ی قشنگ توی کوچه‌ایه که هیچ‌کس ازش رد نمی‌شه. سئو یعنی وقتی یکی دنبال کاری که تو انجام می‌دی می‌گرده، به تو برسه.',
      en: "A great site nobody sees is like a lovely shop down an alley nobody walks through. SEO means that when someone looks for what you do, they end up with you.",
    } as Localized,
    items: {
      fa: [
        { name: 'Google Search', text: 'وقتی مشتری دنبال خدماتت می‌گرده.' },
        { name: 'سئو محلی', text: 'برای مشتری‌های همین اطراف.' },
        { name: 'Google Maps', text: 'روی نقشه، با اطلاعات درست.' },
        { name: 'محتوا', text: 'متن‌هایی که به سؤال‌های مشتری جواب می‌دن.' },
        { name: 'سئو فنی', text: 'سرعت، ساختار و چیزهایی که گوگل پشت صحنه می‌بینه.' },
      ],
      en: [
        { name: 'Google Search', text: 'When customers look for what you offer.' },
        { name: 'Local SEO', text: 'For customers close by.' },
        { name: 'Google Maps', text: 'On the map, with the right details.' },
        { name: 'Content', text: "Copy that answers customers' questions." },
        { name: 'Technical SEO', text: 'Speed, structure and what Google sees behind the scenes.' },
      ],
    } as Localized<{ name: string; text: string }[]>,
    /** Illustrative searches — shows the three ways Iranian customers search. Not data. */
    searches: ['طراحی سایت لندن', 'tarahi site irani', 'persian restaurant near me'],
  },
  testimonials: {
    eyebrow: { fa: 'نظر مشتری‌ها', en: 'Clients' } as Localized,
    title: { fa: ['از زبون', '*خودشون*.'], en: ['In their', '*own words*.'] } as Localized<string[]>,
  },
  finalCta: {
    title: { fa: 'یه چیزی تو ذهنت داری؟', en: 'Got something in mind?' } as Localized,
    text: { fa: 'بگو ببینیم چی می‌شه ساخت.', en: "Tell us, and let's see what we can build." } as Localized,
  },
};

export const serviceLabels = {
  problem: { fa: 'مشکل', en: 'The problem' } as Localized,
  includes: { fa: 'چی شاملش می‌شه', en: "What's included" } as Localized,
  audience: { fa: 'برای کی مناسبه', en: "Who it's for" } as Localized,
  benefits: { fa: 'چی به دست میاری', en: 'What you get out of it' } as Localized,
  process: { fa: 'چطور کار می‌کنیم', en: 'How we work' } as Localized,
  related: { fa: 'یه نمونه', en: 'An example' } as Localized,
  pricing: { fa: 'از کجا شروع می‌شه', en: 'Where it starts' } as Localized,
  supportPricing: {
    fa: 'پشتیبانی ماهانه‌ست و از £۶۰ در ماه شروع می‌شه. جزئیاتش توی صفحه تعرفه‌هاست.',
    en: 'Support is monthly, from £60 a month. Details are on the pricing page.',
  } as Localized,
};

export const process: Localized<{ title: string; text: string }[]> = {
  fa: [
    { title: 'یه گپ کوتاه', text: 'اول گوش می‌دیم: بیزینست چیه، مشتری‌هات کیان، الان کجا گیر کردی.' },
    { title: 'نقشه', text: 'ساختار سایت، کلمات کلیدی و مسیر مشتری رو مشخص می‌کنیم؛ ببینیم چی برای بیزینست بهتره.' },
    { title: 'طراحی', text: 'طرح رو می‌بینی و نظرت رو می‌گی. اگر ردیفه، بریم مرحله بعد.' },
    { title: 'ساخت و تست', text: 'سایت ساخته می‌شه، روی گوشی و کامپیوتر تست می‌شه، و سرعتش چک می‌شه.' },
    { title: 'انتشار، و بعدش', text: 'سایت آنلاین می‌شه، ولی ما غیبمون نمی‌زنه. پشتیبانی و سئو از همین‌جا ادامه پیدا می‌کنه.' },
  ],
  en: [
    { title: 'A short chat', text: "First we listen: what you do, who your customers are, where you're stuck." },
    { title: 'A plan', text: 'We map the structure, keywords and customer journey, and work out what suits your business.' },
    { title: 'Design', text: "You see the design and tell us what you think. If it's right, we move on." },
    { title: 'Build & test', text: 'We build it, test it on phones and computers, and check the speed.' },
    { title: 'Launch, and after', text: "The site goes live, but we don't vanish. Support and SEO carry on from here." },
  ],
};

export const about = {
  hero: {
    title: { fa: ['دو تا دوست.', 'دو تا *طراح*.'], en: ['Two friends.', 'Two *designers*.'] } as Localized<string[]>,
    lead: { fa: 'دریچه یه استودیوی کوچیکه؛ عمداً.', en: 'Daricheh is a small studio — on purpose.' } as Localized,
  },
  story: {
    fa: [
      {
        title: 'چطور شروع شد',
        text: 'ما دو تا دوستیم که هر دومون طراحی رو در بریتانیا خوندیم. سال‌ها کنار هم کار کردیم و مدام می‌دیدیم بیزینس‌های ایرانی اینجا بین دو تا گزینه گیر می‌کنن: آژانس‌های بزرگی که نه بیزینس رو می‌شناسن نه مشتری‌هاش رو، یا سایت‌های ارزونی که فقط «هستن». دریچه از همین‌جا شروع شد.',
      },
      {
        title: 'طراحی و سئو، با هم',
        text: 'برای ما طراحی و سئو دو تا کار جدا نیستن. سایت قشنگی که کسی پیداش نکنه به درد نمی‌خوره؛ سایتی که پیدا بشه ولی اعتماد نسازه هم همین‌طور. از روز اول هر دو رو با هم جلو می‌بریم.',
      },
      {
        title: 'چرا بیزینس‌های ایرانی',
        text: 'چون می‌شناسیمشون. می‌دونیم مشتری ایرانی چطور تصمیم می‌گیره، چطور سرچ می‌کنه، و چرا یه جمله‌ی بد ترجمه‌شده می‌تونه کل اعتماد رو خراب کنه. بازار بریتانیا رو هم می‌شناسیم، پس سایت برای بقیه مشتری‌ها هم باید حرفه‌ای و آشنا باشه.',
      },
    ],
    en: [
      {
        title: 'How it started',
        text: "We're two friends who both studied design in the UK. Working side by side, we kept seeing Iranian businesses here stuck between two options: big agencies that understood neither the business nor its customers, or cheap websites that simply exist. Daricheh started there.",
      },
      {
        title: 'Design and SEO, together',
        text: "For us, design and SEO aren't separate jobs. A beautiful site nobody finds is no use, and neither is one that gets found but doesn't build trust. We work on both from day one.",
      },
      {
        title: 'Why Iranian businesses',
        text: "Because we know them. We know how Iranian customers decide, how they search, and how one badly translated sentence can undo all the trust. We know the UK market too, so the site has to feel professional and familiar to everyone else as well.",
      },
    ],
  } as Localized<{ title: string; text: string }[]>,
  name: {
    title: { fa: 'چرا «دریچه»؟', en: 'Why “Daricheh”?' } as Localized,
    text: { fa: 'دریچه یعنی یه پنجره. همین.', en: 'Daricheh means “a window”. That’s all.' } as Localized,
  },
  direct: {
    fa: 'با ما که کار کنی، با همون دو نفری حرف می‌زنی که سایتت رو طراحی می‌کنن. نه مدیر حساب، نه واسطه.',
    en: 'Work with us and you talk to the two people designing your site. No account managers, no middlemen.',
  } as Localized,
};

export const workPage = {
  title: { fa: ['کارهایی که', '*پشتشون* هستیم.'], en: ['Work we', '*stand behind*.'] } as Localized<string[]>,
  lead: { fa: 'هر پروژه با یه بیزینس واقعی و یه مشکل واقعی شروع می‌شه.', en: 'Every project starts with a real business and a real problem.' } as Localized,
  labels: {
    challenge: { fa: 'چالش', en: 'The challenge' } as Localized,
    approach: { fa: 'کاری که کردیم', en: 'What we did' } as Localized,
    design: { fa: 'طراحی', en: 'Design' } as Localized,
    seo: { fa: 'سئو', en: 'SEO' } as Localized,
    results: { fa: 'نتیجه', en: 'Results' } as Localized,
    resultsPending: {
      fa: 'نتیجه‌ها فقط وقتی اینجا میان که واقعی و اندازه‌گیری‌شده باشن.',
      en: 'Results appear here only once they are real and measured.',
    } as Localized,
  },
};

export const pricingPage = {
  title: { fa: ['قیمت‌ها،', '*روشن*.'], en: ['Prices,', 'in *plain sight*.'] } as Localized<string[]>,
  lead: {
    fa: 'سه تا بسته برای شروع، و هر چیزی که شاید بعداً لازمت بشه. بدون هزینه پنهان، بدون «تماس بگیرید».',
    en: "Three packages to start with, plus anything you might need later. No hidden costs, no 'call for a quote'.",
  } as Localized,
  addOnsTitle: { fa: 'افزودنی‌ها', en: 'Add-ons' } as Localized,
  addOnsLead: { fa: 'هر کدوم رو می‌شه به هر بسته‌ای اضافه کرد.', en: 'Each can be added to any package.' } as Localized,
};

export const blogPage = {
  title: { fa: ['نوشته‌هایی درباره', '*سایت*، سئو و بیزینس.'], en: ['Notes on', '*websites*, SEO and business.'] } as Localized<string[]>,
  lead: { fa: 'کوتاه و کاربردی.', en: 'Short and practical. Mostly in Persian, some in English.' } as Localized,
  empty: { fa: 'هنوز چیزی اینجا نیست. به‌زودی.', en: 'Nothing here yet. Soon.' } as Localized,
};

export const contactPage = {
  title: { fa: ['بیا', '*حرف بزنیم*.'], en: ["Let's", '*talk*.'] } as Localized<string[]>,
  lead: {
    fa: 'هر جور راحتی: واتساپ، تلفن یا فرم. معمولاً خیلی زود جواب می‌دیم.',
    en: 'Whatever suits you: WhatsApp, phone or the form. We usually reply quickly.',
  } as Localized,
  formTitle: { fa: 'یا فرم رو پر کن', en: 'Or fill in the form' } as Localized,
  direct: { fa: 'مستقیم', en: 'Directly' } as Localized,
};

export const form = {
  name: { fa: 'نام', en: 'Name' } as Localized,
  business: { fa: 'نام بیزینس', en: 'Business name' } as Localized,
  phone: { fa: 'شماره تماس', en: 'Phone number' } as Localized,
  email: { fa: 'ایمیل', en: 'Email' } as Localized,
  website: { fa: 'وب‌سایت', en: 'Website' } as Localized,
  optional: { fa: 'اختیاری', en: 'optional' } as Localized,
  help: { fa: 'چه کمکی لازم داری؟', en: 'What do you need help with?' } as Localized,
  helpOptions: {
    fa: ['طراحی سایت', 'بازطراحی سایت', 'سئو', 'سئو محلی', 'Google Maps', 'فروشگاه اینترنتی', 'پشتیبانی سایت', 'مطمئن نیستم'],
    en: ['Web design', 'Website redesign', 'SEO', 'Local SEO', 'Google Maps', 'Ecommerce', 'Website support', "I'm not sure"],
  } as Localized<string[]>,
  message: { fa: 'پیام', en: 'Message' } as Localized,
  messagePlaceholder: { fa: 'چند خط درباره بیزینست و کاری که در نظر داری…', en: "A few lines about your business and what you have in mind…" } as Localized,
  submit: { fa: 'ارسال', en: 'Send' } as Localized,
  sending: { fa: 'در حال ارسال…', en: 'Sending…' } as Localized,
  success: { fa: 'مرسی، پیامت رسید. خیلی زود باهات تماس می‌گیریم.', en: "Thanks — got it. We'll be in touch very soon." } as Localized,
  error: {
    fa: 'یه مشکلی پیش اومد و پیام نرسید. لطفاً دوباره امتحان کن، یا توی واتساپ پیام بده.',
    en: "Something went wrong and the message didn't send. Please try again, or message us on WhatsApp.",
  } as Localized,
  required: { fa: 'این یکی لازمه.', en: 'This one is needed.' } as Localized,
  invalidEmail: { fa: 'ایمیل درست به نظر نمی‌رسه.', en: "That email doesn't look quite right." } as Localized,
  privacy: {
    fa: 'اطلاعاتت فقط برای جواب دادن به همین پیام استفاده می‌شه.',
    en: 'Your details are only used to reply to this message.',
  } as Localized,
};

// PLACEHOLDER legal copy — have a professional review before launch.
export const legal: Record<'privacy' | 'cookies' | 'terms', { title: Localized; updated: string; body: Localized<{ h: string; p: string }[]> }> = {
  privacy: {
    title: { fa: 'حریم خصوصی', en: 'Privacy Policy' },
    updated: '2026-10-23',
    body: {
      fa: [
        { h: 'چه اطلاعاتی جمع می‌کنیم', p: 'وقتی فرم تماس رو پر می‌کنی یا پیام می‌دی، اسم، اطلاعات تماس و پیامت رو دریافت می‌کنیم.' },
        { h: 'چرا', p: 'فقط برای اینکه جوابت رو بدیم و اگر با هم کار کردیم، پروژه رو جلو ببریم. اطلاعاتت رو نمی‌فروشیم.' },
        { h: 'حقوق تو', p: 'طبق UK GDPR هر وقت بخوای می‌تونی بپرسی چه اطلاعاتی ازت داریم، یا بخوای پاکشون کنیم. کافیه ایمیل بزنی.' },
      ],
      en: [
        { h: 'What we collect', p: 'When you use the contact form or message us, we receive your name, contact details and message.' },
        { h: 'Why', p: 'Only to reply and, if we work together, to run the project. We never sell your data.' },
        { h: 'Your rights', p: 'Under UK GDPR you can ask what data we hold about you, or ask us to delete it, at any time. Just email us.' },
      ],
    },
  },
  cookies: {
    title: { fa: 'کوکی‌ها', en: 'Cookie Policy' },
    updated: '2026-10-23',
    body: {
      fa: [{ h: 'کوتاه و ساده', p: 'این سایت در حال حاضر هیچ کوکی تبلیغاتی یا ردیابی استفاده نمی‌کنه. اگه بعداً ابزار آماری اضافه بشه، اینجا توضیح می‌دیم و اول از خودت اجازه می‌گیریم.' }],
      en: [{ h: 'Short and simple', p: "This site doesn't currently use advertising or tracking cookies. If we add analytics later, we'll explain it here and ask for your consent first." }],
    },
  },
  terms: {
    title: { fa: 'شرایط استفاده', en: 'Terms' },
    updated: '2026-10-23',
    body: {
      fa: [{ h: 'استفاده از سایت', p: 'محتوای این سایت متعلق به دریچه‌ست. شرایط هر پروژه جداگانه و قبل از شروع کار توی قرارداد نوشته می‌شه.' }],
      en: [{ h: 'Using this site', p: 'The content of this site belongs to Daricheh. Terms for each project are set out in a written agreement before work begins.' }],
    },
  },
};
